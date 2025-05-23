'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <p></p>
  <section></section>
  <h1></h1>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
//  replace the <p>
const navElement = document.createElement('nav');
divEl.replaceChild(navElement, divEl.children[0]);

//  insert something before the <section>
const titleElement = document.createElement('h2');
divEl.insertBefore(titleElement, divEl.children[1]);

//  remove the <h1>
divEl.children[3].remove();

//  append something to the end
const paragraphElement = document.createElement('p');
divEl.append(paragraphElement);

// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

console.assert(divEl.childElementCount === 4, 'Test: .childElementCount');

console.assert(divEl.children[0].nodeName === 'NAV', 'Test: 1st child');
console.assert(divEl.children[1].nodeName === 'H2', 'Test: 2nd child');
console.assert(divEl.children[2].nodeName === 'SECTION', 'Test: 3rd child');
console.assert(divEl.children[3].nodeName === 'P', 'Test: 4th child');
