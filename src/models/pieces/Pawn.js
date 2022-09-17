import Piece from "./Piece";
import icon from "../../assets/pawn.png";

export default class Pawn extends Piece {
  constructor(player, tile) {
    super(player, icon, tile);
  }

  canMove(target) {
    if (!super.canMove(target)) return false;
    const direction = this.player === 2 ? 1 : -1;

    if (target.y === this.tile.y + direction && target.x === this.tile.x)
      return true;
  }
}
