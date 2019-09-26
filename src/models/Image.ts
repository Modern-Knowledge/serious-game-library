import { AbstractModel } from "./AbstractModel";

export class Image extends AbstractModel<Image> {

    private _image: any;

    public constructor() {
        super();
    }

    get image(): any {
        return this._image;
    }

    set image(value: any) {
        this._image = value;
    }
}
