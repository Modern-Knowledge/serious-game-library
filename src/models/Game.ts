import { AbstractModel } from "./AbstractModel";
import { Helptext } from "./Helptext";
import { GameSetting } from "./GameSetting";

export class Game extends AbstractModel {

    private _name: string;
    private _description: string;

    // todo: refactor to map, easier to get right helptext
    private _helptexts: Helptext[] = [];
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

    get helptexts(): Helptext[] {
        return this._helptexts;
    }

    set helptexts(value: Helptext[]) {
        this._helptexts = value;
    }

    public addHelptext(helptext: Helptext) {
        this._helptexts.push(helptext);
    }

    public addHelptexts(helptexts: Helptext[]) {
        this._helptexts = this._helptexts.concat(helptexts);
    }

    get gameSettings(): GameSetting[] {
        return this._gameSettings;
    }

    set gameSettings(value: GameSetting[]) {
        this._gameSettings = value;
    }

    public addGameSetting(gameSetting: GameSetting) {
        this._gameSettings.push(gameSetting);
    }

    public addGameSettings(gameSettings: GameSetting[]) {
        this._gameSettings = this._gameSettings.concat(gameSettings);
    }
}
