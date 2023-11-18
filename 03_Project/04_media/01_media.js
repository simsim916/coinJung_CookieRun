'use strict';

let vedioBox = document.getElementsByClassName('main_media_box');
let vedioContainer = document.getElementsByClassName('main_media_container');



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