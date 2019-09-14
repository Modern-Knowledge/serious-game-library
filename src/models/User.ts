import { AbstractModel } from "./AbstractModel";
import { Status } from "../enums/Status";

export class User extends AbstractModel {
  private _email: string;
  private _password: string;
  private _forename: string;
  private _lastname: string;
  private _lastLogin: Date;
  private _failedLoginAttempts: number;
  private _loginCoolDown: Date;
  private _status: Status;

  public constructor() {
    super();
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

  get status(): Status {
    return this._status;
  }

  set status(value: Status) {
    this._status = value;
  }
}
