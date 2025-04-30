import { dom } from '../data.js';

export const changeColor = () => {
    let newColor = '#000000';

    dom.mainContainer.addEventListener('change', (e) => {
        e.preventDefault();

        const colorArray = newColor.split('');

        switch (e.target.id) {
            case 'first-el':
                colorArray[1] = e.target.value;
                break;
            case 'second-el':
                colorArray[2] = e.target.value;
                break;
            case 'third-el':
                colorArray[3] = e.target.value;
                break;
            case 'forth-el':
                colorArray[4] = e.target.value;
                break;
            case 'fifth-el':
                colorArray[5] = e.target.value;
                break;
            case 'sixth-el':
                colorArray[6] = e.target.value;
                break;
        }

        newColor = colorArray.join('');

        dom.displayColor.innerText = `background-color: ${newColor};`;
        dom.screen.style.backgroundColor = newColor;
    });
};
