import React from 'react';

import Background from '~/components/Background';

// import { Container } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Profile() {
  return <Background />;
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
