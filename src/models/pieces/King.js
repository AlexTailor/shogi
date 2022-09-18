import Piece from "./Piece";
import icon from "../../assets/king.png";

export default class King extends Piece {
  constructor(player, tile) {
    super(player, icon, tile);
  }

  canMove(target) {
    if (!super.canMove(target)) return false;
    if (this.tile.isEmptyAround(target)) return true;
    return false;
  }
}
