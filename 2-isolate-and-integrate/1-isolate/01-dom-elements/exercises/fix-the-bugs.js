'use strict';

const element = document.createElement('buton');
element.innerHtml = 'go home';
element.class = 'large-btn';

// the assertions are correct!  change the code above to pass them
console.assert(element.nodeName === 'BUTON', 'Test 1: nodeName');
console.assert(element.innerHtml === 'go home', 'Test 2: innerHTML');
console.assert(element.class === 'large-btn', 'Test 3: className');
