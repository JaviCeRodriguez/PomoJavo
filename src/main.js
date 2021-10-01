import React from "react";
import { render } from "react-dom";
import Home from "./pages/Home";
import { createGlobalStyle } from "styled-components";
import "./main.css";

const GlobalStyle = createGlobalStyle`
  * {
    list-style-type: none;
    margin: 0;
    padding: 0;
    font-family: 'Poppins';
    box-sizing: border-box;
  }

  body {
    background-color: #794bc4;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100vw;
  }
`;

render(
  <React.Fragment>
    <GlobalStyle />
    <Home />
  </React.Fragment>,
  document.getElementById("app")
);
