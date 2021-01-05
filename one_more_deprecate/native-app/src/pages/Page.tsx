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
import React from 'react';
import { useParams } from 'react-router';

import useLocalStorage from '../hooks/useLocalStorage';

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { getStorage } = useLocalStorage();

  const requestQuoteData = async () => {
    const { user } = await getStorage('user');
    console.log('here', user);
  };

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
            <IonTitle size="large">{name} page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={requestQuoteData}>Fetch Quotes</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Page;
