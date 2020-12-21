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

const Home: React.FC = () => {
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
