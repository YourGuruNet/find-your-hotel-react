import styled from "styled-components";

export const SearchListWrapper = styled.section`
  max-width: 50%;
  width: 50%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  margin-right: 6rem;

  @media screen and (max-width: ${({ theme }) => theme.smallScreen}) {
    max-width: 100%;
    width: 100%;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 0.5rem;
    padding: 1rem 0.5rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px ${({ theme }) => theme.lightElement};
    border-radius: 1rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.lightElement};
    border-radius: 1rem;
  }
`;
