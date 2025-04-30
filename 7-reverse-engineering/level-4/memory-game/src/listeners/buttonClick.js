import { element } from '../components/element.js';
import { dom } from '../data.js';
import { createRandomNum } from '../handlers/createRandomNums.js';

export const buttonClick = () => {
    dom.newGameBtn.addEventListener('click', () => {
        createRandomNum();
        element();
    });
};
