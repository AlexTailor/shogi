import Piece from "./Piece";
import icon from "../../assets/lance.png";

export default class Lance extends Piece {
  constructor(player) {
    super(player, icon);
  }

  canMove(target) {
    if (!super.canMove(target)) return false;
    if (this.tile.isEmptyVertical(target)) return true;
    return false;
  }
}
