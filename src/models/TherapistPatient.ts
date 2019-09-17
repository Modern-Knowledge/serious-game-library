import { AbstractModel } from "./AbstractModel";

export class TherapistPatient extends AbstractModel {

  private _therapists_id: number;
  private _patients_id: number;

  public constructor() {
    super();
  }

  get therapists_id() {
    return this._therapists_id;
  }

  set therapists_id(value) {
    this._therapists_id = value;
  }

  get patients_id() {
    return this._patients_id;
  }

  set patients_id(value) {
    this._patients_id = value;
  }
}