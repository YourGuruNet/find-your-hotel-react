import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import GoogleMapWrapper from "../components/GoogleMap/GoogleMapWrapper";
import { getAddedPlaces } from "../components/CoffeePlaces/reducer/PlacesActions";
import FeaturedCard from "../components/FeaturedCard";

const Home = (props) => {
  const { getAddedPlaces, placesList } = props;
  console.log(props);
  useEffect(() => {
    getAddedPlaces();
  }, [getAddedPlaces]);

  return (
    <Layout>
      {placesList && <GoogleMapWrapper itemsToShow={placesList} />}
      <FeaturedCard />
    </Layout>
  );
};

const mapStateToProps = ({ CoffeePlaces: { placesList } }) => {
  return { placesList };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAddedPlaces: () => dispatch(getAddedPlaces()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.fontColor_Dark};
`;
