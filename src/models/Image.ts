import { Deserializable } from "../interfaces/Deserializable";
import { AbstractModel } from "./AbstractModel";

export class Image extends AbstractModel<Image> implements Deserializable {
  private _image: any;

  public constructor() {
    super();
  }

  public deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

  get image(): any {
    return this._image;
  }

  set image(value: any) {
    this._image = value;
  }
}
