// this file is the program's Entry Point
// debugger;

const dom = {
    board: document.getElementById('board'),
    button: document.getElementById('reset'),
};

let click = 0;
dom.board.addEventListener('click', (e) => {
    if (e.target.innerText === '' && click <= 9) {
        const clicked = document.getElementById(e.target.id);
        if (click % 2 === 0) {
            clicked.innerText = 'X';
        } else {
            clicked.innerText = 'Y';
        }
        click++;
    }
});

dom.button.addEventListener('click', () => {
    const cells = document.querySelectorAll('td');
    cells.forEach((cell) => {
        cell.innerText = '';
    });
    click = 0;
});
