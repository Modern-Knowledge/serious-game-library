import { IDeserializable } from "../interfaces/IDeserializable";
import { PatientSetting } from "./PatientSetting";
import { User } from "./User";

export class Patient extends User implements IDeserializable {
    private _birthday: Date;
    private _info: string;

    private _patientSetting: PatientSetting = undefined;

    public constructor() {
        super();
    }

    public deserialize(input: any) {
        Object.assign(this, input);
        this.patientSetting = new PatientSetting().deserialize(
            input._patientSetting
        );
        return this;
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
