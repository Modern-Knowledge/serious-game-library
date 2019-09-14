import {AbstractModel} from "./AbstractModel";
import {Difficulty} from "../enums/Difficulty";
import Game from "./Game";

export default class GameSetting extends AbstractModel {

    private _gamesId: number;
    private _difficulty: Difficulty;

    private _game: Game;

    constructor() {
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
}