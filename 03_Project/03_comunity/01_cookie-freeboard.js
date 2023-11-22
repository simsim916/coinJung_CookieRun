'use strict';

let notiboardAR = [
    {
        notice_subject : '알려진 이슈를 알려드립니다.',
        notice_date : '2023.11.16'
    },
    {
        notice_subject : '11월 업데이트 소식.',
        notice_date : '2023.11.16'
    }
];

let freeboardAR = [
    {
        subject : '아오 밸런드 패치 언제함?',
        userInfo : '금광동 쏘스윗',
        heart : 3,
        read : 57,
        commentNum : 2,
        alticle : 
`게임하다 갑자기 화가 치밀올라서 글써봄



업데이트 도데체 언제함??`,
        freeboard_date : '1시간 전',
        comment_user_info : ['[슈비버거조하]', '[내여친존예]'],
        content : [
            '킹덤아레나 노잼; 업데이트좀',
            '솔직히 마틀렌 너무 사기야',
        ]
    },

    {
        subject : '쿠키런 풀스펙 구매합니다..!',
        userInfo : '그린탑코인정',
        heart : 62,
        read : 81,
        commentNum : 2,
        alticle : 
`구글계정(구깡) 내보내기 안한계정만 구매 희망해요~

캐릭 펫 마탕 당연히 만렙이어야 하구여
                   
스킨은 전부다 보유할필요한없지만 풀스펙계정답게
                   
많이보유했으면 하구요
                   
키티 미미같은 쿠키는 없어도 됩니다 ㅎㅎ`,
        freeboard_date : '3시간 전',
        comment_user_info : ['[섹시소녀네티]', '[깜구클럽]'],
        content : [
            '메일보냈어요',
            '여기 이런거 올려도됨?',
        ]
    },


    {
        subject : '두둠칫 둠칫 친추 ㄱ',
        userInfo : '두둠칫 둠칫',
        heart : 74,
        read : 231,
        commentNum : 2,
        alticle : 
`길드원 구함
마를렌서버 두둠칫 둠칫 친추 ㄱㄱ`,
        freeboard_date : '5시간 전',
        comment_user_info : ['[창민이형파이팅]', '[★문석짱★]'],
        content : [
            '마를렌 누가함;;',
            '킹덤전 열수있음?',
        ]
    },

    {
        subject : '결정석너프하면접을거임',
        userInfo : '봉삼이',
        heart : 333,
        read : 571,
        commentNum : 1,
        alticle : 
`너프하지마라진짜

`,
        freeboard_date : '10시간 전',
        comment_user_info : ['[지현누나힘내요]'],
        content : [
            '접지마여 할만한데',
        ]
    },

    {
        subject : '솔직히 자바스크립트 개어려움',
        userInfo : '그린실버타운',
        heart : 32,
        read : 5723,
        commentNum : 5,
        alticle : 
`CSS도 안익숙한데 자바스크립트 언제 할수있을까
님들은 ㅓㅇ떰
`,
        freeboard_date : '1시간 전',
        comment_user_info : ['[창민이형파이팅]', '[★문석짱★]' ,'[봉삼이]','[민쥐]', '[지현누나힘내요]', '[에이스수미]'],
        content : [
            'ㅇㅈ',
            '할만하던데',
            '와인정',
            'ㅇㅇ; 진도 너무빠름',
            '나 오늘 그만둘뻔;;',
            'ㅇㅇ 할만함 ㅎㅎ',
        ]
    },

    {
        subject : '스토브 인증기 왜이럼?',
        userInfo : '그래도이쁨',
        heart : 10,
        read : 57,
        freeboard_date : '12시간 전',
        commentNum : 65
    },
    {
        subject : '스토브 인증기 왜이럼?',
        userInfo : '그래도이쁨',
        heart : 40,
        read : 57,
        freeboard_date : '12시간 전',
        commentNum : 65
    },
    {
        subject : '스토브 인증기 왜이럼?',
        userInfo : '그래도이쁨',
        heart : 34,
        read : 57,
        freeboard_date : '12시간 전',
        commentNum : 65
    },
    {
        subject : '스토브 인증기 왜이럼?',
        userInfo : '그래도이쁨',
        heart : 43,
        read : 57,
        freeboard_date : '12시간 전',
        commentNum : 65
    },
    {
        subject : '스토브 인증기 왜이럼?',
        userInfo : '그래도이쁨',
        heart : 123,
        read : 57,
        freeboard_date : '12시간 전',
        commentNum : 65
    },
    {
        subject : '스토브 인증기 왜이럼?',
        userInfo : '그래도이쁨',
        heart : 43,
        read : 57,
        freeboard_date : '12시간 전',
        commentNum : 65
    },
    {
        subject : '스토브 인증기 왜이럼?',
        userInfo : '그래도이쁨',
        heart : 13,
        read : 57,
        freeboard_date : '12시간 전',
        commentNum : 65
    },
    {
        subject : '스토브 인증기 왜이럼?',
        userInfo : '그래도이쁨',
        heart : 43,
        read : 57,
        freeboard_date : '12시간 전',
        commentNum : 65
    },
    {
        subject : '스토브 인증기 왜이럼?',
        userInfo : '그래도이쁨',
        heart : 12,
        read : 57,
        freeboard_date : '12시간 전',
        commentNum : 65
    },
];

