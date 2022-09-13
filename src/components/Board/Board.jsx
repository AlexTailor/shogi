import React from "react";
import { useState, useEffect } from "react";
import "./Board.css";
import Tile from "../Tile/Tile";

export default function Board() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    createBoard();
  }, []);

  function createBoard() {
    const rows = [];
    for (let i = 0; i < 9; i++) {
      const row = [];
      for (let j = 0; j < 9; j++) {
        row.push(<Tile key={j} />);
      }
      rows.push(
        <div key={i} className="row">
          {row}
        </div>
      );
    }
    setBoard(rows);
  }

  return <div className="board">{board}</div>;
}
