import React, { useEffect } from 'react';
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

interface LoginProps {
  account: Object;
  setAccount: Function;
}

const Login: React.FC<LoginProps> = ({ account, setAccount }) => {
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
        // TODO: Remove this logic cause its not good at all
        const response = await postMethod({
          url: 'api/account/error',
          data: error,
        });
        await setStorage('user', {
          user: '000176.145f1673429f4892996d6cba8e583137.1529',
        });
        setAccount({
          ...account,
          user: '000176.145f1673429f4892996d6cba8e583137.1529',
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
