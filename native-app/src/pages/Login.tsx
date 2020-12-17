import React from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import {
  SignInWithApple,
  ASAuthorizationAppleIDRequest,
} from '@ionic-native/sign-in-with-apple';

interface DispatchProps {
  setUserInfo: Function;
}

const Login: React.FC<DispatchProps> = ({ setUserInfo }) => {
  const runAuthCheck = async () => {
    SignInWithApple.signin({
      requestedScopes: [
        ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName,
        ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail,
      ],
    })
      .then((res) => {
        setUserInfo({
          user: res.user,
        });
      })
      .catch((error) => {
        alert(error.code + ' ' + error.localizedDescription);
        setUserInfo({
          user: 'asdf',
        });
      });
  };

  const handleClick = () => runAuthCheck();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Log In</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton expand="block" onClick={handleClick}>
          Sign In With Apple
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
