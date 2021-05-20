import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height'


export const Container = styled(LinearGradient).attrs({
  colors: ['#0004ff', '#0099ff'],
  start: { x: 0, y: 1 },
  end: { x: 1, y: 0 }
})`
  flex: 1;
  padding-top: ${getStatusBarHeight(true)}px;
`;

export const Title = styled.Text`
font-size: 32px;
color: #FFF;
font-weight: bold;
padding-top: 3%;
padding-left: 5%;
`;

export const Form = styled.View`
flex-direction: column;
margin-top: 5%;
padding-left: 5%;
padding-right: 5%;
padding-bottom: 5%;
`;

export const FormView = styled.View`
flex: 1;
flex-direction: row;
margin-top: 15px;
margin-bottom: 5px;
align-items: center;
background-color: #FFF;
border-radius: 4px;
border: 3px solid ${props => props.focus ? '#00FF99' : '#FFF'}
`;

export const FormText = styled.Text`
font-size: 16px;
color: #FFF;
font-weight: bold;
`;

export const Input = styled.TextInput`
flex: 1;
padding: 8px 8px;
border-radius: 4px;
font-size: 16px;
color: #333;
background: transparent;
`;

export const Submit = styled.TouchableOpacity`
background: #6BD4C1;
margin-top: 10%;
justify-content: center;
border-radius: 10px;
padding: 14px;
`;

export const SubmitText = styled.Text`
font-size: 16px;
color: #FFF;
text-align: center;
`;


