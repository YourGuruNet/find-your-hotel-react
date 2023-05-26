import React from "react";
import styled from "styled-components";
import { colorPalette } from "../theme/colorPalette";

const Vector = () => {
  return (
    <VectorWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={colorPalette.darkBlue}
          fill-opacity="1"
          d="M0,128L60,133.3C120,139,240,149,360,176C480,203,600,245,720,266.7C840,288,960,288,1080,250.7C1200,213,1320,139,1380,101.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
    </VectorWrapper>
  );
};

export default Vector;

const VectorWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: block;
  svg {
    display: block;
  }
`;
