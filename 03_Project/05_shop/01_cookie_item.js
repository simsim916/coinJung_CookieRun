'use strict';

let productAR = [
    {
        update: '2023-11-20',
        title: '[쿠키런스토어]쿠키런 스키릇팩 피규어',
        intro: '** 1차 수량 품절로, 재입고 예정입니다. 재입고 예정일 : 11/17(금) ~ 20(월)',
        price: 5000,
        img: [
            'https://shop-phinf.pstatic.net/20231114_202/1699953403443Iz8WI_JPEG/52025790832298130_1281338351.jpg?type=m510',
            'https://shop-phinf.pstatic.net/20231114_110/1699953409184PThGI_JPEG/10886639949869620_312616009.jpg?type=m510',
            'https://shop-phinf.pstatic.net/20231114_70/1699953413567rf7dx_JPEG/12503080342079771_653990839.jpg?type=m510'
        ],
        views: 100,
        sell: 15,
        stock: 10
    },
    {
        update: '2023-01-10',
        title: '[쿠키런스토어]쿠키런 랜덤 키체인',
        intro: '** 1차 수량 품절로, 재입고 예정입니다. 재입고 예정일 : 11/17(금) ~ 20(월)',
        price: 5000,
        img: [
            'https://shop-phinf.pstatic.net/20231114_258/1699952949584oLc3t_JPEG/12502616375115323_1205563992.jpg?type=o1000',
            'https://shop-phinf.pstatic.net/20231114_239/1699953157715MKUUp_PNG/12502824501346304_791880017.png?type=m510',
            'https://shop-phinf.pstatic.net/20231114_124/1699952960161AhGyC_PNG/52025347519581164_186066631.png?type=m510',
        ],
        views: 10,
        sell: 10,
        stock: 10
    },
    {
        update: '2023-11-06',
        title: '[러블리 인형공방X메리베어 장난감가게]곰젤리 솜인형 분홍곰&노란곰 (예약구매)',
        intro: '※구매 전 주의사항💖 기존 러블리 인형공방 곰젤리 솜인형은 신규 출시된 곰젤리 솜인형 분홍곰과 동일한 사이즈입니다.',
        price: 33900,
        img: [
            'https://shop-phinf.pstatic.net/20231107_123/1699332251801gjxdW_JPEG/2889125558569288_1157254165.jpg?type=m510',
            'https://shop-phinf.pstatic.net/20231107_213/1699332318038Oxyfx_JPEG/21061882862541920_1286727552.jpg?type=m510',
            'https://shop-phinf.pstatic.net/20231107_249/1699332283919gEG1R_JPEG/5049165717078541_2138465965.jpg?type=m510',
        ],
        views: 350,
        sell: 52,
        stock: 14
    },
    {
        update: '2023-10-20',
        title: '[쿠키런스토어]브레이브 어드벤쳐 용감한쿠키',
        intro: '모험을 떠나는 용감한 쿠키가 귀여운 인형 키링으로!',
        price: 2000,
        img: [
            'https://shop-phinf.pstatic.net/20230712_149/1689141723147orsKB_JPEG/3343809127994028_1734275766.jpg?type=m510',
            'https://shop-phinf.pstatic.net/20230712_127/1689141731171yd5hn_JPEG/2472532521839555_309567386.jpg?type=m510',
            'https://shop-phinf.pstatic.net/20230712_86/1689141740472nE1ue_JPEG/2472541823698659_1014661318.jpg?type=m510',
        ],
        views: 51,
        sell: 3,
        stock: 10
    },
    {
        update: '2023-10-03',
        title: '[쿠키런스토어]용과 드래곤 솜인형',
        intro: '[ 용과 드래곤 솜인형 정식 출시! ] 예약구매 종료 후 많은 분들이 재입고 문의러블리 인형공방에서 생산된 귀여운 매력의 용과 드래곤 솜인형을 실물로 만나보세요 💖',
        price: 25500,
        img: [
            'https://shop-phinf.pstatic.net/20230517_44/1684285908800m8pmy_JPEG/37653453786116170_2131712759.jpg?type=m510',
            'https://shop-phinf.pstatic.net/20230517_253/1684285934380zHmLR_JPEG/1328414787855998_52302134.jpg?type=m10000_10000_no_rotate',
            'https://shop-phinf.pstatic.net/20230517_177/16842859454345tSW5_JPEG/1957429866527695_2095394078.jpg?type=m510',
        ],
        views: 60,
        sell: 7,
        stock: 10
    },
    {
        update: '2023-09-02',
        title: '[쿠키런스토어]생일케이크맛 쿠키 멜로디 인형',
        intro: '',
        price: 28900,
        img: [
            'https://shop-phinf.pstatic.net/20230530_41/168541639577879P8x_PNG/331284706142756_1175157606.png?type=m510',
            'https://shop-phinf.pstatic.net/20230530_202/1685416401019ni7bi_PNG/34294242827817026_188283953.png?type=m510',
            'https://shop-phinf.pstatic.net/20230530_147/1685416406452XeL6u_PNG/932495258998725_283619380.png?type=m510',
        ],
        views: 99,
        sell: 70,
        stock: 10
    },
    {
        update: '2023-07-22',
        title: '[쿠키런스토어] 샤벳상어맛 쿠키 피규어 보조배터리',
        intro: '0ㅇ0!!!샤벱상어맛 쿠키가 나타났다 ~~~',
        price: 31900,
        img: [
            'https://shop-phinf.pstatic.net/20220823_62/1661233791836m8wqp_PNG/62369690490944342_876926460.png?type=m510',
            'https://shop-phinf.pstatic.net/20220823_286/1661233798336X6Blq_PNG/62369697006803626_162329504.png?type=m510',
            'https://shop-phinf.pstatic.net/20220823_31/1661233802750kyKu0_PNG/62369701407927074_1535011828.png?type=m510',
        ],
        views: 1,
        sell: 1,
        stock: 0
    },
    {
        update: '2023-03-15',
        title: '[쿠키런스토어] 소원캠프 담요',
        intro: '캠핑을 즐기는 용쿠와 카놀리맛 쿠키, 스모어맛 쿠기가 그려진 담요',
        price: 24500,
        img: [
            'https://shop-phinf.pstatic.net/20231026_67/1698307135475QB3CW_PNG/45272390259857309_1833212626.png?type=m510',
            'https://shop-phinf.pstatic.net/20231026_30/1698307522671C5yD8_PNG/6731570879509740_1254135976.png?type=m10000_10000_no_rotate',
            'https://shop-phinf.pstatic.net/20231026_41/16983075272592Sd87_PNG/15634458736097447_2139218969.png?type=m510',
        ],
        views: 26,
        sell: 60,
        stock: 22
    },
    {
        update: '2023-06-19',
        title: '[쿠키런스토어] 브릭시티 브릭 아카데미 카드홀더',
        intro: '학생증이나 카드, 포토카드를 쏘옥 넣어 다닐 수 있는 귀여운 카드홀더',
        price: 8000,
        img: [
            'https://shop-phinf.pstatic.net/20230913_273/16945972840111Yj0G_PNG/8486141803720366_870153347.png?type=m510',
            'https://shop-phinf.pstatic.net/20230913_228/1694597301207gBESe_PNG/7804699658075337_110220462.png?type=m510',
            'https://shop-phinf.pstatic.net/20230913_270/1694597296827isbAb_PNG/8486154589164739_1378573262.png?type=m510',
        ],
        views: 51,
        sell: 59,
        stock: 3
    },
    {
        update: '2023-11-11',
        title: ' [쿠키런스토어] 신발 주머니 2종',
        intro: '귀여운 쿠키런 킹덤 캐릭터가 그려진 신발주머니 에코백! 내부 안감은 탈부착 가능합니다',
        price: 18000,
        img: [
            'https://shop-phinf.pstatic.net/20230223_67/1677117527603W2Ckx_PNG/78253362385111924_1812615033.png?type=m510',
            'https://shop-phinf.pstatic.net/20230223_234/1677117508708KS9Em_PNG/78253343483341702_1100125177.png?type=m510',
            'https://shop-phinf.pstatic.net/20230223_219/1677117513824zFxn2_PNG/78253348589325963_1123206294.png?type=m510',
        ],
        views: 5,
        sell: 11,
        stock: 0
    },
    {
        update: '2023-07-28',
        title: '[쿠키런스토어] 쿠키런 보석십자수 2종',
        intro: '귀여운 보석십자수로 슬기로운 집콕 취미를 가져보세요!!',
        price: 7000,
        img: [
            'https://shop-phinf.pstatic.net/20230420_179/1681970401334FJo4w_PNG/3588464147749791_219870445.png?type=m510',
            'https://shop-phinf.pstatic.net/20230420_154/1681970429235SSzKG_PNG/3588492031896648_422970713.png?type=m510',
            'https://shop-phinf.pstatic.net/20230420_74/1681970418719gvXtf_PNG/6248937492319129_295722263.png?type=m510',
            'https://shop-phinf.pstatic.net/20230420_192/1681970414357MOsuc_PNG/521298182616958_2034132921.png?type=m510'
        ],
        views: 4,
        sell: 55,
        stock: 4
    },
    {
        update: '2022-09-30',
        title: '[쿠키런스토어] 마스코트 인형 키링 거미저택',
        intro: '쿠키런 속 모든 쿠키와 캐릭터를 마스코트 인형 키링으로 만나보세요!',
        price: 12000,
        img: [
            'https://shop-phinf.pstatic.net/20221025_295/1666663529340vHblQ_PNG/67799308883748583_945922320.png?type=m510',
            'https://shop-phinf.pstatic.net/20221025_140/1666663539034xutmD_PNG/67799318721067920_2142540269.png?type=m510',
            'https://shop-phinf.pstatic.net/20221025_58/1666663532651b5StV_PNG/67799312333419887_488323151.png?type=m510',
        ],
        views: 3,
        sell: 3,
        stock: 3
    }
];

