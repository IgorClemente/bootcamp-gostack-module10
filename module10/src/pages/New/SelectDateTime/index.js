import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import { Container } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SelectDateTime() {
  const [date, setDate] = useState(new Date());

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
      </Container>
    </Background>
  );
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o horário',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('SelectProvider');
      }}
    >
      <Icon name="chevron-left" size={20} color="#FFF" />
    </TouchableOpacity>
  ),
});
