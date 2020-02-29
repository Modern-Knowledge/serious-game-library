import { Errortext } from "../models/Errortext";

/**
 * Gets an error text from an array by name.
 *
 * @param errorTexts - Array of error-texts.
 * @param name - The name of the error text.
 * @returns - The specified error text.
 */
export function getErrorText(errorTexts: Errortext[], name: string) {
    const foundErrorText = errorTexts.find(
        (errorText) => errorText.name === name
    );
    if (!foundErrorText) {
        return undefined;
    }
    return new Errortext().deserialize(foundErrorText);
}
