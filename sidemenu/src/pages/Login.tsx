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

const Login: React.FC = () => {
  const handleClick = async () => {
    SignInWithApple.signin({
      requestedScopes: [
        ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName,
        ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail,
      ],
    })
      .then((res) => {
        alert('Send token to apple for verification: ' + res.identityToken);
        console.log(res);
      })
      .catch((error) => {
        alert(error.code + ' ' + error.localizedDescription);
        console.error(error);
      });
  };

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
