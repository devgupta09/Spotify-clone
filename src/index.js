import React from "react";
import { StoreProvider } from "easy-peasy";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store/store";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
