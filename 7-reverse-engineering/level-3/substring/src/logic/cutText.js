import { dom } from '../data.js';

export const cutText = () => {
    let newText = '';
    const display = document.createElement('p');
    display.innerHTML = '';

    dom.form.addEventListener('change', (e) => {
        switch (e.target.id) {
            case 'text':
                newText = e.target.value;
                display.innerHTML = newText;
                break;
            case 'start':
                display.innerHTML = newText.slice(e.target.value);
                break;
            case 'lenght':
                display.innerHTML = newText.slice(0, -e.target.value);
        }
    });

    dom.form.appendChild(display);
};
