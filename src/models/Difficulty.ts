import { AbstractModel } from './AbstractModel'
import { Deserializable } from '../interfaces/Deserializable'

export class Difficulty extends AbstractModel<Difficulty>
  implements Deserializable {
  private _difficulty: number

  public constructor() {
    super()
  }

  public deserialize(input: any) {
    Object.assign(this, input)
    return this
  }

  get difficulty(): number {
    return this._difficulty
  }

  set difficulty(value: number) {
    this._difficulty = value
  }
}
