import React from 'react';
import {
  IonSplitPane,
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
import Menu from 'src/components/Menu';
import Header from 'src/components/Header';

import Login from 'src/pages/Login';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <IonApp className="dark-theme">
        <Login />
        {/* <IonSplitPane contentId="main">
          <Menu />
          <IonReactRouter>
            <IonTabs>
              <IonRouterOutlet id="main">
                <IonPage></IonPage>
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton>
                  <IonIcon icon={home} />
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </IonReactRouter>
        </IonSplitPane> */}
      </IonApp>
    </ThemeProvider>
  );
};

export default App;
