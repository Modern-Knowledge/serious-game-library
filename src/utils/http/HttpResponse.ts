/*
 * Copyright (c) 2019 Florian Mold
 * All rights reserved.
 */

import { Deserializable } from '../../interfaces/Deserializable'
import { Patient } from '../../models/Patient'

/**
 * https://github.com/omniti-labs/jsend
 */
export class HttpResponse implements Deserializable {
  private _status: HttpResponseStatus
  private _data?: any
  private _messages?: HttpResponseMessage[]
  // private readonly version: string = process.env.VERSION;

  public deserialize(input: any) {
    Object.assign(this, input)

    this._messages =
      this._messages &&
      this._messages.map(message => {
        return new HttpResponseMessage().deserialize(message)
      })

    return this
  }

  /**
   * @param status
   * @param data
   * @param messages
   */
  public constructor(
    status?: HttpResponseStatus,
    data?: any,
    messages?: HttpResponseMessage[]
  ) {
    this._status = status

    if (data) {
      this._data = data
    } else {
      this._data = undefined
    }

    this._messages = messages
  }

  public get messages() {
    return this._messages
  }

  public get status() {
    return this._status
  }

  public get data() {
    return this._data
  }
}

export const enum HttpResponseStatus {
  SUCCESS = 'success',
  FAIL = 'fail',
  ERROR = 'error'
}

export class HttpResponseMessage implements Deserializable {
  private _severity: HttpResponseMessageSeverity
  private message: string

  /**
   * @param severity
   * @param message
   */
  public constructor(severity?: HttpResponseMessageSeverity, message?: string) {
    this._severity = severity
    this.message = message
  }

  public deserialize(input: any): this {
    Object.assign(this, input)
    return this
  }

  get severity(): HttpResponseMessageSeverity {
    return this._severity
  }
}

export const enum HttpResponseMessageSeverity {
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
  INFO = 'primary'
}
