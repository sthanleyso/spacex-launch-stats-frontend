import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased !important;
    background-color: #222;
  }
`;
