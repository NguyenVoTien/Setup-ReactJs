import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = (children) => {
  const [user, setUser] = useState(false);
  const [theme, setTheme] = useState(false);

  const handleChangeTheme = () => {
    setTheme(!theme);
  };
  // const handleSetLocalStorage = () => {
  //   SetLocalStorage();
  // };
  // const handleGetLocalStorage = () => {};
  // const handleDelLocalStorage = () => {};

  const data = {
    user,
    setUser,
    theme,
    setTheme,
    handleChangeTheme,
    // handleSetLocalStorage,
    // handleGetLocalStorage,
    // handleDelLocalStorage,
  };
  AuthContext.displayName = 'AuthContext';
  return <AuthContext.Provider value={data}> {children}</AuthContext.Provider>;
};
