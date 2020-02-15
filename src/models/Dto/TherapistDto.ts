import {Patient} from "../Patient";
import {Therapist} from "../Therapist";
import {UserDto} from "./UserDto";

export class TherapistDto extends UserDto {
    private _patients: Patient[] = [];

    public constructor(therapist: Therapist) {
        super(therapist);
        this._patients = therapist.patients;
    }

    get patients(): Patient[] {
        return this._patients;
    }
}
