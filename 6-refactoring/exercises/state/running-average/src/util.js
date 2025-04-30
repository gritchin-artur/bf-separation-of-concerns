/**
 * This function returns the average of an array of numbers
 *
 * @params (object) [arr = []] array of numbers
 * @returns (number) returns average number
 */
export const average = (arr = []) => {
    if (arr.length === 0) {
        return 0;
    }

    const sumOfNum = arr.reduce((acc, num) => acc + num, 0);
    const averageNum = sumOfNum / arr.length;

    return averageNum;
};
