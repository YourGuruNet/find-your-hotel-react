import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { GOOGLE_MAP_API } from "../../app/api/api_keys";
import styled from "styled-components";
import { InfoWindow } from "@react-google-maps/api";
import { center } from "../../app/constants/constants";
const containerStyle = {
  width: "100%",
  height: "100%",
};

const position = { lat: 56.967636, lng: 24.120687 };
const onLoad = (infoWindow) => {
  console.log("infoWindow: ", infoWindow);
};

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15,
};
const GoogleMapWrapper = (props) => {
  const { itemsToShow } = props;
  return (
    <MapsWrapper>
      <LoadScript googleMapsApiKey={GOOGLE_MAP_API}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          <InfoWindow onLoad={onLoad} position={position}>
            <div style={divStyle}>
              <h1>InfoWindow</h1>
            </div>
          </InfoWindow>
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
