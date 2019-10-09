import { AbstractModel } from "./AbstractModel";
import { Deserializable } from "../interfaces/Deserializable";

export class PatientSetting extends AbstractModel<PatientSetting> implements Deserializable {
  private _neglect: boolean;
  private _patientId: number;

  public constructor() {
    super();
  }

  public deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

  get hasNeglect(): boolean {
    return this._neglect;
  }

  set neglect(value: boolean) {
    this._neglect = value;
  }

  get patientId(): number {
    return this._patientId;
  }

  set patientId(value: number) {
    this._patientId = value;
  }
}
