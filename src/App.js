import React from 'react';
import {
  IonApp,
  IonPage,
  IonContent,
  IonTabBar,
  IonTabs,
  IonIcon,
  IonRouterOutlet,
  IonTabButton,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import { home } from 'ionicons/icons';
import { ThemeProvider } from 'react-jss';

import theme from 'src/theme';
import Header from 'src/components/Header';
import CardDisplay from 'src/pages/CardDisplay';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <IonPage>
                <Header title="Emizahs" />
                <Route
                  exact
                  path="/"
                  render={() => (
                    <IonContent className="card-display" fullscreen>
                      <CardDisplay />
                    </IonContent>
                  )}
                />
              </IonPage>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton>
                <IonIcon icon={home} />
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    </ThemeProvider>
  );
};

export default App;
