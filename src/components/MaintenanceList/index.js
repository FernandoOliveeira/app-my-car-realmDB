import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, CustomView, Name, Price, Service, Date, Labor, TotalPrice } from './styles';

const MaintenanceList = ({ data }) => {
  return (
    <Container>

      <CustomView>
        <Name>{data.name}</Name>
      </CustomView>

      <CustomView>
        <Ionicons name={'construct-outline'} size={30} color={'black'} style={{ paddingRight: '3%' }} />
        <Service>{data.service}</Service>
      </CustomView>

      <CustomView>
        <Ionicons name={'cash-outline'} size={30} color={'black'} style={{ paddingRight: '3%' }} />
        <Price>Preço: {data.price} R$</Price>
      </CustomView>

      <CustomView>
        <Ionicons name={'hammer-outline'} size={30} color={'black'} style={{ paddingRight: '3%' }} />
        <Labor>Mão de Obra: {data.labor} R$</Labor>
      </CustomView>

      <CustomView>
        <MaterialCommunityIcons name={'barcode'} size={30} color={'black'} style={{ paddingRight: '3%' }} />
        <TotalPrice>Total: {data.labor + data.price} R$</TotalPrice>
      </CustomView>

      <CustomView>
        <Ionicons name={'calendar-outline'} size={30} color={'black'} style={{ paddingRight: '3%' }} />
        <Date>{data.date}</Date>
      </CustomView>

    </Container>
  );
}

export default MaintenanceList;