import { createGlobalStyle } from 'styled-components';
import { ITheme } from '../../interfaces/ITheme';

/**
 * Injected global style (reset, fonts)
 */
export const Global = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}
body {
  @import url('href="https://fonts.googleapis.com/css?family="${props => (props.theme as ITheme).font }"');
  font-family: ${props => (props.theme as ITheme).font }, sans-serif;
}
`;
