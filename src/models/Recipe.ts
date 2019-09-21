/*
 * Copyright (c) 2019 Florian Mold
 * All rights reserved.
 */

import { AbstractModel } from "./AbstractModel";
import { Difficulty } from "./Difficulty";

export class Recipe extends AbstractModel {

    private _name: string;
    private _description: string;
    private _difficultyId: number;

    private _difficulty: Difficulty;

    public constructor() {
        super();
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get difficultyId(): number {
        return this._difficultyId;
    }

    set difficultyId(value: number) {
        this._difficultyId = value;
    }

    get difficulty(): Difficulty {
        return this._difficulty;
    }

    set difficulty(value: Difficulty) {
        this._difficulty = value;
    }
}
