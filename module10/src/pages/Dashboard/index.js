import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Dashboard() {
  return <View />;
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};