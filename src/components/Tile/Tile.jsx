import React from "react";
import "./Tile.css";

export default function Tile(props) {
  return (
    <div
      className="tile"
      style={{
        transform: `${props.piece?.player === 2 ? "rotate(180deg)" : ""}`,
        background: `url(${props.piece?.skin}) no-repeat`,
        backgroundSize: "48px 48px",
      }}
    ></div>
  );
}
