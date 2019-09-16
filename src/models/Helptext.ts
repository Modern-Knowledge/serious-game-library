import { AbstractModel } from "./AbstractModel";
import { Game } from "./Game";

export class Helptext extends AbstractModel {

    private _text: string;

    private _games: Game[] = [];

    constructor() {
        super();
    }

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }

    get games(): Game[] {
        return this._games;
    }

    set games(value: Game[]) {
        this._games = value;
    }

    public addGame(game: Game): void {
        this._games.push(game);
    }
}
