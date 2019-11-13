import { IDeserializable } from "../interfaces/IDeserializable";
import { AbstractModel } from "./AbstractModel";

export class Difficulty extends AbstractModel<Difficulty> implements IDeserializable {
  private _difficulty: number;

  public constructor() {
    super();
  }

  public deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

  get difficulty(): number {
    return this._difficulty;
  }

  set difficulty(value: number) {
    this._difficulty = value;
  }
}
