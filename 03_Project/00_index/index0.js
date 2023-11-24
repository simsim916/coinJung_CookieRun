'use strict';

let nav = document.querySelector("nav");
let subLi = document.querySelectorAll(".sub_li");
let navBg = document.querySelector("#nav_bg");
let headerCookie = document.querySelector("#header_cookie");
let header = document.querySelector("header");
let shopSlideImg = document.getElementsByClassName('shop_slide_img');
let lastSlideBtn;
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
];
const indexImg = [
    ['./img/update1.jpg', '11월 업데이트', 0],
    ['./img/event1.png', '모험의 탑', 1],
    ['./img/event2.png', '퍼스트 브레이브', 2],
    ['./img/event3.png', '쿠키런 1조원', 3],
    ['./img/event1.png', '신규 레이드 모드', 4],
    ['./img/event1.png', '신규 쿠키', 5],
    ['./img/event1.png', '7주년 소원캠프', 6]
];
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
];
let productAR = [
    {
        update:'2023-11-20',
        title: '[쿠키런스토어]쿠키런 스키릇팩 피규어',
        intro: '** 1차 수량 품절로, 재입고 예정입니다. 재입고 예정일 : 11/17(금) ~ 20(월)',
        price: 5000,
        img: [
            'https://shop-phinf.pstatic.net/20231114_202/1699953403443Iz8WI_JPEG/52025790832298130_1281338351.jpg?type=m510',
            'https://shop-phinf.pstatic.net/20231114_110/1699953409184PThGI_JPEG/10886639949869620_312616009.jpg?type=m510',
            'https://shop-phinf.pstatic.net/20231114_70/1699953413567rf7dx_JPEG/12503080342079771_653990839.jpg?type=m510'
        ],
        views: 0,
        sell : 0,
        stock: 10
    },
    {
        update: '2023-11-20',
        title: '[쿠키런스토어]쿠키런 랜덤 키체인',
        intro: '** 1차 수량 품절로, 재입고 예정입니다. 재입고 예정일 : 11/17(금) ~ 20(월)',
        price: 5000,
        img: [
            'https://shop-phinf.pstatic.net/20231114_258/1699952949584oLc3t_JPEG/12502616375115323_1205563992.jpg?type=o1000',
            'https://shop-phinf.pstatic.net/20231114_239/1699953157715MKUUp_PNG/12502824501346304_791880017.png?type=m510',
            'https://shop-phinf.pstatic.net/20231114_124/1699952960161AhGyC_PNG/52025347519581164_186066631.png?type=m510',
        ],
        views: 0,
        sell :10,
        stock: 10
    },
    {
        update: '2023-11-20',
        title: '[러블리 인형공방X메리베어 장난감가게]곰젤리 솜인형 분홍곰&노란곰 (예약구매)',
        intro: '※구매 전 주의사항💖 기존 러블리 인형공방 곰젤리 솜인형은 신규 출시된 곰젤리 솜인형 분홍곰과 동일한 사이즈입니다.',
        price: 33900,
        img: [
            'https://shop-phinf.pstatic.net/20231107_123/1699332251801gjxdW_JPEG/2889125558569288_1157254165.jpg?type=m510',
            'https://shop-phinf.pstatic.net/20231107_213/1699332318038Oxyfx_JPEG/21061882862541920_1286727552.jpg?type=m510',
            'https://shop-phinf.pstatic.net/20231107_249/1699332283919gEG1R_JPEG/5049165717078541_2138465965.jpg?type=m510',
        ],
        views: 0,
        sell : 0,
        stock: 0
    },
    {
        update: '2023-11-20',
        title: '[쿠키런스토어]브레이브 어드벤쳐 용감한쿠키',
        intro: '모험을 떠나는 용감한 쿠키가 귀여운 인형 키링으로!',
        price: 2000,
        img: [
            'https://shop-phinf.pstatic.net/20230712_149/1689141723147orsKB_JPEG/3343809127994028_1734275766.jpg?type=m510',
            'https://shop-phinf.pstatic.net/20230712_127/1689141731171yd5hn_JPEG/2472532521839555_309567386.jpg?type=m510',
            'https://shop-phinf.pstatic.net/20230712_86/1689141740472nE1ue_JPEG/2472541823698659_1014661318.jpg?type=m510',
        ],
        views: 0,
        sell : 0,
        stock: 10
    },
    {
        update: '2023-11-20',
        title: '[쿠키런스토어]용과 드래곤 솜인형',
        intro: '[ 용과 드래곤 솜인형 정식 출시! ] 예약구매 종료 후 많은 분들이 재입고 문의러블리 인형공방에서 생산된 귀여운 매력의 용과 드래곤 솜인형을 실물로 만나보세요 💖',
        price: 25500,
        img: [
            'https://shop-phinf.pstatic.net/20230517_44/1684285908800m8pmy_JPEG/37653453786116170_2131712759.jpg?type=m510',
            'https://shop-phinf.pstatic.net/20230517_253/1684285934380zHmLR_JPEG/1328414787855998_52302134.jpg?type=m10000_10000_no_rotate',
            'https://shop-phinf.pstatic.net/20230517_177/16842859454345tSW5_JPEG/1957429866527695_2095394078.jpg?type=m510',
        ],
        views: 0,
        sell : 0,
        stock: 10
    },
    {
        update: '2023-11-20',
        title: '[쿠키런스토어]생일케이크맛 쿠키 멜로디 인형',
        intro: '',
        price: 28900,
        img: [
            'https://shop-phinf.pstatic.net/20230530_41/168541639577879P8x_PNG/331284706142756_1175157606.png?type=m510',
            'https://shop-phinf.pstatic.net/20230530_202/1685416401019ni7bi_PNG/34294242827817026_188283953.png?type=m510',
            'https://shop-phinf.pstatic.net/20230530_147/1685416406452XeL6u_PNG/932495258998725_283619380.png?type=m510',
        ],
        views: 0,
        sell : 0,
        stock: 10
    },


];
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
// main 슬라이드 이미지
{

    // 슬라이드 버튼 & 이미지 생성
    let eventSlide = document.getElementsByClassName('event_slide');
    let eventSlideImg = eventSlide[0].getElementsByClassName('event_slide_img');
    let eventSlideBtn = eventSlide[0].getElementsByClassName('event_slide_btn');
    eventSlideImg[0].innerHTML = `<img src="${indexImg[0][0]}" alt="${indexImg[0][1]}">`;
    for (let i = 0 ; i < indexImg.length; i++){
        eventSlideBtn[0].children[0].innerHTML += `<span>${indexImg[i][1]}</span>`
    }

    // 슬라이드 버튼 선택시 강조
    lastSlideBtn = eventSlideBtn[0].children[0].children[0]; lastSlideBtn.style.opacity="1"
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
}

