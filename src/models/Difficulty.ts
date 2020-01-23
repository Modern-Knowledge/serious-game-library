import {Difficulties} from "../enums/Difficulties";
import { IDeserializable } from "../interfaces/IDeserializable";
import { AbstractModel } from "./AbstractModel";

export class Difficulty extends AbstractModel<Difficulty> implements IDeserializable {
    private _difficulty: number;

    public constructor() {
        super();
    }

    public deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

    get difficulty(): number {
        return this._difficulty;
    }

    set difficulty(value: number) {
        this._difficulty = value;
    }

    /**
     * Returns the string representation of the difficulty. If the difficulty is not known an empty string is
     * returned.
     */
    get difficultyName(): string {
        if (this._difficulty === Difficulties.EASY) {
            return "Leicht";
        } else if (this._difficulty === Difficulties.MEDIUM) {
            return "Mittel";
        } else if (this._difficulty === Difficulties.HARD) {
            return "Schwer";
        }

        return "";
    }
}
