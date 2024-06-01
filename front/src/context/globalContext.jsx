import { createContext, useContext, useState } from 'react';
import { DARK_THEME, LIGHT_THEME } from '../constants';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME_NAME } from '../constants/theme';

const Context = createContext({});

export const GlobalContext = (props) => {
  
  const themeState = useState(LIGHT_THEME);

  const contextValue = {
    theme: themeState
  };

  const { theme: [theme] } = contextValue;

  return (
    <Context.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        {props.children}
      </ThemeProvider>
    </Context.Provider>
  );
}

export const useGlobalContext = () => {
  const { theme: [theme, setTheme] } = useContext(Context);

  const setLightTheme = () => setTheme(LIGHT_THEME);
  const setDarkTheme = () => setTheme(DARK_THEME);
  
  const toggleTheme = () => {
    if (theme.name == LIGHT_THEME_NAME) {
      setTheme(DARK_THEME);
    } else {
      setTheme(LIGHT_THEME);
    }
  }

  return {
    theme,
    toggleTheme,
    setLightTheme,
    setDarkTheme
  }
}