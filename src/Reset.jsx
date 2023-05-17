import { createGlobalStyle } from "styled-components";

const ResetCSS = createGlobalStyle`
  /* Reset CSS */

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles (bullet points, numbers) */
  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  /* Remove default padding */
  body,
  figure {
    padding: 0;
  }

  /* Set core body defaults */
  body {
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }

  /* Remove text-decoration */
  a {
    text-decoration: none;
  }

  /* Remove button styles */
  button {
    background-color: transparent;
    border: none;
    padding: 0;
  }
`;

export default ResetCSS;
