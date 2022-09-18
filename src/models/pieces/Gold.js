import Piece from "./Piece";
import icon from "../../assets/gold.png";

export default class Gold extends Piece {
  constructor(player, tile) {
    super(player, icon, tile);
  }
}
