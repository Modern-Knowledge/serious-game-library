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
 * Shuffles items.
 * Based on the modern Fisher-Yates-shuffle algorithm.
 * [https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm]
 * @param items The items to shuffle.
 */
export function shuffle(items: any[]) {
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
}
