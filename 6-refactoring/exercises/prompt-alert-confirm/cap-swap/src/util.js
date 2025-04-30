/**
 *
 *  This Function makes uppercase lowercase, and lowercase uppercase
 *
 * @params (string) [str = ''] input string
 * @returns (string) another string
 */
export const capSwap = (str = '') => {
    let newString = '';

    for (let char of str.split('')) {
        const isUpperCase = char === char.toUpperCase();

        if (isUpperCase) {
            newString += char.toLowerCase();
        } else {
            newString += char.toUpperCase();
        }
    }

    return newString;
};
