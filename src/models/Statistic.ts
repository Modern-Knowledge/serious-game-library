import {AbstractModel} from "./AbstractModel";

export default class Statistic extends AbstractModel {
    private _startTime: Date;
    private _endTime: Date;
    private _errors: number;

    constructor() {
        super();
    }

    get startTime(): Date {
        return this._startTime;
    }

    set startTime(value: Date) {
        this._startTime = value;
    }

    get endTime(): Date {
        return this._endTime;
    }

    set endTime(value: Date) {
        this._endTime = value;
    }

    get errors(): number {
        return this._errors;
    }

    set errors(value: number) {
        this._errors = value;
    }
}