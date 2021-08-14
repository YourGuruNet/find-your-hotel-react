import React from "react";
import GoogleMapReact from "google-map-react";
import { GOOGLE_MAP_API } from "../../app/api/api_keys";
import styled from "styled-components";

import { center } from "../../app/constants/constants";
import Marker from "./Marker";

const GoogleMapWrapper = (props) => {
  const { itemsToShow } = props;
  return (
    <MapsWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAP_API }}
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
  height: 65vh;
  background-color: ${(props) => props.theme.fontColor_Dark};
`;
