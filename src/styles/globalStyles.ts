import { createGlobalStyle } from 'styled-components';
import { variables } from './variables';

const { colors, fonts, fontWeight, fontSizes } = variables;

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    overflow: hidden;
    background-color: ${colors.primaryColorDark};
    color: ${colors.mainWhite};
    font-family: ${fonts.jost};
    font-weight: ${fontWeight.sm};
    font-size: 18px;
  }
  
  img {
    width: 100%;
    height: auto;
  }

  button {
    border: none;
    cursor: pointer;
    border-radius: 0.5rem;
  }
  
  button:hover,
  button:visited,
  button:active {
    opacity: 0.8;
  }
  
  button:disabled {
    background-color: ${colors.mainGray};
    color: ${colors.mainWhite};
    cursor: inherit;
  }
  
  button:disabled:hover,
  button:disabled:visited,
  button:disabled:active {
    opacity: 1;
  }

  a{
    color: ${colors.mainWhite};
    text-decoration: none;
  }

`;
