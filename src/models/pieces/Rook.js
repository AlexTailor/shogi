import Piece from "./Piece";
import icon from "../../assets/rook.png";

export default class Rook extends Piece {
  constructor(player) {
    super(player, icon);
  }
}
