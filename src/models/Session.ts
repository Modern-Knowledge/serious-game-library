import { AbstractModel } from "./AbstractModel";
import { Game } from "./Game";
import { Patient } from "./Patient";
import { Therapist } from "./Therapist";
import { GameSetting } from "./GameSetting";

export default class Session extends AbstractModel {

    private _gameId: number;
    private _patientId: number;
    private _statisticId: number;
    private _therapistId: number;
    private _gameSettingId: number;
    private _date: Date;

    private _game: Game = undefined;
    private _patient: Patient = undefined;
    private _therapist: Therapist = undefined;
    private _gameSetting: GameSetting = undefined;

    public constructor() {
        super();
    }

    get gameId(): number {
        return this._gameId;
    }

    set gameId(value: number) {
        this._gameId = value;
    }

    get patientId(): number {
        return this._patientId;
    }

    set patientId(value: number) {
        this._patientId = value;
    }

    get statisticId(): number {
        return this._statisticId;
    }

    set statisticId(value: number) {
        this._statisticId = value;
    }

    get therapistId(): number {
        return this._therapistId;
    }

    set therapistId(value: number) {
        this._therapistId = value;
    }

    get gameSettingId(): number {
        return this._gameSettingId;
    }

    set gameSettingId(value: number) {
        this._gameSettingId = value;
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
