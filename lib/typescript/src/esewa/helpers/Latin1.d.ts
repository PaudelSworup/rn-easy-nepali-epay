import { WordArray } from "./WordArray";
export declare class Latin1 {
    /**
     * Converts a word array to a Latin1 string.
     *
     * @param wordArray The word array.
     *
     * @return The Latin1 string.
     *
     * @example
     *
     *     let latin1String = Latin1.stringify(wordArray);
     */
    static stringify(wordArray: WordArray): string;
    /**
     * Converts a Latin1 string to a word array.
     *
     * @param latin1Str The Latin1 string.
     *
     * @return The word array.
     *
     * @example
     *
     *     let wordArray = Latin1.parse(latin1String);
     */
    static parse(latin1Str: string): WordArray;
}
//# sourceMappingURL=Latin1.d.ts.map