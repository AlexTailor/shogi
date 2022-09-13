import Piece from "./Piece";
import icon from "../../assets/pawn.png";

export default class Pawn extends Piece {
  constructor(player, tile) {
    super(player, icon, tile);
  }
}
