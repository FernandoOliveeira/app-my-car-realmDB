import React from 'react';

import { DismissKeyboard } from '~/components/DismissKeyboard/index';
import { Container, Title, Form, FormView, FormText, Input, Submit, SubmitText } from './styles';
//import logo from '../../assets/car.png';

const Main = () => {
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
              placeholder="Ex.: Troca de Óleo"
            />
          </FormView>

          {/* Price */}
          <FormView>
            <FormText>Valor:</FormText>
            <Input
              placeholder="Preço:"
            />
          </FormView>

          {/* Date */}
          <FormView>
            <FormText>Data:</FormText>
            <Input
              placeholder="dd/mm/aaaa"
            />
          </FormView>

          {/* Submit */}
          <Submit onPress={() => { }}>
            <SubmitText>Salvar</SubmitText>
          </Submit>
        </Form>

      </Container>

    </DismissKeyboard>
  );
}

export default Main;