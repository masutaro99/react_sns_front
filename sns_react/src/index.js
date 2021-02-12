import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import { CookiesProvider } from "react-cookie";
import Dashboard from './components/Dashboard';

const routing = (
  <React.StrictMode>
    <BrowserRouter>
    <CookiesProvider>
    
    <Route exact path="/" component={Login} />
    <Route exact path="/profiles" component={Dashboard} />
    <Route exact path="/registration" component={App} />

    </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>
)


ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
