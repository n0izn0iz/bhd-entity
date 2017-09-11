import { vec2 } from "gl-matrix";
import AABB from "td-aabb";

export default class Entity {
  constructor({ position, size, parent = null }) {
    this.position = vec2.fromValues(position[0], position[1]);
    this.size = size;
    if (parent !== null) parent.insert(this);
  }

  move(newPosition) {
    if (this.parent) {
      return this.parent.moveEntity(this, newPosition);
    } else {
      this.position = vector;
      return false;
    }
  }

  get aABB() {
    return new AABB({ position: this.position, size: this.size });
  }

  toString() {
    return `Entity { position: ${this.position}, size: ${this.size} }`;
  }
}
