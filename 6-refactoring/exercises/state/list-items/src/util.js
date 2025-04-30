/**
 * This function generates a list string from an array of strings
 *
 * @params (object) [arr = []] array of characters
 * @params (object) [char = ''] initial newline character
 * @returns (string) returns the string from the characters in the array
 */
export const list = (arr = [], char = '') =>
    arr.map((el) => `\n${char} ${el}`).join('');
