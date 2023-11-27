'use strict';
let indexBox = document.getElementById('indexBox');

indexWrite ();

let subLi = document.querySelectorAll(".sub_li");
let headerCookie = document.querySelector("#header_cookie");
let header = document.querySelector("header");
let shopSlideImg = document.getElementsByClassName('shop_slide_img');
let eventSlide = document.getElementsByClassName('event_slide');
let eventSlideImg = eventSlide[0].getElementsByClassName('event_slide_img');
let eventSlideBtn = eventSlide[0].getElementsByClassName('event_slide_btn');
console.log(eventSlideBtn[0].children[0].children[0])
let lastSlideBtn = eventSlideBtn[0].children[0].children[0]; lastSlideBtn.style.opacity="1";


// 상품 슬라이드 버튼 
function shopslideBtn(event){
    if(event.target.tagName == 'SPAN'){
        lastSlideBtn.style.opacity = "0.7";
        event.target.style.opacity = "1";
        lastSlideBtn = event.target;
        for(let i of indexImg) {if( i[1] == lastSlideBtn.innerText) eventSlideImg[0].children[0].src=`${i[0]}`;}
    }
}

// 인덱스 작성
function indexWrite (){
    indexBox.innerHTML=`<div id="headBottom" class="header_bottom">
    <div class="container">
        <div class="header_left">
            <img src="./img/update1_mini.jpg" alt="">
            <div>
                <p>업데이트 정보센터</p>
                <p>2023.11.21<br>ver.1.2.382 업데이트 </p>
            </div>
        </div>
        <img src="./img/index_logo.png" alt="">
        <div class="header_right">
            <div class="dev_login">Devsisters<br>로그인</div>
            <div class="kakao_login">Kakao <br>로그인</div>
        </div>
    </div>
    </div>
    <main id="main">
    <div class="img_box container">
        <div class="event_slide">
            <div>
                <i class="fa-solid fa-chevron-left"></i>
                <i class="fa-solid fa-pause"></i>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div class="event_slide_img">
            </div>
            <div class="event_slide_btn">
                <div>
                </div>
            </div>
        </div>
        <div class="shop_slide">
            <img src="./img/cookierunstore.jpg" alt="">
            <p>주간의 인기 상품</p>
            <div class="shop_slide_img">
            </div>
            <lu class="shop_slide_bth">
                <li onclick="shopslideBtn">0</li>
                <li onclick="shopslideBtn">1</li>
                <li onclick="shopslideBtn">2</li>
                <li onclick="shopslideBtn">3</li>
                <li onclick="shopslideBtn">4</li>
            </lu>
        </div>

    </div>
    <hr>
    <div class="main_info container">
        <div>
            <h3>쿠키런 킹덤<br>새소식</h3>
            <div>새소식 보러가기 <i class="fa-solid fa-square-caret-right"></i></div>
        </div>
        <div>
            <div class="info_slide">
                <div>
                    <img src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/54e1ec2f-823d-4945-f54c-c2c31236ed00/format=webp" alt="">
                    <p>새소식</p>
                    <p>쿠키 세상의 새로운 소식을 만나보세요!</p>
                </div>
                <div>
                    <img src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/e3cec218-533b-4c5b-54b1-b8cd0ff19c00/format=webp" alt="">
                    <p>게임 정보</p>
                    <p>다양한 쿠키들과 짜릿한 액션을 즐겨보세요!</p>
                </div>
                <div>
                    <img src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/4780ff10-2546-42bd-3e01-aafad5678100/format=avif" alt="">
                    <p>커뮤니티</p>
                    <p>유저분들의 생각과 의견을 공유해주세요!</p>
                </div>
                <div>
                    <p>미디어</p>
                    <p>게임 밖 쿠키들의 이야기를 들어보세요!</p>
                </div>
                <div>
                    <p>SHOP</p>
                    <p>쿠키들의 다양한 상품들을 만나보세요!</p>
                </div>
                <div>
                    <p>고객센터</p>
                    <p>유저의 이야기를 직접 전달해주세요!</p>
                </div>
            </div>
        </div>
    </div>
    </main>`;

//(스크립트) nav 백그라운드 이미지
fetch("http://localhost:3000/headerImg")
.then(response=>response.json())
.then(json => 
    header.style.backgroundImage=`url(${json[0][Math.floor(Math.random()*json[0].length)]})`
)

//(스크립트) nav 쿠키 gif
fetch("http://localhost:3000/cookieGIF")
.then(response=>response.json())
.then(json => 
    headerCookie.setAttribute('src',`${json[0][Math.floor(Math.random()*json[0].length)]}`)
)

//(스크립트) main 슬라이드 이미지
    // 슬라이드 버튼 & 이미지 생성
fetch("http://localhost:3000/eventImg")
.then(response=>response.json())
.then(json => {
    eventSlideImg[0].innerHTML = `<img src="${json[0][0][0]}" alt="${json[0][0][1]}">`;
    for (let i = 0 ; i < json[0].length; i++){
        eventSlideBtn[0].children[0].innerHTML += `<span onclick="eventslideBtn(event)">${json[0][i][1]}</span>`
    }
    // 슬라이드 버튼 선택시 강조
})
    

//(스크립트) main 우측 제품 슬라이드 이미지
fetch("http://localhost:3000/product")
.then(response=>response.json())
.then(json => {
        for (let i = 0 , t; i < json[0].length-1; i++){
            for (let j = i+1 ; j < json[0].length ; j++) {
                if ( json[0][i].price > json[0][j].price){
                    t = json[0][i];
                    json[0][i] = json[0][j];
                    json[0][j] = t;
                }
            }
        }
    for (let i = 0 ; i < 5 ; i++){
        shopSlideImg[0].innerHTML += `<div><img src="${json[0][i].img[0]}" alt="${json[0][i].title}"><p class="item_title">${json[0][i].title}</p></div>`
    }
})


//(스크립트) main 우측 제품 슬라이드 버튼
let shopSlideBtn = document.getElementsByClassName('shop_slide_bth');
let lastSlideLi=shopSlideBtn[0].children[0];
lastSlideLi.style.opacity="1";
lastSlideLi.style.width="30px";
shopSlideBtn[0].addEventListener('click',(event)=>{
    if(event.target != lastSlideLi){
        if (event.target.tagName == "LI"){
            lastSlideLi.style.opacity="0.3";
            event.target.style.opacity="1";
            event.target.style.width="30px";
            lastSlideLi.style.width="13px";
            lastSlideLi=event.target;
            shopSlideImg[0].style.transform=`translateX(-${event.target.innerText*20}%)`;
        }
    }
});

//(이벤트) nav 스크롤에따라 진하기 
{
window.addEventListener('scroll',()=>{
    if (parseInt(window.scrollY) || navBg.style.visibility == "initial") {
        nav.style.backgroundColor="#2b2b37ff";
    } else {
        nav.style.backgroundColor="#2b2b3750";
    }
});
}

//(이벤트) nav 마우스 진입시 서브메뉴 펼치기
let nav = document.querySelector("nav");
nav.addEventListener('mouseenter',()=>{
    navBg.style.visibility="initial";
    nav.style.backgroundColor="#2b2b37ff";
    for (let a of subLi) a.style.visibility="initial";
});
let navBg = document.querySelector("#nav_bg");
navBg.addEventListener('mouseout',()=>{
    navBg.style.visibility="hidden";
    for (let a of subLi) a.style.visibility="hidden";
    if (parseInt(window.scrollY) ) {
        nav.style.backgroundColor="#2b2b37ff";
    } else {
        nav.style.backgroundColor="#2b2b3750";
    }
});


}

