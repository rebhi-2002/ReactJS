import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { storeCounter } from "./store/store";
import { Provider } from "react-redux";

// 3. wrap all app with redux provider
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={storeCounter}>
    <App />
  </Provider>
);
