import React from "react";
import ReactDOM from "react-dom/client";
import AppWrapper from "./App/AppWrapper";
import { store } from './store';
import { Provider } from 'react-redux';
import './app.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppWrapper />
    </React.StrictMode>
  </Provider>
);