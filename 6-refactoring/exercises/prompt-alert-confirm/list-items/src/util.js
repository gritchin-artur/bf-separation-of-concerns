/**
 *
 * This function generates a list string from an array of strings
 *
 * @params (object) [arr = []] array of elements
 * @returns (string) returns vertical string of elements
 */
export const list = (arr = []) => {
    // let newString = '';

    // for (let el of arr) {
    //     newString += `\n- ${el}`;
    // }

    // return newString;

    return arr.reduce((acc, el) => acc + `\n- ${el}`, '');
};
