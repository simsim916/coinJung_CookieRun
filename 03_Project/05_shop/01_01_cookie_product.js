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
            'https://shop-phinf.pstatic.net/20231114_124/1699952960161AhGyC_PNG/52025347519581164_186066631.png?type=m510'
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
            'https://shop-phinf.pstatic.net/20231107_249/1699332283919gEG1R_JPEG/5049165717078541_2138465965.jpg?type=m510'
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
            'https://shop-phinf.pstatic.net/20230712_86/1689141740472nE1ue_JPEG/2472541823698659_1014661318.jpg?type=m510'
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
            'https://shop-phinf.pstatic.net/20230517_177/16842859454345tSW5_JPEG/1957429866527695_2095394078.jpg?type=m510'
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
            'https://shop-phinf.pstatic.net/20230530_147/1685416406452XeL6u_PNG/932495258998725_283619380.png?type=m510'
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
            'https://shop-phinf.pstatic.net/20220823_31/1661233802750kyKu0_PNG/62369701407927074_1535011828.png?type=m510'
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
            'https://shop-phinf.pstatic.net/20231026_41/16983075272592Sd87_PNG/15634458736097447_2139218969.png?type=m510'
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
            'https://shop-phinf.pstatic.net/20230913_270/1694597296827isbAb_PNG/8486154589164739_1378573262.png?type=m510'
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
            'https://shop-phinf.pstatic.net/20230223_219/1677117513824zFxn2_PNG/78253348589325963_1123206294.png?type=m510'
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
            'https://shop-phinf.pstatic.net/20221025_58/1666663532651b5StV_PNG/67799312333419887_488323151.png?type=m510'
        ],
        views: 3,
        sell: 3,
        stock: 0
    },
    {
        update: '2022-07-28',
        title: '[쿠키런스토어] 브레이브 어드벤쳐 키트',
        intro: '다양한 쿠키들을 만나러 어썸브레드로 가자! 왕관을 훔쳐 달아나는 케이크 들개부터 잡아볼까요',
        price: 36900,
        img: [
            'https://shop-phinf.pstatic.net/20220928_225/1664328534323fnUSs_PNG/65464432854508140_518643531.png?type=m510',
            'https://shop-phinf.pstatic.net/20220928_74/1664328525676DnMrD_PNG/65464424364280268_598838589.png?type=m510',
            'https://shop-phinf.pstatic.net/20220928_81/1664328568344c3qsO_PNG/65464467033923194_1200714962.png?type=m510'
        ],
        views: 103,
        sell: 103,
        stock: 103
    },
    {
        update: '2022-07-03',
        title: '[쿠키런스토어] 마스코트 인형 키링 1탄',
        intro: '쿠키런 속 모든 쿠키와 캐릭터를 마스코트 인형 키링으로 만나보세요! 당신의 최애 캐릭터는 누구?',
        price: 12000,
        img: [
            'https://shop-phinf.pstatic.net/20220819_288/1660896333215ft9En_PNG/62032221856975838_457480920.png?type=m510',
            'https://shop-phinf.pstatic.net/20220819_96/1660896326451qatrU_PNG/62032215106791469_513009483.png?type=m510',
            'https://shop-phinf.pstatic.net/20220819_280/1660896336347i2PcY_PNG/62032225002720712_1069566276.png?type=m510'
        ],
        views: 7,
        sell: 7,
        stock: 0
    }
];

let itemRightBox = document.getElementsByClassName('item_rightbox_info')
let itemImg = document.getElementsByClassName('item_img');
let itemImgBtn = document.getElementsByClassName('item_imgBtn');
let basic = document.getElementById('basic');
let bestitem = document.getElementsByClassName('best_items');
let maxpoint = document.getElementById('maxpoint');
let textpoint, photopoint;
let pointDetails = document.getElementById('pointDetails');
let cardDetails = document.getElementById('cardDetails');
let quantityBox = document.getElementsByClassName('item_rightbox_point_quantity');
let itemBox = document.getElementsByClassName('item');
            


