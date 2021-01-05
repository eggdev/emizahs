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
import React, { useState, useEffect } from 'react';
import { useAuth } from 'src/context/AuthContext';
import useAxios from 'src/hooks/useAxios';

import { Quotes, DefaultQuotes } from 'src/models/Quotes';

const Home: React.FC = () => {
  const { getMethod } = useAxios();
  const { account, setAccount } = useAuth();
  // const [quotes, setQuotes] = useState<Quotes>([...DefaultQuotes]);

  const fetchUserInfo = async () => {
    const { data } = await getMethod(`api/account/${account.user}`);
    if (data) {
      setAccount({
        ...account,
        ...data.account,
      });
    }
  };

  const fetchQuotes = async () => {
    const { data } = await getMethod(`api/quotes/${account.user}`);
    console.log(data);
  };

  useEffect(() => {
    fetchUserInfo();
    fetchQuotes();
  }, []);

  // useEffect(() => {
  //   console.log(quotes);
  // }, [quotes]);

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
        <section>
          <IonButton onClick={fetchQuotes}>Fetch Quotes</IonButton>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Home;
