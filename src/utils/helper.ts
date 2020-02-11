import { Text } from "../models/Text";

/**
 * converts a texts[] into a map where the key is the name
 * @param texts array of texts that should be converted to a map
 */
export function toMap(texts: Text[]): Map<string, Text> {
    const map = new Map<string, Text>();

    for (const item of texts) {
       map.set(item.name, item);
    }

    return map;
}

/**
 * Returns true if the app is running in production-mode.
 */
export function inProduction(): boolean {
    return process.env.NODE_ENV === "production";
}

/**
 * Returns true if the app is running in test-mode.
 */
export function inTestMode(): boolean {
    return process.env.NODE_ENV === "test";
}
