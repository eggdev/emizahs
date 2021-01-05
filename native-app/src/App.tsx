import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import Menu from 'src/components/Menu';

import Home from 'src/pages/Home';
import theme from 'src/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <IonApp>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/home" component={Home} exact />
            <Redirect from="/" to="/home" exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonApp>
    </ThemeProvider>
  );
};

export default App;
