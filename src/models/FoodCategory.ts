/*
 * Copyright (c) 2019 Florian Mold
 * All rights reserved.
 */

import { AbstractModel } from "./AbstractModel";

export class FoodCategory extends AbstractModel<FoodCategory> {

    private _name: string;

    public constructor() {
        super();
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

