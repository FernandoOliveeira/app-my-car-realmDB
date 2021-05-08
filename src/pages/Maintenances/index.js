import React from 'react';
import { View, Text } from 'react-native';
import { DismissKeyboard } from '~/components/DismissKeyboard';

import MaintenanceList from '~/components/MaintenanceList';
import { Container, Title, List } from './styles';

const Maintenances = () => {
  return (
    <DismissKeyboard>
      <Container>

        <List
          keyboardShouldpersistTaps="handled"
          data={[
            {
              id: 1,
              name: "Troca de Óleo",
              price: parseFloat(12.50),
              date: "01/01/2021"

            },
          ]}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <MaintenanceList data={item} />
          )}
        />

      </Container>
    </DismissKeyboard>
  );
}

export default Maintenances;