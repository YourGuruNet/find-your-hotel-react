import React from "react";
import { SearchListWrapper } from "./SearchList.styles";

const SearchList = (props) => {
  const { hotelsList } = props;
  return <SearchListWrapper>{map}</SearchListWrapper>;
};

export default SearchList;
