import React from 'react';
import { Keyboard, KeyboardAvoidingView, ToastAndroid, ScrollView } from 'react-native';
import { useState } from 'react';
import uuid from 'react-native-uuid';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import getRealm from '~/services/realm';
import { DismissKeyboard } from '~/components/DismissKeyboard/index';
import { Container, Title, Form, FormView, FormText, Input, Submit, SubmitText } from './styles';
import { objectValidation } from '~/validations';


const Main = () => {
  // Hooks
  const [nameInput, setNameInput] = useState('');
  const [serviceInput, setServiceInput] = useState('');
  const [priceInput, setPriceInput] = useState('');
  const [laborInput, setLaborInput] = useState('');
  const [dateInput, setDateInput] = useState('');


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
      let price = parseFloat(priceInput.replace(',', '.').replace(".", ""));
      let labor = parseFloat(laborInput.replace(',', '.').replace(".", ""))

      const list = { nameInput, serviceInput, priceInput: price, laborInput: labor, dateInput }

      if (objectValidation(list)) {

        saveMaintenance(list);

        // Set all inputs to empty
        setNameInput('');
        setServiceInput('');
        setPriceInput('');
        setLaborInput('');
        setDateInput('');

        Keyboard.dismiss();
        toast('Registro salvo com sucesso!');

      } else {
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
              <FormView>
                <MaterialCommunityIcons name={'garage'} size={35} color={'#666'} style={{ paddingRight: '1%' }} />
                <Input
                  value={nameInput}
                  onChangeText={setNameInput}
                  placeholder="Ex.: Mecânica de Autos"
                />
              </FormView>

              {/* Service */}
              <FormView>
                <Ionicons name={'construct-outline'} size={30} color={'#666'} style={{ paddingRight: '2%', paddingLeft: '1.5%' }} />
                <Input
                  value={serviceInput}
                  onChangeText={setServiceInput}
                  placeholder="Ex.: Troca de Óleo"
                />
              </FormView>

              {/* Price */}
              <FormView>
                <Ionicons name={'cash-outline'} size={30} color={'#666'} style={{ paddingRight: '2%', paddingLeft: '1.5%' }} />
                <Input
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
              <FormView>
                <Ionicons name={'hammer-outline'} size={30} color={'#666'} style={{ paddingRight: '2%', paddingLeft: '1.5%' }} />
                <Input
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
              <FormView>
                <Ionicons name={'calendar-outline'} size={30} color={'#666'} style={{ paddingRight: '2%', paddingLeft: '1.5%' }} />
                <Input
                  keyboardType="numeric"
                  value={dateInput}
                  maxLength={10}
                  onChangeText={(text) => {
                    text = text.replace(/\D/g, "");
                    text = text.replace(/^(\d{2})(\d)/g, "$1/$2");
                    text = text.replace(/(\d)(\d{4})$/, "$1/$2");
                    setDateInput(text);
                  }}
                  placeholder="dd/mm/aaaa"
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