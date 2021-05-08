import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height'


export const Container = styled(LinearGradient).attrs({
  colors: ['#0004ff', '#0099ff'],
  start: { x: 1, y: 1 },
  end: { x: 0, y: 0 }
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

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showsVerticalScrollIndicator: false,
})`
margin-top: 20px;
`;
