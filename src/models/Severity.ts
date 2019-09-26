import { AbstractModel } from "./AbstractModel";

export class Severity extends AbstractModel<Severity> {

    private _severity: number;

    public constructor() {
        super();
    }
    
    get severity(): number {
        return this._severity;
    }

    set severity(value: number) {
        this._severity = value;
    }
}
