import { vec2 } from "gl-matrix";
import AABB from "td-aabb";

export default class Entity {
  constructor() {
    this.position = vec2.fromValues(5, 5);
    this.size = 2;
  }

  get aABB() {
    return new AABB({ position: this.position, size: this.size });
  }

  toString() {
    return `Entity { position: ${this.position}, size: ${this.size} }`;
  }
}
