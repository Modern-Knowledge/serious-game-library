import {IDeserializable} from "../../interfaces/IDeserializable";
import {User} from "../User";
import {Gender} from "../../enums/Gender";

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

    get id(): number {
        return this._id;
    }

    get email(): string {
        return this._email;
    }

    get forename(): string {
        return this._forename;
    }

    get lastname(): string {
        return this._lastname;
    }

    get gender(): number {
        return this._gender;
    }

    get fullName() {
        return this.forename + " " + this.lastname;
    }

}
