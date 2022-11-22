import React from "react";
import styled, { css } from "styled-components";
import UserLocation from "../../app/assets/svg/UserLocation";

const Marker = (props) => {
  const { title, logo, isUserLocation = false } = props.item;
  return (
    <MarkerWrapper>
      {isUserLocation && <UserLocation height={5} width={5} />}
      {!isUserLocation && (
        <div>
          <img className="marker_logo" src={logo} alt={title} />
        </div>
      )}
    </MarkerWrapper>
  );
};

export default Marker;

const MarkerWrapper = styled.div`
  width: 6rem;
  height: 6rem;
  /* Important to get marker in place when zoom 
  https://github.com/google-map-react/google-map-react/issues/854#issuecomment-614167739
  */
  /* Bottom make a game for correct position
  */
  bottom: -1.7rem;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  :after {
    position: absolute;
    content: "";
    width: 0px;
    height: 0px;
    bottom: -2rem;
    border: 1rem solid transparent;
    border-top: 1.7rem solid ${(props) => props.theme.body};
  }
  .marker_logo {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;
