import {Text} from "./Text";
import {Severity} from "../enums/Severity";

export class Errortext extends Text {
    private _severityId: number;

    private _severity: Severity = undefined;

    get severityId(): number {
        return this._severityId;
    }

    set severityId(value: number) {
        this._severityId = value;
    }

    get severity(): Severity {
        return this._severity;
    }

    set severity(value: Severity) {
        this._severity = value;
    }
}