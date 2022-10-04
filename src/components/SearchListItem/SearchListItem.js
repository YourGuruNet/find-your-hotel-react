import React from "react";
import {
  FavoriteButtonsContainer,
  LabelItem,
  LabelsRow,
  Price,
  SearchItemAddress,
  SearchItemFilters,
  SearchItemImage,
  SearchItemTitle,
  SearchListItemWrapper,
  TextColumn,
} from "./SearchListItem.styles";
import LocationIcon from "../../app/assets/svg/LocationIcon";
import FavoriteButton from "../buttons/FavoriteButton";
import { map } from "lodash";
import Review from "../Review";

const SearchListItem = ({ hotel }) => {
  const { title, images, filters, labelsList } = hotel;
  const { address, city } = hotel.location;
  return (
    <SearchListItemWrapper>
      <SearchItemImage src={images?.mainPicture} />
      <FavoriteButtonsContainer>
        <FavoriteButton />
      </FavoriteButtonsContainer>
      <TextColumn>
        <SearchItemTitle>{title}</SearchItemTitle>
        <SearchItemAddress>
          <LocationIcon width={1.1} height={1.4} />
          {`${address}, ${city}`}
        </SearchItemAddress>
        <SearchItemFilters>{filters?.join(" • ")}</SearchItemFilters>
        <LabelsRow>
          {map(labelsList, (label) => {
            return <LabelItem label={label}>{label}</LabelItem>;
          })}
        </LabelsRow>
        <Review />
        <Price>$ 2,440</Price>
      </TextColumn>
    </SearchListItemWrapper>
  );
};

export default SearchListItem;
