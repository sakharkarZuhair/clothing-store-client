import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, compose } from "redux";

const store = configureStore(
  { reducer: reducers },
  compose(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </>
);
