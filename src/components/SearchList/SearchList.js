import React from "react";
import { SearchListWrapper } from "./SearchList.styles";
import map from "lodash/map";
import SearchListItem from "../SearchListItem/SearchListItem";
import SearchListItemSkeleton from "../SearchListItem/SearchListItemSkeleton";

const SearchList = (props) => {
  const { hotelsList } = props;
  return (
    <SearchListWrapper>
      {map(hotelsList, (hotel, index) => {
        return <SearchListItem key={index} hotel={hotel} />;
      })}
      {!hotelsList.length &&
        map([1, 2, 3], (index) => {
          return <SearchListItemSkeleton key={index} />;
        })}
    </SearchListWrapper>
  );
};

export default SearchList;
