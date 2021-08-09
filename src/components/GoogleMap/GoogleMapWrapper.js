import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { GOOGLE_MAP_API } from "../../app/api/api_keys";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 56.95004099438355,
  lng: 24.101515292458963,
};

export class GoogleMapWrapper extends Component {
  render() {
    return (
      <LoadScript googleMapsApiKey={GOOGLE_MAP_API}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    );
  }
}
