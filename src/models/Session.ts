import { AbstractModel } from './AbstractModel'
import { Game } from './Game'
import { Patient } from './Patient'
import { Therapist } from './Therapist'
import { GameSetting } from './GameSetting'
import { Statistic } from './Statistic'
import { Deserializable } from '../interfaces/Deserializable'
import { UserInterface } from '../interfaces/UserInterface'

export class Session extends AbstractModel<Session>
  implements Deserializable, UserInterface {
  private _gameId: number
  private _patientId: number
  private _statisticId: number
  private _gameSettingId: number
  private _date: Date

  private _game: Game = undefined
  private _patient: Patient = undefined
  private _therapist: Therapist = undefined
  private _gameSetting: GameSetting = undefined
  private _statistic: Statistic = undefined

  public constructor() {
    super()
  }

  public deserialize(input: any) {
    Object.assign(this, input)
    this.game = new Game().deserialize(input._game)
    this.therapist = new Therapist().deserialize(input._therapist)
    this.gameSetting = new GameSetting().deserialize(input._gameSetting)
    this.statistic = new Statistic().deserialize(input._statistic)
    return this
  }

  get gameId(): number {
    return this._gameId
  }

  set gameId(value: number) {
    this._gameId = value
  }

  get patientId(): number {
    return this._patientId
  }

  set patientId(value: number) {
    this._patientId = value
  }

  get statisticId(): number {
    return this._statisticId
  }

  set statisticId(value: number) {
    this._statisticId = value
  }

  get gameSettingId(): number {
    return this._gameSettingId
  }

  set gameSettingId(value: number) {
    this._gameSettingId = value
  }

  get date(): Date {
    return this._date
  }

  set date(value: Date) {
    this._date = value
  }

  get game(): Game {
    return this._game
  }

  set game(value: Game) {
    this._game = value
  }

  get patient(): Patient {
    return this._patient
  }

  set patient(value: Patient) {
    this._patient = value
  }

  get therapist(): Therapist {
    return this._therapist
  }

  set therapist(value: Therapist) {
    this._therapist = value
  }

  get gameSetting(): GameSetting {
    return this._gameSetting
  }

  set gameSetting(value: GameSetting) {
    this._gameSetting = value
  }

  get statistic(): Statistic {
    return this._statistic
  }

  set statistic(value: Statistic) {
    this._statistic = value
  }

  getUserId(): number {
    return this._patientId
  }
}
