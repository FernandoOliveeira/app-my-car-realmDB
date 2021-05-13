import React, { useEffect, useState, useCallback } from 'react';
import getRealm from '~/services/realm';
import { RefreshControl } from 'react-native';

import MaintenanceList from '~/components/MaintenanceList';
import { Container, Title, List } from './styles';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Maintenances = () => {
  // Hooks
  const [maintenance, setMaintenance] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  // Load the all registers from database and save in to maintenance hook
  const loadMaintenances = async () => {
    const realm = await getRealm();

    const data = realm.objects('List');

    setMaintenance(data);
  }


  // Load all the maintenances in to the screen
  useEffect(() => {
    loadMaintenances();
  }, []);


  // Push the screen down to refresh
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => {
      setRefreshing(false);
      loadMaintenances();
    });

  }, []);

  return (
    <Container>
      {/* Title */}
      <Title>Manutenções</Title>

      {/* List */}
      <List
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        data={maintenance}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <MaintenanceList data={item} />
        )}
      />
    </Container>
  );
}

export default Maintenances;