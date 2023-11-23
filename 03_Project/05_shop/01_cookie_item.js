'use strict';

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

let optionBar = document.getElementsByClassName('main_option');
let optionBox = document.getElementsByClassName('option_box');
let itemBox = document.getElementsByClassName('item');
let listOption = document.getElementsByClassName('list_option');
let lastBold = listOption[0].children[0].children[0];

// 아이템 리스트 자동으로 만들기, sold out/best 박스 넣기, 재고 없으면 투명해지기
{

    for (let i = 0 ; i < productAR.length ; i++) {
        let img = itemBox[i].getElementsByTagName('img');
        let itemPrice = itemBox[i].getElementsByClassName('item_price');
        let itemTitle = itemBox[i].getElementsByClassName('item_title');
        let itemIntro = itemBox[i].getElementsByClassName('item_intro');
        img[0].src=productAR[i].img[0];
        itemPrice[0].innerText = `${productAR[i].price} 원`;
        itemTitle[0].innerText = `${productAR[i].title}`;
        itemIntro[0].innerText = `${productAR[i].intro}`;
        if (productAR[i].stock == 0) {
            for (let j = 0; j < itemBox[i].children.length-2; j++){
                itemBox[i].children[j].style.opacity = '0.3';
            }
            itemBox[i].innerHTML += `<div class="soldout">SOLD OUT</div>`;
        }
        if (productAR[i].sell == 10) {
            itemBox[i].innerHTML += `<div class="best">BEST</div>`;
            
        }
        
    }
}
// 옵션 박스 열기 / 닫기
{
    let optionClose = optionBox[0].getElementsByClassName('option_close');
    optionBar[0].addEventListener('click',(event)=>{
        if (event.target != optionClose[0] && event.target.tagName=="LI") {
        optionBox[0].style.visibility="initial";
        } else {
            optionBox[0].style.visibility="hidden";
        }
    })
}
// {
//     optionBox[0].addEventListener('click',(event)=>{
//         let eventOJ = event.target.closest('li');

//         if(optionBox[0].contains(eventOJ)){
//             if(event.target.style.backgroundColor == "orange"){
//                 event.target.style.backgroundColor="rgb(250, 248, 248)"
//             } else {
//                 event.target.style.backgroundColor="orange"
//             }
//         }
//     })
// }



//순서 박스 옵션 선택 시 글자 진하게 변경
{
    listOption[0].addEventListener('click', (event) => {
        let listOption = event.target;
        lastBold.style.fontWeight = 'lighter';
        lastBold.style.opacity = "0.7";
        if (listOption.tagName == 'LI'){
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
// 상품 총 갯수 표시
{
    let total = document.getElementById('total');
    total.children[0].innerText = ` ${itemBox.length} `;
}

{
    for (let i = 0, t; i < productAR.length - 1; i++){
        for (let j = i + 1; j < productAR.length; j++){
            if (productAR[i].price > productAR[j].price) {
                
            }
        }
    }
}

{

}