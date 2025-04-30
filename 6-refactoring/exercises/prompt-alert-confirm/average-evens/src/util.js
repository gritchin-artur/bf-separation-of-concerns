/**
 * This function returns averages all even numbers in an array
 *
 * @params (object) [arr = []] array of numbers
 * @returns (number) returns averages all even numbers
 */
export const averageEvens = (arr = []) => {
    let newArr = [];

    for (const num of arr) {
        if (num % 2 === 0) {
            newArr.push(num);
        }
    }

    if (newArr.length === 0) return 0;

    const addingNumbers = newArr.reduce((acc, num) => acc + num, 0);
    const averageNumber = addingNumbers / newArr.length;

    return averageNumber;
};
