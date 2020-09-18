import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background: #16202c;
    line-height: 1;
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Dosis", "Josefin Sans";
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  body.dark {
    --borders: #38444d;
    --texts: #8899a6;
    --postColor: #fff;
    --highlight: #1fa1f2;
    --mediumBackground: #050e17;
    --background: #08080c;
    --white: #fff;
    --black: #222;
    --tag: #464b4e;
    --tagTitle: #fff;
    --errorMessage: yellow;
    --newsletterTitle: #ff9c21;
    --recommendedLink: #2a2a2b;
    --artCopyright: #fff;
    --404Title: #fff;
    --404Description: #fff;
    --shadowThumbnail: rgba(1,17,31,1);
  }

  body.light {
    --borders: #c1b9b9;
    --postColor: #111;
    --texts: #555555;
    --highlight: #1fa1f2;
    --mediumBackground: #f0f0f3;
    --background: #fff;
    --white: #fff;
    --black: #222;
    --tag: #bebfbf;
    --tagTitle: #4a4a4a;
    --errorMessage: #ec0f0f;
    --newsletterTitle: #f0f;
    --recommendedLink: #e6ccf1;
    --artCopyright: #050e17;
    --404Title: #9e0505;
    --404Description: #050e17;
    --shadowThumbnail: rgba(0,0,0,0.59);
  }
`
export default GlobalStyles