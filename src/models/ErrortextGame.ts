import { AbstractModel } from "./AbstractModel";

export class ErrortextGame extends AbstractModel<ErrortextGame> {

    private _gameId: number;
    private _errortextsErrorId: number;

    public constructor() {
        super();
    }

    get gameId(): number {
        return this._gameId;
    }

    set gameId(value: number) {
        this._gameId = value;
    }

    get errortextsErrorId(): number {
        return this._errortextsErrorId;
    }

    set errortextsErrorId(value: number) {
        this._errortextsErrorId = value;
    }
}