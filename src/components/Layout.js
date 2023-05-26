import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { LOCAL_STORAGE, THEMES } from "../app/constants/constants";
import { darkTheme } from "../app/assets/theme/darkTheme";
import { GlobalStyles } from "../app/assets/theme/globalStyles";
import { lightTheme } from "../app/assets/theme/lightTheme";
import styled from "styled-components";
import { connect } from "react-redux";
import { setLayoutTheme } from "../modules/user/actions";
import Navbar from "./NavBar/NavBar";
import Vector from "../app/assets/svg/Vector";

const Layout = (props) => {
  const {
    children,
    layoutTheme,
    updateLayoutTheme,
    isLogin = false,
    showVector,
  } = props;

  useEffect(() => {
    const localTheme = window.localStorage.getItem(LOCAL_STORAGE.THEME);
    localTheme && updateLayoutTheme(THEMES.DARK);
  }, []);

  const themeToggler = () => {
    const mode = layoutTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    updateLayoutTheme(mode);
    window.localStorage.setItem(LOCAL_STORAGE.THEME, mode);
  };
  const themeMode = layoutTheme === THEMES.DARK ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      {!isLogin && <Navbar themeToggler={themeToggler} />}
      <FlexWrapper>
        <LayoutWrapper>{children}</LayoutWrapper>
        {showVector && <Vector />}
      </FlexWrapper>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  layoutTheme: state.user.preferences.layoutTheme,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateLayoutTheme: (theme) => dispatch(setLayoutTheme(theme)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

const LayoutWrapper = styled.div`
  transition: all 0.5s linear;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  width: 100%;
  max-width: 190rem;
  padding: 4rem 2rem 2rem;
  margin: 6rem auto 0;
  overflow: hidden;
`;

const FlexWrapper = styled.div`
  align-items: space-between;
  display: flex;
  flex-direction: column;
  z-index: 3;
`;
