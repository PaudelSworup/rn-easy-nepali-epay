import type { Encoding } from "./Encoding";
export declare class WordArray {
    words: Array<number>;
    sigBytes: number;
    /**
     * Creates a word array filled with random bytes.
     *
     * @param nBytes The number of random bytes to generate.
     *
     * @return The random word array.
     *
     * @example
     *
     *     let wordArray = WordArray.random(16);
     */
    static random(nBytes: number): WordArray;
    /**
     * Initializes a newly created word array.
     *
     * @param words (Optional) An array of 32-bit words.
     * @param sigBytes (Optional) The number of significant bytes in the words.
     *
     * @example
     *
     *     let wordArray = new WordArray();
     *     let wordArray = new WordArray([0x00010203, 0x04050607]);
     *     let wordArray = new WordArray([0x00010203, 0x04050607], 6);
     */
    constructor(words?: Array<number>, sigBytes?: number);
    /**
     * Converts this word array to a string.
     *
     * @param encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
     *
     * @return The stringified word array.
     *
     * @example
     *
     *     let string = wordArray + '';
     *     let string = wordArray.toString();
     *     let string = wordArray.toString(CryptoJS.enc.Utf8);
     */
    toString(encoder?: Encoding): string;
    /**
     * Concatenates a word array to this word array.
     *
     * @param wordArray The word array to append.
     *
     * @return This word array.
     *
     * @example
     *
     *     wordArray1.concat(wordArray2);
     */
    concat(wordArray: WordArray): WordArray;
    /**
     * Removes insignificant bits.
     *
     * @example
     *
     *     wordArray.clamp();
     */
    clamp(): void;
    /**
     * Creates a copy of this word array.
     *
     * @return The clone.
     *
     * @example
     *
     *     let clone = wordArray.clone();
     */
    clone(): WordArray;
}
//# sourceMappingURL=WordArray.d.ts.map