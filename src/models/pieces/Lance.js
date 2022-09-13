import Piece from "./Piece";
import icon from "../../assets/lance.png";

export default class Lance extends Piece {
  constructor(player) {
    super(player, icon);
  }
}
