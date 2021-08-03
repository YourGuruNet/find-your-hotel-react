import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const GOOGLE_MAP_API= process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const containerStyle = {
  width: '1000px',
  height: '1000px'
};

const center = {
  lat: 48.84431583760345,
  lng:  2.295552016707882
};

export class GoogleMapWrapper extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey={GOOGLE_MAP_API}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}