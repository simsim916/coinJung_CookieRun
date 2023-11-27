'use strict';
let loginList = document.getElementsByClassName('login_list');
let loginWrapper = document.getElementsByClassName('login-wrapper');
let loginWrapper2 = document.getElementsByClassName('login-wrapper2');
let lastBtn = loginList[0].children[0];
lastBtn.style.border="2px solid orange";
lastBtn.style.color= "orange";
loginList[0].addEventListener("click", (event)=>{
    let eventOJ = event.target.closest("li");
    if(eventOJ.style.color != "orange"){
        lastBtn.style.border="2px solid rgb(160, 159, 159)";
        lastBtn.style.color= "rgb(160, 159, 159)";
        eventOJ.style.border="2px solid orange";
        eventOJ.style.color= "orange";
    } else {
        eventOJ.style.border="2px solid rgb(160, 159, 159)";
        eventOJ.style.color= "rgb(160, 159, 159)";
    }
    lastBtn = eventOJ;
   
})
var TitleCookie= document.getElementById("titleCookie");
var TitleKakao= document.getElementById("titleKakao");
var ImgCookie = document.getElementById("imgCookie");
var ImgKakao = document.getElementById("imgKakao");
function changeKakao(){
    //쿠키런 안보이게
    TitleCookie.style.display="none";
    ImgCookie.style.display="none";
    
    //카카오 보이게
    TitleKakao.style.display="";
    ImgKakao.style.display="";
}   
function changeCookie(){
    //쿠키런 보이게
    TitleCookie.style.display="";
    ImgCookie.style.display="";
    
    //카카오 안보이게
    TitleKakao.style.display="none";
    ImgKakao.style.display="none";
}