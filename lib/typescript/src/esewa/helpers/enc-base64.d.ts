import { WordArray } from "./WordArray";
export declare class Base64 {
    static _map: string;
    static _reverseMap: Array<number> | undefined;
    /**
     * Converts a word array to a Base64 string.
     *
     * @param wordArray The word array.
     *
     * @return The Base64 string.
     *
     * @example
     *
     *     let base64String = Base64.stringify(wordArray);
     */
    static stringify(wordArray: WordArray): string;
    /**
     * Converts a Base64 string to a word array.
     *
     * @param base64Str The Base64 string.
     *
     * @return The word array.
     *
     * @example
     *
     *     let wordArray = Base64.parse(base64String);
     */
    static parse(base64Str: string): WordArray;
    static parseLoop(base64Str: string, base64StrLength: number, reverseMap: Array<number>): WordArray;
}
//# sourceMappingURL=enc-base64.d.ts.map