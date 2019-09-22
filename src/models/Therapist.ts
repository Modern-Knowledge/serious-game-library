import { User } from "./User";
import { Patient } from "./Patient";
import { Deserializable } from "./Deserializable";

export class Therapist extends User implements Deserializable {
  private _patients: Patient[] = [];

  public constructor() {
    super();
  }

  public deserialize(input: any) {
    Object.assign(this, input);
    this.patients = this.patients.map(patient => {
      return new Patient().deserialize(patient);
    });
    return this;
  }

  get patients(): Patient[] {
    return this._patients;
  }

  set patients(value: Patient[]) {
    this._patients = value;
  }

}
