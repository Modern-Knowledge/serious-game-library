
import { IDeserializable } from "../interfaces/IDeserializable";
import { IUserInterface } from "../interfaces/IUserInterface";
import { AbstractModel } from "./AbstractModel";

export class PatientSetting extends AbstractModel<PatientSetting> implements IDeserializable, IUserInterface {
  private _neglect: boolean;
  private _patientId: number;

  public constructor() {
    super();
  }

  public deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

  get neglect(): boolean {
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

  public getUserId(): number {
      return this._patientId;
  }

}
