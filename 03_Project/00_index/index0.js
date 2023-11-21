'use strict';

let nav = document.querySelector("nav");
let subLi = document.querySelectorAll(".sub_li");
let navBg = document.querySelector("#nav_bg");
let headerCookie = document.querySelector("#header_cookie");
let header = document.querySelector("header");
const headerImg = [
    './img/bg1.webp',
    './img/bg2.webp',
    './img/bg3.png',
    './img/bg4.webp',
    './img/bg5.webp',
    './img/bg6.webp',
    './img/bg7.png',
    './img/bg8.png',
    './img/bg9.png',
]
const cookie = [
    "https://i.pinimg.com/originals/5e/a7/82/5ea782dee1243d13f4fcdedf96cb4c4d.gif",
    'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/c27781aa-4293-49cf-e523-c2f63499d700/format=webp',
    'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/4780ff10-2546-42bd-3e01-aafad5678100/format=webp',
    'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/54e1ec2f-823d-4945-f54c-c2c31236ed00/format=webp',
    'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/33f8248a-1aa4-4ce0-b5ea-4294e41f3c00/format=webp',
    'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/07358c75-5680-4547-ea08-c2e5962d9100/format=webp',
    'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/5f4cbe1f-a8cd-417e-fe54-5ca34620da00/format=webp',
    'https://i.ibb.co/W3nhXY6/Madeleinecookiegachaanimation.gif',
    'https://i.ibb.co/kQkRzjB/Lattecookiegachaanimation.gif'
]

let random = Math.floor(Math.random()*headerImg.length);
let random2 = Math.floor(Math.random()*headerImg.length);
header.style.backgroundImage=`url(${headerImg[random]})`;
headerCookie.setAttribute('src',`${cookie[random2]}`);

window.addEventListener('scroll',()=>{
    if (parseInt(window.scrollY) || navBg.style.visibility == "initial") {
        nav.style.backgroundColor="#2b2b37ff";
    } else {
        nav.style.backgroundColor="#2b2b3750";
    }
});
nav.addEventListener('mouseenter',()=>{
    navBg.style.visibility="initial";
    nav.style.backgroundColor="#2b2b37ff";
    for (let a of subLi) a.style.visibility="initial";
});
navBg.addEventListener('mouseout',()=>{
    navBg.style.visibility="hidden";
    for (let a of subLi) a.style.visibility="hidden";
    if (parseInt(window.scrollY) ) {
        nav.style.backgroundColor="#2b2b37ff";
    } else {
        nav.style.backgroundColor="#2b2b3750";
    }
});