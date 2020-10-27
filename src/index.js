import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TaskManager from "./Components/TaskManager";
import "./index.scss";

ReactDOM.render(
  <TaskManager>
    <App />
  </TaskManager>,

  document.getElementById("root")
);
