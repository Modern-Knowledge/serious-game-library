import { AbstractModel } from "./AbstractModel";
import { Errortext } from "./Errortext";
import { Deserializable } from "../interfaces/Deserializable";

export class Statistic extends AbstractModel<Statistic> implements Deserializable {
    private _startTime: Date;
    private _endTime: Date;

    private _errortexts: Errortext[] = [];

    public constructor() {
        super();
    }

    public deserialize(input: any) {
        if (input && input._startTime) {
            this._startTime = new Date(input._startTime);
        }
        if (input && input._endTime) {
            this._endTime = new Date(input._endTime);
        }
        return this;
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

}
