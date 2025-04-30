import { dom } from '../data.js';

export const changeTextParam = () => {
    dom.form.addEventListener('change', (e) => {
        switch (e.target.name) {
            case 'emphasis':
                if (e.target.value === 'bold') {
                    dom.displaysText.style.fontWeight = e.target.value;
                    dom.displaysText.style.fontStyle = '';
                } else if (e.target.value === 'italic') {
                    dom.displaysText.style.fontStyle = e.target.value;
                    dom.displaysText.style.fontWeight = '';
                } else {
                    dom.displaysText.style.fontStyle = '';
                    dom.displaysText.style.fontWeight = '';
                }
                break;

            case 'size':
                dom.displaysText.style.fontSize = e.target.value;
                break;

            case 'color':
                dom.displaysText.style.color = e.target.value;
                break;
        }
    });
};
