import { AbstractModel } from "./AbstractModel";

export class SmtpMessage extends AbstractModel {
    private _name: string;
    private _subject: string;
    private _html: string;
    private _text: string;

    public constructor() {
        super();
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get subject(): string {
        return this._subject;
    }

    set subject(value: string) {
        this._subject = value;
    }

    get html(): string {
        return this._html;
    }

    set html(value: string) {
        this._html = value;
    }

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }
}