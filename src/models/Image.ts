import { AbstractModel } from "./AbstractModel";

export default class Image extends AbstractModel {

    private _image: any;

    constructor() {
        super();
    }

    get image(): any {
        return this._image;
    }

    set image(value: any) {
        this._image = value;
    }
}