/* ==========================================================================*/
writePage();
//게시글 작성
function writePage(event){
    let textpoint = 0, photopoint = 0;
    let itemNum;
    let itemImgBtn = document.getElementsByClassName('item_imgBtn');

    
    fetch("http://localhost:3000/product")
    .then(response=>response.json())
    .then(productAR => {
        for(let i=0; i<productAR[0].length;i++){
            if (event.target.children[2].innerText == productAR[0][i].title) {
                itemNum = i;
                break;
            }
        }
    // 포인트 점수 구하기 식
    if(productAR[0][itemNum].textreview == 1) {
        textpoint= 50;
    } 
    if(productAR[0][itemNum].photoreview == 1) {
        photopoint= 100;
    }

    itemBox[0].innerHTML=`
    <div class="item_leftbox">
                <div class="item_img"></div>
                <div class="item_imgBtn"></div>
            </div>
            <div class="item_rightbox">
                <div class="item_rightbox_info">
                    <div>${productAR[0][itemNum].title}</div>
                    <div>${productAR[0][itemNum].price.toLocaleString()} 원</div>
                </div>
                <div class="item_rightbox_point">
                    <div class="item_rightbox_point_title">
                        <span>쿠키런 스토어 고객을 위한 혜택</span>
                    </div>
                    <div class="item_rightbox_point_max">
                        <div>
                            <span>최대 적립 포인트</span>
                            <div>
                                <span id="maxpoint">${(productAR[0][itemNum].price/100+textpoint+photopoint).toLocaleString()} 원</span>
                                <i class="fa-regular fa-circle-question"></i>
                            </div>
                        </div>
                        <div>
                            <span>└ 기본적립</span> 
                            <div id="basic">${(productAR[0][itemNum].price/100).toLocaleString()} 원</div>
                        </div>
                    </div>
                    <div class="item_rightbox_point_price_tip">
                        <div>
                            <div>TIP. 포인트 더 받는 방법</div>
                            <div><a href="https://nid.naver.com">최대 5% 적립, 무료 시작</a></div>
                            <div><a href="https://nid.naver.com">네이버 현대카드로 결제 시</a></div>
                            <div><a href="https://nid.naver.com/">네이버페이 머니로 결제 시</a></div>
                        </div>
                        <div>
                            <span>+최대 ${(productAR[0][itemNum].price*0.09).toLocaleString()}원</span>
                            <span>${(productAR[0][itemNum].price*0.04).toLocaleString()}원</span>
                            <span>${(productAR[0][itemNum].price*0.05).toLocaleString()}원</span>
                            <span>${(productAR[0][itemNum].price*0.02).toLocaleString()}원</span>
                        </div>
                    </div>
                    <div class="item_rightbox_ads"></div>
                    <div class="item_rightbox_point_card">
                        <span>무이자 할부</span>
                        <span>| 카드 자세히보기</span>
                        <i class="fa-regular fa-circle-question"></i>
                    </div>
                    <div id="pointDetails"></div>
                    <div class="item_rightbox_point_transit">
                        <p>택배배송 | 3,000원<span>&#40;주문시 결제&#41; &#183;</span> CJ 대한통운&#40;오네&#41;</p>
                        <p>30,000원 이상 구매 시 무료&#47;제주, 도서 지역 추가 3,000원</p>
                        <p><a href="#">배송비 절약상품 보기</a></p>
                    </div>
                    <div class="item_rightbox_point_quantity">
                        <div onclick="amountBtnMinus()" style="border: none;">&#45;</div>
                        <input type="text" id="quantity" name="toBuy" value=1 style="text-align: center; "/>
                        <div onclick="amountBtnPlus()" style="border: none;">&#43;</div>
                    </div>
                    <div class="item_rightbox_point_decision">
                        <div>
                            <div>
                                <span>총 상품 금액</span>
                                <i class="fa-regular fa-circle-question"></i>
                            </div>
                            <div class="item_rightbox_point_decision_total">
                                <span id="totalAmount">개</span>
                                <span id="totalPrice">원</span>
                            </div>
                        </div>
                        <div>
                            <div class="btn_1">
                                <i class="fa-solid fa-circle-chevron-right"></i>
                                <span>구매하기</span>
                            </div>
                            <div class="btn_2">
                                <i class="fa-regular fa-comment-dots"></i>
                                <span>톡톡문의</span>
                            </div>
                            <div class="btn_3">
                                <i class="fa-solid fa-heart-circle-plus"></i>
                                <span>찜하기</span>
                            </div>
                            <div class="btn_4">
                                <i class="fa-solid fa-bag-shopping"></i>
                                <span>장바구니</span>
                            </div>
                        </div>
                    </div>
                </div>
    `
<<<<<<< HEAD

=======
// 토탈 구하기
let totalAmount = document.getElementById('totalAmount');
let totalPrice = document.getElementById('totalPrice');
let quantityBox = document.getElementsByClassName('item_rightbox_point_quantity');
>>>>>>> origin/main
totalAmount.innerText =`${quantityBox[0].children[1].value}개`
totalPrice.innerText= `${((quantityBox[0].children[1].value)*productAR[0][itemNum].price).toLocaleString()}원`

// 제품 이미지 슬라이드
itemImg[0].innerHTML = `<img src="${productAR[0][itemNum].img[0]}" alt="${productAR[0][itemNum].title}">`;
for (let i = 0 ; i < productAR[0][itemNum].img.length; i++){
    itemImgBtn[0].innerHTML +=`<img onclick="shopItemImgChange(event)" src="${productAR[0][itemNum].img[i]}" alt="${productAR[0][itemNum].title}">`;
}

// 베스트 상품

for (let i = 0, t; i < productAR[0].length - 1; i++) {
    for (let j = i + 1; j < productAR[0].length; j++) {
        if (productAR[0][i].sell < productAR[0][j].sell) {
            t = productAR[0][i];
            productAR[0][i] = productAR[0][j];
            productAR[0][j] = t;
        }
    }
    
    for (let i =0 ; i < 4; i++){
    bestitem[0].innerHTML += `<div><img src="${productAR[0][i].img[0]}" alt="${productAR[0][i].title}"><p>${productAR[0][i].title}</p><p>${productAR[0][i].price.toLocaleString()}</p></div>`;
    }
    itemImg[0].innerHTML = `<img src="${productAR[0][itemNum].img[0]}" alt="${productAR[0][itemNum].title}">`;
    for (let i = 0 ; i < productAR[0][itemNum].img.length; i++){
        itemImgBtn[0].innerHTML +=`<img src="${productAR[0][itemNum].img[i]}" alt="${productAR[0][itemNum].title}">`;
    }
}})


    
}
// 제품 이미지 띄우기
function shopItemImgChange(event){
    let itemImg = document.getElementsByClassName('item_img');
    itemImg[0].children[0].src=`${event.target.getAttribute('src')}`;
}
// 수량 버튼 올리기
function amountBtnPlus(){
    ++document.getElementById('totalAmount').innerText;
    document.getElementById('totalPrice').innerText=`${document.getElementById('totalAmount').innerText*productPrice}`
}
// 수량 버튼 내리기
function amountBtnMinus(){
    if(document.getElementById('totalAmount').innerText>1){
        --document.getElementById('totalAmount').innerText;
        document.getElementById('totalPrice').innerText=`${document.getElementById('totalAmount').innerText*productPrice}`
    }
}
// 베스트상품 상세페이지로 변경하기
function itemChangeInPage(event) {
    event.target.children[1].innerText;
    fetch("http://localhost:3000/product")
    .then(response=>response.json())
    .then(productAR => {

    for(let i=0; i<productAR[0].length;i++){
        if (event.target.children[1].innerText == productAR[0][i].title) {
            itemNum = i;
            break;
        }
    }
    itemBox[0].innerHTML='';
    writePage();
    window.scrollTo(0,300);
})
}