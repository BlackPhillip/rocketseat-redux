import { createGlobalStyle } from 'styled-components';
import background from '../assets/images/background.svg';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, border-style, #root{
    min-height: 100%;
  }

  body {
    background: #191925 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root{
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

`;
