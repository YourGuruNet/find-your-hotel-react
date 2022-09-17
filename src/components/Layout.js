import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { LOCAL_STORAGE, THEMES } from "../app/constants/constants";
import { darkTheme } from "../app/assets/theme/darkTheme";
import { GlobalStyles } from "../app/assets/theme/globalStyles";
import { lightTheme } from "../app/assets/theme/lightTheme";
import styled from "styled-components";

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
      <LayoutWrapper>
        <GlobalStyles />
        {children}
      </LayoutWrapper>
    </ThemeProvider>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  transition: all 0.5s linear;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  width: 100%;
  max-width: 190rem;
  padding: 4rem 2rem 2rem;
`;
