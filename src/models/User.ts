import { AbstractModel } from "./AbstractModel";
import { Session } from "./Session";
import { Deserializable } from "./Deserializable";
import { Gender } from "../enums/Gender";

export class User extends AbstractModel implements Deserializable {
  private _email: string;
  private _password: string;
  private _forename: string;
  private _lastname: string;
  private _gender: number;
  private _lastLogin: Date;
  private _failedLoginAttempts: number;
  private _loginCoolDown: Date;
  private _status: number;

  private _sessions: Session[] = [];

  public constructor() {
    super();
  }

  public deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get forename(): string {
    return this._forename;
  }

  set forename(value: string) {
    this._forename = value;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }

  get gender(): number {
    return this._gender;
  }

  set gender(value: number) {
    this._gender = value;
  }

  get lastLogin(): Date {
    return this._lastLogin;
  }

  set lastLogin(value: Date) {
    this._lastLogin = value;
  }

  get failedLoginAttempts(): number {
    return this._failedLoginAttempts;
  }

  set failedLoginAttempts(value: number) {
    this._failedLoginAttempts = value;
  }

  get loginCoolDown(): Date {
    return this._loginCoolDown;
  }

  set loginCoolDown(value: Date) {
    this._loginCoolDown = value;
  }

  get status(): number {
    return this._status;
  }

  set status(value: number) {
    this._status = value;
  }

  get sessions(): Session[] {
    return this._sessions;
  }

  set sessions(value: Session[]) {
    this._sessions = value;
  }

  get fullName() {
    return this.forename + " " + this.lastname;
  }

  /**
   * return mail recipient from user
   */
  get recipient(): { address: string; name: string } {
    return {
      name: this.fullName,
      address: this.email
    };
  }

  get fullNameWithSirOrMadam(): string {
    let prefix: string = "";

    if (this.gender === Gender.MALE) {
      prefix = "Herr ";
    } else if (this.gender === Gender.FEMALE) {
      prefix = "Frau ";
    }

    return prefix + this.fullName;
  }
}
