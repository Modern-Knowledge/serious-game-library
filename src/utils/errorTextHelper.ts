import { Logger, LoggingService } from "ionic-logging-service";

import { Errortext } from "../models/Errortext";

/**
 * Gets an error text from by name.
 * @params error texts - The errortexts.
 * @param name - The name of the error text.
 * @returns - The specified error text.
 */
export function getErrorText(errorTexts: Errortext[], name: string) {
    const logger: Logger = new LoggingService().getLogger("getItemById");
    const foundErrorText = errorTexts.find(
        (errorText) => errorText.name === name
    );
    if (!foundErrorText) {
        logger.error("Error text not found");
        return undefined;
    }
    return new Errortext().deserialize(foundErrorText);
}
