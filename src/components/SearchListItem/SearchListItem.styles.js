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

export const SearchItemTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 2.8rem;
  display: flex;
  justify-content: space-between;
`;

export const TextColumn = styled.div`
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SearchItemAddress = styled.p`
  padding-top: 0.5rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.9rem;
  span {
    padding-right: 0.4rem;
  }
`;

export const SearchItemFilters = styled.p`
  padding-top: 1rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.secondaryText};
`;

export const FavoriteButtonsContainer = styled.div`
  position: absolute;
  right: -5.5rem;
`;
