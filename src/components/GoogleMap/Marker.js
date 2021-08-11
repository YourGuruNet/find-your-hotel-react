import React from "react";
import { InfoWindow } from "@react-google-maps/api";

const onLoad = (infoWindow) => {
  console.log("infoWindow: ", infoWindow);
};

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15,
};
const Marker = (props) => {
  const { title, latitude, longitude } = props.item;
  const position = { lat: parseFloat(latitude), lng: parseFloat(longitude) };
  return (
    <InfoWindow onLoad={onLoad} position={position}>
      <div style={divStyle}>
        <h1>{title}</h1>
      </div>
    </InfoWindow>
  );
};

export default Marker;
