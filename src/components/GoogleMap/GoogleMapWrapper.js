import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import { center, THEMES } from "../../app/constants/constants";
import Marker from "./Marker";
import { GOOGLE_MAPS_API_KEY } from "../../app/api/api";
import { connect } from "react-redux";
import { mapsThemeDark } from "../../app/assets/theme/mapsTheme";

const GoogleMapWrapper = (props) => {
  const { itemsToShow, layoutTheme } = props;
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  useEffect(() => {
    forceUpdate();
  }, [layoutTheme]);

  return (
    <MapsWrapper>
      <GoogleMapReact
        options={{
          styles: layoutTheme === THEMES.DARK && mapsThemeDark,
        }}
        bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
        defaultCenter={center.center}
        defaultZoom={center.zoom}>
        {itemsToShow.map((item, i) => {
          return (
            <Marker
              key={i}
              item={item}
              lat={item.location.geoPoint.latitude}
              lng={item.location.geoPoint.longitude}
            />
          );
        })}
      </GoogleMapReact>
    </MapsWrapper>
  );
};

const mapStateToProps = (state) => ({
  layoutTheme: state.user.preferences.layoutTheme,
});

export default connect(mapStateToProps, null)(GoogleMapWrapper);

const MapsWrapper = styled.div`
  width: 100%;
  min-height: 65vh;
  overflow: hidden;
  border-radius: 2rem;
  border: solid 1px ${({ theme }) => theme.text};
`;
