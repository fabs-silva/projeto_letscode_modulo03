import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const { colors, fonts } = theme;

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    overflow: hidden;
    background-color: ${colors.dark.primary};
    color: ${colors.main.white};
    font-family: ${fonts.mainFont};
    font-weight: ${fonts.fontWeight.sm};
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
    background-color: ${colors.main.gray};
    color: ${colors.main.white};
    cursor: inherit;
  }
  
  button:disabled:hover,
  button:disabled:visited,
  button:disabled:active {
    opacity: 1;
  }

  a{
    color: ${colors.main.white};
    text-decoration: none;

    &:hover, &:focus, &:visited{
      opacity: 0.8;
    }
  }

  ul{
    list-style: none;
  }

  input[type=range] {
    height: 1rem;
    -webkit-appearance: none;
    margin: 10px 0;
  }

  input[type=range]:focus {
    outline: none;
  }

  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.3rem;
    cursor: pointer;
    box-shadow: 1px 1px 3px ${colors.dark.gray};
    background: ${colors.main.white};
    border-radius: 6px;
  }

  input[type=range]::-webkit-progress-value{
    background-color: ${colors.main.accent};
    border: 2px solid ${colors.main.accent};
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  input[type=range]::-webkit-slider-thumb {
    border: 3px solid ${colors.light.accent};
    height: 0.7rem;
    width: 0.7rem;
    border-radius: 50%;
    background: ${colors.main.accent};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -4.5px;
  }

  input[type=range]:focus::-webkit-slider-runnable-track {
    background: ${colors.main.white};
  }

  input[type=range]::-moz-range-track {
    width: 100%;
    height: 0.3rem;
    cursor: pointer;
    box-shadow: 1px 1px 3px ${colors.dark.gray};
    background: ${colors.main.white};
    border-radius: 6px;
  }

  input[type=range]::-moz-range-thumb {
    border: 3px solid ${colors.light.accent};
    height: 0.7rem;
    width: 0.7rem;
    border-radius: 50%;
    background: ${colors.main.accent};
    cursor: pointer;
  }

  input[type=range]::-moz-range-progress {
    background-color: ${colors.main.accent};
    border: 2px solid ${colors.main.accent};
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  input[type=range]::-ms-track {
    width: 100%;
    height: 1rem;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  input[type=range]::-ms-fill-lower {
    background-color: ${colors.main.accent};
    border: 2px solid ${colors.main.accent};
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  input[type=range]::-ms-fill-upper {
    background: ${colors.main.white};
    border: 0px solid ${colors.dark.primaryDarker};
    border-radius: 12px;
    box-shadow: 1px 1px 3px ${colors.dark.gray};
  }

  input[type=range]::-ms-thumb {
    margin-top: 1px;
    border: 3px solid ${colors.light.accent};
    height: 0.7rem;
    width: 0.7rem;
    border-radius: 50%;
    background: ${colors.main.accent};
    cursor: pointer;
  }

  input[type=range]:focus::-ms-fill-lower {
    background: ${colors.main.white};
  }

  input[type=range]:focus::-ms-fill-upper {
    background: ${colors.main.white};
  }
`;
