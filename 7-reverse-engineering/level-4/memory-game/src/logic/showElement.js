export function showElement(el, num) {
    el.addEventListener('mouseenter', () => {
        if (!el.classList.contains('clicked')) {
            el.innerText = num;
        }
    });

    el.addEventListener('mouseleave', () => {
        if (!el.classList.contains('clicked')) {
            el.innerText = '';
        }
    });

    el.addEventListener('click', () => {
        if (el.innerText === num && el.classList.contains('clicked')) {
            el.innerText = '';
            el.classList.remove('clicked');
        } else {
            el.innerText = num;
            el.classList.toggle('clicked');
        }
    });
}
