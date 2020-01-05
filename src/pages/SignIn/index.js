import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  const passwordReference = useRef();

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

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
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordReference}
            returnKeyType="send"
            onSubmitEditing={() => {
              handleSubmit();
            }}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton
            loading={loading}
            onPress={() => {
              handleSubmit();
            }}
          >
            Acessar
          </SubmitButton>
        </Form>

        <SignInLink onPress={() => navigation.navigate('SignUp')}>
          <SignInLinkText>Criar conta gratuita</SignInLinkText>
        </SignInLink>
      </Container>
    </Background>
  );
}
