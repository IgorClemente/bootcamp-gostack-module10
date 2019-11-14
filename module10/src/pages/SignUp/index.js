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

import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailReference = useRef();
  const passwordReference = useRef();

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }

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
            value={name}
            onChangeText={setName}
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
            Criar conta
          </SubmitButton>
        </Form>

        <SignInLink onPress={() => navigation.navigate('SignIn')}>
          <SignInLinkText>Já tenho uma conta</SignInLinkText>
        </SignInLink>
      </Container>
    </Background>
  );
}
