import styled from "styled-components";

export const SearchSectionLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;

  @media screen and (max-width: ${({ theme }) => theme.smallScreen}) {
    flex-direction: column-reverse;
  }
`;
