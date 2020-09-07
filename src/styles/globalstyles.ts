import {createGlobalStyle} from 'styled-components';


export default createGlobalStyle`

  *{
    font-family: 'Roboto', sans-serif;
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0px;
  }
  button:hover{
      cursor:pointer;
  }
  html, body, #root{

      min-height:100vh;
      overflow:hidden;
      -webkit-font-smoothing: antialised  !important;

  }

`
