import { AbstractModel } from "./AbstractModel";

export class TherapistPatient extends AbstractModel {

  private _therapistId: number;
  private _patientId: number;

  public constructor() {
    super();
  }

  get therapistId(): number {
    return this._therapistId;
  }

  set therapistId(value: number) {
    this._therapistId = value;
  }

  get patientId(): number {
    return this._patientId;
  }

  set patientId(value: number) {
    this._patientId = value;
  }
}