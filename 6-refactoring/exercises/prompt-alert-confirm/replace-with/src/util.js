/**
 * This function replaces characters
 *
 * @params (string) [mainStr = ''] = main string
 * @params (string) [param1 = ''] = first param
 * @params (string) [param2 = ''] = second param
 * @returns (string) returns a new string with the replaced parameters
 */
export const replaceWith = (mainStr = '', param1 = '', param2 = '') => {
    return mainStr
        .split('')
        .map((el) => (el === param1 ? param2 : el))
        .join('');
};
