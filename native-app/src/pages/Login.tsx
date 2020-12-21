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
import useAxios from 'src/hooks/useAxios';
import useLocalStorage from 'src/hooks/useLocalStorage';

interface AuthProviderProps {
  account: Object;
  setUserInfo: Function;
}

const Login: React.FC<AuthProviderProps> = ({ setUserInfo }) => {
  const { postMethod } = useAxios();
  const { setStorage } = useLocalStorage();

  const runAuthCheck = async () => {
    SignInWithApple.signin({
      requestedScopes: [
        ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName,
        ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail,
      ],
    })
      .then(async (res) => {
        const response = await postMethod({
          url: 'api/account/create',
          data: { ...res },
        });
        await setStorage('user', { user: response.data.account.user });
      })
      .catch(async (error) => {
        const response = await postMethod({
          url: 'api/account/error',
          data: { ...error },
        });
        console.log(response);
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
