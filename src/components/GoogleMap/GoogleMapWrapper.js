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
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    forceUpdate();
  }, [layoutTheme]);

  return (
    <MapsWrapper>
      {itemsToShow.length > 0 && (
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
  width: 100%;
  min-height: 65vh;
  max-height: 65vh;
  overflow: hidden;
  border-radius: 2rem;
`;
const MapsWrapperSkeleton = styled.div`
  overflow: hidden;
  border-radius: 2rem;
`;
