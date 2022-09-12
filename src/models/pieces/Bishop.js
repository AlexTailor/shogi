import Piece from "./piece";
import icon from "../assets/bishop.png";

export default class Bishop extends Piece {
  constructor(player) {
    super(player, icon);
  }
}
