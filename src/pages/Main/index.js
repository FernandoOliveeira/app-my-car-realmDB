import React from 'react';
import { Keyboard } from 'react-native';
import { useState } from 'react';
import uuid from 'react-native-uuid';

import getRealm from '~/services/realm';
import { DismissKeyboard } from '~/components/DismissKeyboard/index';
import { Container, Title, Form, FormView, FormText, Input, Submit, SubmitText } from './styles';


const Main = () => {
  // Hooks
  const [serviceInput, setServiceInput] = useState('');
  const [priceInput, setPriceInput] = useState('');
  const [dateInput, setDateInput] = useState('');

  const saveRepository = async (maintenanceList) => {
    const data = {
      id: uuid.v4(),
      service: maintenanceList.serviceInput,
      price: maintenanceList.priceInput,
      date: maintenanceList.dateInput,
    };

    const realm = await getRealm();

    // Saves the all the inputs in the Database
    realm.write(() => {
      realm.create('List', data);
    });


  }

  const handleAddMaintenance = () => {
    try {
      let price = parseFloat(priceInput);

      const list = { serviceInput, priceInput: price, dateInput }

      saveRepository(list);

      // Set all inputs to empty
      setServiceInput('');
      setPriceInput('');
      setDateInput('');

      Keyboard.dismiss();
    } catch (err) {
      console.log(`Failed to save maintenance: ${err}`)
    }
  }

  return (
    <DismissKeyboard>

      <Container>

        {/* Title */}
        <Title>Novo Registro</Title>

        <Form>
          {/* Service */}
          <FormView>
            <FormText>Serviço:</FormText>
            <Input
              value={serviceInput}
              onChangeText={setServiceInput}
              placeholder="Ex.: Troca de Óleo"
            />
          </FormView>

          {/* Price */}
          <FormView>
            <FormText>Valor:</FormText>
            <Input
              value={priceInput}
              onChangeText={setPriceInput}
              placeholder="Preço:"
            />
          </FormView>

          {/* Date */}
          <FormView>
            <FormText>Data:</FormText>
            <Input
              value={dateInput}
              onChangeText={setDateInput}
              placeholder="dd/mm/aaaa"
            />
          </FormView>

          {/* Submit */}
          <Submit onPress={handleAddMaintenance}>
            <SubmitText>Salvar</SubmitText>
          </Submit>
        </Form>

      </Container>

    </DismissKeyboard>
  );
}

export default Main;