import React from 'react';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';

const Header = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
