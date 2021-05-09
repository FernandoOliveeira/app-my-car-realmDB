import React from 'react';

import { Container, Name, Price, Service, Date, Labor, TotalPrice } from './styles';

const MaintenanceList = ({ data }) => {
  return (
    <Container>

      <Name>{data.name}</Name>
      <Service>{data.service}</Service>
      <Price>{data.price}</Price>
      <Labor>{data.labor}</Labor>
      <TotalPrice>{data.labor + data.price}</TotalPrice>
      <Date>{data.date}</Date>

    </Container>
  );
}

export default MaintenanceList;