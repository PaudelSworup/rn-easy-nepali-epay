import { WordArray } from "./WordArray";
export class Base64 {
  static _map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  static _reverseMap = undefined;

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
  static stringify(wordArray) {
    // Clamp excess bits
    wordArray.clamp();

    // Convert
    const base64Chars = [];
    for (let i = 0; i < wordArray.sigBytes; i += 3) {
      const byte1 = (wordArray.words[i >>> 2] ?? 0 >>> 24 - i % 4 * 8) & 0xff;
      const byte2 = (wordArray.words[i + 1 >>> 2] ?? 0 >>> 24 - (i + 1) % 4 * 8) & 0xff;
      const byte3 = (wordArray.words[i + 2 >>> 2] ?? 0 >>> 24 - (i + 2) % 4 * 8) & 0xff;
      const triplet = byte1 << 16 | byte2 << 8 | byte3;
      for (let j = 0; j < 4 && i + j * 0.75 < wordArray.sigBytes; j++) {
        base64Chars.push(this._map.charAt(triplet >>> 6 * (3 - j) & 0x3f));
      }
    }

    // Add padding
    const paddingChar = this._map.charAt(64);
    if (paddingChar) {
      while (base64Chars.length % 4) {
        base64Chars.push(paddingChar);
      }
    }
    return base64Chars.join("");
  }

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
  static parse(base64Str) {
    // Shortcuts
    let base64StrLength = base64Str.length;
    if (this._reverseMap === undefined) {
      this._reverseMap = [];
      for (let j = 0; j < this._map.length; j++) {
        this._reverseMap[this._map.charCodeAt(j)] = j;
      }
    }

    // Ignore padding
    const paddingChar = this._map.charAt(64);
    if (paddingChar) {
      const paddingIndex = base64Str.indexOf(paddingChar);
      if (paddingIndex !== -1) {
        base64StrLength = paddingIndex;
      }
    }

    // Convert
    return this.parseLoop(base64Str, base64StrLength, this._reverseMap);
  }
  static parseLoop(base64Str, base64StrLength, reverseMap) {
    const words = [];
    let nBytes = 0;
    for (let i = 0; i < base64StrLength; i++) {
      if (i % 4) {
        const bits1 = reverseMap[base64Str.charCodeAt(i - 1)] ?? 0 << i % 4 * 2;
        const bits2 = reverseMap[base64Str.charCodeAt(i)] ?? 0 >>> 6 - i % 4 * 2;
        words[nBytes >>> 2] |= (bits1 | bits2) << 24 - nBytes % 4 * 8; // Non-null assertion
        nBytes++;
      }
    }
    return new WordArray(words, nBytes);
  }
}

// type guard for the formatter (to ensure it has the required static methods)
//# sourceMappingURL=enc-base64.js.map