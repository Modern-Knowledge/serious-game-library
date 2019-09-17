import { AbstractModel } from "./AbstractModel";
import { Game } from "./Game";
import { Patient } from "./Patient";
import { Therapist } from "./Therapist";
import { GameSetting } from "./GameSetting";

export default class Session extends AbstractModel {

    private _gamesId: number;
    private _patientsId: number;
    private _statisticsId: number;
    private _therapistsId: number;
    private _gameSettingsId: number;
    private _date: Date;

    private _game: Game = undefined;
    private _patient: Patient = undefined;
    private _therapist: Therapist = undefined;
    private _gameSetting: GameSetting = undefined;

    public constructor() {
        super();
    }

    get gamesId(): number {
        return this._gamesId;
    }

    set gamesId(value: number) {
        this._gamesId = value;
    }

    get patientsId(): number {
        return this._patientsId;
    }

    set patientsId(value: number) {
        this._patientsId = value;
    }

    get statisticsId(): number {
        return this._statisticsId;
    }

    set statisticsId(value: number) {
        this._statisticsId = value;
    }

    get therapistsId(): number {
        return this._therapistsId;
    }

    set therapistsId(value: number) {
        this._therapistsId = value;
    }

    get gameSettingsId(): number {
        return this._gameSettingsId;
    }

    set gameSettingsId(value: number) {
        this._gameSettingsId = value;
    }

    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }

    get game(): Game {
        return this._game;
    }

    set game(value: Game) {
        this._game = value;
    }

    get patient(): Patient {
        return this._patient;
    }

    set patient(value: Patient) {
        this._patient = value;
    }

    get therapist(): Therapist {
        return this._therapist;
    }

    set therapist(value: Therapist) {
        this._therapist = value;
    }

    get gameSetting(): GameSetting {
        return this._gameSetting;
    }

    set gameSetting(value: GameSetting) {
        this._gameSetting = value;
    }
}
