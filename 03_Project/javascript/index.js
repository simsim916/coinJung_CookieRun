'use strict';

let nav = document.querySelector("nav");

console.log(nav);
console.log(parseInt(window.scrollY));
window.addEventListener('scroll',()=>{
    if (parseInt(window.scrollY)) {
        nav.style.backgroundColor="#2b2b37ff";
    } else {
        nav.style.backgroundColor="#2b2b3750";
    }
})
