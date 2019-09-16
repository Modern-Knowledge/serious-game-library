import { AbstractModel } from "./AbstractModel";
import { User } from "./User";

export class Log extends AbstractModel {
  private _logger: string;
  private _level: string;
  private _method: string;
  private _message: string;
  private _params: string[];
  private _userId: number;

  private _user: User;

  public constructor() {
    super();
  }

  get logger(): string {
    return this._logger;
  }

  set logger(value: string) {
    this._logger = value;
  }

  get level(): string {
    return this._level;
  }

  set level(value: string) {
    this._level = value;
  }

  get method(): string {
    return this._method;
  }

  set method(value: string) {
    this._method = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  get params(): string[] {
    return this._params;
  }

  set params(value: string[]) {
    this._params = value;
  }

  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }
}
