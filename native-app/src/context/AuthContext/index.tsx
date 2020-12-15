import React, { useState } from 'react';
import { UserInfo } from '../../models/UserInfo';

interface IAuth {
  userInfo: UserInfo;
}

const AuthContext = React.createContext<IAuth>({
  userInfo: {
    loggedIn: false,
  },
});

const AuthProvider: React.FC = (props) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    loggedIn: false,
  });

  return <AuthContext.Provider value={{ userInfo }} {...props} />;
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }
  return context;
};

export { AuthContext, AuthProvider, useAuth };
