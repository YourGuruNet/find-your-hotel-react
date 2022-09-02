import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { LOCAL_STORAGE, THEMES } from "../app/constants/constants";
import { darkTheme } from "../app/assets/theme/darkTheme";
import { GlobalStyles } from "../app/assets/theme/globalStyles";
import { lightTheme } from "../app/assets/theme/lightTheme";

const Layout = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState(THEMES.LIGHT);

  useEffect(() => {
    const localTheme = window.localStorage.getItem(LOCAL_STORAGE.THEME);
    localTheme && setTheme(localTheme);
  }, []);

  const themeToggler = () => {
    const mode = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    setTheme(mode);
    window.localStorage.setItem(LOCAL_STORAGE.THEME, mode);
  };
  const themeMode = theme === THEMES.LIGHT ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  );
};

export default Layout;
