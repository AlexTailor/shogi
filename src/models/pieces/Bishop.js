import Piece from "./Piece";
import icon from "../../assets/bishop.png";

export default class Bishop extends Piece {
  constructor(player, tile) {
    super(player, icon, tile);
  }

  canMove(target) {
    if (!super.canMove(target)) return false;
    if (this.tile.isEmptyDiagonal(target)) return true;
    return false;
  }
}
