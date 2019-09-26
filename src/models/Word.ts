import { AbstractModel } from "./AbstractModel";

export class Word extends AbstractModel<Word> {
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
