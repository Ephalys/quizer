import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import Routes from "./config/routes";
import { createGlobalStyle } from "styled-components";
import { store } from "./config/store";
import { Provider, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import "./config/i18n";
import { Router } from "react-router-dom";
import history from "config/history";
import Header from "./components/header/header";
// import firebase from "./firebase";

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
    transition: background-color .5s ease;
    background-color: ${(props) => props.theme.colors.secondary};
    background-image: linear-gradient(135deg, ${(props) =>
      props.theme.colors.primary}, rgba(0,0,0,0));
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

const App = () => {
  // useEffect(() => {
  //   const msg = firebase.messaging();
  //   msg
  //     .requestPermission()
  //     .then(() => {
  //       return msg.getToken();
  //     })
  //     .then((data) => {
  //       console.log("token", data);
  //     });
  // });

  const theme = useSelector((state) => state.theme.themeValue);
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <GlobalStyle />
      <Router history={history}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
