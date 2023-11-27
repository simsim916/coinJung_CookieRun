'use strict';

function shopWrite(){
    main.innerHTML = `
    <main>
    <div class="main_head">
        <h3>쿠키런 상품</h3>
        <div>
            <p id="total">상품 (총 <span></span>개)</p>
            <ul class="grid_box">
                <li onclick="gridBoxBtn(event)"></li>
                <li onclick="gridBoxBtn(event)"></li>
            </ul>
        </div>
    </div>
    <div class="main_option">
        <ul>
            <li onclick="optionBoxOpen(event)">혜택정보</li>
            <li onclick="optionBoxOpen(event)">배송유형</li>
            <li onclick="optionBoxOpen(event)">상품유형</li>
            <li onclick="optionBoxOpen(event)">가격대</li>
        </ul>
        <div class="option_box">
            <div class="option_title">혜택정보
                <ul>
                    <li onclick="optionBoxListColor(event)">할인상품</li>
                    <li onclick="optionBoxListColor(event)">무료상품</li>
                </ul>
            </div>
            <div class="option_title">배송유형
                <ul>
                    <li onclick="optionBoxListColor(event)">오늘출발</li>
                    <li onclick="optionBoxListColor(event)">예약배송</li>
                </ul>
            </div>
            <div class="option_title">상품유형
                <ul>
                    <li onclick="optionBoxListColor(event)">예약구매</li>
                </ul>
            </div>
            <div class="option_title flexBox">가격대 <br>
                <input type="price" placeholder="2,000"> ~ <input type="price" placeholder="139,000">
                <div class="application">적용</div>
            </div>
            <div class="option_last">
                <div class="reset">초기화</div>
                <div onclick="optionBoxClose(event)" id="option_clickID" class="click">상품보기</div>
            </div>
            <div onclick="optionBoxClose(event)" id="option_closeID" class="option_close">X</div>
        </div>
    </div>
    <div class="list_option">
        <ul>
            <li onclick="ProductARViewDown(event)">인기도순</li>
            <li onclick="ProductARDateDown(event)">최신등록순</li>
            <li onclick="ProductARPriceRise(event)">낮은가격순</li>
            <li onclick="ProductARPriceDown(event)">높은가격순</li>
            <li onclick="ProductARSellDown(event)">판매높은순</li>
        </ul>
    </div>
    <div class="main_item"></div>
    <div class="show_screen"></div>
</main>`;
}     
// 옵션 박스 열기
function optionBoxOpen(event){
    let optionBox = document.getElementsByClassName('option_box');
    optionBox[0].style.visibility = "initial";
}
// 옵션 박스 닫기
function optionBoxClose(event){
    let optionBox = document.getElementsByClassName('option_box');
        optionBox[0].style.visibility = "hidden";
}
// 옵션 박스 안에 옵션 선택 시 색상 변경
function optionBoxListColor(event){
        if (event.target.style.backgroundColor == "orange") {
            event.target.style.backgroundColor = "#fff"
        } else {
            event.target.style.backgroundColor = "orange"
        }
}

