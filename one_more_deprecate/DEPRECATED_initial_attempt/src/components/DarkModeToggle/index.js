import React from 'react';
import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';

const DarkModeToggle = () => (
  <IonSegment>
    <IonSegmentButton>
      <IonLabel>Light</IonLabel>
    </IonSegmentButton>
    <IonSegmentButton>
      <IonLabel>Dark</IonLabel>
    </IonSegmentButton>
  </IonSegment>
);

export default DarkModeToggle;
