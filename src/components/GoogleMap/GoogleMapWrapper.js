import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { GOOGLE_MAP_API } from "../../app/api/api_keys";
import styled from "styled-components";

import { center } from "../../app/constants/constants";
import Marker from "./Marker";
const containerStyle = {
  width: "100%",
  height: "100%",
};

const GoogleMapWrapper = (props) => {
  const { itemsToShow } = props;
  return (
    <MapsWrapper>
      <LoadScript googleMapsApiKey={GOOGLE_MAP_API}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {itemsToShow.map((item, i) => {
            return <Marker key={i} item={item} />;
          })}
        </GoogleMap>
      </LoadScript>
    </MapsWrapper>
  );
};

export default GoogleMapWrapper;

const MapsWrapper = styled.div`
  width: 100%;
  height: 50vh;
  background-color: ${(props) => props.theme.fontColor_Dark};
`;