// 아이템 개수(배열) 9개씩 나타내기, 금액단위 설정 
function listWriter() {
    let mainItem = document.getElementsByClassName('main_item'),
         itemBox = document.getElementsByClassName('item');
    fetch("http://localhost:3000/product")
        .then(response=>response.json())
        .then(productAR => {
    mainItem[0].innerHTML = '';
    for (let i = 0 + (pageNum - 1) * imgPage; i < imgPage + (pageNum - 1) * imgPage; i++) {
        if (i == productAR[0].length) break;
        mainItem[0].innerHTML +=
        `<div class="item">
        <img src="${productAR[0][i].img[0]}" alt="">
        <p class="item_price">${productAR[0][i].price.toLocaleString()} 원</p>
        <p class="item_title">${productAR[0][i].title}</p>
        <p class="item_intro">${productAR[0][i].intro}</p>
        <div class="icon"><i class="fa-solid fa-neuter"></i></div>
        <div class="icon"><i class="fa-solid fa-plus"></i></div>
        </div>`;
        // 재고 없을 때 이미지 투명도, BEST/SOLDOUT 박스 넣기    
        if (productAR[0][i].stock == 0) {
            for (let j = 0; j < itemBox[i % imgPage].children.length - 2; j++) {
                itemBox[i % imgPage].children[j].style.opacity = '0.3';
            }
            itemBox[i % imgPage].innerHTML += `<div class="soldout">SOLD OUT</div>`;
        }
        if (productAR[0][i].sell >= 30) {
            itemBox[i % imgPage].innerHTML += `<div class="best">BEST</div>`;
        }
        //아이템개수 9개 이상 등록시, 자동으로 다음 순번 페이지버튼 생성
        let pageAmount = productAR[0].length / imgPage
        showScreen[0].innerHTML = ``;
        for (let i = 0; i < pageAmount; i++) {
            showScreen[0].innerHTML += `<div onclick="screenPage(event)">${i + 1}</div>`;
        }
    }})
    // 인기상품순(디폴트) 첫화면 굵게
    let listOption = document.getElementsByClassName('list_option');
    lastBtn=listOption[0].children[0].children[0];
    lastBtn.style.fontWeight = 'bold';
    lastBtn.style.opacity = "1";
    // 상품 총 갯수 표시
    let total = document.getElementById('total');
    total.children[0].innerText = ` ${productAR.length} `;
}
//페이지 넘어갈 때 보이는 화면 기준점 잡기    
function screenPage(event){
        pageNum = event.target.innerText;
        window.scrollTo(0, 300);
        listWriter();
}
//아이템목록 누르면 검정 테두리 표시, 첫 화면 9개 배열로 고정표시
function gridBoxBtn(event){
    let gridBoxLi = document.querySelectorAll('.grid_box>li')
    let mainItem = document.getElementsByClassName('main_item');
    if (event.target == gridBoxLi[0]) {
        imgPage = 9;
        mainItem[0].style.gridTemplate = "repeat(3, 500px) / repeat(3, 1fr)";
        gridBoxLi[0].style.border = "4px solid #000"
        gridBoxLi[1].style.border = "4px solid #fff"
    } else {
        imgPage = 6;
        mainItem[0].style.gridTemplate = "repeat(3, 700px) / repeat(2, 1fr)";
        gridBoxLi[0].style.border = "4px solid #fff"
        gridBoxLi[1].style.border = "4px solid #000"
    }
    listWriter();
}
// 인기도순 작성
function ProductARViewDown(event) {
    for (let i = 0, t; i < productAR.length - 1; i++) {
        for (let j = i + 1; j < productAR.length; j++) {
            if (productAR[i].views < productAR[j].views) {
                t = productAR[i];
                productAR[i] = productAR[j];
                productAR[j] = t;
            }
        }
    }
    lastBold.style.fontWeight = 'lighter';
    lastBold.style.opacity = "0.7";
    event.target.style.fontWeight = "bold";
    event.target.style.opacity = "initial";
    listWriter()
}
//최신등록순 작성
function ProductARDateDown(event) {
    for (let i = 0, t; i < productAR.length - 1; i++) {
        for (let j = i + 1; j < productAR.length; j++) {
            if (productAR[i].update > productAR[j].update) {
                t = productAR[i];
                productAR[i] = productAR[j];
                productAR[j] = t;
            }
        }
    }
    lastBold.style.fontWeight = 'lighter';
    lastBold.style.opacity = "0.7";
    event.target.style.fontWeight = "bold";
    event.target.style.opacity = "initial";
    listWriter()
}
// 가격 낮은순 작성
function ProductARPriceRise(event) {
    for (let i = 0, t; i < productAR.length - 1; i++) {
        for (let j = i + 1; j < productAR.length; j++) {
            if (productAR[i].price > productAR[j].price) {
                t = productAR[i];
                productAR[i] = productAR[j];
                productAR[j] = t;
            }
        }
    }
    lastBold.style.fontWeight = 'lighter';
    lastBold.style.opacity = "0.7";
    event.target.style.fontWeight = "bold";
    event.target.style.opacity = "initial";
    listWriter();
}
// 높은 가격순 작성
function ProductARPriceDown(event) {
    for (let i = 0, t; i < productAR.length - 1; i++) {
        for (let j = i + 1; j < productAR.length; j++) {
            if (productAR[i].price < productAR[j].price) {
                t = productAR[i];
                productAR[i] = productAR[j];
                productAR[j] = t;
            }
        }
    }
    lastBold.style.fontWeight = 'lighter';
    lastBold.style.opacity = "0.7";
    event.target.style.fontWeight = "bold";
    event.target.style.opacity = "initial";
    listWriter();
}
//판매 높은순 작성
function ProductARSellDown(event) {
    for (let i = 0, t; i < productAR.length - 1; i++) {
        for (let j = i + 1; j < productAR.length; j++) {
            if (productAR[i].sell < productAR[j].sell) {
                t = productAR[i];
                productAR[i] = productAR[j];
                productAR[j] = t;
            }
        }
    }
    lastBold.style.fontWeight = 'lighter';
    lastBold.style.opacity = "0.7";
    event.target.style.fontWeight = "bold";
    event.target.style.opacity = "initial";
    listWriter();
}

