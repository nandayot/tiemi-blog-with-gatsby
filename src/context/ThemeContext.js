import React, { createContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from '../styles/theme';

export const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
});

export const ThemeManager = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  // This effect runs once on the client to get the saved theme
  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    window.localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};