import { AbstractModel } from "./AbstractModel";

export class PatientSetting extends AbstractModel {

    private _neglect: boolean;
    private _patientId: number;

    private _patientSetting: PatientSetting;

    public constructor() {
        super();
    }

    get hasNeglect(): boolean {
        return this._neglect;
    }

    set neglect(value: boolean) {
        this._neglect = value;
    }

    get patientId(): number {
        return this._patientId;
    }

    set patientId(value: number) {
        this._patientId = value;
    }

    get patientSetting(): PatientSetting {
        return this._patientSetting;
    }

    set patientSetting(value: PatientSetting) {
        this._patientSetting = value;
    }
}
