import { AbstractModel } from "./AbstractModel";
import { Difficulty } from "../enums/Difficulty";
import { Game } from "./Game";

export class GameSetting extends AbstractModel {

    private _gamesId: number;
    private _difficultyId: number;

    private _difficulty: Difficulty = undefined;
    private _game: Game = undefined;

    public constructor() {
        super();
    }

    get gamesId(): number {
        return this._gamesId;
    }

    set gamesId(value: number) {
        this._gamesId = value;
    }

    get difficulty(): Difficulty {
        return this._difficulty;
    }

    set difficulty(value: Difficulty) {
        this._difficulty = value;
    }

    get game(): Game {
        return this._game;
    }

    set game(value: Game) {
        this._game = value;
    }

    get difficultyId(): number {
        return this._difficultyId;
    }

    set difficultyId(value: number) {
        this._difficultyId = value;
    }
}
