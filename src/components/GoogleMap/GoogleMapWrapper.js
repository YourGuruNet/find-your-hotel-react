import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import { center } from "../../app/constants/constants";
import Marker from "./Marker";
import { GOOGLE_MAPS_API_KEY } from "../../app/api/api";

const GoogleMapWrapper = (props) => {
  const { itemsToShow } = props;
  return (
    <MapsWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
        defaultCenter={center.center}
        defaultZoom={center.zoom}>
        {itemsToShow.map((item, i) => {
          return (
            <Marker
              key={i}
              item={item}
              lat={parseFloat(item.latitude)}
              lng={parseFloat(item.longitude)}
            />
          );
        })}
      </GoogleMapReact>
    </MapsWrapper>
  );
};

export default GoogleMapWrapper;

const MapsWrapper = styled.div`
  width: 100%;
  min-height: 65vh;
  overflow: hidden;
  border-radius: 2rem;
  border: solid 1px ${({ theme }) => theme.text};
`;
