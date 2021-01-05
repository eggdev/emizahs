import React from 'react';
import {
  SignInWithApple,
  ASAuthorizationAppleIDRequest,
} from '@ionic-native/sign-in-with-apple';
import { IonButton } from '@ionic/react';

const Login = () => {
  return (
    <>
      <IonButton onClick={SignInWithApple}>Sign In With Apple</IonButton>
    </>
  );
};

export default Login;
