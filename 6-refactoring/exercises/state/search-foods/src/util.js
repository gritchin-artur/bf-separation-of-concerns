/**
 * This function searches an array of strings and returns formatted results
 *
 * @params (object) [arr = []] array of the strings
 * @params (string) [param = '']  parameter for the sort
 * @returns (object) returns sorted array
 */
export const search = (arr = [], param = '') => {
    let newStr = '';

    if (param === '') {
        return newStr;
    }

    for (let el of arr) {
        if (el.includes(param)) {
            newStr += `\n- ${el}`;
        }
    }

    return newStr;
};
