import { AbstractModel } from "./AbstractModel";

export class HelptextGame extends AbstractModel<HelptextGame> {

    private _gameId: number;
    private _helptextId: number;

    public constructor() {
        super();
    }

    get gameId(): number {
        return this._gameId;
    }

    set gameId(value: number) {
        this._gameId = value;
    }

    get helptextId(): number {
        return this._helptextId;
    }

    set helptextId(value: number) {
        this._helptextId = value;
    }
}
