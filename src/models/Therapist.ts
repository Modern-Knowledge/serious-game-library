import { User } from "./User";
import { Patient } from "./Patient";

export class Therapist extends User {

    private _patients: Patient[] = [];

    public constructor() {
        super();
    }

    get patients(): Patient[] {
        return this._patients;
    }

    set patients(value: Patient[]) {
        this._patients = value;
    }

}
