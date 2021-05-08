import styled from 'styled-components/native';

export const Container = styled.View`
padding: 20px;
border-radius: 5px;
background: #FFF;
margin-bottom: 15px;
`;

export const Service = styled.Text.attrs({
  numberOfLines: 5,
})`
font-size: 18px;
font-weight: bold;
color: #333;
`;

export const Price = styled.Text`
font-size: 15px;
margin-top: 5px;
line-height: 20px;
color: #666;
`;

export const Date = styled.Text`
font-size: 15px;
margin-top: 5px;
line-height: 20px;
color: #666;
`;
