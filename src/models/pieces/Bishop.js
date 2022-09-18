import Piece from "./Piece";
import icon from "../../assets/bishop.png";

export default class Bishop extends Piece {
  constructor(player, tile) {
    super(player, icon, tile);
  }
}
