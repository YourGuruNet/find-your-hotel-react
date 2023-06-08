import styled from "styled-components";

export const LoginWrapper = styled.section`
  position: relative;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 60rem;
  margin: 6rem auto 0;
`;

export const LoginTile = styled.h1`
  font-weight: 400;
  font-size: 6.4rem;
  line-height: 8rem;
  margin-bottom: 4rem;
`;

export const LoginTileSuccess = styled.h1`
  font-weight: 400;
  font-size: 3.4rem;
  line-height: 8rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.darkGreen};
`;

export const LoginSubtitle = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;
  margin-bottom: 2rem;
`;

export const LogForgotPassword = styled.p`
  font-weight: 200;
  font-size: 1.2rem;
  line-height: 2rem;
  margin-top: 2rem;
  color: ${(props) => props.theme.darkBlue};
  cursor: pointer;
`;
