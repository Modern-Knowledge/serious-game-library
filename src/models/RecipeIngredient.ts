/*
 * Copyright (c) 2019 Florian Mold
 * All rights reserved.
 */

import { AbstractModel } from "./AbstractModel";

export class RecipeIngredient extends AbstractModel {

    private _recipeId: number;
    private _ingredientId: number;

    public constructor() {
        super();
    }

    get recipeId(): number {
        return this._recipeId;
    }

    set recipeId(value: number) {
        this._recipeId = value;
    }

    get ingredientId(): number {
        return this._ingredientId;
    }

    set ingredientId(value: number) {
        this._ingredientId = value;
    }
}