// 변수 모음
let mainOption = document.getElementsByClassName('main_option');
let optionBox = document.getElementsByClassName('option_box');
let itemBox = document.getElementsByClassName('item');
let listOption = document.getElementsByClassName('list_option');
let lastBold = listOption[0].children[0].children[0];
let showScreen = document.getElementsByClassName('show_screen');
let pageNum = 1;
let gridBox = document.getElementsByClassName('grid_box');
let gridBoxLi = document.querySelectorAll('.grid_box>li')
let mainItem = document.getElementsByClassName('main_item');
let optionTitle = document.getElementsByClassName('option_title');

// 옵션 박스 열기 / 닫기
{
    let optionClose = optionBox[0].getElementsByClassName('option_close');
    mainOption[0].addEventListener('click', (event) => {
        if (event.target != optionClose[0] && event.target.tagName == "LI") {
            optionBox[0].style.visibility = "initial";
        } else {
            optionBox[0].style.visibility = "hidden";
        }
    })
}
// 옵션 박스 안에 옵션 선택 시 색상 변경
{
    optionBox[0].addEventListener('click', (event) => {
        let eventOJ = event.target.closest('li');
        optionTitle[0].addEventListener('click', (event) => {
            let optionTitle = event.target;    
            
            if (optionBox[0].contains(eventOJ)) {
            if (event.target.style.backgroundColor == "orange") {
                event.target.style.backgroundColor = "rgb(250, 248, 248)"
            } else {
                event.target.style.backgroundColor = "orange"
            }
        }
    })
})
}
// 아이템 개수(배열) 9개씩 나타내기, 금액단위 설정 
let imgPage = 9;
function listWriter() {

    mainItem[0].innerHTML = '';
    for (let i = 0 + (pageNum - 1) * imgPage; i < imgPage + (pageNum - 1) * imgPage; i++) {
        if (i == productAR.length) break;
        mainItem[0].innerHTML +=
            `<div class="item">
        <img src="${productAR[i].img[0]}" alt="">
        <p class="item_price">${productAR[i].price.toLocaleString()} 원</p>
        <p class="item_title">${productAR[i].title}</p>
        <p class="item_intro">${productAR[i].intro}</p>
        <div class="icon"><i class="fa-solid fa-neuter"></i></div>
        <div class="icon"><i class="fa-solid fa-plus"></i></div>
        </div>`;

        // 재고 없을 때 이미지 투명도, BEST/SOLDOUT 박스 넣기    
        if (productAR[i].stock == 0) {
            for (let j = 0; j < itemBox[i % imgPage].children.length - 2; j++) {
                itemBox[i % imgPage].children[j].style.opacity = '0.3';
            }
            itemBox[i % imgPage].innerHTML += `<div class="soldout">SOLD OUT</div>`;
        }
        if (productAR[i].sell >= 30) {
            itemBox[i % imgPage].innerHTML += `<div class="best">BEST</div>`;
        }
    }
}
//페이지 이미지박스 만들기, 페이지 넘어갈 때 보이는 화면 기준점 잡기
{
    let pageAmount;
    pageAmount = productAR.length / 9
    for (let i = 0; i < pageAmount; i++) {
        showScreen[0].innerHTML += `<div>${i + 1}</div>`;
    }
    showScreen[0].addEventListener('click', event => {

        if (event.target != showScreen[0]) {
            pageNum = event.target.innerText;
            window.scrollTo(0, 300);
            listWriter();
        }
    })
}
//아이템목록 누르면 숫자 진하게 표시
let lastGrid = gridBoxLi[0];
lastGrid.style.border = '4px solid black';
for (let i = 0; i < gridBoxLi.length; i++) {
    gridBoxLi[i].addEventListener('click', (event) => {
        let eventOJ = event.target;
        lastGrid.style.border = '4px solid #fff'
        eventOJ.style.border = '4px solid black'
        if (eventOJ == gridBoxLi[1]) {
            imgPage = 6;
            mainItem[0].style.gridTemplate = "repeat(3, 700px) / repeat(2, 1fr)";
        } else {
            imgPage = 9;
            mainItem[0].style.gridTemplate = "repeat(3, 500px) / repeat(3, 1fr)";
        
        }
        listWriter();
        lastGrid = eventOJ;
    }
    )
}
//상품 리스트 순서 클릭 시 배열, 첫화면에 인기도순 나타내기 
{
    lastBold.style.fontWeight = 'bold';
    lastBold.style.opacity = "1";
    listOption[0].addEventListener('click', (event) => {
        let listOption = event.target;
        lastBold.style.fontWeight = 'lighter';
        lastBold.style.opacity = "0.7";
        if (listOption.tagName == 'LI') {
            switch (listOption.innerText) {
                case '인기도순':
                    ProductARViewDown();
                    break;
                case '최신등록순':
                    ProductARDateDown();
                    break;
                case '낮은가격순':
                    ProductARPriceRise();
                    break;
                case '판매높은순':
                    ProductARSellDown();
                    break;
                case '높은가격순':
                    ProductARPriceDown();
                    break;
            }
            //선택한 옵션 글자 진하게 변경            
            if (listOption.style.fontWeight == "bold") {
                listOption.style.fontWeight = 'lighter';
            } else {
                listOption.style.fontWeight = "bold";
                listOption.style.opacity = "initial";
            }
        }
        lastBold = listOption;
    })
}
// 상품 총 개수 표시
{
    let total = document.getElementById('total');
    total.children[0].innerText = ` ${productAR.length} `;
    listWriter(); //위치 확인 필요. 기존에 { } 밖에 있었음
}

