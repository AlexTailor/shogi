import React from "react";
import { useState, useEffect } from "react";
import "./Board.css";
import Tile from "../Tile/Tile";
import BoardModel from "../../models/Board";

export default function Board() {
  const [board, setBoard] = useState({});
  const [selectedTile, setSelectedTile] = useState({});

  useEffect(() => {
    const startBoard = new BoardModel();
    startBoard.initBoard();
    startBoard.initPieces();
    setBoard(startBoard);
    // eslint-disable-next-line
  }, []);

  function handleMove(tile) {
    if (selectedTile !== tile) {
      selectedTile.movePiece(tile);
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
    const newBoard = board.getBoardCopy();
    setBoard(newBoard);
  }

  return (
    <div className="board">
      {board.rows &&
        board.rows.map((row, i) => (
          <div key={"row" + i} className="row">
            {row.map((tile, i) => (
              <Tile
                key={i}
                tile={tile}
                piece={tile.piece}
                handleMove={handleMove}
                getActualTile={getActualTile}
              />
            ))}
          </div>
        ))}
    </div>
  );
}
