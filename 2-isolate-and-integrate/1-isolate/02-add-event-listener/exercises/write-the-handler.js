'use strict';

// fill in the gaps

const buttonEl = document.createElement('button');
buttonEl.innerHTML = 'are you honest?';
console.log(buttonEl.nodeName, buttonEl.cloneNode(true));

const truthTestHandler = () => {
    // ask a user to confirm if they are honest

    const isHonest = confirm('Are you honest?');

    // let them know what you think of their answer

    if (isHonest) {
        alert("I'm glad to hear it!");
    } else {
        alert("It's sad to know!");
    }
};

buttonEl.addEventListener('click', truthTestHandler);

// "click" the button once
const clickEvent1 = new Event('click');
buttonEl.dispatchEvent(clickEvent1);

// "click" the button again
const clickEvent2 = new Event('click');
buttonEl.dispatchEvent(clickEvent2);
