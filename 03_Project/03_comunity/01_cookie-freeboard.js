'use strict';

let notistart = 0, notiend = notiboardAR.length;    // 초기화
let nextPageSt = 0, nextPageEnd = 9;                // 초기화



/** 공지부분 태그, 내용 채우기 반복문  **/
function comunityWrite(notistart, notiend){
        let headBottom = document.getElementById('headBottom')
        headBottom.innerHTML=`
    <div>
        <ul>
            <li onclick="noticontent(notistart, notiend)">자유게시판</li>
        </ul>
    </div>
    `;
        main.innerHTML = `
        <div class="notice_option">
            <h3>자유 게시판</h3>
            <div class="notice_option_right">
                <select onchange="sortArray(event)" name="sort" id="sort">
                    <option value="10">10개씩 보기</option>
                    <option value="20">20개씩 보기</option>
                    <option value="30">30개씩 보기</option>
                </select>
            </div>
        </div>
        <div class="list_sort">
          <span onclick="listWrite(event)" class="turn_read">리뷰순</span>
          <span onclick="listWrite(event)" class="turn_heart">좋아요순</span>
        </div>
        <div class="content">
          <div class="content_notice">
          </div>
          <div class="free_content">
          </div>
          <div class = "page">
          </div>
        `;
        fetch("http://localhost:3000/noticeboard")
        .then(response=>response.json())
        .then(notiboardAR => {
        let content = main.querySelector('.content');
        for (let i = notistart; i < notiend; i++) {
            content.children[0].innerHTML += `
                <a href="#" class="list_notice">
                    <div class="notice_header">
                        <span class="notice"></span>
                    </div>
                    <div class="notice_subject">${notiboardAR[0][i].notice_subject}</div>
                    <div class="notice_date">${notiboardAR[0][i].notice_date}</div>
                </a>
            `;
        }})
        fetch("http://localhost:3000/freeboard")
        .then(response=>response.json())
        .then(freeboardAR => { 
            articleWrite(freeboardAR[0],start, end)
        })
}

// content 부분 태그, 내용 채우기 반복문 
function articleWrite(freeboardAR,start, end){
    let free_content = main[0].querySelector('.free_content');
    free_content.innerHTML = '';
    for(let i = start ; i < end ; i++){
        free_content.innerHTML += `
            <div href="#" class="list_freeboard">
                <div onclick="contentEnter(event)" class="freeboard_subject">${freeboardAR[i].subject}</div>
                <div onclick="contentEnter(event)" class="userInfo">${freeboardAR[i].userInfo}</div>
                <div onclick="contentEnter(event)" class="heart">${freeboardAR[i].heart}</div>
                <div onclick="contentEnter(event)" class="read">${freeboardAR[i].read}</div>
                <div onclick="contentEnter(event)" class="freeboard_date">${freeboardAR[i].commentNum}</div> 
            </div>
        `;
    }
}

// read 순 freeboardAR 재 배열 함수
function changeArray(judgement){
    fetch("http://localhost:3000/noticeboard")
        .then(response=>response.json())
        .then(freeboardAR => {
    if(judgement == 1/*조회수 수 높은 순*/){
        for(let i=0, temp; i<freeboardAR[0].length-1 ; i++){
            for(let j = i+1 ; j<freeboardAR[0].length ; j++){
                if(freeboardAR[0][i].read < freeboardAR[0][j].read){
                    temp = freeboardAR[0][i];
                    freeboardAR[0][i] = freeboardAR[0][j];
                    freeboardAR[0][j] = temp;
                }
            }
        }
        articleWrite(freeboardAR[0],start, end);
    }
    else{
        for(let i=0, temp; i<freeboardAR[0].length-1 ; i++){
            for(let j = i+1 ; j<freeboardAR[0].length ; j++){
                if(freeboardAR[0][i].heart < freeboardAR[0][j].heart){
                    temp = freeboardAR[0][i];
                    freeboardAR[0][i] = freeboardAR[0][j];
                    freeboardAR[0][j] = temp;
                }
            }
        }
        articleWrite(freeboardAR[0],start, end)
    }})        
}

// 리뷰순, 좋아요순 감지 후 opacity 변경 및 freeboardAR 재 배열 함수 호출
function listWrite(event){
    let list_sort = document.querySelectorAll('.list_sort');
    let turn = event.target;
    
    if(turn.innerText == "리뷰순"){
        list_sort[0].children[0].style.opacity = 1;
        list_sort[0].children[1].style.opacity = 0.5;
        changeArray(1);
    } else {
        list_sort[0].children[0].style.opacity = 0.5;
        list_sort[0].children[1].style.opacity = 1;
        changeArray(2);
    }
}

