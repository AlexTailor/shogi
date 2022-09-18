import Piece from "./Piece";
import icon from "../../assets/silver.png";

export default class Silver extends Piece {
  constructor(player, tile) {
    super(player, icon, tile);
  }
}
