'use strict';
let loginList = document.getElementsByClassName('login_list');
let lastBtn = loginList[0].children[0];
lastBtn.style.border="2px solid orange";
lastBtn.style.color= "orange";
function changeKakao(event){
    var TitleCookie= document.getElementById("titleCookie");
    var TitleKakao= document.getElementById("titleKakao");
    var ImgCookie = document.getElementById("imgCookie");
    var ImgKakao = document.getElementById("imgKakao");
    let eventOJ = event.target.closest("li");
    //쿠키런 안보이게
    TitleCookie.style.display="none";
    ImgCookie.style.display="none";
    
    //카카오 보이게
    TitleKakao.style.display="";
    ImgKakao.style.display="";
    lastBtn.style.border="2px solid rgb(160, 159, 159)";
    lastBtn.style.color= "rgb(160, 159, 159)";
    eventOJ.style.border="2px solid orange";
    eventOJ.style.color= "orange";
    lastBtn = eventOJ;
}   
function changeCookie(event){
    var TitleCookie= document.getElementById("titleCookie");
    var TitleKakao= document.getElementById("titleKakao");
    var ImgCookie = document.getElementById("imgCookie");
    var ImgKakao = document.getElementById("imgKakao");
    let eventOJ = event.target.closest("li");
    //쿠키런 보이게
    TitleCookie.style.display="";
    ImgCookie.style.display="";
    
    //카카오 안보이게
    TitleKakao.style.display="none";
    ImgKakao.style.display="none";
    lastBtn.style.border="2px solid rgb(160, 159, 159)";
    lastBtn.style.color= "rgb(160, 159, 159)";
    eventOJ.style.border="2px solid orange";
    eventOJ.style.color= "orange";
    lastBtn = eventOJ;
}