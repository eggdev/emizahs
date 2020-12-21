import React, { useState } from 'react';
import { AccountInfo, DefaultAccountInfo } from '../../models/AccountInfo';

const AuthContext = React.createContext<AccountInfo>({
  ...DefaultAccountInfo,
});

const AuthProvider: React.FC = (props) => {
  const [account, setAccount] = useState<AccountInfo>({
    ...DefaultAccountInfo,
  });

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
