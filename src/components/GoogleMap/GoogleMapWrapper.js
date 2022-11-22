import React, { useEffect, useState, useCallback } from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import { center, THEMES } from "../../app/constants/constants";
import Marker from "./Marker";
import { GOOGLE_MAPS_API_KEY } from "../../app/api/api";
import { connect } from "react-redux";
import { mapsThemeDark } from "../../app/assets/theme/mapsTheme";
import Skeleton from "react-loading-skeleton";
import SkeletonLayout from "../SkeletonLayout";

const GoogleMapWrapper = (props) => {
  const { itemsToShow, layoutTheme } = props;
  const [, updateState] = useState();
  const [userPosition, setUserPosition] = useState(null);
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    forceUpdate();
  }, [layoutTheme]);

  const apiIsLoaded = (map, maps) => {
    navigator?.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        const pos = { lat, lng };
        setUserPosition(pos);
      }
    );
  };
  return (
    <MapsWrapper>
      {itemsToShow.length > 0 && (
        <GoogleMapReact
          options={{
            styles: layoutTheme === THEMES.DARK && mapsThemeDark,
          }}
          bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
          defaultCenter={center.center}
          defaultZoom={center.zoom}
          center={userPosition}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}>
          {userPosition && (
            <Marker
              item={{ isUserLocation: true }}
              lat={userPosition.lat}
              lng={userPosition.lng}
            />
          )}
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
      )}
      {!itemsToShow.length && (
        <SkeletonLayout>
          <Skeleton wrapper={MapsWrapperSkeleton} height={620} />
        </SkeletonLayout>
      )}
    </MapsWrapper>
  );
};

const mapStateToProps = (state) => ({
  layoutTheme: state.user.preferences.layoutTheme,
});

export default connect(mapStateToProps, null)(GoogleMapWrapper);

const MapsWrapper = styled.div`
  width: 50%;
  height: 100vh;
  overflow: hidden;
  border-radius: 2rem;
  @media screen and (max-width: 1000px) {
    height: 60vh;
    margin-bottom: 2rem;
    max-width: 100%;
    width: 100%;
  }
`;
const MapsWrapperSkeleton = styled.div`
  overflow: hidden;
  border-radius: 2rem;
`;
