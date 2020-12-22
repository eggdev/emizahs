import React, { useState, useEffect } from 'react';
import { AccountInfo, DefaultAccountInfo } from '../../models/AccountInfo';
import useLocalStorage from 'src/hooks/useLocalStorage';

export interface IAuth {
  account: AccountInfo;
  setAccount: React.Dispatch<React.SetStateAction<AccountInfo>>;
  logout: React.Dispatch<React.SetStateAction<{}>>;
}

const AuthContext = React.createContext<IAuth>({
  account: { ...DefaultAccountInfo },
  setAccount: () => {},
  logout: () => {},
});

const AuthProvider: React.FC = ({ children }) => {
  const { getStorage } = useLocalStorage();
  const [account, setAccount] = useState<AccountInfo>({
    ...DefaultAccountInfo,
  });

  const logout = () => {
    setAccount({ ...DefaultAccountInfo });
  };

  useEffect(() => {
    const checkStorageForUser = async () => {
      const { user } = await getStorage('user');
      if (user) setAccount({ ...account, user });
    };

    checkStorageForUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ account: { ...account }, setAccount, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }
  return context;
};

export { AuthContext, AuthProvider, useAuth };
