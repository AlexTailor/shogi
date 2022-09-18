import Piece from "./Piece";
import icon from "../../assets/king.png";

export default class King extends Piece {
  constructor(player, tile) {
    super(player, icon, tile);
  }

  canMove(target) {
    const verticalDistance = this.tile.x - target.x;
    const horizontalDistance = this.tile.y - target.y;

    if (!super.canMove(target)) return false;
    if (verticalDistance <= 1 && verticalDistance > -2) {
      if (horizontalDistance <= 1 && horizontalDistance > -2) return true;
    }
    return false;
  }
}
