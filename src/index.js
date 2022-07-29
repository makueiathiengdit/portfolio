import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Form from "../src/components/form/Form";

const root = ReactDOM.createRoot(document.getElementById("root"));
const container = ReactDOM.createRoot(document.getElementById("container"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

container.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>
);
