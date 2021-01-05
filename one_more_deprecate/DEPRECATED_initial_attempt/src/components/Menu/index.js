import React from 'react';
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
} from '@ionic/react';

const Menu = () => (
  <IonMenu type="overlay" swipeGesture={true} contentId="main">
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Start Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonItem>Menu Item</IonItem>
        <IonItem>Menu Item</IonItem>
        <IonItem>Menu Item</IonItem>
        <IonItem>Menu Item</IonItem>
        <IonItem>Menu Item</IonItem>
      </IonList>
    </IonContent>
  </IonMenu>
);

export default Menu;
