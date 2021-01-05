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
import { useAuth } from 'src/context/AuthContext';
import './Menu.css';

const Menu: React.FC = () => {
  const { logout } = useAuth();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="-list">
          <IonListHeader>Emizahs</IonListHeader>
          <IonMenuToggle autoHide={false}>
            <IonItem onClick={logout}>
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
