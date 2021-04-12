import React     from "react";
import ReactDOM  from "react-dom";
import Routes    from "./Routes";
import TheHeader from "./components/layout/TheHeader";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <TheHeader />
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
