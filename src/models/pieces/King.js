import Piece from "./piece";
import icon from "../assets/king.png";

export default class King extends Piece {
  constructor(player) {
    super(player, icon);
  }
}
