// this file is the program's Entry Point
debugger;

const dom = {
    colorInput: document.getElementById('color'),
    userInterface: document.getElementById('user-interface'),
};

userInterface.style.backgroundColor = colorInput.value;

colorInput.addEventListener('change', (event) => {
    userInterface.style.backgroundColor = event.target.value;
});
