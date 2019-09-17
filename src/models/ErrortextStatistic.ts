import { AbstractModel } from "./AbstractModel";

export class ErrortextStatistic extends AbstractModel {

    private _errortextId: number;
    private _statisticId: number;

    public constructor() {
        super();
    }

    get errortextId(): number {
        return this._errortextId;
    }

    set errortextId(value: number) {
        this._errortextId = value;
    }

    get statisticId(): number {
        return this._statisticId;
    }

    set statisticId(value: number) {
        this._statisticId = value;
    }
}