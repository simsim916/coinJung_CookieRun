const main = document.getElementById('main'); 
    freeboard_subject = main.getElementsByClassName('freeboard_subject');
    userInfo = main.getElementsByClassName('userInfo');
    heart = main.getElementsByClassName('heart');
    read = main.getElementsByClassName('read');
    freeboard_date = main.getElementsByClassName('freeboard_date');
    list_freeboard = main.getElementsByClassName('list_freeboard');

// let list = [
//     freeboard_subject[0],  // 수정: 배열에서 엘리먼트로 변경
//     userInfo[0],          // 수정: 배열에서 엘리먼트로 변경
//     heart[0],              // 수정: 배열에서 엘리먼트로 변경
//     read[0],               // 수정: 배열에서 엘리먼트로 변경
//     freeboard_date[0]
// ];

// for(let i = 0 ; i <= list.length ; i++){
//     list_freeboard += (`<a href="#" class="${list[i]}">스토브 인증기 왜이럼?</a>`)
//     list_freeboard += (`<a href="#" class="${list[i]}">그래도이쁨</a>`)
//     list_freeboard += (`<a href="#" class="${list[i]}">0</a>`)
//     list_freeboard += (`<a href="#" class="${list[i]}">57</a>`)
//     list_freeboard += (`<a href="#" class="${list[i]}">1시간 전</a>`)
// }



function allHover(){
    for(let i = 0 ; i < list.length ; i++){
        list[i].style.backgroundColor = "blue";
    }
}

function allHoverout(){
    for(let i = 0 ; i < list.length ; i++){
        list[i].style.backgroundColor = "white";
    }
}

for(let i = 0 ; i < list.length ; i++){
    list[i].addEventListener('mouseover', allHover)
    list[i].addEventListener('mouseout', allHoverout)
}