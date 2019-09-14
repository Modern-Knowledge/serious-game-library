import { User } from "./User";
import {Therapist} from "./Therapist";
import PatientSetting from "./PatientSetting";

export class Patient extends User {
    private _birthday: Date;
    private _info: string;
    private _patientSettingsId: number;

    private _therapists: Therapist[] = [];
    private _patientSetting: PatientSetting;

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

    get patientSettingsId(): number {
        return this._patientSettingsId;
    }

    set patientSettingsId(value: number) {
        this._patientSettingsId = value;
    }

    get therapists(): Therapist[] {
        return this._therapists;
    }

    set therapists(value: Therapist[]) {
        this._therapists = value;
    }

    public addTherapist(therapist: Therapist): void {
        this._therapists.push(therapist);
    }
    
    get patientSetting(): PatientSetting {
        return this._patientSetting;
    }

    set patientSetting(value: PatientSetting) {
        this._patientSetting = value;
    }
}
