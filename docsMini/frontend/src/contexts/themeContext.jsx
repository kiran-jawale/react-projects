import { createContext, useState,useContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isGradient, setTheme] = useState(false); 

  const toggleTheme = () => {
    setTheme(!isGradient);
  };

  return (
    <ThemeContext.Provider value={{ isGradient, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider,ThemeContext, useTheme };