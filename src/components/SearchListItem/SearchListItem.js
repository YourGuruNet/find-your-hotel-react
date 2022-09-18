import React from "react";
import {
  SearchItemImage,
  SearchListItemWrapper,
} from "./SearchListItem.styles";

const SearchListItem = (props) => {
  const { hotel } = props;
  return (
    <SearchListItemWrapper>
      <SearchItemImage src={hotel.pictureUrl} />
      {hotel.title}
    </SearchListItemWrapper>
  );
};

export default SearchListItem;
