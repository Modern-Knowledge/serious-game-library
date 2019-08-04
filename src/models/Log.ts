import { AbstractModel } from "./AbstractModel";

export class Log extends AbstractModel {
  private _logger: string;
  private _level: string;
  private _method: string;
  private _message: string;
  private _params: string[];

  constructor() {
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
}
