import Piece from "./piece";
import icon from "../assets/knight.png";

export default class Knight extends Piece {
  constructor(player) {
    super(player, icon);
  }
}
