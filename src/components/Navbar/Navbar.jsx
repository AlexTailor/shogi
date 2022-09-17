import React, { useContext } from "react";
import { PlayerContext } from "../../context/PlayerProvider";
import BoardModel from "../../models/Board";

export default function Navbar(props) {
  const [player, setPlayer] = useContext(PlayerContext);

  function restartGame() {
    const startBoard = new BoardModel();
    startBoard.initBoard();
    startBoard.initPieces();
    setPlayer(1);
    props.setBoard(startBoard);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand">Player {player}</div>
      <button
        class="btn btn-outline-success my-2 my-sm-0"
        onClick={() => restartGame()}
      >
        Restart
      </button>
    </nav>
  );
}
