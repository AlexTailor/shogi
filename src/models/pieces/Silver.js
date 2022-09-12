import Piece from "./piece";
import icon from "../assets/silver.png";

export default class Silver extends Piece {
  constructor(player) {
    super(player, icon);
  }
}
