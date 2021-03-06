import { IDeserializable } from "../../interfaces/IDeserializable";
import { Patient } from "../Patient";
import { Therapist } from "../Therapist";
import { PatientDto } from "./PatientDto";
import { UserDto } from "./UserDto";

export class TherapistDto extends UserDto implements IDeserializable {
    private _patients: PatientDto[] = [];

    public constructor(therapist?: Therapist) {
        super(therapist);
        this._patients = therapist.patients.map(
            (value: Patient) => new PatientDto(value)
        );
    }

    public deserialize(input: any) {
        Object.assign(this, input);
        this._patients = this._patients.map((patient: PatientDto) => {
            return new PatientDto(
                new Patient().deserialize(patient)
            ).deserialize(patient);
        });
        return this;
    }

    get patients(): PatientDto[] {
        return this._patients;
    }

    set patients(value: PatientDto[]) {
        this._patients = value;
    }
}
