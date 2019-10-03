import { AbstractModel } from "./AbstractModel";
import { Difficulty } from "./Difficulty";

export class GameSetting extends AbstractModel<GameSetting> {

    private _gameId: number;
    private _difficultyId: number;

    private _difficulty: Difficulty = undefined;

    public constructor() {
        super();
    }

    public deserialize(input: any){
        Object.assign(this, input);
        this.difficulty = new Difficulty().deserialize(this.difficulty);
        return this
    }

    get gameId(): number {
        return this._gameId;
    }

    set gameId(value: number) {
        this._gameId = value;
    }

    get difficultyId(): number {
        return this._difficultyId;
    }

    set difficultyId(value: number) {
        this._difficultyId = value;
    }

    get difficulty(): Difficulty {
        return this._difficulty;
    }

    set difficulty(value: Difficulty) {
        this._difficulty = value;
    }
}
