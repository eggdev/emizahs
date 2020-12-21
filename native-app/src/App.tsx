import React, { useEffect } from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';

import Menu from 'src/components/Menu';
import useAccountInfo from 'src/hooks/useAccountInfo';
import useLocalStorage from 'src/hooks/useLocalStorage';
import Login from 'src/pages/Login';
import Home from 'src/pages/Home';
import theme from 'src/theme';

const App: React.FC = () => {
  const history = useHistory();
  const { getStorage } = useLocalStorage();
  const { account, setAccount, logout } = useAccountInfo();

  const requestAccountInfo = async () => {
    const { user } = await getStorage('user');
    if (user) {
      setAccount({
        ...account,
        user,
      });
      history.push('/home');
    } else {
      history.push('/login');
    }
  };

  useEffect(() => {
    requestAccountInfo();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <IonApp>
        <IonSplitPane contentId="main">
          <Menu logout={logout} />
          <IonRouterOutlet id="main">
            <Route path="/login" component={Login} exact />
            <Route path="/home" component={Home} exact />
            <Redirect from="/" to="/login" exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonApp>
    </ThemeProvider>
  );
};

export default App;
