import { AbstractModel } from "./AbstractModel";

export class ErrortextGame extends AbstractModel<ErrortextGame> {

    private _gameId: number;
    private _errorId: number;

    public constructor() {
        super();
    }

    get gameId(): number {
        return this._gameId;
    }

    set gameId(value: number) {
        this._gameId = value;
    }

    get errorId(): number {
        return this._errorId;
    }

    set errorId(value: number) {
        this._errorId = value;
    }
}
