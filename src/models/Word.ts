import { Deserializable } from "../interfaces/Deserializable";
import { AbstractModel } from "./AbstractModel";

export class Word extends AbstractModel<Word> implements Deserializable {
  private _name: string;

  public constructor() {
    super();
  }

  public deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
