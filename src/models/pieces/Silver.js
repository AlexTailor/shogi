import Piece from "./Piece";
import icon from "../../assets/silver.png";

export default class Silver extends Piece {
  constructor(player, tile) {
    super(player, icon, tile);
  }

  canMove(target) {
    const leftTile = this.tile.x - 1;
    const rightTile = this.tile.x + 1;
    const backRow = this.player === 1 ? this.tile.y + 1 : this.tile.y - 1;
    if (!super.canMove(target)) return false;
    if (leftTile === target.x || rightTile === target.x) return false;
    if (backRow === target.y && this.tile.x === target.x) return false;
    if (this.tile.isEmptyAround(target)) return true;
    return false;
  }
}
