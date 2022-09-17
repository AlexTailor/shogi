export default class Piece {
  constructor(player, icon, tile) {
    this.player = player;
    this.skin = icon;
    this.tile = tile;
  }

  canMove(target) {
    if (target.piece?.player === this.player) {
      return false;
    }

    return true;
  }
}
