import React from "react";
import "./Tile.css";

export default function Tile(props) {
  return (
    <div
      className="tile disable-select"
      onClick={() => props.getActualTile(props.tile)}
      onDoubleClick={() => props.handleMove(props.tile)}
    >
      {props.piece?.skin && (
        <img
          src={props.piece.skin}
          className={`piece ${props.piece?.player === 2 && "rotate"}`}
          alt={props.piece.skin}
        />
      )}
    </div>
  );
}
