import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from '@ionic/react';

import React from 'react';
import { logOutOutline } from 'ionicons/icons';
import useLocalStorage from '../hooks/useLocalStorage';
import { useAuth } from '../context/AuthContext';
import './Menu.css';

const Menu: React.FC = () => {
  const { resetStorage } = useLocalStorage();
  const auth = useAuth();
  console.log(auth);
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="-list">
          <IonListHeader>Emizahs</IonListHeader>
          <IonMenuToggle autoHide={false}>
            <IonItem onClick={() => resetStorage()}>
              <IonIcon slot="start" ios={logOutOutline} />
              <IonLabel>Logout</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
