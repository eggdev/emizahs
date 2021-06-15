import React, {useState} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Home from './_organisms/Home';
import Record from './_organisms/Record';

// Instruct SplashScreen not to hide yet, we want to do this manually
SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
});

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return isLoggedIn ? <Record /> : <Home />;
};

export default App;
