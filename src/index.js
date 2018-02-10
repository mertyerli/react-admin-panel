import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { store } from "./_helpers";
import { CookiesProvider } from "react-cookie";
import {loginActions} from './_actions/login.actions';

const token = localStorage.getItem('token');

if (token){
  store.dispatch(loginActions.loginSuccess(token));
}


ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
