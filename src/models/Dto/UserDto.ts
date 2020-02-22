import {IDeserializable} from "../../interfaces/IDeserializable";
import {User} from "../User";

export class UserDto implements IDeserializable {
    private _id: number;
    private _email: string;
    private _forename: string;
    private _lastname: string;
    private _gender: number;

    public constructor(user: User) {
        this._id = user.id;
        this._email = user.email;
        this._forename = user.forename;
        this._lastname = user.lastname;
        this._gender = user.gender;
    }

    public deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

    get fullName() {
        return this.forename + " " + this.lastname;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
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
}
