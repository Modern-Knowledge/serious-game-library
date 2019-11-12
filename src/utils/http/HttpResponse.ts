
import { Deserializable } from "../../interfaces/Deserializable";
import { Patient } from "../../models/Patient";

/**
 * https://github.com/omniti-labs/jsend
 */
export class HttpResponse implements Deserializable {

    public get messages() {
        return this._messages;
    }

    public get status() {
        return this._status;
    }

    public get data() {
        return this._data;
    }

    private readonly _status: HttpResponseStatus;
    private readonly _data?: any;
    private _messages?: HttpResponseMessage[];

    /**
     * @param status http-response status (200, ...)
     * @param data data of the http-response
     * @param messages success/error messages for the response
     */
    public constructor(
        status?: HttpResponseStatus,
        data?: any,
        messages?: HttpResponseMessage[]
    ) {
        this._status = status;

        if (data) {
            this._data = data;
        } else {
            this._data = undefined;
        }

        this._messages = messages;
    }
    // private readonly version: string = process.env.VERSION;

    public deserialize(input: any) {
        Object.assign(this, input);

        this._messages =
            this._messages &&
            this._messages.map((message) => {
                return new HttpResponseMessage().deserialize(message);
            });

        return this;
    }
}

export const enum HttpResponseStatus {
    SUCCESS = "success",
    FAIL = "fail",
    ERROR = "error"
}

export class HttpResponseMessage implements Deserializable {
    private _severity: HttpResponseMessageSeverity;
    private message: string;

    /**
     * @param severity severity of the http-response message
     * @param message text of the message
     */
    public constructor(severity?: HttpResponseMessageSeverity, message?: string) {
        this._severity = severity;
        this.message = message;
    }

    /**
     * deserialize the message
     * @param input input to deserialize
     */
    public deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

    get severity(): HttpResponseMessageSeverity {
        return this._severity;
    }
}

export const enum HttpResponseMessageSeverity {
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger",
    INFO = "primary"
}
