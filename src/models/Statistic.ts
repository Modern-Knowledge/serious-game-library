import { AbstractModel } from "./AbstractModel";
import { Errortext } from "./Errortext";
import {Deserializable} from "./Deserializable";

export class Statistic extends AbstractModel<Statistic> implements Deserializable {
    private _startTime: Date;
    private _endTime: Date;

    private _errortexts: Errortext[] = [];

    public constructor() {
        super();
    }

    public deserialize(input: any) {
        Object.assign(this, input);
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
