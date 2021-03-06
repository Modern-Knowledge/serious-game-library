
import moment from "moment";
import { Gender } from "../enums/Gender";
import { IDeserializable } from "../interfaces/IDeserializable";
import { IUserInterface } from "../interfaces/IUserInterface";
import { AbstractModel } from "./AbstractModel";
import { Session } from "./Session";

export class User extends AbstractModel<User> implements IDeserializable, IUserInterface {
    private _email: string;
    private _password: string;
    private _forename: string;
    private _lastname: string;
    private _gender: number;
    private _lastLogin: Date;
    private _failedLoginAttempts: number;
    private _loginCoolDown: Date;
    private _status: number;
    private _resetcode: number;
    private _resetcodeValidUntil: Date;

    private _sessions: Session[] = [];

    public constructor() {
        super();
    }

    public deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get forename(): string {
        return this._forename;
    }

    set forename(value: string) {
        this._forename = value;
    }

    get lastname(): string {
        return this._lastname;
    }

    set lastname(value: string) {
        this._lastname = value;
    }

    get gender(): number {
        return this._gender;
    }

    set gender(value: number) {
        this._gender = value;
    }

    get lastLogin(): Date {
        return this._lastLogin;
    }

    set lastLogin(value: Date) {
        this._lastLogin = value;
    }

    get failedLoginAttempts(): number {
        return this._failedLoginAttempts;
    }

    set failedLoginAttempts(value: number) {
        this._failedLoginAttempts = value;
    }

    get loginCoolDown(): Date {
        return this._loginCoolDown;
    }

    set loginCoolDown(value: Date) {
        this._loginCoolDown = value;
    }

    get status(): number {
        return this._status;
    }

    set status(value: number) {
        this._status = value;
    }

    get resetcode(): number {
        return this._resetcode;
    }

    set resetcode(value: number) {
        this._resetcode = value;
    }

    get resetcodeValidUntil(): Date {
        return this._resetcodeValidUntil;
    }

    set resetcodeValidUntil(value: Date) {
        this._resetcodeValidUntil = value;
    }

    get sessions(): Session[] {
        return this._sessions;
    }

    set sessions(value: Session[]) {
        this._sessions = value;
    }

    get fullName() {
        return this.forename + " " + this.lastname;
    }

    public getUserId(): number {
        return this.id;
    }

    /**
     * return mail recipient from user
     */
    get recipient(): { address: string; name: string } {
        return {
            address: this.email,
            name: this.fullName
        };
    }

    /**
     * retrieve the full name of the user with the salutation prepended
     */
    get fullNameWithSirOrMadam(): string {
        let prefix = "";

        // tslint:disable-next-line:triple-equals
        if (this.gender == Gender.MALE) {
            prefix = "Herr ";
            // tslint:disable-next-line:triple-equals
        } else if (this.gender == Gender.FEMALE) {
            prefix = "Frau ";
        }

        return prefix + this.fullName;
    }

    /**
     * Validates the password reset token.
     * Check if the passed token matches with the stored token.
     * Checks it the token is still valid.
     * @param resetToken reset-token to validate
     */
    public validatePasswordResetToken(resetToken: number): boolean {
        return (!(moment().isAfter(this.resetcodeValidUntil)) && this.resetcode === resetToken);
    }

    // /**
    //  * Delete the password property, when converting the
    //  */
    // public toJSON() {
    //     const user = this;
    //
    //     return user;
    // }
}
