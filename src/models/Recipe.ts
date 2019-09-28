/*
 * Copyright (c) 2019 Florian Mold
 * All rights reserved.
 */

import { AbstractModel } from './AbstractModel'
import { Difficulty } from './Difficulty'
import { Ingredient } from './Ingredient'
import { Deserializable } from './Deserializable'

export class Recipe extends AbstractModel<Recipe> implements Deserializable {
  private _name: string
  private _description: string
  private _difficultyId: number

  private _difficulty: Difficulty = undefined
  private _ingredients: Ingredient[] = []

  public constructor() {
    super()
  }

  public deserialize(input: any) {
    Object.assign(this, input)
    this.difficulty = new Difficulty().deserialize(input.difficulty)
    this.ingredients = this.ingredients.map(ingredient => {
      return new Ingredient().deserialize(ingredient)
    })
    return this
  }

  get name(): string {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }

  get description(): string {
    return this._description
  }

  set description(value: string) {
    this._description = value
  }

  get difficultyId(): number {
    return this._difficultyId
  }

  set difficultyId(value: number) {
    this._difficultyId = value
  }

  get difficulty(): Difficulty {
    return this._difficulty
  }

  set difficulty(value: Difficulty) {
    this._difficulty = value
  }

  get ingredients(): Ingredient[] {
    return this._ingredients
  }

  set ingredients(value: Ingredient[]) {
    this._ingredients = value
  }
}
