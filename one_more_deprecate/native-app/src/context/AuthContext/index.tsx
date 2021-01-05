import React, { useState, useEffect } from 'react';
import { AccountInfo, DefaultAccountInfo } from 'src/models/AccountInfo';
import useLocalStorage from 'src/hooks/useLocalStorage';
import Login from 'src/pages/Login';

export interface AuthContextProps {
  account: AccountInfo;
  setAccount: React.Dispatch<React.SetStateAction<AccountInfo>>;
  logout: React.Dispatch<React.SetStateAction<{}>>;
}

const AuthContext = React.createContext<AuthContextProps>({
  account: { ...DefaultAccountInfo },
  setAccount: () => {},
  logout: () => {},
});

const AuthProvider: React.FC = ({ children }) => {
  const { getStorage, removeFromStorage } = useLocalStorage();
  const [account, setAccount] = useState<AccountInfo>({
    ...DefaultAccountInfo,
  });

  const logout = async () => {
    await removeFromStorage('user');
    setAccount({ ...DefaultAccountInfo });
  };

  useEffect(() => {
    const checkStorageForUser = async () => {
      const storage = await getStorage('user');
      if (storage?.user) setAccount({ ...account, user: storage.user });
    };

    checkStorageForUser();
  }, []);

  if (!account.user) {
    return <Login account={account} setAccount={setAccount} />;
  }

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
