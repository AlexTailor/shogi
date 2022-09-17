import React, { useState } from "react";
import "./App.css";
import Board from "../Board/Board";
import Navbar from "../Navbar/Navbar";
import { PlayerProvider } from "../../context/PlayerProvider";

function App() {
  const [board, setBoard] = useState({});
  return (
    <div className="App">
      <PlayerProvider>
        <Navbar setBoard={setBoard} />
        <Board board={board} setBoard={setBoard} />
      </PlayerProvider>
    </div>
  );
}

export default App;
