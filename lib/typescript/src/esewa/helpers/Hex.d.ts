import { WordArray } from "./WordArray";
export declare class Hex {
    /**
     * Converts a word array to a hex string.
     *
     * @param wordArray The word array.
     *
     * @return The hex string.
     *
     * @example
     *
     *     let hexString = Hex.stringify(wordArray);
     */
    static stringify(wordArray: WordArray): string;
    /**
     * Converts a hex string to a word array.
     *
     * @param hexStr The hex string.
     *
     * @return The word array.
     *
     * @example
     *
     *     let wordArray = Hex.parse(hexString);
     */
    static parse(hexStr: string): WordArray;
}
//# sourceMappingURL=Hex.d.ts.map