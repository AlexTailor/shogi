import Piece from "./piece";
import icon from "../assets/pawn.png";

export default class Pawn extends Piece {
  constructor(player) {
    super(player, icon);
  }
}
