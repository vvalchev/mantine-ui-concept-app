import React, { createContext, useState } from 'react';
import { UserType } from '../components/users/types';

import { testUsers } from '../pages/data/users';

export interface ApplicationContextType {
  user?: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>;
}

export const ApplicationContext = createContext<ApplicationContextType>({
  setUser: () => null,
});

export const ApplicationContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | undefined>(testUsers[0]);

  return <ApplicationContext.Provider value={{ user, setUser }}>{children}</ApplicationContext.Provider>;
};
