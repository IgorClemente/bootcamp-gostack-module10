import React from 'react';
import { Image } from 'react-native';

import Background from '~/components/Background';

import logo from '~/assets/logo.png';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignInLink,
  SignInLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo}></Image>
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
          />
          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>

        <SignInLink onPress={() => navigation.navigate('SignUp')}>
          <SignInLinkText>Criar conta gratuita</SignInLinkText>
        </SignInLink>
      </Container>
    </Background>
  );
}