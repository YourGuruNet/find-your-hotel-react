import styled from "styled-components";

export const Icon = styled.span`
  svg {
    fill: ${(props) => props.theme.text};
    width: ${(props) => `${props.width}rem`};
    height: ${(props) => `${props.height}rem`};
  }
`;
