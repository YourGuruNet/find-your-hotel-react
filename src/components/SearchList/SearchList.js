import React from "react";
import { SearchListWrapper } from "./SearchList.styles";
import map from "lodash/map";
import SearchListItem from "../SearchListItem/SearchListItem";

const SearchList = (props) => {
  const { hotelsList } = props;
  return (
    <SearchListWrapper>
      {map(hotelsList, (hotel, index) => {
        return <SearchListItem key={index} hotel={hotel} />;
      })}
    </SearchListWrapper>
  );
};

export default SearchList;
