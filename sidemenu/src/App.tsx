import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';

import Menu from './components/Menu';
import { useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Page from './pages/Page';
import theme from './theme';

const App: React.FC = () => {
  const { userInfo } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            {/* <Menu /> */}
            <IonRouterOutlet id="main">
              {userInfo.loggedIn ? (
                <>
                  <Route path="/page/:name" component={Page} exact />
                  <Redirect from="/" to="/page/Inbox" exact />
                </>
              ) : (
                <Login />
              )}
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    </ThemeProvider>
  );
};

export default App;
