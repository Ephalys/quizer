import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import Router from './config/routes'
import { createGlobalStyle } from 'styled-components'
import colors from './assets/styles/colors'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: linear-gradient(135deg, ${colors.primary}, ${colors.primaryLighten});
  color: white;
  font-size: 16px;
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
`
ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <Router/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
