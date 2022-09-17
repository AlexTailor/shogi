export default class Tile {
  constructor(x, y, piece = null) {
    this.x = x;
    this.y = y;
    this.piece = piece;
  }

  isEmpty() {
    return this.piece === null;
  }

  movePiece(target, player) {
    if (
      target.isEmpty() &&
      player === this.piece.player &&
      this.piece?.canMove(target)
    ) {
      target.setPiece(this.piece);
      this.piece = null;
    }
  }

  setPiece(piece) {
    this.piece = piece;
    this.piece.tile = this;
  }
}
