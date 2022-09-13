export default class Tile {
  constructor(x, y, piece = null) {
    this.x = x;
    this.y = y;
    this.piece = piece;
  }

  setPiece(piece) {
    this.piece = piece;
    this.piece.tile = this;
  }
}
