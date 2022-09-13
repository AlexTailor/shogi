import Tile from "./Tile";
import Pawn from "./pieces/Pawn";
import Rook from "./pieces/Rook";
import Bishop from "./pieces/Bishop";
import Lance from "./pieces/Lance";
import Knight from "./pieces/Knight";
import Silver from "./pieces/Silver";
import Gold from "./pieces/Gold";
import King from "./pieces/King";
export default class Board {
  rows = [];

  initBoard() {
    for (let y = 0; y < 9; y++) {
      const row = [];
      for (let x = 0; x < 9; x++) {
        row.push(new Tile(x, y));
      }
      this.rows.push(row);
    }
  }

  initPieces() {
    this.setupFrontRows();
    this.setupMiddleRows();
    this.setupBackRows();
  }

  getTile(x, y) {
    return this.rows[y][x];
  }

  setupFrontRows() {
    for (let i = 0; i < 9; i++) {
      this.rows[2][i].setPiece(new Pawn(2, this.getTile(i, 2)));
      this.rows[6][i].setPiece(new Pawn(1, this.getTile(i, 6)));
    }
  }

  setupMiddleRows() {
    this.rows[1][1].setPiece(new Rook(2, this.getTile(1, 1)));
    this.rows[1][7].setPiece(new Bishop(2, this.getTile(7, 1)));

    this.rows[7][7].setPiece(new Rook(1, this.getTile(7, 7)));
    this.rows[7][1].setPiece(new Bishop(1, this.getTile(1, 7)));
  }

  setupBackRows() {
    let backrow = ["L", "N", "S", "G", "K", "G", "S", "N", "L"];

    backrow.forEach((id, i) => {
      this.rows[0][i].setPiece(this.getPieceById(2, id, 0, i));
    });

    backrow.forEach((id, i) => {
      this.rows[8][i].setPiece(this.getPieceById(1, id, 8, i));
    });
  }

  getPieceById(player, id, y, x) {
    let piece;
    switch (id) {
      case "L":
        piece = new Lance(player, this.getTile(x, y));
        break;
      case "N":
        piece = new Knight(player, this.getTile(x, y));
        break;
      case "S":
        piece = new Silver(player, this.getTile(x, y));
        break;
      case "G":
        piece = new Gold(player, this.getTile(x, y));
        break;
      case "K":
        piece = new King(player, this.getTile(x, y));
        break;
      default:
        break;
    }
    return piece;
  }
}
