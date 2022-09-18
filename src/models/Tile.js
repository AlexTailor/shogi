export default class Tile {
  constructor(board, x, y, piece = null) {
    this.board = board;
    this.x = x;
    this.y = y;
    this.piece = piece;
  }

  isEmpty() {
    return this.piece === null;
  }

  isEmptyHorizontal(target) {
    if (this.y !== target.y) return false;

    const min = Math.min(this.x, target.x);
    const max = Math.max(this.x, target.x);
    for (let x = min + 1; x < max; x++) {
      if (!this.board.getTile(x, this.y).isEmpty()) return false;
    }
    return true;
  }

  isEmptyVertical(target) {
    if (this.x !== target.x) return false;

    const min = Math.min(this.y, target.y);
    const max = Math.max(this.y, target.y);
    for (let y = min + 1; y < max; y++) {
      if (!this.board.getTile(this.x, y).isEmpty()) return false;
    }
    return true;
  }

  isEmptyAround(target) {
    const verticalDistance = this.x - target.x;
    const horizontalDistance = this.y - target.y;

    if (verticalDistance <= 1 && verticalDistance > -2) {
      if (horizontalDistance <= 1 && horizontalDistance > -2) return true;
    }
    return false;
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
