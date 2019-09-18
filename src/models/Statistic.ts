import { AbstractModel } from "./AbstractModel";
import { Errortext } from "./Errortext";

export class Statistic extends AbstractModel {
    private _startTime: Date;
    private _endTime: Date;

    private _errortexts: Errortext[] = [];

    public constructor() {
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

    get errortexts(): Errortext[] {
        return this._errortexts;
    }

    set errortexts(value: Errortext[]) {
        this._errortexts = value;
    }

    public addErrortext(errortext: Errortext) {
        this._errortexts.push(errortext);
    }

    public addErrortexts(errortexts: Errortext[]) {
        this._errortexts = this._errortexts.concat(errortexts);
    }
}
