import React from "react";
import styled from "styled-components";

const Marker = (props) => {
  const { title, logo } = props.item;
  return (
    <MarkerWrapper>
      <div className="marker_figure">
        <img className="marker_logo" src={logo} alt={title} />
        <div className="arrow_down" />
      </div>
    </MarkerWrapper>
  );
};

export default Marker;

const MarkerWrapper = styled.div`
  width: ${(props) => props.theme.remMixin(55)};
  height: ${(props) => props.theme.remMixin(55)};
  /* Important to get marker in place when zoom 
  https://github.com/google-map-react/google-map-react/issues/854#issuecomment-614167739
  */
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: ${(props) => props.theme.dark_color};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: ${(props) => props.theme.remMixin(-8)};
  left: 0;
  :after {
    position: absolute;
    content: "";
    width: 0px;
    height: 0px;
    bottom: ${(props) => props.theme.remMixin(-22)};
    border: ${(props) => props.theme.remMixin(10)} solid transparent;
    border-top: ${(props) => props.theme.remMixin(17)} solid
      ${(props) => props.theme.dark_color};
  }
  .marker_logo {
    width: ${(props) => props.theme.remMixin(50)};
    height: ${(props) => props.theme.remMixin(50)};
    border-radius: 50%;
    object-fit: cover;
  }
`;
