import { AbstractModel } from "./AbstractModel";

export class Log extends AbstractModel {
  private _logLevel: string;
  private _methodName: string;
  private _params: string[];

  constructor() {
    super();
  }

  get logLevel(): string {
    return this._logLevel;
  }

  set logLevel(value: string) {
    this._logLevel = value;
  }

  get methodName(): string {
    return this._methodName;
  }

  set methodName(value: string) {
    this._methodName = value;
  }

  get params(): string[] {
    return this._params;
  }

  set params(value: string[]) {
    this._params = value;
  }
}
