import { AbstractModel } from "./AbstractModel";

export class Difficulty extends AbstractModel {

    private _difficulty: number;

    public constructor() {
        super();
    }

    get difficulty(): number {
        return this._difficulty;
    }

    set difficulty(value: number) {
        this._difficulty = value;
    }
}
