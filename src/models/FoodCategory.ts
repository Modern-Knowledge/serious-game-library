/*
 * Copyright (c) 2019 Florian Mold
 * All rights reserved.
 */

import { AbstractModel } from './AbstractModel'
import { Deserializable } from '../interfaces/Deserializable'

export class FoodCategory extends AbstractModel<FoodCategory>
  implements Deserializable {
  private _name: string

  public constructor() {
    super()
  }

  public deserialize(input: any) {
    Object.assign(this, input)
    return this
  }

  get name(): string {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }
}
