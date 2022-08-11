import {createGlobalStyle} from "styled-components";
import GintoNordTTF from "../fonts/GintoNord-Black.ttf";
import GintoNordWoff from "../fonts/GintoNord-Black.woff";
import GintoNordWoff2 from "../fonts/GintoNord-Black.woff";

const FontStyles = createGlobalStyle`

  @font-face {
    font-family: 'Ginto Nord';
    src: url(${GintoNordWoff2}) format('woff2'),
         url(${GintoNordWoff}) format('woff'),
         url(${GintoNordTTF}) format('truetype'),
  }
`;

export default FontStyles;
