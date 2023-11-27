'use strict';

let cookieTypeImg = [
    {   
        올 : '',
        에픽: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/e6cc601e-19ee-421b-e936-9cdd20eaf100/public',
        레전더리: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/fb2bbed1-186c-4edf-1741-7edb8cdf7100/public',
        슈퍼에픽: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/ef97da70-b550-428a-c03c-ed4db59a9300/public',
        스페셜: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/dc7567c4-7d16-4017-52c2-4586e7112500/public',
        에이션트: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/b80b67b8-dc5c-49e3-07ca-f1673e459100/public',
        드래곤: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/9ea3ad41-1df7-4b8e-0e52-3c1f9ac48400/public',
    }
]


let main = document.getElementsByTagName('main')

// 쿠키 목록 작성 시키는 함수
function writeCookieList() {
    fetch("http://localhost:3000/cookieData")
    .then(response=>response.json())
    .then(json => {
    for (let i = 0; i < json[0].length; i++) {
        mainList[0].innerHTML += `<div class="main_list_box"><img src="${json[0][i].img}" alt="${json[0][i].name}"><div class="main_list_item_name">${json[0][i].name}</div><div class="main_list_item_type"><img src="${cookieType(json[0][i].type)}" alt="${json[0][i].type}"></div></div>`
    }})
}

// 쿠키 타입 검색해서 이미지 선택하는 함수
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

writeCookieList();
let mainList = main[0].getElementsByClassName('main_list')
mainList[0].addEventListener('click', detail)

function detail(event) {
    let eventOJ = event.target.closest('.main_list_box')
    let cookieName = eventOJ.children[1].innerText;
    let compare;
    for (let i = 0; i < cookieAR.length; i++) {
        if (cookieName == cookieAR[i].name) {
            compare = i;
        }
    }
    lastPage = main[0].innerHTML;
    main[0].innerHTML =
        `<h3 class="back_button">뒤로가기</h3>
        <div class="main_info_container"><img src="${cookieAR[compare].img}" alt="${cookieAR[compare].name}">
        <div class="main_info_pic"></div>
        <div class="main_info_self">
            <div class="grid_box1"><img src="${cookieType(cookieAR[compare].type)}" alt="${cookieAR[compare].type}"></div>
            <div class="grid_box2">${cookieAR[compare].name}</div>
            <p class="cookie_self">${cookieAR[compare].info}</p>
        </div>
    </div>
    <div class="intro_box">
        <div class="skill_box">
            <p class="skill">스킬</p>
            <img src="${cookieAR[compare].skill.skillImg}" alt="${cookieAR[compare].skill.skillName}">
            <p class="skill_name">${cookieAR[compare].skill.skillName}</p>
            <p class="skill_intro">${cookieAR[compare].skill.skillInfo}</p>
        </div>
    </div>`;
    let backButton = main[0].getElementsByClassName('back_button');
}


let mainOpt = document.getElementsByClassName('main_option');

let typeAlt;

mainOpt[0].addEventListener('click', (event) => {
    let OptTypeImg = event.target;    
//타입별 정렬
    if (OptTypeImg.tagName == "IMG") {
        typeAlt = OptTypeImg.getAttribute('alt');
        mainList[0].innerHTML = "";
        if (typeAlt == "올") {
            
            for (let i = 0;i < cookieAR.length;i++) {
                mainList[0].innerHTML += `<div class="main_list_box"><img src="${cookieAR[i].img}" alt="${cookieAR[i].name}"><div class="main_list_item_name">${cookieAR[i].name}</div><div class="main_list_item_type"><img src="${cookieType(cookieAR[i].type)}" alt="${cookieAR[i].type}"></div></div>`;
            }
        } else {
            for (let i = 0; i<cookieAR.length;i++) {
                if (typeAlt == cookieAR[i].type) {    
                    mainList[0].innerHTML += `<div class="main_list_box"><img src="${cookieAR[i].img}" alt="${cookieAR[i].name}"><div class="main_list_item_name">${cookieAR[i].name}</div><div class="main_list_item_type"><img src="${cookieType(cookieAR[i].type)}" alt="${cookieAR[i].type}"></div></div>`;}
        }

    }
    }
});








