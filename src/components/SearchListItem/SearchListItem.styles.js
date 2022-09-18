import styled from "styled-components";

export const SearchListItemWrapper = styled.section`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 1rem 0.5rem 0;
  padding: 2.9rem 3.2rem;
  background-color: ${({ theme }) => theme.lightBackground};
  filter: drop-shadow(${({ theme }) => theme.shadow});
  border-radius: 1rem;
`;

export const SearchItemImage = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 1rem;
  object-fit: cover;
  margin-right: 2.3rem;
`;