/* HTML 삭제 후 alticle 삽입 */
function insert_alticle(index){
    main.innerHTML = `
    <div class="notice_option">
    <h3>자유 게시판</h3>
    <spen onclick="comunityWrite(notistart, notiend)" class="backList">목록가기</spen>
</div>

<section class = "data">
    <div class = "title">
        <p></p>
        <div class = "user_name"></div>
        <div class = "alticle_date"></div>
    </div>
    <div class="alticle">
        <pre></pre>
    </div>
    <div class="alticle_like">
        <button onclick="addHeart(event)" type="button"></button>
    </div>
    <div class = "comment">
        <h3>댓글</h3>
        <div class="comment_logout">
            <p>로그인 후 댓글을 남길 수 있습니다.</p>
            <button>로그인</button>
        </div>
        <ul class="comment_list">                      
        </ul>
    </div>
</section>

<section class = "info">
    <div class="user_icon">
        <div class="user_thumb">
            <button type="button"><img src="" alt=""></button>  
        </div>
        <div class="user_info"></div>
    </div>
    <div class="comment_num">
      <span>댓글</span>
      <span></span>
    </div>
    <div class="like_num">
      <span>좋아요</span>
      <span></span>
    </div> 
    <div class="read_num">
      <span>조회수</span>
      <span></span>
    </div>
    <div class="share">
      <span>공유</span>
      <span></span>
    </div>
</section>
    
    `;
    let title = document.getElementsByClassName('title');
    let alticle = document.getElementsByClassName('alticle');
    let alticle_like = document.getElementsByClassName('alticle_like');
    let info = document.getElementsByClassName('info');
    let user_icon = document.getElementsByClassName('user_icon');
    let comment_list = document.getElementsByClassName('comment_list');
    fetch("http://localhost:3000/noticeboard")
    .then(response=>response.json())
    .then(freeboardAR => {
        title[0].children[0].innerText = `${freeboardAR[0][index].subject}`;
        title[0].children[1].innerText = `${freeboardAR[0][index].userInfo}`;
        title[0].children[2].innerText = `${freeboardAR[0][index].freeboard_date}`;
        alticle[0].children[0].innerText = `${freeboardAR[0][index].alticle}`;
        alticle_like[0].children[0].innerText = `${freeboardAR[0][index].heart}`;
        info[0].children[1].children[1].innerText = `${freeboardAR[index].commentNum}`;
        info[0].children[2].children[1].innerText = `${freeboardAR[index].heart}`;
        info[0].children[3].children[1].innerText = `${freeboardAR[index].read}`;
    for(let i = 0 ; i < freeboardAR[0][index].content.length ; i++){
        comment_list[0].innerHTML += `                        
    <li>
        <img src="" alt="">
        <button type="button">${freeboardAR[0][index].comment_user_info[i]}</button>
        <p>${freeboardAR[0][index].content}</p> 
    </li>`
    }})
    fetch("http://localhost:3000/noticeboard")
    .then(response=>response.json())
    .then(user => { 
        for(let i = 0 ; i < user.length ; i++){
            /* 글쓴이 이미지 삽입 */
            if(title[0].children[1].innerText == user[0][i].userInfo){
                user_icon[0].children[0].children[0].children[0].src = user[0][i].userImage;
            }
            /* 댓글 유저 이미지 삽입 */
            for(let j = 0 ; j < comment_list[0].length ; j++){
                if(user[0][i].userInfo == comment_list[0].childNodes[1].childNodes[j * 2 + 1].children[1].innerText){

                    comment_list[0].childNodes[1].childNodes[j * 2 + 1].children[0].src = user[0][i].userImage;
                }
            }
        }
    })
}

function addHeart(event){
    let likeNum = document.getElementsByClassName('like_num');
    ++event.target.innerText;
    likeNum[0].innerText = `${event.target.innerText}`;
}
    
/* 게시판 진입 "클릭"이 감지 됐을 때 inner HTML 게시판 상호작용 실행 */
function contentEnter(event){
    let turn = event.target,
         data = turn.innerText;
    let index;
         fetch("http://localhost:3000/noticeboard")
         .then(response=>response.json())
         .then(freeboardAR => {
    index = freeboardAR[0].findIndex(item => item.subject === data);
         })
    insert_alticle(index);       // 기존 HTML 삭제 / alticle 양식 추가
}

/* 10개씩, 20개씩, 30개씩 보기 변경 감지, 현재 페이지에서 재 출력 */
function sortArray(event){
    let selcet_option = +(event.target.value);
    let start = 0;
    let end = selcet_option;
    articleWrite(start, end);           
    update_page(selcet_option);
}

/** 페이지 바꾸기 박스 클릭시 색상 변경 관련 코드  **/
function pageChanging(event){
    let sort = document.getElementById('sort');
    let pageBoxes = document.querySelectorAll('.page span');
    let turn = event.target.innerText;
    for (let i = 0; i < pageBoxes.length; i++) {
        if (pageBoxes[i].innerText == turn) {
            // 클릭한 페이지 박스의 색상 변경
            event.target.classList.add('default');
        } else {
            // 나머지 페이지 박스의 색상 초기화
            pageBoxes[i].classList.remove('default');
        }
    }
            nextPageSt = (turn - 1) * +(sort.value);
            nextPageEnd = nextPageSt + +(sort.value) - 1;
            articleWrite(nextPageSt, nextPageEnd);
}

/* 페이지 네이션 생성 및 클릭 시 동적 모션 적용 */
function update_page(selectedOption) {
    let page = document.getElementsByClassName('page');
    page[0].innerHTML = "";
    /* 페이지 네이션 박스 생성 */
    for (let i = 0; i < freeboardAR.length / selectedOption; i++) {
        if (i == 0) {
            page[0].innerHTML += `
                <span onclick="pageChanging(event)" class="default">${i + 1}</span>
            `;
        } else {
            page[0].innerHTML += `
                <span onclick="pageChanging(event)" class="other">${i + 1}</span>
            `;
        }
    }
}




