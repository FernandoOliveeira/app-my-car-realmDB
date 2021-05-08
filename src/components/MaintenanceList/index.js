import React from 'react';

import { Container, Price, Service, Date } from './styles';

const MaintenanceList = ({ data }) => {
  return (
    <Container>

      <Service>{data.service}</Service>
      <Price>{data.price}</Price>
      <Date>{data.date}</Date>

    </Container>
  );
}

export default MaintenanceList;