import {AbstractModel} from "./AbstractModel";

export class Text extends AbstractModel {
    private _name: string;
    private _text: string;

    public constructor() {
        super();
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }
}