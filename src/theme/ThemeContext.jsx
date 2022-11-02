import React, { createContext, useContext, useState, useEffect } from "react";

const defaultContextData = {
  dark: false,
  toggle: () => {},
};

const ThemeContext = createContext(defaultContextData);
const useTheme = () => useContext(ThemeContext);

const useEffectDarkMode = () => {
  const [themeState, setThemeState] = useState({
    dark: false,
    hasThemeMounted: false,
  });
  useEffect(() => {
    const lsDark = localStorage.getItem("dark") === "true";
    setThemeState({ ...themeState, dark: lsDark, hasThemeMounted: true });
  }, []);

  return [themeState, setThemeState];
};

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useEffectDarkMode();

  if (!themeState.hasThemeMounted) {
    return <div />;
  }

  const toggle = () => {
    const dark = !themeState.dark;
    localStorage.setItem("dark", JSON.stringify(dark));
    dark === true ? document.body.classList.add('dark-true') : document.body.classList.remove('dark-true')
    setThemeState({ ...themeState, dark });
  };

  return (
      <ThemeContext.Provider
        value={{
          dark: themeState.dark,
          toggle,
        }}
      >
        {children}
      </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
