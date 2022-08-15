import { createGlobalStyle, keyframes } from 'styled-components'
import { generateSpaceClassNames } from '../../utils/utils'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
`

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Ginto Nord';
    src: url('/assets/fonts/GintoNord-Black.woff') format('woff2'),
    url('/assets/fonts/GintoNord-Black.woff') format('woff'),
    url('/assets/fonts/GintoNord-Black.ttf') format('truetype');
    font-weight: 900;
  }

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
    font-family: ${({ theme }) => theme.font.secondary};
    font-size: ${({ theme }) => theme.font.size.p1.base};
    color: ${({ theme }) => theme.colors.lightText};
    font-weight: 400;
    line-height: 1.15;
    background: ${({ theme }) => theme.colors.white};
  }

  .container {
    max-width: 1200px;
    width: 100%;
    margin: auto;
    padding: 0 40px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: 0 24px;
    }
  }

  .main-wrapper {
    padding-top: 72px;
  }

  /*typography*/

  h1, h2, .text-h1, .text-h2 {
    line-height: 1.1;
    font-family: ${({ theme }) => theme.font.primary};
    color: ${({ theme }) => theme.colors.black};
    text-transform: uppercase;
    font-weight: 900;
  }

  h1, .text-h1, h2, .text-h2 {
    font-size: ${({ theme }) => theme.font.size.h1.base};

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: ${({ theme }) => theme.font.size.h1.lg};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: ${({ theme }) => theme.font.size.h1.sm};
    }
  }

  .text-p1 {
    font-size: ${({ theme }) => theme.font.size.p1.base};
    font-family: ${({ theme }) => theme.font.secondary};
    line-height: 1.15;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.font.size.p1.md};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: ${({ theme }) => theme.font.size.p1.lg};
    }
  }

  .text-c {
    font-size: ${({ theme }) => theme.font.size.c};
    font-family: ${({ theme }) => theme.font.secondary};
    line-height: 1.16;
    font-weight: 500;
  }


  /*colors*/
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

  ${({ theme }) => generateSpaceClassNames(theme.spaces)}
`
