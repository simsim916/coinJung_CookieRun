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
        heart : 6,
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
        heart : 7,
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
        heart : 33,
        read : 571,
        commentNum : 2,
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
        heart : 332,
        read : 5723,
        commentNum : 6,
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
        heart : 0,
        read : 57,
        freeboard_date : '12시간 전'
    },
    {
        subject : '스토브 인증기 왜이럼?',
        userInfo : '그래도이쁨',
        heart : 0,
        read : 57,
        freeboard_date : '12시간 전'
    },
    {
        subject : '스토브 인증기 왜이럼?',
        userInfo : '그래도이쁨',
        heart : 0,
        read : 57,
        freeboard_date : '12시간 전'
    },
    {
        subject : '스토브 인증기 왜이럼?',
        userInfo : '그래도이쁨',
        heart : 0,
        read : 57,
        freeboard_date : '12시간 전'
    },
    {
        subject : '스토브 인증기 왜이럼?',
        userInfo : '그래도이쁨',
        heart : 0,
        read : 57,
        freeboard_date : '12시간 전'
    },
    {
        subject : '스토브 인증기 왜이럼?',
        userInfo : '그래도이쁨',
        heart : 0,
        read : 57,
        freeboard_date : '12시간 전'
    },
    {
        subject : '스토브 인증기 왜이럼?',
        userInfo : '그래도이쁨',
        heart : 0,
        read : 57,
        freeboard_date : '12시간 전'
    },
    {
        subject : '스토브 인증기 왜이럼?',
        userInfo : '그래도이쁨',
        heart : 0,
        read : 57,
        freeboard_date : '12시간 전'
    },
    {
        subject : '스토브 인증기 왜이럼?',
        userInfo : '그래도이쁨',
        heart : 0,
        read : 57,
        freeboard_date : '12시간 전'
    },
];

let main = document.getElementsByTagName('main'),
    noSubject = main[0].querySelectorAll('.notice_subject'),
    noDate = main[0].querySelectorAll('.notice_date'),
    list_freeboard = main[0].querySelectorAll('.list_freeboard');



console.log(list_freeboard[0].children[5]);

    for(let i = 0 ; i < noSubject.length ; i++){
        noSubject[i].innerText = `${notiboardAR[i].notice_subject}`;
        noDate[i].innerText = `${notiboardAR[i].notice_date}`;
    }



    // for(let i = 0 ; i < list_freeboard.length ; i++){
    //     list_freeboard[i].children[0].innerHTML = `${freeboardAR[i].subject}`;
    //     list_freeboard[i].children[1].innerHTML = `${freeboardAR[i].userInfo}`;
    //     list_freeboard[i].children[2].innerHTML = `${freeboardAR[i].heart}`;
    //     list_freeboard[i].children[4].innerHTML = `${freeboardAR[i].read}`;
    //     list_freeboard[i].children[5].innerHTML = `${freeboardAR[i].freeboard_date}`;
    // }


