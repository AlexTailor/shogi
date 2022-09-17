import Piece from "./Piece";
import icon from "../../assets/king.png";

export default class King extends Piece {
  constructor(player) {
    super(player, icon);
  }

  canMove(target) {
    if (!super.canMove(target)) return false;
    return true;
  }
}
