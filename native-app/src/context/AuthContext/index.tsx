import React, { useState } from 'react';
import { UserInfo } from '../../models/UserInfo';
import Login from '../../pages/Login';
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

  if (userInfo.loggedIn) {
    return <Login />;
  }

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
