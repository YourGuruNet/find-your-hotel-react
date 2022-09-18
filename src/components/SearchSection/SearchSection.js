import React, { useEffect } from "react";
import { SearchSectionLayout } from "./SearchSection.styles";
import { connect } from "react-redux";
import GoogleMapWrapper from "../GoogleMap/GoogleMapWrapper";
import { getHotelList } from "../../modules/hotels/actions";
import SearchList from "../SearchList/SearchList";

const SearchSection = (props) => {
  const { getHotelList, hotelsList } = props;
  useEffect(() => {
    getHotelList();
  }, [getHotelList]);

  return (
    <SearchSectionLayout>
      <SearchList hotelsList={hotelsList} />
      <GoogleMapWrapper itemsToShow={hotelsList} />
    </SearchSectionLayout>
  );
};
const mapStateToProps = (state) => ({
  hotelsList: state.hotel.hotelsList,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getHotelList: () => dispatch(getHotelList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchSection);
