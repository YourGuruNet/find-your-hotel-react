import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import GoogleMapWrapper from "../components/GoogleMap/GoogleMapWrapper";
import { getAddedPlaces } from "../components/CoffeePlaces/reducer/PlacesActions";

const Home = (props) => {
  const { getAddedPlaces, addedPlaces } = props;
  useEffect(() => {
    getAddedPlaces();
  }, [getAddedPlaces]);

  return (
    <Layout>
      <GoogleMapWrapper itemsToShow={addedPlaces} />
    </Layout>
  );
};

const mapStateToProps = ({ addedPlaces }) => {
  return { addedPlaces };
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
  font-size: 4rem;
  background-color: ${(props) => props.theme.fontColor_Dark};
`;
