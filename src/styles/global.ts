import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    scroll-behavior: smooth;
  }

  body {
    background-color: ghostwhite;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  button {
    cursor: pointer;
    user-select: none;
  }

  img {
    user-select: none
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }
`;
