
import { IDeserializable } from "../../interfaces/IDeserializable";
import { Patient } from "../../models/Patient";

/**
 * https://github.com/omniti-labs/jsend
 */
export class HttpResponse implements IDeserializable {

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

export enum HttpResponseStatus {
    SUCCESS = "success",
    FAIL = "fail",
    ERROR = "error"
}

export class HttpResponseMessage implements IDeserializable {
    private _severity: HttpResponseMessageSeverity;
    private message: string;
    private _visible: boolean;

    /**
     * @param severity severity of the http-response message
     * @param message text of the message
     * @param visible describes if the message is visible in the frontend
     */
    public constructor(severity?: HttpResponseMessageSeverity, message?: string, visible: boolean = false) {
        this._severity = severity;
        this.message = message;
        this._visible = visible;
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

    get visible(): boolean {
        return this._visible;
    }
}

export enum HttpResponseMessageSeverity {
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger",
    INFO = "primary"
}
