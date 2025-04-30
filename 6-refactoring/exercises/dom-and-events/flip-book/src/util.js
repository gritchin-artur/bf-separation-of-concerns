/**
 *
 * The function reverses a string and upper-cases all the letters
 * @params (string) [str = ''] expects some string
 * @returns (string) returns reverses and upper-cases string
 */
export const reverseAndUpper = (str = '') =>
    str.split('').reverse().join('').toUpperCase();
