/**
 * This function adds a new items that are not in the array
 *
 * @params (object) [arr = []] array of characters
 * @params (string) [el = ''] new element
 * @returns (object) returns modify array
 */
export const saveNoCopies = (arr = [], el = '') => {
    if (el === '') {
        return false;
    }
    return arr.includes(el) ? arr : arr.push(el) && arr;
};
