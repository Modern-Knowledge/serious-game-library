/**
 * replace placeholder variables in texts
 */
export class TemplateParser {
    private _params: string[] = [];

    /**
     * @param params params that should be replaced in the text
     */
    public constructor(params?: string[]) {
        if (params) {
            this._params = params;
        }
    }

    /**
     * replaces the placeholder variables with real values
     * if variable amount does not match the specified, warnings and errors are printed
     * @param text string that ist processed
     */
    public parse(text: string, params?: string[]): string {
        const regexp: RegExp = new RegExp("::(.*?)::", "g");
        const matched: RegExpMatchArray = text.match(regexp);
        const parameters = params ? params : this._params;

        if (matched === null) {
            const errorStr = `No variables to replace!`;
            throw new Error(errorStr);
        }

        if (matched.length > parameters.length) {
            const errorStr = `Not enough replacement variables passed!`;
            throw new Error(errorStr);
        }

        for (let i = 0; i < matched.length; i++) {
            text = text.replace(matched[i], parameters[i]);
        }

        return text;
    }

    set params(value: string[]) {
        this._params = value;
    }
}
