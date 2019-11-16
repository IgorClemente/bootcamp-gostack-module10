import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Profile() {
  return <View />;
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
