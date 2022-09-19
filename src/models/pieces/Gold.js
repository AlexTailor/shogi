import Piece from "./Piece";
import icon from "../../assets/gold.png";

export default class Gold extends Piece {
  constructor(player, tile) {
    super(player, icon, tile);
  }

  canMove(target) {
    const backrowLeft =
      this.player === 1
        ? { y: this.tile.y + 1, x: this.tile.x - 1 }
        : { y: this.tile.y - 1, x: this.tile.x - 1 };
    const backrowRight =
      this.player === 1
        ? { y: this.tile.y + 1, x: this.tile.x + 1 }
        : { y: this.tile.y - 1, x: this.tile.x + 1 };

    if (!super.canMove(target)) return false;
    if (backrowLeft.x === target.x && backrowLeft.y === target.y) return false;
    if (backrowRight.x === target.x && backrowRight.y === target.y)
      return false;
    if (this.tile.isEmptyAround(target)) return true;
    return false;
  }
}
