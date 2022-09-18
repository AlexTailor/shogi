import Piece from "./Piece";
import icon from "../../assets/knight.png";

export default class Knight extends Piece {
  constructor(player, tile) {
    super(player, icon, tile);
  }

  canMove(target) {
    const verticalDistance = this.tile.x - target.x;
    const horizontalDistance = this.tile.y - target.y;

    if (!super.canMove(target)) return false;
    if (horizontalDistance === -2 || horizontalDistance === 2) {
      if (verticalDistance === -1 || verticalDistance === 1) return true;
    }
    return false;
  }
}
