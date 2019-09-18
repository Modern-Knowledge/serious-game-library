import { User } from "./User";
import { PatientSetting } from "./PatientSetting";

export class Patient extends User {
    private _birthday: Date;
    private _info: string;

    private _patientSetting: PatientSetting = undefined;

    public constructor() {
        super();
    }

    get birthday(): Date {
        return this._birthday;
    }

    set birthday(value: Date) {
        this._birthday = value;
    }

    get info(): string {
        return this._info;
    }

    set info(value: string) {
        this._info = value;
    }

    get patientSetting(): PatientSetting {
        return this._patientSetting;
    }

    set patientSetting(value: PatientSetting) {
        this._patientSetting = value;
    }
}
