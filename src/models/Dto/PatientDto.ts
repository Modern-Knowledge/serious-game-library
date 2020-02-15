import {Patient} from "../Patient";
import {PatientSetting} from "../PatientSetting";
import {UserDto} from "./UserDto";

export class PatientDto extends UserDto {
    private _birthday: Date;
    private _info: string;

    private _patientSetting: PatientSetting = undefined;

    public constructor(patient: Patient) {
        super(patient);

        this._birthday = patient.birthday;
        this._info = patient.info;
        this._patientSetting = patient.patientSetting;
    }
}
