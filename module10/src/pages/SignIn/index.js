import React, { useRef } from 'react';
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
  const passwordReference = useRef();

  function handleSubmit() {}

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
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordReference.current.focus();
            }}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordReference}
            returnKeyType="send"
            onSubmitEditing={() => {
              handleSubmit;
            }}
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
