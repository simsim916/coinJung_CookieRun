'use strict';

let cookieAR = [
    {
        name: '올리브맛 쿠키',
        img: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/1bbb1f94-16ce-4ca6-0b53-508cc6b01c00/format=avif',
        type: '에픽',
        info: '구불거리는 협곡, 빽빽한 나무로 들어찬 밀림, 치즈 가루가 먼지처럼 날리는 사막까지! 아직 세상에 드러나지 않은 장소를 찾아다니는 고고학자 올리브맛 쿠키! 지중해의 햇빛을 듬뿍 받은, 그 중에서도 반질거리고 동그랗게 여문 올리브만 넣어서인지 누구보다 똑부러진다. 놀라운 역사와 믿기 힘든 이야기를 간직하고 있는 고대 왕국들을 찾아내 돋보기로 세심하게 조사하고 기록하는 쿠키. 오래된 유적의 비밀이 풀릴 때면 너무 기쁜 나머지 올리브유를 흘리기도 한다는데... ',
        bgimg: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/884611b2-fefd-4203-01f9-4650b6d24100/public',
        skill: {
            skillName: '박쥐 대소동',
            skillInfo: '탐사 도구를 두고 와 유적으로 돌아간 올리브맛 쿠키를 발견한 박쥐 떼가 날아든다. 도망가다 넘어진 올리브맛 쿠키를 보지 못한 박쥐 떼들은 올리브맛 쿠키 전방의 적들에게 피해를 입힌다. 박쥐 떼는 박쥐의 색에 따라 다양한 속성을 가지며, 적들에게 디버프를 걸고 확률적으로 기절시킨다',
            skillImg: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/88e3d14e-88db-4777-ed92-684191321700/public',
        }
    },
    {
        id : 'mozza',
        name: '모짜렐라맛 쿠키',
        img: "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/54e1ec2f-823d-4945-f54c-c2c31236ed00/format=webp",
        type: '에픽',
        info: '말랑말랑한 치즈 조각에 앉아, 공중에 가득 떠 있는 황금창을 통해 골드치즈 왕국 곳곳을 지켜보는 쿠키가 있으니.바로 관제실의 주인 모짜렐라맛 쿠키다! 왕국의 골칫거리를 해결하라는 골드치즈 쿠키의 명을 받들어 여러 문제를 처리해 왔다는데? 수로 속에 빠진 치즈볼새의 반지를 찾는 일부터, 황금도시로 침입한 몬스터 추적까지! 그 어떤 사건사고도 금창 조작 한 번으로 간단히 해결해 낸다.',
        // bgimg: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/437c8f58-6fc6-4b96-9bf0-681ed20aa300/public',
        skill: {
            skillName: '몰캉몰캉 모짜렐라',
            skillInfo: '종을 흔들어 아군에게 버프를 걸고 모짜렐라 새를 부른다. 모짜렐라 새는 적들에게 피해를 주고 함께 멀리 날아가 모짜렐라 웅덩이를 만든다. 모짜렐라 웅덩이에 빠진 적들은 지속 피해를 입고 이동속도와 공격속도가 감소한다.',
            skillImg: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/d27aa78f-06f1-42d6-7a2a-33938e342300/public',
        }
    },
    {
        name: '페투치니맛 쿠키',
        img: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/d7a5b0e6-595a-401d-e4ef-efc19dd70e00/format=avif',
        type: '에픽',
        info: '우우우... 모든 것이 현란하게 빛나는 골드치즈 왕국의 황금도시와 가장 어울리지 않는 존재, 미라 페투치니맛 쿠키! 이 쿠키는 번쩍이는 장신구나 재료를 올린 다른 쿠키들과 다르게 오래 묵은 파스타면을 칭칭 감고 있다. 하지만 황금을 좋아하는 걸 보면 확실히 골드치즈 왕국의 백성은 맞는 듯하다. 왜 자신만 미라인지, 여기가 어디인지 모르겠다는 얼굴로 뒤뚱대며 돌아다니는 걸 보면 왠지 모를 으스스함이 느껴진다나. 만약 황금도시를 걷다가 어둠 속을 홀로 걷고 있던 페투치니맛 쿠키를 만나면 생전 처음 경험하는 이상한 세계의 뒤편으로 빨려들어갈 수 있다고 하는데... ',
        bgimg: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/d19fe6bc-0f5e-4561-f96c-102c5f5abe00/public',
        skill: {
            skillName: '불안정한 페투치니',
            skillInfo: '적을 도발하고 거대한 페투치니 손을 내려찍어 적에게 피해를 입히고 공격력과 방어력을 감소시킨다. 일정 시간 동안 자신의 체력을 회복하고 강화된 페투치니 붕대 버프를 부여한다. ',
            skillImg: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/7e25ac3d-d985-4908-04ca-4ab13dcf8700/public',
        }
    },
    {
        name: '락스타맛 쿠키',
        img: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/a5bae60f-65cb-472b-09ba-4b2f62199700/format=webp',
        type: '에픽',
        info: '우우우... 모든 것이 현란하게 빛나는 골드치즈 왕국의 황금도시와 가장 어울리지 않는 존재, 미라 페투치니맛 쿠키! 이 쿠키는 번쩍이는 장신구나 재료를 올린 다른 쿠키들과 다르게 오래 묵은 파스타면을 칭칭 감고 있다. 하지만 황금을 좋아하는 걸 보면 확실히 골드치즈 왕국의 백성은 맞는 듯하다. 왜 자신만 미라인지, 여기가 어디인지 모르겠다는 얼굴로 뒤뚱대며 돌아다니는 걸 보면 왠지 모를 으스스함이 느껴진다나. 만약 황금도시를 걷다가 어둠 속을 홀로 걷고 있던 페투치니맛 쿠키를 만나면 생전 처음 경험하는 이상한 세계의 뒤편으로 빨려들어갈 수 있다고 하는데... ',
        bgimg: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/d19fe6bc-0f5e-4561-f96c-102c5f5abe00/public',
        skill: {
            skillName: '불안정한 페투치니',
            skillInfo: '적을 도발하고 거대한 페투치니 손을 내려찍어 적에게 피해를 입히고 공격력과 방어력을 감소시킨다. 일정 시간 동안 자신의 체력을 회복하고 강화된 페투치니 붕대 버프를 부여한다. ',
            skillImg: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/7e25ac3d-d985-4908-04ca-4ab13dcf8700/public',
        }
    },
    {
        name: '프릴해파리맛 쿠키',
        img: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/4c757485-3aa8-44e0-e216-bf5dcb749900/format=webp',
        type: '에픽',
        info: '',
        bgimg: '',
        skill: {
            skillName: '',
            skillInfo: '',
            skillImg: '',
        }
    },
    {
        name: '슈가 쿠키',
        img: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/c27781aa-4293-49cf-e523-c2f63499d700/format=webp',
        type: '스페셜',
        info: '우우우... 모든 것이 현란하게 빛나는 골드치즈 왕국의 황금도시와 가장 어울리지 않는 존재, 미라 페투치니맛 쿠키! 이 쿠키는 번쩍이는 장신구나 재료를 올린 다른 쿠키들과 다르게 오래 묵은 파스타면을 칭칭 감고 있다. 하지만 황금을 좋아하는 걸 보면 확실히 골드치즈 왕국의 백성은 맞는 듯하다. 왜 자신만 미라인지, 여기가 어디인지 모르겠다는 얼굴로 뒤뚱대며 돌아다니는 걸 보면 왠지 모를 으스스함이 느껴진다나. 만약 황금도시를 걷다가 어둠 속을 홀로 걷고 있던 페투치니맛 쿠키를 만나면 생전 처음 경험하는 이상한 세계의 뒤편으로 빨려들어갈 수 있다고 하는데... ',
        bgimg: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/d19fe6bc-0f5e-4561-f96c-102c5f5abe00/public',
        skill: {
            skillName: '불안정한 페투치니',
            skillInfo: '적을 도발하고 거대한 페투치니 손을 내려찍어 적에게 피해를 입히고 공격력과 방어력을 감소시킨다. 일정 시간 동안 자신의 체력을 회복하고 강화된 페투치니 붕대 버프를 부여한다. ',
            skillImg: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/7e25ac3d-d985-4908-04ca-4ab13dcf8700/public',
        }
    },
    {
        name: '제이홉 쿠키',
        img: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/07358c75-5680-4547-ea08-c2e5962d9100/format=webp',
        type: '스페셜',
        info: '',
        bgimg: '',
        skill: {
            skillName: '',
            skillInfo: '',
            skillImg: '',
        }
    },
    {
        name: '진 쿠키',
        img: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/57977eaf-57b3-4ee5-3f0d-5cb24b2c9200/format=webp',
        type: '스페셜',
        info: '',
        bgimg: '',
        skill: {
            skillName: '',
            skillInfo: '',
            skillImg: '',
        }
    },
    {
        name: '지민 쿠키',
        img: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/7490b8b8-5e15-4b8f-7ccb-bffe50cb3000/format=webp',
        type: '스페셜',
        info: '우우우... 모든 것이 현란하게 빛나는 골드치즈 왕국의 황금도시와 가장 어울리지 않는 존재, 미라 페투치니맛 쿠키! 이 쿠키는 번쩍이는 장신구나 재료를 올린 다른 쿠키들과 다르게 오래 묵은 파스타면을 칭칭 감고 있다. 하지만 황금을 좋아하는 걸 보면 확실히 골드치즈 왕국의 백성은 맞는 듯하다. 왜 자신만 미라인지, 여기가 어디인지 모르겠다는 얼굴로 뒤뚱대며 돌아다니는 걸 보면 왠지 모를 으스스함이 느껴진다나. 만약 황금도시를 걷다가 어둠 속을 홀로 걷고 있던 페투치니맛 쿠키를 만나면 생전 처음 경험하는 이상한 세계의 뒤편으로 빨려들어갈 수 있다고 하는데... ',
        bgimg: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/d19fe6bc-0f5e-4561-f96c-102c5f5abe00/public',
        skill: {
            skillName: '불안정한 페투치니',
            skillInfo: '적을 도발하고 거대한 페투치니 손을 내려찍어 적에게 피해를 입히고 공격력과 방어력을 감소시킨다. 일정 시간 동안 자신의 체력을 회복하고 강화된 페투치니 붕대 버프를 부여한다. ',
            skillImg: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/7e25ac3d-d985-4908-04ca-4ab13dcf8700/public',
        }
    },

    {
        name: '뷔 쿠키',
        img: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/4780ff10-2546-42bd-3e01-aafad5678100/format=avif',
        type: '스페셜',
        info: '비둘기에게 밥주는 걸 좋아하고 꽃을 보면 꼭 챙겨가는 낭만쟁이, 뷔 쿠키! 잘생긴 외모에 풍성한 아래 속눈썹이 매력 포인트! 넘치는 끼와 감성적인 보이스로 방탄소년단 쿠키들의 무대를 더욱 풍부하게 만들어준다. 무대에 설 때마다 매번 다른 매력을 보여주는 것으로 유명한데, 어찌나 다양한 매력을 가지고 있는지 팬들 사이에서는 호랑이와 곰돌이 중 닮은 동물을 고르느라 애를 먹을 정도라고! 사교적인 성격 덕분에 누구와도 친해질 수 있다는 뷔 쿠키. 쿠키 왕국에 와서도 쿠키들과 소중한 추억을 하나하나 쌓아가는 것을 기대 중이라고 한다.',
        bgimg: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/1634d5a9-1679-41b0-fbc8-47274273de00/public',
        skill: {
            skillName: '아미의 가호',
            skillInfo: '언제 어디서나 함께 하는 아미들의 따뜻한 가호 덕분에, 방탄소년단 쿠키는 적의 공격을 무시하는 특수 무적 효과를 가지고 있다. 스킬 사용 시 멋진 음악으로 아군 전체의 체력을 주기적으로 회복시켜주며 기절 면역 버프와 해로운 효과 감소 버프를 부여한다. ',
            skillImg: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/b2b1aff8-f417-4aa5-7b15-938056897a00/public',
        }
    },
    {
        name: 'RM 쿠키',
        img: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/33f8248a-1aa4-4ce0-b5ea-4294e41f3c00/format=webp',
        type: '스페셜',
        info: '',
        bgimg: '',
        skill: {
            skillName: '',
            skillInfo: '',
            skillImg: '',
        }
    },
    {
        name: '정국 쿠키',
        img: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/a3eac2a5-9860-440d-064e-f578529cfb00/format=webp',
        type: '스페셜',
        info: '',
        bgimg: '',
        skill: {
            skillName: '',
            skillInfo: '',
            skillImg: '',
        }
    },
    {
        name: '바다요정 쿠키',
        img: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/5c73d6cf-acca-4794-2c6b-e7657f07d500/format=webp',
        type: '레전더리',
        info: '',
        bgimg: '',
        skill: {
            skillName: '',
            skillInfo: '',
            skillImg: '',
        }
    },
    {
        name: '블랙펄 쿠키',
        img: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/30b05211-31d7-4d89-731a-766236b80400/format=webp',
        type: '레전더리',
        info: '',
        bgimg: '',
        skill: {
            skillName: '',
            skillInfo: '',
            skillImg: '',
        }
    },
    {
        name: '샤이닝글리터맛 쿠키',
        img: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/053b55cb-f072-4606-cc9b-0682c6109200/format=avif',
        type: '슈퍼에픽',
        info: '아침에는 음악방송에서, 점심에는 사인 남긴 가게에서, 저녁에는 빌딩 광고판에서! 하루라도 샤이닝글리터맛 쿠키의 얼굴을 보지 않는 날은 없다! 중독적인 노래와 독보적인 퍼포먼스로 데뷔하자마자 단숨에 슈퍼스타가 된 쿠키. 팝스타로서 최고점에 오른 대스타 샤이닝글리터맛 쿠키의 다음 행보는... 바로 락스타를 향한 새로운 도전! 오랫동안 간직해온 락을 향한 열정에 자신만의 반짝임을 더해 선보이는 새로운 모습과 노래에 쿠키 세계는 또 한 번 열광할 수밖에! 화려한 팝스타가 락 스피릿을 이해할 리 없다고 비판하는 쿠키도 있지만, 어떤 모습으로든 언제나 반짝이는 샤이닝글리터맛 쿠키는 새로운 도전이 무섭지 않다. 진심어린 열정을 담는 것이 바로 락 스피릿이니까!',
        bgimg: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/c20b5ac6-fcb1-4e60-a34f-d2e646694700/public',
        skill: {
            skillName: '내 무대에 집중해!',
            skillInfo: '샤이닝글리터맛 쿠키가 노래를 부르며 공연한다. 아군에게 샤이닝 락스피릿 버프를 걸고 노래를 부르며 적들에게 피해를 준다. 노래피해는 치명타 발동 시 대상의 피해감소를 일정량 무시하고 과전류를 건다.',
            skillImg: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/8161e849-fd6e-4111-82a6-37175291f300/public',
        }
    },

    {
        name: '퓨어바닐라 쿠키',
        img: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/661a7cb3-20a3-4342-38b6-0002259dbc00/format=webp',
        type: '에이션트',
        info: '',
        bgimg: '',
        skill: {
            skillName: '',
            skillInfo: '',
            skillImg: '',
        }
    },
    {
        name: '홀리베리 쿠키',
        img: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/1fa93893-b101-453c-20ed-b7f6558a7900/format=webp',
        type: '에이션트',
        info: '',
        bgimg: '',
        skill: {
            skillName: '',
            skillInfo: '',
            skillImg: '',
        }
    },
    {
        name: '다크카카오 쿠키',
        img: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/e3cec218-533b-4c5b-54b1-b8cd0ff19c00/format=webp',
        type: '에이션트',
        info: '',
        bgimg: '',
        skill: {
            skillName: '',
            skillInfo: '',
            skillImg: '',
        }
    },
    {
        name: '골드치즈 쿠키',
        img: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/77952fdb-e537-467f-4e6c-782343298600/format=webp',
        type: '에이션트',
        info: '',
        bgimg: '',
        skill: {
            skillName: '',
            skillInfo: '',
            skillImg: '',
        }
    },
    {
        name: '용과 드래곤 쿠키',
        img: 'https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/63318f83-07ec-4e91-5128-8f0b77180500/format=webp',
        type: '드래곤',
        info: '',
        bgimg: '',
        skill: {
            skillName: '',
            skillInfo: '',
            skillImg: '',
        }
    },
]
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
let mainList = main[0].getElementsByClassName('main_list')
// 쿠키 목록 작성 시키는 함수
export default function writeCookieList() {
    function getData(){
        fetch("http://localhost:3000/cookieData")
        .then(response=>response.json())
        .then(json => {
            console.log(json)
        for (let i = 0; i < json[0].length; i++) {
            mainList[0].innerHTML += `<div class="main_list_box"><img src="${json[0][i].img}" alt="${json[0][i].name}"><div class="main_list_item_name">${json[0][i].name}</div><div class="main_list_item_type"><img src="${cookieType(json[0][i].type)}" alt="${json[0][i].type}"></div></div>`
        }})
    }
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

let lastPage;
writeCookieList();
{
    main[0].addEventListener('click', detail)
    
}

async function detail (event) {
    let eventOJ = event.target.closest('.main_list_box')
    let cookieName = eventOJ.children[1].innerText;
    let compare;
    for (let i = 0 ; i < cookieAR.length ; i++){
        if(cookieName == cookieAR[i].name){
            compare = i;
        }
    }        
    lastPage=main[0].innerHTML;
    main[0].innerHTML = 
        `<div class="back_button">뒤로가기</div><div class="main_info_container"><img src="${cookieAR[compare].img}" alt="${cookieAR[compare].name}">
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
    console.log(event)
    removeEventListener(event);
    console.log(event)
    let backButton = main[0].getElementsByClassName('back_button');
    backButton[0].addEventListener('click',(event)=>{
        if(event.target.className == 'back_button')
        main[0].innerHTML = lastPage;
    main[0].addEventListener('click', detail)
    })

}

// function backBtn (){
//     let backButton = main[0].getElementsByClassName('back_button');
//     backButton[0].addEventListener('click',(event)=>{
//         if(event.target.className == 'back_button')
//         main[0].innerHTML = lastPage;
//     main[0].addEventListener('click', detail)
//     })
// }