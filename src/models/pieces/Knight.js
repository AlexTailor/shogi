import Piece from "./Piece";
import icon from "../../assets/knight.png";

export default class Knight extends Piece {
  constructor(player, tile) {
    super(player, icon, tile);
  }
}
