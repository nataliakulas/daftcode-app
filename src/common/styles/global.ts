import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import color from './colors';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize};
  
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }  

  html {
    font-size: 10px;
  }
  
  body {
    min-height: 100vh;

    display: flex;

    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: ${color.green};

    background-color: ${color.backgroundGrey};

    #root {
      width: 100%;
    }
  }
`;

export default GlobalStyle;
