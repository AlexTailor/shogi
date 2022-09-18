import Piece from "./Piece";
import icon from "../../assets/rook.png";

export default class Rook extends Piece {
  constructor(player) {
    super(player, icon);
  }

  canMove(target) {
    if (!super.canMove(target)) return false;
    if (this.tile.isEmptyHorizontal(target)) return true;
    if (this.tile.isEmptyVertical(target)) return true;
    return false;
  }
}
