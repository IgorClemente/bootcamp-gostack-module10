import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import { Container, HoursList, Hour, Title } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

export default function SelectDateTime({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const provider = navigation.getParam('provider');

  useEffect(() => {
    async function loadHours() {
      const response = await api.get(`providers/${provider.id}/available`, {
        params: { date: date.getTime() },
      });

      setHours(response.data);
    }

    loadHours();
  }, [date, provider.id]);

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
        <HoursList
          data={hours}
          keyExtractor={item => String(item.time)}
          renderItem={({ item }) => (
            <Hour
              enabled={item.available}
              onPress={() =>
                navigation.navigate('Confirm', { time: item.date, provider })
              }
            >
              <Title>{item.time}</Title>
            </Hour>
          )}
        ></HoursList>
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