{
    ARRise();

    for (let i = 0 ; i < 5 ; i++){
        shopSlideImg[0].innerHTML += `<div><img src="${productAR[i].img[0]}" alt="${productAR[i].title}"><p class="item_title">${productAR[i].title}</p></div>`
    }
}

{
    let shopSlideBtn = document.getElementsByClassName('shop_slide_bth');
    let lastSlideLi=shopSlideBtn[0].children[0];
    lastSlideLi.style.opacity="1";
    lastSlideLi.style.width="30px";
    shopSlideBtn[0].addEventListener('click',(event)=>{
        if (event.target.tagName == "LI"){
            lastSlideLi.style.opacity="0.3";
            event.target.style.opacity="1";
            event.target.style.width="30px";
            lastSlideLi.style.width="13px";
            lastSlideLi=event.target;
            shopSlideImg[0].style.transform=`translateX(-${event.target.innerText*20}%)`;
        }
    });
}

function ARRise(){
    for (let i = 0 , t; i < productAR.length-1; i++){
        for (let j = i+1 ; j < productAR.length ; j++) {
            if ( productAR[i].sell > productAR[j].sell){
                t = productAR[i];
                productAR[i] = productAR[j];
                productAR[j] = t;
            }
        }
    }
}

{
    let infoSlide = document.getElementsByClassName('info_slide');
    let num = 0;

    setInterval(()=>{
        infoSlide[]/
    })

}