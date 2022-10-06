import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Logo from "../../app/assets/svg/Logo";
import ToggleSwitch from "../buttons/ToggleSwitch";

const Navbar = (props) => {
  const { themeToggler } = props;
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <NavWrapper show={show}>
      <Navigation>
        <Logo width={5} height={5} />
        <ToggleSwitch action={themeToggler} />
      </Navigation>
    </NavWrapper>
  );
};

export default Navbar;

const NavWrapper = styled.nav`
  height: 12rem;
  width: 100%;
  background-color: ${({ theme }) => theme.lightBackground};
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  position: fixed;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 1rem 10rem;
  z-index: 9999;
  ${(props) =>
    props.show &&
    css`
      top: 0px;
      transition: 0.3s linear;
    `}
  ${(props) =>
    !props.show &&
    css`
      top: -12rem;
      transition: 0.3s linear;
    `}
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 180rem;
  width: 100%;
  margin: 0 auto;
`;
