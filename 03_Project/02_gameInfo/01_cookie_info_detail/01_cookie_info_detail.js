'use strict';

let cookieAR = [
    {
        name: '모짜렐라맛 쿠키',
        img: "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/54e1ec2f-823d-4945-f54c-c2c31236ed00/format=webp",
        type: '에픽',
        bgimg: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/437c8f58-6fc6-4b96-9bf0-681ed20aa300/public',
        skill: {
            skillName: '몰캉몰캉 모짜렐라',
            skillInfo: '종을 흔들어 아군에게 버프를 걸고 모짜렐라 새를 부른다. 모짜렐라 새는 적들에게 피해를 주고 함께 멀리 날아가 모짜렐라 웅덩이를 만든다. 모짜렐라 웅덩이에 빠진 적들은 지속 피해를 입고 이동속도와 공격속도가 감소한다.',
            skillImg: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/d27aa78f-06f1-42d6-7a2a-33938e342300/public',
        }
    },
    {
        name: '올리브맛 쿠키',
        img: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/88e3d14e-88db-4777-ed92-684191321700/public',
        type: '에픽',
        bgimg: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/884611b2-fefd-4203-01f9-4650b6d24100/public',
        skill: {
            skillName: '박쥐 대소동',
            skillInfo: '탐사 도구를 두고 와 유적으로 돌아간 올리브맛 쿠키를 발견한 박쥐 떼가 날아든다. 도망가다 넘어진 올리브맛 쿠키를 보지 못한 박쥐 떼들은 올리브맛 쿠키 전방의 적들에게 피해를 입힌다. 박쥐 떼는 박쥐의 색에 따라 다양한 속성을 가지며, 적들에게 디버프를 걸고 확률적으로 기절시킨다',
            skillImg: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/88e3d14e-88db-4777-ed92-684191321700/public',
        }
    },
    {
        name: '페투치니맛 쿠키',
        img: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/d7a5b0e6-595a-401d-e4ef-efc19dd70e00/format=avif',
        type: '에픽',
        bgimg: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/d19fe6bc-0f5e-4561-f96c-102c5f5abe00/public',
        skill: {
            skillName: '불안정한 페투치니',
            skillInfo: '적을 도발하고 거대한 페투치니 손을 내려찍어 적에게 피해를 입히고 공격력과 방어력을 감소시킨다. 일정 시간 동안 자신의 체력을 회복하고 강화된 페투치니 붕대 버프를 부여한다. ',
            skillImg: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/7e25ac3d-d985-4908-04ca-4ab13dcf8700/public',
        }
    },
    {
        name: '뷔 쿠키',
        img: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/1634d5a9-1679-41b0-fbc8-47274273de00/public',
        type: '스페셜',
        bgimg: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/1634d5a9-1679-41b0-fbc8-47274273de00/public',
        skill: {
            skillName: '아미의 가호',
            skillInfo: '언제 어디서나 함께 하는 아미들의 따뜻한 가호 덕분에, 방탄소년단 쿠키는 적의 공격을 무시하는 특수 무적 효과를 가지고 있다. 스킬 사용 시 멋진 음악으로 아군 전체의 체력을 주기적으로 회복시켜주며 기절 면역 버프와 해로운 효과 감소 버프를 부여한다. ',
            skillImg: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/b2b1aff8-f417-4aa5-7b15-938056897a00/public',
        }
    },
    {
        name: '샤이닝글리터맛 쿠키',
        img: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/053b55cb-f072-4606-cc9b-0682c6109200/format=avif',
        type: '슈퍼에픽',
        bgimg: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/c20b5ac6-fcb1-4e60-a34f-d2e646694700/public',
        skill: {
            skillName: '내 무대에 집중해!',
            skillInfo: '샤이닝글리터맛 쿠키가 노래를 부르며 공연한다. 아군에게 샤이닝 락스피릿 버프를 걸고 노래를 부르며 적들에게 피해를 준다. 노래피해는 치명타 발동 시 대상의 피해감소를 일정량 무시하고 과전류를 건다.',
            skillImg: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/8161e849-fd6e-4111-82a6-37175291f300/public',
        }
    }
]
let typeImg = {
    에픽 : '',
    레전더리 : '',
}


let mainInfoContainer = document.getElementsByClassName('main_info_container');
let mainInfoPic = mainInfoContainer[0].getElementsByClassName('main_info_pic');
let gridBox1 = mainInfoContainer[0].getElementsByClassName('grid_box1');


console.log(gridBox1[0]);
mainInfoPic[0].children[0].src=`${cookieAR[0].img}`;
// switch(cookieAR[0].type){
//     case '에픽' :

// }