//authProvider.tsx
import { User } from '@firebase/auth';
import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { AuthContext } from '@contexts/authContext';
import { auth } from '@firebase';

interface ISectionProp {
  children: ReactNode;
}

const AuthProvider = ({ children }: ISectionProp) => {
  const [user, setUser] = useState<User | null>(null);
  const userInfo = useContext(AuthContext);

  useEffect(() => {
    return auth.onAuthStateChanged((fbUser) => {
      console.log(fbUser);
      console.log(userInfo);

      setUser(fbUser);
    });
  }, [userInfo]);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
