import {
  IonContent,
  IonPage,
  IonTitle,
  IonHeader,
  IonMenuButton,
  IonButtons,
  IonToolbar,
  IonButton,
} from '@ionic/react';
import React, { useEffect } from 'react';
import { useAuth } from 'src/context/AuthContext';
import useAxios from 'src/hooks/useAxios';

const Home: React.FC = () => {
  const { getMethod } = useAxios();
  const { account, setAccount } = useAuth();

  const fetchUserInfo = async () => {
    const { data } = await getMethod(`api/account/${account.user}`);
    setAccount({
      ...data.account,
    });
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home page</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <IonButton onClick={requestQuoteData}>Fetch Quotes</IonButton> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
