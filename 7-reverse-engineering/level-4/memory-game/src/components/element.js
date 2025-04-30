import { showElement } from '../logic/showElement.js';
import { dom } from '../data.js';
import { createRandomNum } from '../handlers/createRandomNums.js';

export const element = () => {
    dom.gridContainer.innerHTML = '';

    for (let row of createRandomNum()) {
        row.forEach((num) => {
            const el = document.createElement('div');
            el.classList.add('el');
            showElement(el, num);
            dom.gridContainer.append(el);
        });
    }
};
