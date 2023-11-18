'use strict';

let vedioBox = document.getElementsByClassName('main_media_box');
let vedioContainer = document.getElementsByClassName('main_media_container');

console.log(vedioBox);


console.log(vedioBox[0].style);
// vedioBox[0].style.gridColumn="1 / 4";
// vedioBox[0].style.gridRow="1 / 3";
vedioContainer[0].addEventListener('click',(event)=>{
    console.log('aaaaaa')
    console.log(event.target)
    const eventOJ = event.target.closest('.main_media_box')
    for (let i = 0; i < vedioBox.length ; i++) {
        vedioBox[i].style.gridColumn="initial";
        vedioBox[i].style.gridRow="initial";
    }
    if(vedioContainer[0].contains(eventOJ)){
        eventOJ.style.gridColumn="1 / 4";
        eventOJ.style.gridRow="1 / 3";
    }
})
// vedioBox[1].addEventListener('click',(event)=>{
//     const eventOJ = event.target.closest('.main_media_box')
//     for (let i = 0; i < vedioBox.length ; i++) {
//         vedioBox[i].style.gridColumn="initial";
//         vedioBox[i].style.gridRow="initial";
//     }
//     if(vedioBox[1].contains(eventOJ)){
//         eventOJ.style.gridColumn="1 / 4";
//         eventOJ.style.gridRow="1 / 3";
//     }
// })
// vedioBox[2].addEventListener('click',(event)=>{
//     const eventOJ = event.target.closest('.main_media_box')
//     for (let i = 0; i < vedioBox.length ; i++) {
//         vedioBox[i].style.gridColumn="initial";
//         vedioBox[i].style.gridRow="initial";
//     }
//     if(vedioBox[2].contains(eventOJ)){
//         eventOJ.style.gridColumn="1 / 4";
//         eventOJ.style.gridRow="1 / 3";
//     }
// })
// vedioBox[3].addEventListener('click',(event)=>{
//     const eventOJ = event.target.closest('.main_media_box')
//     for (let i = 0; i < vedioBox.length ; i++) {
//         vedioBox[i].style.gridColumn="initial";
//         vedioBox[i].style.gridRow="initial";
//     }
//     if(vedioBox[3].contains(eventOJ)){
//         eventOJ.style.gridColumn="1 / 4";
//         eventOJ.style.gridRow="1 / 3";
//     }
// })
// vedioBox[4].addEventListener('click',(event)=>{
//     const eventOJ = event.target.closest('.main_media_box')
//     for (let i = 0; i < vedioBox.length ; i++) {
//         vedioBox[i].style.gridColumn="initial";
//         vedioBox[i].style.gridRow="initial";
//     }
//     if(vedioBox[4].contains(eventOJ)){
//         eventOJ.style.gridColumn="1 / 4";
//         eventOJ.style.gridRow="1 / 3";
//     }
// })