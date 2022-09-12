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
      for (let i = 0; i < 9; i++) {
        row.push(<Tile />);
      }
      rows.push(<div className="row">{row}</div>);
    }
    setBoard(rows);
  }

  return <div className="board">{board}</div>;
}