let backBtn = document.getElementById('backBtn');

function cookieinfoWrite(){
    {
        main.innerHTML = `<h3>쿠키소개</h3><div class="main_option">
        <img src="./img/tag_all.png" alt="올" class="selected">
        <img src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/e6cc601e-19ee-421b-e936-9cdd20eaf100/public" alt="에픽">
        <img src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/dc7567c4-7d16-4017-52c2-4586e7112500/public" alt="스페셜">
        <img src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/fb2bbed1-186c-4edf-1741-7edb8cdf7100/public" alt="레전더리">
        <img src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/ef97da70-b550-428a-c03c-ed4db59a9300/public" alt="슈퍼에픽">
        <img src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/b80b67b8-dc5c-49e3-07ca-f1673e459100/public" alt="에이션트">
        <img src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/9ea3ad41-1df7-4b8e-0e52-3c1f9ac48400/public" alt="드래곤">
    </div> <div class="main_list"></div>`;
    let mainList = document.getElementsByClassName('main_list');
    fetch("http://localhost:3000/cookieData")
    .then(response=>response.json())
    .then(json => {
    for (let i = 0; i < json[0].length; i++) {
        mainList[0].innerHTML += `<div class="main_list_box"><img src="${json[0][i].img}" alt="${json[0][i].name}"><div class="main_list_item_name">${json[0][i].name}</div><div class="main_list_item_type"><img src="${cookieType(json[0][i].type)}" alt="${json[0][i].type}"></div></div>`
    }
    mainList[0].addEventListener('click', detail);

    function detail(event) {
        let eventOJ = event.target.closest('.main_list_box')
        let cookieName = eventOJ.children[1].innerText;
        let compare;
        for (let i = 0; i <  json[0].length; i++) {
            if (cookieName ==  json[0][i].name) {
                compare = i;
            }
        }
        main.innerHTML =
            `<h3 class="back_button">뒤로가기</h3>
            <div class="main_info_container"><img src="${ json[0][compare].img}" alt="${ json[0][compare].name}">
            <div class="main_info_pic"></div>
            <div class="main_info_self">
                <div class="grid_box1"><img src="${cookieType( json[0][compare].type)}" alt="${ json[0][compare].type}"></div>
                <div class="grid_box2">${ json[0][compare].name}</div>
                <p class="cookie_self">${ json[0][compare].info}</p>
            </div>
        </div>
        <div class="intro_box">
            <div class="skill_box">
                <p class="skill">스킬</p>
                <img src="${ json[0][compare].skill.skillImg}" alt="${ json[0][compare].skill.skillName}">
                <p class="skill_name">${ json[0][compare].skill.skillName}</p>
                <p class="skill_intro">${ json[0][compare].skill.skillInfo}</p>
            </div>
        </div>`;
    }
    })
    }
}
function cookieType(cookieType) {
    switch (cookieType) {
        case "에픽":
            return 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/e6cc601e-19ee-421b-e936-9cdd20eaf100/public'
        case "레전더리":
            return 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/fb2bbed1-186c-4edf-1741-7edb8cdf7100/public'
        case "슈퍼에픽":
            return 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/ef97da70-b550-428a-c03c-ed4db59a9300/public'
        case "스페셜":
            return 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/dc7567c4-7d16-4017-52c2-4586e7112500/public'
        case "에이션트":
            return 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/b80b67b8-dc5c-49e3-07ca-f1673e459100/public'
        case "드래곤":
            return 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/9ea3ad41-1df7-4b8e-0e52-3c1f9ac48400/public'
    }
}



function eventslideBtn(event){
    fetch("http://localhost:3000/eventImg")
    .then(response=>response.json())
    .then(json => {
    lastSlideBtn.style.opacity="1";
    if(event.target.tagName == 'SPAN'){
        lastSlideBtn.style.opacity = "0.7";
        event.target.style.opacity = "1";
        lastSlideBtn = event.target;
        for(let i of json[0]) {if( i[1] == lastSlideBtn.innerText) eventSlideImg[0].children[0].src=`${i[0]}`;}
    }
})
}