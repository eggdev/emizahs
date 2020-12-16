import React, { useEffect, useState } from 'react';
import { UserInfo } from '../../models/UserInfo';
import Login from '../../pages/Login';
import useLocalStorage from '../../hooks/useLocalStorage';

const AuthContext = React.createContext<UserInfo>({
  user: '',
});

const AuthProvider: React.FC = (props) => {
  const { setStorage, getStorage } = useLocalStorage();

  const [account, setAccount] = useState<UserInfo>({
    user: '',
  });

  const setLoginResponse = async (userId: any) => {
    // When authorized, we'll set their ID in LS
    setStorage('user', userId);
  };

  const getAccountFromStorage = async () => {
    const retrieved = await getStorage('user');
    // TODO: If found, we want to fetch information about user from Apple/API
    retrieved && setAccount({ ...retrieved });
    // Else, the user will just continue to the Sign In with Apple page
  };

  useEffect(() => {
    // On App Load, check local storage
    getAccountFromStorage();
  }, []);

  if (account.user === '') return <Login setUserInfo={setLoginResponse} />;

  return <AuthContext.Provider value={{ ...account }} {...props} />;
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }
  return context;
};

export { AuthContext, AuthProvider, useAuth };
