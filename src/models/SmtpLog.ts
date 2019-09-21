import { AbstractModel } from "./AbstractModel";
import { SmtpCategory } from "./SmtpCategory";

export class SmtpLog extends AbstractModel {
    private _subject: string;
    private _body: string;
    private _rcptEmail: string;
    private _simulated: number;
    private _smtpCategoryId: number;

    private _smtpCategory: SmtpCategory;

    public constructor() {
        super();
    }

    get subject(): string {
        return this._subject;
    }

    set subject(value: string) {
        this._subject = value;
    }

    get body(): string {
        return this._body;
    }

    set body(value: string) {
        this._body = value;
    }

    get rcptEmail(): string {
        return this._rcptEmail;
    }

    set rcptEmail(value: string) {
        this._rcptEmail = value;
    }

    get simulated(): number {
        return this._simulated;
    }

    set simulated(value: number) {
        this._simulated = value;
    }

    get smtpCategoryId(): number {
        return this._smtpCategoryId;
    }

    set smtpCategoryId(value: number) {
        this._smtpCategoryId = value;
    }

    get smtpCategory(): SmtpCategory {
        return this._smtpCategory;
    }

    set smtpCategory(value: SmtpCategory) {
        this._smtpCategory = value;
    }
}