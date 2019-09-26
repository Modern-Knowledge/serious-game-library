import { AbstractModel } from "./AbstractModel";
import { Helptext } from "./Helptext";
import { GameSetting } from "./GameSetting";

export class Game extends AbstractModel<Game> {

    private _name: string;
    private _description: string;

    private _helptexts: Map<string, Helptext> = new Map<string, Helptext>();
    private _gameSettings: GameSetting[] = [];

    public constructor() {
        super();
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get helptexts(): Map<string, Helptext> {
        return this._helptexts;
    }

    set helptexts(value: Map<string, Helptext>) {
        this._helptexts = value;
    }

    get gameSettings(): GameSetting[] {
        return this._gameSettings;
    }

    set gameSettings(value: GameSetting[]) {
        this._gameSettings = value;
    }

}
