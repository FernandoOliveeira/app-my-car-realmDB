import React, { useEffect, useState } from 'react';
import getRealm from '~/services/realm';
import { DismissKeyboard } from '~/components/DismissKeyboard';

import MaintenanceList from '~/components/MaintenanceList';
import { Container, Title, List } from './styles';


const Maintenances = () => {
  const [maintenance, setMaintenance] = useState([]);

  useEffect(() => {
    const loadMaintenances = async () => {
      const realm = await getRealm();

      const data = realm.objects('List');

      setMaintenance(data);
    }

    loadMaintenances();
    console.log(maintenance);
  }, []);

  return (
    <DismissKeyboard>
      <Container>
        <Title>Manutenções</Title>
        <List
          keyboardShouldPersistTaps="handled"
          data={maintenance}
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