import { createGlobalStyle, keyframes } from "styled-components";
import {generateSpaceClassNames} from "../../utils/utils";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
`;

export const GlobalStyle = createGlobalStyle`
  /*reset*/
  html, body, div, span, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  abbr, address, cite, code,
  del, dfn, em, img, ins, kbd, q, samp,
  small, strong, sub, sup, var,
  b, i,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, summary,
  time, mark, audio, video, button {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }

  article, aside, details, figcaption, figure, dialog,
  footer, header, hgroup, menu, nav, section, main {
    display: block;
  }

  ul, ul li {
    list-style: none;
  }

  blockquote, q {
    quotes: none;

    &:before, &:after {
      content: none;
    }
  }

  a {
    text-decoration: none;
    font-size: 100%;
    color: inherit;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /**
   * Paul Irish box sizing reset so all elements have broder-box.
   */
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    font-family: inherit;
  }

  /**
   * custom smarty resets
   */
  a {
    text-decoration: none;
  }

  button, input, a, textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    &:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px #fff inset !important;
    }
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  /*global*/
  body {
    font-family: ${({ theme }) => theme.font.primary};
    font-size: ${({ theme }) => theme.font.size.subheading1};
    color: ${({ theme }) => theme.colors.lightText};
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.1em;
    background: #FCFCFC;
  }

  .container {
    max-width: 1152px;
    width: 100%;
    padding: 0 16px;
    margin: auto;
  }

  .main-wrapper {
    padding-top: 72px;
  }

  /*typography*/

  h1, h2, .h1, .h2 {
    line-height: 1.2;
    font-family: ${({ theme }) => theme.font.secondary};
    color: ${({ theme }) => theme.colors.black};
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 700;
  }

  h1, .h1 {
    font-size: ${({ theme }) => theme.font.size.h1.base};
  }

  h2, .h2 {
    font-size: ${({ theme }) => theme.font.size.h2};
  }

  h3, .h3 {
    font-size: ${({ theme }) => theme.font.size.h3};
  }

  h4, .h4 {
    font-size: ${({ theme }) => theme.font.size.h4};
  }


  /*colors*/
  .color-primary {
    color: ${({ theme }) => theme.colors.primary};
  }



  /*animations*/
  .animated {
    opacity: 0;
  }

  .fade-in {
    animation: ${fadeIn} .5s ease-in forwards;
  }


  iframe {
    pointer-events: none; /*for development*/
  }

  .list-dash {
    margin-left: 20px;
    li {
      list-style-type: '- ';
      margin-bottom: 12px;

      p {
        padding-bottom: 0 !important;
      }
    }
  }

  ${({theme}) => generateSpaceClassNames(theme.spaces)}

  /*media queries*/
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    h1, .h1 {
      font-size: ${({ theme }) => theme.font.size.h1.lg};
    }
    h2, .h2 {
      font-size: ${({ theme }) => theme.font.size.h2.lg};
    }
    h3, .h3 {
      font-size: ${({ theme }) => theme.font.size.h3.lg};
    }
    h4, .h4 {
      font-size: ${({ theme }) => theme.font.size.h4.lg};
    }
    body {
      font-size: ${({theme}) => theme.font.size.subheading1};
    }
  }


  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    h1, .h1 {
      font-size: ${({ theme }) => theme.font.size.h1.sm};
    }
    h2, .h2 {
      font-size: ${({ theme }) => theme.font.size.h2.sm};
    }
    h3, .h3 {
      font-size: ${({ theme }) => theme.font.size.h3.sm};
    }
    h4, .h4 {
      font-size: ${({ theme }) => theme.font.size.h4.sm};
    }
    body {
      font-size: ${({theme}) => theme.font.size.overline};
    }
  }

`;
