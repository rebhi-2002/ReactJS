import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "bootstrap/dist/css/bootstrap.min.css";

import { UseContextProvider } from "./component/useContext";

// import Bootstrap from "react-bootstrap";

// const App = () => {
//   return {
//     <div>
//       This App File
//     </div>
//   }
// }

// ReactDOM.render(<h2>Hello From React</h2>, document.getElementById("root"));
// ReactDOM.render(<App />, document.getElementById("root"));

// 4- Wrap All App With Provider [يعني div كأنه ]
ReactDOM.render(
  <UseContextProvider>
    <App />
  </UseContextProvider>,
  document.getElementById("root")
);
