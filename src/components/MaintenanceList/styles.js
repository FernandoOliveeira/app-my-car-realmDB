import styled from 'styled-components/native';

export const CustomView = styled.View`
flex: 1;
flex-direction: row;
padding-top: 5px
padding-right: 25px
margin: 0 0 5px
align-items: center;
`;

export const CustomViewRefreshDelete = styled.View`
flex: 1;
flex-direction: row;
padding-top: 5px
padding-right: 25px
margin: 0 0 5px
align-items: center;
`;

export const Container = styled.View`
padding-top: 20px;
padding-right: 25px;
padding-left: 20px;
padding-bottom: 10px;
border-radius: 5px;
background: #FFF;
margin-bottom: 15px;
`;

export const Name = styled.Text`
font-size: 25px;
font-weight: bold;
color: #333;
`;
export const Service = styled.Text.attrs({
  numberOfLines: 10,
})`
font-size: 25px;
color: #333;
`;

export const Price = styled.Text`
font-size: 20px;
margin-top: 5px;
line-height: 20px;
color: #666;
`;

export const Date = styled.Text`
font-size: 20px;
margin-top: 5px;
line-height: 20px;
color: #666;
`;

export const Labor = styled.Text`
font-size: 20px;
margin-top: 5px;
line-height: 20px;
color: #666;
`;

export const TotalPrice = styled.Text`
font-size: 20px;
margin-top: 5px;
line-height: 20px;
color: #666;
`;

export const ModalContainer = styled.View`
flex: 1;
flex-direction: row;
border-radius: 5px;
`;

export const ModalCustomView = styled.View`
flex: 1;
flex-direction: row;
padding-top: 5px;
padding-left: 25px;
margin-top: 15px;
justify-content: space-between;
`;

export const ModalCustomViewInput = styled.View`
flex: 1;
padding-top: 25px;
padding-right: 25px;
padding-left: 25px;
`;

export const ModalTitle = styled.Text`
text-align: center;
font-size: 35px;
font-weight: bold;
color: #FFF;
`;

export const ModalForm = styled.View`
flex: 1;
flex-direction: column;
background-color: #006aff;
padding-top: 5%;
`;

export const ModalSubmit = styled.TouchableOpacity`
flex: 1;
flex-direction: row;
background-color: #6BD4C1;
justify-content: center;
padding: 15px;
border-radius: 5px;
`;

export const ModalSubmitText = styled.Text`
font-size: 20px;
color: #FFF;
text-align: center;
`;

export const ModalSubmitView = styled.View`
padding-top: 25px;
padding-right: 25px;
`;

export const ModalInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
padding: 5px 5px;
border-radius: 5px;
font-size: 16px;
color: #333;
background: #FFF;
border: 3px solid ${props => props.focus ? '#52FFE0' : '#FFF'}
`

export const ModalFormText = styled.Text`
font-size: 16px;
color: #FFF;
font-weight: bold;
`;

export const Submit = styled.TouchableOpacity`
flex: 1;
flex-direction: row;
background: transparent;
justify-content: center;
border-radius: 4px;
padding: 10px;
`;

export const SubmitText = styled.Text`
font-size: 20px;
color: #333;
text-align: center;
`;
