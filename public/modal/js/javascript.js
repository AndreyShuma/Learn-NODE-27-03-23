'use strict';

const wrapper = document.querySelector('.wrapper');
const btn = document.querySelector('.btn');
const btn_close = document.querySelector('.btn-close');

btn.addEventListener('click', () => {
    wrapper.classList.add('show');
});
btn_close.addEventListener('click', () => {
    wrapper.classList.remove('show');
});

// console.log(btn);
// console.log(wrapper);
// console.log('Helow!!');

const elem = document.getElementById('zoo');

const elemNodes = elem.childNodes;
const elemChildren = elem.children;
console.log(elemNodes);
console.log(elemChildren);

const arrNodes =  Array.from(elemNodes);
const arrChildren =  Array.from(elemChildren);
// console.log(arrNodes);
// console.log(arrChildren);

// console.log(arrNodes.forEach(item => console.log(item)));

const p = {
    name: 'cat',
    age: 2,
    // lenght: 3
};

console.log(p);

