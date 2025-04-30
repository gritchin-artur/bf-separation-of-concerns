import { element } from '../components/element.js';

export const loadWindow = () => {
    window.addEventListener('DOMContentLoaded', element());
};
