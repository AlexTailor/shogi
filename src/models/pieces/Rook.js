import Piece from "./piece";
import icon from "../assets/rook.png";

export default class Rook extends Piece {
  constructor(player) {
    super(player, icon);
  }
}
