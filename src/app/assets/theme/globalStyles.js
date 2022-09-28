import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Akshar:wght@300;400;500;600;700&family=Edu+VIC+WA+NT+Beginner&family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,400;8..144,500;8..144,600;8..144,700&display=swap');
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    margin: 0 auto;
  }

  body {
    font-family: "Roboto", sans-serif;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    button {
      cursor: pointer;
    }
  }
  `;
