import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import Router from "./config/routes";
import { createGlobalStyle } from "styled-components";
import colors from "./assets/styles/colors";
import { store } from "./config/store";
import { Provider } from "react-redux";
import "./config/i18n";
const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  color: white;
  font-size: 16px;
  position: fixed;
  height: 100vh;
  width: 100%;
  display: flex;
  
  &:before {
    content: "";
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: linear-gradient(135deg, ${colors.primary}, ${colors.primaryLighten});
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
}
  
#root {
    display: flex;
    height: 100%;
    width: 100%;
}
  
h1 {
  font-size: 40px;
}
  
h2 {
  font-size: 32px;
}
  
h3 {
  font-size: 24px;
}
`;
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
