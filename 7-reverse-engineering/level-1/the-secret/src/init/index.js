// this file is the program's Entry Point
debugger;

const el = document.getElementById('user-interface');

el.addEventListener('mouseover', () => {
    el.innerText = 'water is blue';
});

el.addEventListener('mouseout   ', () => {
    el.innerText = '';
});
