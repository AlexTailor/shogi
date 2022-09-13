import Tile from "./Tile";

export default class Board {
  board = [];

  initBoard() {
    for (let y = 0; y < 9; y++) {
      const row = [];
      for (let x = 0; x < 9; x++) {
        row.push(new Tile(x, y));
      }
      this.board.push(row);
    }
  }
}
