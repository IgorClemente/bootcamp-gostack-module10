import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin: 60px 0 30px;
`;

export const DateButton = styled(RectButton)`
  padding: 0 15px;
  margin: 0 30px;
  border-radius: 4px;
  height: 46px;
  background: rgba(0, 0, 0, 0.1);
  flex-direction: row;
  align-items: center;
`;

export const DateText = styled.Text`
  font-size: 14px;
  color: #fff;
  margin-left: 15px;
`;

export const Picker = styled.View`
  background: #fff;
  padding: 15px 30px;
  margin-top: 30px;
`;
