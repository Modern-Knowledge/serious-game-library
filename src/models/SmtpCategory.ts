import { AbstractModel } from "./AbstractModel";

export class SmtpCategory extends AbstractModel {
    private _category: number;

    constructor() {
        super();
    }

    get category(): number {
        return this._category;
    }

    set category(value: number) {
        this._category = value;
    }
}