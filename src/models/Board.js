import Tile from "./Tile";
import Pawn from "./pieces/Pawn";

export default class Board {
  tiles = [];

  initBoard() {
    for (let y = 0; y < 9; y++) {
      const row = [];
      for (let x = 0; x < 9; x++) {
        row.push(new Tile(x, y));
      }
      this.tiles.push(row);
    }
  }

  getTile(x, y) {
    return this.tiles[y][x];
  }

  addPawns() {
    for (let i = 0; i < 9; i++) {
      this.tiles[2][i].piece = new Pawn(2, this.getTile(i, 2));
      this.tiles[6][i].piece = new Pawn(1, this.getTile(i, 6));
    }
  }
}
