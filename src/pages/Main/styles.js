import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height'


export const Container = styled(LinearGradient).attrs({
  colors: ['#0004ff', '#0099ff'],
  start: { x: 0, y: 1 },
  end: { x: 1, y: 0 }
})`
  flex: 1;
  padding-top: ${15 + getStatusBarHeight(true)}px;
`;

export const Title = styled.Text`
font-size: 32px;
color: #FFF;
font-weight: bold;
padding: 0 20px;
`;

export const Form = styled.View`
flex-direction: column;
margin-top: 50px;
padding: 0 20px;
`;

export const FormView = styled.View`
margin-top: 5px;
margin-bottom: 5px;
`;

export const FormText = styled.Text`
font-size: 16px;
color: #FFF;
font-weight: bold;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
padding: 12px 15px;
border-radius: 4px;
font-size: 16px;
color: #333;
background: #FFF;
`;

export const Submit = styled.TouchableOpacity`
background: #6BD4C1;
margin-top: 10%;
justify-content: center;
border-radius: 4px;
padding: 14px;
`;

export const SubmitText = styled.Text`
font-size: 16px;
color: #FFF;
text-align: center;
`;


