import styled, { css } from "styled-components";

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

export const SearchItemImageSkeleton = styled.div`
  width: 20rem;
  border-radius: 1rem;
  margin-right: 2.3rem;
  overflow: hidden;
`;

export const SearchItemTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 2.8rem;
  display: flex;
  justify-content: space-between;
`;

export const TextColumn = styled.div`
  width: 100%;
  padding-right: 5rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
`;

export const SearchItemAddress = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.9rem;
  span {
    padding-right: 0.4rem;
  }
`;

export const SearchItemFilters = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.secondaryText};
`;

export const FavoriteButtonsContainer = styled.div`
  position: absolute;
  right: 3rem;
  top: 2.5rem;
`;

export const LabelsRow = styled.section`
  display: flex;
  flex-direction: row;
`;

export const LabelItem = styled.p`
  margin-right: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.3rem;
  padding: 1rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.lightRed};
  color: ${({ theme }) => theme.darkRed};

  ${(props) =>
    props.label === "Friendly Neighborhood" &&
    css`
      background: ${({ theme }) => theme.lightBlue};
      color: ${({ theme }) => theme.darkBlue};
    `}

  ${(props) =>
    props.label === "New Building" &&
    css`
      background: ${({ theme }) => theme.lightGreen};
      color: ${({ theme }) => theme.darkGreen};
    `}
`;

export const LabelItemSkeleton = styled.div`
  margin-right: 1rem;
  width: 10rem;
  font-size: 3rem;
  border-radius: 1rem;
  overflow: hidden;
`;

export const FavoriteIconSkeleton = styled.div`
  overflow: hidden;
  border-radius: 100%;
`;

export const Price = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 2.8rem;
  position: absolute;
  right: 3rem;
  bottom: 2rem;
`;

export const PriceSkeleton = styled.div`
  position: absolute;
  right: 3rem;
  bottom: 2rem;
`;