let main = document.getElementsByTagName('main'),
/*notice 부분 선언*/
noSubject = main[0].querySelectorAll('.notice_subject'),
noDate = main[0].querySelectorAll('.notice_date'),
list_notice = main[0].querySelectorAll('.list_notice'),

/*content 부분 선언*/
list_freeboard = main[0].querySelectorAll('.list_freeboard'),

/*리뷰순 좋아요순 선언*/
list_sort = main[0].querySelectorAll('.list_sort');


    /*notice 반복문*/
    for(let i = 0 ; i < list_notice.length ; i++){
        noSubject[i].innerText = `${notiboardAR[i].notice_subject}`;
        noDate[i].innerText = `${notiboardAR[i].notice_date}`;
    }


    /*content 반복문*/
    for(let i = 0 ; i < list_freeboard.length ; i++){
        for(let j = 0 ; j < list_freeboard.length ; j++){
            list_freeboard[i].children[0].innerText = `${freeboardAR[i].subject}`;
            list_freeboard[i].children[1].innerText = `${freeboardAR[i].userInfo}`;
            list_freeboard[i].children[2].innerText = `${freeboardAR[i].heart}`;
            list_freeboard[i].children[3].innerText = `${freeboardAR[i].read}`;
            list_freeboard[i].children[4].innerText = `${freeboardAR[i].commentNum}`;
        }
    }

    /*리뷰순 좋아요순*/

    console.log(list_sort[0].children[0]);


    function read_turn(){
        for(let i=0, temp; i<list_freeboard.length-1 ; i++){
            for(let j = i+1 ; j<list_freeboard.length ; j++){
                if(freeboardAR[i].read < freeboardAR[j].read){
                    temp = freeboardAR[i];
                    freeboardAR[i] = freeboardAR[j];
                    freeboardAR[j] = temp;
                }
            }
        }

    }
    function heart_turn(){
        for(let i=0, temp; i<list_freeboard.length-1 ; i++){
            for(let j = i+1 ; j<list_freeboard.length ; j++){
                if(freeboardAR[i].heart < freeboardAR[j].heart){
                    temp = freeboardAR[i];
                    freeboardAR[i] = freeboardAR[j];
                    freeboardAR[j] = temp;
                }
            }
        }
    }

    list_sort[0].children[0].addEventListener('click', (event) =>{
        let turn = event.target;
        list_sort[0].children[0].style.opacity = 1;
        list_sort[0].children[1].style.opacity = 0.5;
        if(turn.innerText == "리뷰순"){
            read_turn();
            for (let i = 0; i < list_freeboard.length; i++) {
                list_freeboard[i].children[0].innerText = `${freeboardAR[i].subject}`;
                list_freeboard[i].children[1].innerText = `${freeboardAR[i].userInfo}`;
                list_freeboard[i].children[2].innerText = `${freeboardAR[i].heart}`;
                list_freeboard[i].children[3].innerText = `${freeboardAR[i].read}`;
                list_freeboard[i].children[4].innerText = `${freeboardAR[i].commentNum}`;
            }
        }
    })

    list_sort[0].children[1].addEventListener('click', (event) =>{
        let turn = event.target;
        list_sort[0].children[0].style.opacity = 0.5;
        list_sort[0].children[1].style.opacity = 1;
        if(turn.innerText == "좋아요순"){
            heart_turn();
            for (let i = 0; i < list_freeboard.length; i++) {
                list_freeboard[i].children[0].innerText = `${freeboardAR[i].subject}`;
                list_freeboard[i].children[1].innerText = `${freeboardAR[i].userInfo}`;
                list_freeboard[i].children[2].innerText = `${freeboardAR[i].heart}`;
                list_freeboard[i].children[3].innerText = `${freeboardAR[i].read}`;
                list_freeboard[i].children[4].innerText = `${freeboardAR[i].commentNum}`;
            }
    }
})
