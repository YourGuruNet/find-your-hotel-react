import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { GOOGLE_MAP_API } from "../../app/constants/constants";

const containerStyle = {
  width: "1000px",
  height: "1000px",
};

const center = {
  lat: 48.84431583760345,
  lng: 2.295552016707882,
};

export class GoogleMapWrapper extends Component {
  render() {
    return (
      <LoadScript googleMapsApiKey={GOOGLE_MAP_API}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    );
  }
}
