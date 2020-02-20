import { IDeserializable } from "../../interfaces/IDeserializable";
import { Patient } from "../Patient";
import { PatientSetting } from "../PatientSetting";
import { UserDto } from "./UserDto";

export class PatientDto extends UserDto implements IDeserializable {
    private _birthday: Date;
    private _info: string;

    private _patientSetting: PatientSetting = undefined;

    public constructor(patient?: Patient) {
        super(patient);

        this._birthday = patient.birthday;
        this._info = patient.info;
        this._patientSetting = patient.patientSetting;
    }

    public deserialize(input: any) {
        Object.assign(this, input);
        this._patientSetting = new PatientSetting().deserialize(
            input._patientSetting
        );
        return this;
    }

    get birthday(): Date {
        return this._birthday;
    }

    get info(): string {
        return this._info;
    }

    get patientSetting(): PatientSetting {
        return this._patientSetting;
    }
}
