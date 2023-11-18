'use strict';

let nav = document.querySelector("nav");
let subLi = document.querySelectorAll(".sub_li");
let navBg = document.querySelector("#nav_bg");
let headerCookie = document.querySelector("#header_cookie");
let header = document.querySelector("header");
const headerImg = [
    'https://www.devsisters.com/_next/image?url=%2Fimage%2Fhome%2Fourgames-kingdom-bg.png&w=3840&q=75',
    'https://www.devsisters.com/_next/image?url=%2Fimage%2Fgames%2Fgames-cookierun-about-bg-1.png&w=1920&q=75',
    'https://www.cookierun-kingdom.com/static/keyVisualBackground-719081def4e815414aceaa9537015f67.png',
    'https://www.devsisters.com/_next/image?url=https%3A%2F%2Fdevsweb-devhome-prod-files.s3.ap-northeast-1.amazonaws.com%2Fdata%2Fstory%2F16%2F6400371de87f6.png&w=1920&q=75',
    'https://www.devsisters.com/_next/image?url=https%3A%2F%2Fdevsweb-devhome-prod-files.s3.ap-northeast-1.amazonaws.com%2Fdata%2Fnews%2F555%2F652626cc7a560.jpg&w=750&q=75',
    'https://www.devsisters.com/_next/image?url=https%3A%2F%2Fdevsweb-devhome-prod-files.s3.ap-northeast-1.amazonaws.com%2Fdata%2Fnews%2F558%2F653b51736fb6b.png&w=750&q=75',
    'https://www.devsisters.com/_next/image?url=https%3A%2F%2Fdevsweb-devhome-prod-files.s3.ap-northeast-1.amazonaws.com%2Fdata%2Fnews%2F557%2F6539c7485230d.jpg&w=750&q=75',
    'https://www.devsisters.com/_next/image?url=%2Fimage%2Fhome%2Fourgames-ovenbreak-bg.png&w=3840&q=75',
    'https://www.devsisters.com/_next/image?url=%2Fimage%2Fhome%2Fourgames-braverse-bg.png&w=3840&q=75'
]
const headerImgPosition = [
    'center -150px',
    'center -160px;',
    'center -250px',
    'center -250px',
    'center -250px',
    'center 0px',
    'center -180px',
    'center -100px',
    'center -150px',
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
header.style.backgroundPosition=`${headerImgPosition[random]}`;
header.style.backgroundImage=`url(${headerImg[random]})`;
headerCookie.setAttribute('src',`${cookie[random2]}`);
console.log(random2);

window.addEventListener('scroll',()=>{
    if (parseInt(window.scrollY)) {
        nav.style.backgroundColor="#2b2b37ff";
    } else {
        nav.style.backgroundColor="#2b2b3750";
    }
});
nav.addEventListener('mouseenter',()=>{
    navBg.style.backgroundColor="#2e2e37ff";
    nav.style.backgroundColor="#2b2b37ff";
    for (let a of subLi) a.style.visibility="initial";
});
navBg.addEventListener('mouseout',()=>{
    navBg.style.backgroundColor="initial";
    for (let a of subLi) a.style.visibility="hidden";
    if (parseInt(window.scrollY)) {
        nav.style.backgroundColor="#2b2b37ff";
    } else {
        nav.style.backgroundColor="#2b2b3750";
    }
});