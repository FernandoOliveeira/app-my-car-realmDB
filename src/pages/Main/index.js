import React from 'react';
import { Keyboard, KeyboardAvoidingView, ToastAndroid, ScrollView } from 'react-native';
import { useState } from 'react';
import uuid from 'react-native-uuid';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import getRealm from '~/services/realm';
import { DismissKeyboard } from '~/components/DismissKeyboard/index';
import { Container, Title, Form, Input, Submit, SubmitText, FormView } from './styles';
import { dateValid, objectValidation } from '~/validations';


const Main = () => {
  // Hooks
  const [nameInput, setNameInput] = useState('');
  const [serviceInput, setServiceInput] = useState('');
  const [priceInput, setPriceInput] = useState('');
  const [laborInput, setLaborInput] = useState('');
  const [dateInput, setDateInput] = useState('');

  const [nameFocus, setNameFocus] = useState(false);
  const [serviceFocus, setServiceFocus] = useState(false);
  const [priceFocus, setPriceFocus] = useState(false);
  const [laborFocus, setLaborFocus] = useState(false);
  const [dateFocus, setDateFocus] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [serviceError, setServiceError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [laborError, setLaborError] = useState(false);
  const [dateError, setDateError] = useState(false);


  // Toast
  const toast = (message) => ToastAndroid.show(message, ToastAndroid.SHORT);


  // Save the maintenance register in database
  const saveMaintenance = async (maintenanceList) => {
    const data = {
      id: uuid.v4(),
      name: maintenanceList.nameInput,
      service: maintenanceList.serviceInput,
      price: maintenanceList.priceInput,
      labor: maintenanceList.laborInput,
      date: maintenanceList.dateInput,
    };

    const realm = await getRealm();

    // Saves the all the inputs in the Database
    realm.write(() => {
      realm.create('List', data);
    });


  }

  // Add a new register in database
  const handleAddMaintenance = () => {
    try {
      let price = parseFloat(priceInput.replace(',', '').replace('.', '') * 100);
      let labor = parseFloat(laborInput.replace(',', '').replace('.', '') * 100);

      const list = { nameInput, serviceInput, priceInput: price, laborInput: labor, dateInput }

      if (objectValidation(list)) {

        if (dateValid(dateInput)) {

          saveMaintenance(list);

          // Set all inputs to empty
          setNameInput('');
          setServiceInput('');
          setPriceInput('');
          setLaborInput('');
          setDateInput('');

          // Set all error to false
          setNameError(false);
          setServiceError(false);
          setPriceError(false);
          setLaborError(false);
          setDateError(false);

          Keyboard.dismiss();
          toast('Registro salvo com sucesso!');

        } else {
          toast('Data inválida!');
          setDateError(true);

        }

      } else {
        // Verify if all inputs has values.
        if (!nameInput.trim()) {
          setNameError(true);
        }
        if (!serviceInput.trim()) {
          setServiceError(true);
        }
        if (!priceInput.trim()) {
          setPriceError(true);
        }
        if (!laborInput.trim()) {
          setLaborError(true);
        }
        if (!dateInput.trim()) {
          setDateError(true);
        }

        toast('Todos os campos devem ser preenchidos!');

      }
    } catch (err) {
      toast('Não foi possível salvar o registro. Tente novamente.');

      console.log(`Failed to save maintenance: ${err}`);
    }


  }

  return (
    <DismissKeyboard>
      <Container>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <KeyboardAvoidingView>

            {/* Title */}
            <Title>Novo Registro</Title>

            <Form>
              {/* Name */}
              <FormView
                focus={nameFocus}
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
              >
                <MaterialCommunityIcons name={'garage'} size={35} color={nameError ? 'tomato' : '#666'} style={{ paddingRight: '1%' }} />
                <Input
                  placeholderTextColor={nameError ? 'tomato' : '#666'}
                  value={nameInput}
                  onChangeText={setNameInput}
                  placeholder="Ex.: Mecânica de Autos"
                />
              </FormView>

              {/* Service */}
              <FormView
                focus={serviceFocus}
                onFocus={() => setServiceFocus(true)}
                onBlur={() => setServiceFocus(false)}
              >
                <Ionicons name={'construct-outline'} size={30} color={serviceError ? 'tomato' : '#666'} style={{ paddingRight: '2%', paddingLeft: '1.5%' }} />
                <Input
                  placeholderTextColor={serviceError ? 'tomato' : '#666'}
                  value={serviceInput}
                  onChangeText={setServiceInput}
                  placeholder="Ex.: Troca de Óleo"
                />
              </FormView>

              {/* Price */}
              <FormView
                focus={priceFocus}
                onFocus={() => setPriceFocus(true)}
                onBlur={() => setPriceFocus(false)}
              >
                <Ionicons name={'cash-outline'} size={30} color={priceError ? 'tomato' : '#666'} style={{ paddingRight: '2%', paddingLeft: '1.5%' }} />
                <Input
                  placeholderTextColor={priceError ? 'tomato' : '#666'}
                  keyboardType="numeric"
                  value={priceInput}
                  onChangeText={(text) => {
                    text = text.replace(/\D/g, "");
                    text = text.replace(/(\d)(\d{2})$/, "$1,$2");
                    text = text.replace(/(?=(\d{3})+(\D))\B/g, ".");
                    setPriceInput(text);
                  }}
                  placeholder="Preço:"
                />
              </FormView>

              {/* Labor */}
              <FormView
                focus={laborFocus}
                onFocus={() => setLaborFocus(true)}
                onBlur={() => setLaborFocus(false)}
              >
                <Ionicons name={'hammer-outline'} size={30} color={laborError ? 'tomato' : '#666'} style={{ paddingRight: '2%', paddingLeft: '1.5%' }} />
                <Input
                  placeholderTextColor={laborError ? 'tomato' : '#666'}
                  keyboardType="numeric"
                  value={laborInput}
                  onChangeText={(text) => {
                    text = text.replace(/\D/g, "");
                    text = text.replace(/(\d)(\d{2})$/, "$1,$2");
                    text = text.replace(/(?=(\d{3})+(\D))\B/g, ".");
                    setLaborInput(text);
                  }}
                  placeholder="Valor da Mão de Obra:"
                />
              </FormView>

              {/* Date */}
              <FormView
                focus={dateFocus}
                onFocus={() => setDateFocus(true)}
                onBlur={() => setDateFocus(false)}
              >
                <Ionicons name={'calendar-outline'} size={30} color={dateError ? 'tomato' : '#666'} style={{ paddingRight: '2%', paddingLeft: '1.5%' }} />
                <Input
                  placeholderTextColor={dateError ? 'tomato' : '#666'}
                  keyboardType="numeric"
                  value={dateInput}
                  maxLength={10}
                  onChangeText={(text) => {
                    text = text.replace(/\D/g, "");
                    text = text.replace(/^(\d{2})(\d)/g, "$1/$2");
                    text = text.replace(/(\d)(\d{4})$/, "$1/$2");
                    setDateInput(text);
                  }}
                  placeholder="DD/MM/AAAA"
                />
              </FormView>

              {/* Submit */}
              <Submit onPress={handleAddMaintenance}>
                <SubmitText>Salvar</SubmitText>
              </Submit>
            </Form>

          </KeyboardAvoidingView>
        </ScrollView>
      </Container>
    </DismissKeyboard >
  );
}

export default Main;