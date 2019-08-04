import { AbstractModel } from "./AbstractModel";
import { Role } from "../enums/Role";
import { Status } from "../enums/Status";

export class User extends AbstractModel {
  private _username: string;
  private _password: string;
  private _status: Status;
  private _role: Role;
  private _lastLogin: Date;

  constructor() {
    super();
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get lastLogin(): Date {
    return this._lastLogin;
  }

  set lastLogin(value: Date) {
    this._lastLogin = value;
  }


}