// 인기도순 작성
function ProductARViewDown() {
    for (let i = 0, t; i < productAR.length - 1; i++) {
        for (let j = i + 1; j < productAR.length; j++) {
            if (productAR[i].views < productAR[j].views) {
                t = productAR[i];
                productAR[i] = productAR[j];
                productAR[j] = t;
            }
        }
    }
    listWriter()
}
//최신등록순 작성
function ProductARDateDown() {
    for (let i = 0, t; i < productAR.length - 1; i++) {
        for (let j = i + 1; j < productAR.length; j++) {
            if (productAR[i].update > productAR[j].update) {
                t = productAR[i];
                productAR[i] = productAR[j];
                productAR[j] = t;
            }
        }
    }
    listWriter()
}
// 가격 낮은순 작성
function ProductARPriceRise() {
    for (let i = 0, t; i < productAR.length - 1; i++) {
        for (let j = i + 1; j < productAR.length; j++) {
            if (productAR[i].price > productAR[j].price) {
                t = productAR[i];
                productAR[i] = productAR[j];
                productAR[j] = t;
            }
        }
    }
    listWriter();
}
// 높은 가격순 작성
function ProductARPriceDown() {
    for (let i = 0, t; i < productAR.length - 1; i++) {
        for (let j = i + 1; j < productAR.length; j++) {
            if (productAR[i].price < productAR[j].price) {
                t = productAR[i];
                productAR[i] = productAR[j];
                productAR[j] = t;
            }
        }
    }
    listWriter();
}
//판매 높은순 작성
function ProductARSellDown() {
    for (let i = 0, t; i < productAR.length - 1; i++) {
        for (let j = i + 1; j < productAR.length; j++) {
            if (productAR[i].sell < productAR[j].sell) {
                t = productAR[i];
                productAR[i] = productAR[j];
                productAR[j] = t;
            }
        }
    }
    listWriter();
}

