'use strict';





// 인덱스 작성
{
    const slideMenu = [
        {html : `<div><img src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/54e1ec2f-823d-4945-f54c-c2c31236ed00/format=webp" alt=""><p>새소식</p><p>쿠키 세상의 새로운 소식을 만나보세요!</p></div>`,
        bgcolor : `#a71c44`},
        {html : `<div><img src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/e3cec218-533b-4c5b-54b1-b8cd0ff19c00/format=webp" alt=""><p>게임 정보</p><p>다양한 쿠키들과 짜릿한 액션을 즐겨보세요!</p></div>`,
        bgcolor : `#d08e4e`},
        {html : `<div><img src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/4780ff10-2546-42bd-3e01-aafad5678100/format=avif" alt=""><p>커뮤니티</p><p>유저분들의 생각과 의견을 공유해주세요!</p></div>`,
        bgcolor : `#E5B532` },
        {html : `<div><img src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/5c73d6cf-acca-4794-2c6b-e7657f07d500/format=webp" alt=""><p>미디어</p><p>게임 밖 쿠키들의 이야기를 들어보세요!</p></div>`,
        bgcolor : `#E5B532`},
        {html : `<div><img src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/5c73d6cf-acca-4794-2c6b-e7657f07d500/format=webp" alt=""><p>SHOP</p><p>쿠키들의 다양한 상품들을 만나보세요!</p></div>`,
        bgcolor : `#E5B532`},
        {html : `<div><img src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/5c73d6cf-acca-4794-2c6b-e7657f07d500/format=webp" alt=""><p>고객센터</p><p>유저의 이야기를 직접 전달해주세요!</p></div>`,
        bgcolor : `#E5B532`}
    ]
    let nav = document.querySelector("nav");
    let subLi = document.querySelectorAll(".sub_li");
    let navBg = document.querySelector("#nav_bg");
    let headerCookie = document.querySelector("#header_cookie");
    let header = document.querySelector("header");
    let shopSlideImg = document.getElementsByClassName('shop_slide_img');
    let lastSlideBtn;

//(스크립트) nav 백그라운드 이미지
{
fetch("http://localhost:3000/headerImg")
.then(response=>response.json())
.then(json => 
    header.style.backgroundImage=`url(${json[0][Math.floor(Math.random()*json[0].length)]})`
)
}

//(스크립트) nav 쿠키 gif
{
fetch("http://localhost:3000/cookieGIF")
.then(response=>response.json())
.then(json => 
    headerCookie.setAttribute('src',`${json[0][Math.floor(Math.random()*json[0].length)]}`)
)
}

//(스크립트) main 슬라이드 이미지
{
    // 슬라이드 버튼 & 이미지 생성
    let eventSlide = document.getElementsByClassName('event_slide');
    let eventSlideImg = eventSlide[0].getElementsByClassName('event_slide_img');
    let eventSlideBtn = eventSlide[0].getElementsByClassName('event_slide_btn');
    fetch("http://localhost:3000/eventImg")
    .then(response=>response.json())
    .then(json => {
        eventSlideImg[0].innerHTML = `<img src="${json[0][0][0]}" alt="${json[0][0][1]}">`;
        for (let i = 0 ; i < json[0].length; i++){
            eventSlideBtn[0].children[0].innerHTML += `<span>${json[0][i][1]}</span>`
        }
        // 슬라이드 버튼 선택시 강조
        lastSlideBtn = eventSlideBtn[0].children[0].children[0]; 
        lastSlideBtn.style.opacity="1";
        eventSlide[0].addEventListener('click',(event)=>{
            if(event.target.tagName == 'SPAN'){
                lastSlideBtn.style.opacity = "0.7";
                event.target.style.opacity = "1";
                lastSlideBtn = event.target;
                for(let i of indexImg) {
                    if( i[1] == lastSlideBtn.innerText) {
                        eventSlideImg[0].children[0].src=`${i[0]}`
                    }
                }
            }
        })
    })
}

//(스크립트) main 우측 제품 슬라이드 이미지
{
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
}

//(스크립트) main 우측 제품 슬라이드 버튼
{
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
}

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
{
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
}

}

let lastMainAr = [],
     lastHeadAr = [];
let lastMain = document.getElementById('main').innerHTML;
let lastHead = document.getElementById('headBottom').innerHTML;

lastMainAr.push(lastMain);
lastHeadAr.push(lastHead);


// {
//     let infoSlide = document.getElementsByClassName('info_slide');
//     let num = 0;

//     setInterval(()=>{
//         infoSlide[num].style.transform=
//     })

// }
