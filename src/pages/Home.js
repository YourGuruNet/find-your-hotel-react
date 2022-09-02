import React, { useEffect } from "react";
import { connect } from "react-redux";
import GoogleMapWrapper from "../components/GoogleMap/GoogleMapWrapper";
import { getHotelList } from "../modules/hotels/actions";
import Layout from "../components/Layout";

const Home = (props) => {
  const { getHotelList, hotelsList } = props;
  useEffect(() => {
    getHotelList();
  }, [getHotelList]);

  return (
    <Layout>
      {hotelsList && <GoogleMapWrapper itemsToShow={hotelsList} />}
    </Layout>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
