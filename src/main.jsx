import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import BemVindo from "./components/BoasVindas";
import ResetCSS from "./Reset";

// eslint-disable-next-line react-refresh/only-export-components
const GlobalStyle = createGlobalStyle`
  body {
    // Estilo do body aqui
    display: flex;
    background-color: #FB6B6B;
    justify-content: center;
  }
`;
ReactDOM.render(
  <React.StrictMode>
    <ResetCSS />
    <GlobalStyle />
    <BemVindo />
  </React.StrictMode>,
  document.getElementById("root")
);
