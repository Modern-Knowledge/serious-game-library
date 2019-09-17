import { AbstractModel } from "./AbstractModel";
import { Helptext } from "./Helptext";

export class Game extends AbstractModel {

    private _name: string;
    private _description: string;

    // todo: refactor to map, easier to get right helptext
    private _helptexts: Helptext[] = [];

    public constructor() {
        super();
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get helptexts(): Helptext[] {
        return this._helptexts;
    }

    set helptexts(value: Helptext[]) {
        this._helptexts = value;
    }

    public addHelptext(helptext: Helptext) {
        this._helptexts.push(helptext);
    }
}
