import React from 'react';
import {
  IonApp,
  IonPage,
  IonContent
} from '@ionic/react';

import Header from 'src/components/Header';

import CardDisplay from 'src/pages/CardDisplay';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import 'src/theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonPage>
      <Header title="Emizahs" />
      <IonContent className="card-display" fullscreen>
        <CardDisplay />
      </IonContent>
    </IonPage>
  </IonApp>
);

export default App;
