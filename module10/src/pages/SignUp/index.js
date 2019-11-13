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

export default function SignUp({ navigation }) {
  const emailReference = useRef();
  const passwordReference = useRef();

  function handleSubmit() {}

  return (
    <Background>
      <Container>
        <Image source={logo}></Image>
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => {
              emailReference.current.focus();
            }}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailReference}
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
          <SubmitButton onPress={() => {}}>Criar conta</SubmitButton>
        </Form>

        <SignInLink onPress={() => navigation.navigate('SignIn')}>
          <SignInLinkText>Já tenho uma conta</SignInLinkText>
        </SignInLink>
      </Container>
    </Background>
  );
}
