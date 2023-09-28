import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./redux/store/store.js";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// 3. Wrap All App With Redux Provider
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
