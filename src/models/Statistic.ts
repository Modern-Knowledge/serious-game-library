import { IDeserializable } from "../interfaces/IDeserializable";
import { AbstractModel } from "./AbstractModel";
import { Errortext } from "./Errortext";

export class Statistic extends AbstractModel<Statistic> implements IDeserializable {
  private _startTime: Date;
  private _endTime: Date;

  private _errortexts: Errortext[] = [];

  public constructor() {
    super();
  }

  public deserialize(input: any) {
    Object.assign(this, input);
    if (input && input._startTime) {
      this._startTime = new Date(input._startTime);
    }
    if (input && input._endTime) {
      this._endTime = new Date(input._endTime);
    }
    this.errortexts = this.errortexts.map((errortext: any) => {
      return new Errortext().deserialize(errortext);
    });
    return this;
  }

  get startTime(): Date {
    return this._startTime;
  }

  set startTime(value: Date) {
    this._startTime = value;
  }

  get endTime(): Date {
    return this._endTime;
  }

  set endTime(value: Date) {
    this._endTime = value;
  }

  get errortexts(): Errortext[] {
    return this._errortexts;
  }

  set errortexts(value: Errortext[]) {
    this._errortexts = value;
  }
}
