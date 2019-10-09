/*
 * Copyright (c) 2019 Florian Mold
 * All rights reserved.
 */

import { AbstractModel } from "./AbstractModel";
import { Image } from "./Image";
import { FoodCategory } from "./FoodCategory";
import { Deserializable } from "../interfaces/Deserializable";

export class Ingredient extends AbstractModel<Ingredient>
  implements Deserializable {
  private _name: string;
  private _imageId: number;
  private _foodCategoryId: number;

  private _image: Image = undefined;
  private _foodCategory: FoodCategory = undefined;

  public constructor() {
    super();
  }

  public deserialize(input: any) {
    Object.assign(this, input);
    this.image = new Image().deserialize(input.image);
    this.foodCategory = new FoodCategory().deserialize(input.foodCategory);
    return this;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get imageId(): number {
    return this._imageId;
  }

  set imageId(value: number) {
    this._imageId = value;
  }

  get foodCategoryId(): number {
    return this._foodCategoryId;
  }

  set foodCategoryId(value: number) {
    this._foodCategoryId = value;
  }

  get image(): Image {
    return this._image;
  }

  set image(value: Image) {
    this._image = value;
  }

  get foodCategory(): FoodCategory {
    return this._foodCategory;
  }

  set foodCategory(value: FoodCategory) {
    this._foodCategory = value;
  }
}
