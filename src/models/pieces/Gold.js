import Piece from "./piece";
import icon from "../assets/gold.png";

export default class Gold extends Piece {
  constructor(player) {
    super(player, icon);
  }
}
