import React, { useState, useEffect, useContext } from "react";
import "./Board.css";
import Tile from "../Tile/Tile";
import BoardModel from "../../models/Board";
import { PlayerContext } from "../../context/PlayerProvider";

export default function Board(props) {
  const [player, setPlayer] = useContext(PlayerContext);
  const [selectedTile, setSelectedTile] = useState({});

  useEffect(() => {
    const startBoard = new BoardModel();
    startBoard.initBoard();
    startBoard.initPieces();
    props.setBoard(startBoard);
    // eslint-disable-next-line
  }, []);

  function handleMove(tile) {
    if (selectedTile !== tile) {
      selectedTile.movePiece(tile, player);
      setPlayer(player === 1 ? 2 : 1);
      updateBoard();
    }
  }

  function getActualTile(tile) {
    if (selectedTile !== tile && tile.piece !== null) {
      setSelectedTile(tile);
      updateBoard();
    }
  }

  function updateBoard() {
    const newBoard = props.board.getBoardCopy();
    props.setBoard(newBoard);
  }

  return (
    <div className="board-container">
      <div className="board">
        {props.board.rows &&
          props.board.rows.map((row, i) =>
            row.map((tile, i) => (
              <Tile
                key={i}
                tile={tile}
                piece={tile.piece}
                handleMove={handleMove}
                getActualTile={getActualTile}
              />
            ))
          )}
      </div>
    </div>
  );
}
