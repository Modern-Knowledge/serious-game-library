import { AbstractModel } from "./AbstractModel";
import { Helptext } from "./Helptext";

export class Game extends AbstractModel {

    private _name: string;
    private _text: string;

    // todo: refactor to map, easier to get right helptext
    private _helptexts: Helptext[] = [];

    constructor() {
        super();
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
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
