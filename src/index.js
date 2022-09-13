import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import Board from "./models/Board";

const root = ReactDOM.createRoot(document.getElementById("root"));
const board = new Board();
board.initBoard();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
