import React, { createContext, useCallback, useContext, useState } from 'react';
import { ThemeProvider as Provider } from 'styled-components';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface ITheme {
  title: string;

  colors: {
    primary: string;
    error: string;
    warning: string;
    success: string;

    background: string;
    backgroundSecundary: string;

    text: string;
    muted: string;
  };
}

interface ThemeContextData {
  theme: ITheme;
  toggleTheme(): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const storaged = localStorage.getItem('@GabrielTeodoro:theme');

    if (storaged) {
      return JSON.parse(storaged);
    }

    return dark;
  });

  const toggleTheme = useCallback(() => {
    localStorage.setItem(
      '@GabrielTeodoro:theme',
      JSON.stringify(theme.title === 'light' ? dark : light),
    );

    setTheme(theme.title === 'light' ? dark : light);
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme } as ThemeContextData}>
      <Provider theme={theme}>{children}</Provider>
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}

export { ThemeProvider, useTheme };
