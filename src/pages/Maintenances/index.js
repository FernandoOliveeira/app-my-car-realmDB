import React, { useEffect, useState, useCallback } from 'react';
import getRealm from '~/services/realm';
import { RefreshControl } from 'react-native';

import MaintenanceList from '~/components/MaintenanceList';
import { Container, Title, Total, List } from './styles';



const Maintenances = ({ navigation }) => {
  // Hooks
  const [maintenance, setMaintenance] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [total, setTotal] = useState(0);

  // Timer
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  // Format the money values to BRL format
  const moneyFormat = (value) => {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");

    return value;
  }
  // Set number to only two decimals numbers
  const strip = number => moneyFormat((parseFloat(number.toPrecision(12)).toFixed(2) / 100).toString());

  // .reduce callback
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  // Load the all registers from database and save in to maintenance hook
  const loadMaintenances = async () => {
    const realm = await getRealm();

    const data = realm.objects('List');

    setMaintenance(data);
  }

  // Sums all total values in the list
  const sumTotal = () => {
    try {
      setTotal(maintenance.map((data) => data.price + data.labor).reduce(reducer));
      console.log(maintenance.map((data) => data.price))

    } catch (err) {
      console.log(`Failed to set maintenance total. ${err}`);
      setTotal(0);

    }
  }

  // Load all the maintenances in to the screen
  useEffect(() => {
    const load = navigation.addListener('focus', () => {
      loadMaintenances();
      sumTotal();

    });

    return load
  }, [navigation]);


  // Push the screen down to refresh event
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => {
      setRefreshing(false);
      loadMaintenances();
      sumTotal();
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

      <Total>Total: {strip(Number(total))}R$</Total>
    </Container>
  );
}

export default Maintenances;