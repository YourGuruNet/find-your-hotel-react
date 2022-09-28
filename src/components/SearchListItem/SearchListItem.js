import React from "react";
import {
  FavoriteButtonsContainer,
  SearchItemAddress,
  SearchItemFilters,
  SearchItemImage,
  SearchItemTitle,
  SearchListItemWrapper,
  TextColumn,
} from "./SearchListItem.styles";
import LocationIcon from "../../app/assets/svg/LocationIcon";
import FavoriteButton from "../buttons/FavoriteButton";

const SearchListItem = ({ hotel }) => {
  const { title, images, filters } = hotel;
  const { address, city } = hotel.location;
  return (
    <SearchListItemWrapper>
      <SearchItemImage src={images?.mainPicture} />
      <TextColumn>
        <FavoriteButtonsContainer>
          <FavoriteButton />
        </FavoriteButtonsContainer>
        <SearchItemTitle>{title}</SearchItemTitle>
        <SearchItemAddress>
          <LocationIcon width={1.1} height={1.4} />
          {`${address}, ${city}`}
        </SearchItemAddress>
        <SearchItemFilters>{filters?.join(" • ")}</SearchItemFilters>
      </TextColumn>
    </SearchListItemWrapper>
  );
};

export default SearchListItem;
