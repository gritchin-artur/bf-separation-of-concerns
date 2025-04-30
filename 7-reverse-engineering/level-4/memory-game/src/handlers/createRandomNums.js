export const createRandomNum = () => {
    let numbers = [];
    for (let i = 0; i < 8; i++) {
        numbers.push(i, i);
    }

    numbers.sort(() => Math.random() - 0.5);

    const grid = [];
    while (numbers.length) {
        grid.push(numbers.splice(0, 4));
    }
    return grid;
};
