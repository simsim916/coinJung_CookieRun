'use strict';


let indexBox = document.getElementById('indexBox');
let backBtn = document.getElementById('backBtn');
let headBottom = document.getElementById('headBottom')
let lastSlideBtn, lastSlideBtn2;
let itemNum;


const product = [
    {
        "update": "2023-11-20",
        "title": "[쿠키런스토어]쿠키런 스키릇팩 피규어",
        "intro": "** 1차 수량 품절로, 재입고 예정입니다. 재입고 예정일 : 11/17(금) ~ 20(월)",
        "price": 5000,
        "img": [
            "https://shop-phinf.pstatic.net/20231114_202/1699953403443Iz8WI_JPEG/52025790832298130_1281338351.jpg?type=m510",
            "https://shop-phinf.pstatic.net/20231114_110/1699953409184PThGI_JPEG/10886639949869620_312616009.jpg?type=m510",
            "https://shop-phinf.pstatic.net/20231114_70/1699953413567rf7dx_JPEG/12503080342079771_653990839.jpg?type=m510"
        ],
        "views": 100,
        "sell": 15,
        "stock": 10,
        "textreview": 1,
        "photoreview": 0
    },
    {
        "update": "2023-01-10",
        "title": "[쿠키런스토어]쿠키런 랜덤 키체인",
        "intro": "** 1차 수량 품절로, 재입고 예정입니다. 재입고 예정일 : 11/17(금) ~ 20(월)",
        "price": 5000,
        "img": [
            "https://shop-phinf.pstatic.net/20231114_258/1699952949584oLc3t_JPEG/12502616375115323_1205563992.jpg?type=o1000",
            "https://shop-phinf.pstatic.net/20231114_239/1699953157715MKUUp_PNG/12502824501346304_791880017.png?type=m510",
            "https://shop-phinf.pstatic.net/20231114_124/1699952960161AhGyC_PNG/52025347519581164_186066631.png?type=m510"
        ],
        "views": 10,
        "sell": 10,
        "stock": 10,
        "textreview": 1,
        "photoreview": 1
    },
    {
        "update": "2023-11-06",
        "title": "[러블리 인형공방X메리베어 장난감가게]곰젤리 솜인형 분홍곰&노란곰 (예약구매)",
        "intro": "※구매 전 주의사항💖 기존 러블리 인형공방 곰젤리 솜인형은 신규 출시된 곰젤리 솜인형 분홍곰과 동일한 사이즈입니다.",
        "price": 33900,
        "img": [
            "https://shop-phinf.pstatic.net/20231107_123/1699332251801gjxdW_JPEG/2889125558569288_1157254165.jpg?type=m510",
            "https://shop-phinf.pstatic.net/20231107_213/1699332318038Oxyfx_JPEG/21061882862541920_1286727552.jpg?type=m510",
            "https://shop-phinf.pstatic.net/20231107_249/1699332283919gEG1R_JPEG/5049165717078541_2138465965.jpg?type=m510"
        ],
        "views": 350,
        "sell": 52,
        "stock": 14,
        "textreview": 0,
        "photoreview": 0
    },
    {
        "update": "2023-10-20",
        "title": "[쿠키런스토어]브레이브 어드벤쳐 용감한쿠키",
        "intro": "모험을 떠나는 용감한 쿠키가 귀여운 인형 키링으로!",
        "price": 2000,
        "img": [
            "https://shop-phinf.pstatic.net/20230712_149/1689141723147orsKB_JPEG/3343809127994028_1734275766.jpg?type=m510",
            "https://shop-phinf.pstatic.net/20230712_127/1689141731171yd5hn_JPEG/2472532521839555_309567386.jpg?type=m510",
            "https://shop-phinf.pstatic.net/20230712_86/1689141740472nE1ue_JPEG/2472541823698659_1014661318.jpg?type=m510"
        ],
        "views": 51,
        "sell": 3,
        "stock": 10,
        "textreview": 1,
        "photoreview": 1
    },
    {
        "update": "2023-10-03",
        "title": "[쿠키런스토어]용과 드래곤 솜인형",
        "intro": "[ 용과 드래곤 솜인형 정식 출시! ] 예약구매 종료 후 많은 분들이 재입고 문의러블리 인형공방에서 생산된 귀여운 매력의 용과 드래곤 솜인형을 실물로 만나보세요 💖",
        "price": 25500,
        "img": [
            "https://shop-phinf.pstatic.net/20230517_44/1684285908800m8pmy_JPEG/37653453786116170_2131712759.jpg?type=m510",
            "https://shop-phinf.pstatic.net/20230517_253/1684285934380zHmLR_JPEG/1328414787855998_52302134.jpg?type=m10000_10000_no_rotate",
            "https://shop-phinf.pstatic.net/20230517_177/16842859454345tSW5_JPEG/1957429866527695_2095394078.jpg?type=m510"
        ],
        "views": 60,
        "sell": 7,
        "stock": 10,
        "textreview": 0,
        "photoreview": 1
    },
    {
        "update": "2023-09-02",
        "title": "[쿠키런스토어]생일케이크맛 쿠키 멜로디 인형",
        "intro": "",
        "price": 28900,
        "img": [
            "https://shop-phinf.pstatic.net/20230530_41/168541639577879P8x_PNG/331284706142756_1175157606.png?type=m510",
            "https://shop-phinf.pstatic.net/20230530_202/1685416401019ni7bi_PNG/34294242827817026_188283953.png?type=m510",
            "https://shop-phinf.pstatic.net/20230530_147/1685416406452XeL6u_PNG/932495258998725_283619380.png?type=m510"
        ],
        "views": 99,
        "sell": 70,
        "stock": 10,
        "textreview": 1,
        "photoreview": 0
    },
    {
        "update": "2023-07-22",
        "title": "[쿠키런스토어] 샤벳상어맛 쿠키 피규어 보조배터리",
        "intro": "0ㅇ0!!!샤벱상어맛 쿠키가 나타났다 ~~~",
        "price": 31900,
        "img": [
            "https://shop-phinf.pstatic.net/20220823_62/1661233791836m8wqp_PNG/62369690490944342_876926460.png?type=m510",
            "https://shop-phinf.pstatic.net/20220823_286/1661233798336X6Blq_PNG/62369697006803626_162329504.png?type=m510",
            "https://shop-phinf.pstatic.net/20220823_31/1661233802750kyKu0_PNG/62369701407927074_1535011828.png?type=m510"
        ],
        "views": 1,
        "sell": 1,
        "stock": 0,
        "textreview": 1,
        "photoreview": 0
    },
    {
        "update": "2023-03-15",
        "title": "[쿠키런스토어] 소원캠프 담요",
        "intro": "캠핑을 즐기는 용쿠와 카놀리맛 쿠키, 스모어맛 쿠기가 그려진 담요",
        "price": 24500,
        "img": [
            "https://shop-phinf.pstatic.net/20231026_67/1698307135475QB3CW_PNG/45272390259857309_1833212626.png?type=m510",
            "https://shop-phinf.pstatic.net/20231026_30/1698307522671C5yD8_PNG/6731570879509740_1254135976.png?type=m10000_10000_no_rotate",
            "https://shop-phinf.pstatic.net/20231026_41/16983075272592Sd87_PNG/15634458736097447_2139218969.png?type=m510"
        ],
        "views": 26,
        "sell": 60,
        "stock": 22,
        "textreview": 1,
        "photoreview": 1
    },
    {
        "update": "2023-06-19",
        "title": "[쿠키런스토어] 브릭시티 브릭 아카데미 카드홀더",
        "intro": "학생증이나 카드, 포토카드를 쏘옥 넣어 다닐 수 있는 귀여운 카드홀더",
        "price": 8000,
        "img": [
            "https://shop-phinf.pstatic.net/20230913_273/16945972840111Yj0G_PNG/8486141803720366_870153347.png?type=m510",
            "https://shop-phinf.pstatic.net/20230913_228/1694597301207gBESe_PNG/7804699658075337_110220462.png?type=m510",
            "https://shop-phinf.pstatic.net/20230913_270/1694597296827isbAb_PNG/8486154589164739_1378573262.png?type=m510"
        ],
        "views": 51,
        "sell": 59,
        "stock": 3,
        "textreview": 0,
        "photoreview": 1
    },
    {
        "update": "2023-11-11",
        "title": " [쿠키런스토어] 신발 주머니 2종",
        "intro": "귀여운 쿠키런 킹덤 캐릭터가 그려진 신발주머니 에코백! 내부 안감은 탈부착 가능합니다",
        "price": 18000,
        "img": [
            "https://shop-phinf.pstatic.net/20230223_67/1677117527603W2Ckx_PNG/78253362385111924_1812615033.png?type=m510",
            "https://shop-phinf.pstatic.net/20230223_234/1677117508708KS9Em_PNG/78253343483341702_1100125177.png?type=m510",
            "https://shop-phinf.pstatic.net/20230223_219/1677117513824zFxn2_PNG/78253348589325963_1123206294.png?type=m510"
        ],
        "views": 5,
        "sell": 11,
        "stock": 0,
        "textreview": 1,
        "photoreview": 0
    },
    {
        "update": "2023-07-28",
        "title": "[쿠키런스토어] 쿠키런 보석십자수 2종",
        "intro": "귀여운 보석십자수로 슬기로운 집콕 취미를 가져보세요!!",
        "price": 7000,
        "img": [
            "https://shop-phinf.pstatic.net/20230420_179/1681970401334FJo4w_PNG/3588464147749791_219870445.png?type=m510",
            "https://shop-phinf.pstatic.net/20230420_154/1681970429235SSzKG_PNG/3588492031896648_422970713.png?type=m510",
            "https://shop-phinf.pstatic.net/20230420_74/1681970418719gvXtf_PNG/6248937492319129_295722263.png?type=m510",
            "https://shop-phinf.pstatic.net/20230420_192/1681970414357MOsuc_PNG/521298182616958_2034132921.png?type=m510"
        ],
        "views": 4,
        "sell": 55,
        "stock": 4,
        "textreview": 1,
        "photoreview": 0
    },
    {
        "update": "2022-09-30",
        "title": "[쿠키런스토어] 마스코트 인형 키링 거미저택",
        "intro": "쿠키런 속 모든 쿠키와 캐릭터를 마스코트 인형 키링으로 만나보세요!",
        "price": 12000,
        "img": [
            "https://shop-phinf.pstatic.net/20221025_295/1666663529340vHblQ_PNG/67799308883748583_945922320.png?type=m510",
            "https://shop-phinf.pstatic.net/20221025_140/1666663539034xutmD_PNG/67799318721067920_2142540269.png?type=m510",
            "https://shop-phinf.pstatic.net/20221025_58/1666663532651b5StV_PNG/67799312333419887_488323151.png?type=m510"
        ],
        "views": 3,
        "sell": 3,
        "stock": 0,
        "textreview": 1,
        "photoreview": 1
    },
    {
        "update": "2022-07-28",
        "title": "[쿠키런스토어] 브레이브 어드벤쳐 키트",
        "intro": "다양한 쿠키들을 만나러 어썸브레드로 가자! 왕관을 훔쳐 달아나는 케이크 들개부터 잡아볼까요",
        "price": 36900,
        "img": [
            "https://shop-phinf.pstatic.net/20220928_225/1664328534323fnUSs_PNG/65464432854508140_518643531.png?type=m510",
            "https://shop-phinf.pstatic.net/20220928_74/1664328525676DnMrD_PNG/65464424364280268_598838589.png?type=m510",
            "https://shop-phinf.pstatic.net/20220928_81/1664328568344c3qsO_PNG/65464467033923194_1200714962.png?type=m510"
        ],
        "views": 103,
        "sell": 103,
        "stock": 103,
        "textreview": 0,
        "photoreview": 1
    },
    {
        "update": "2022-07-03",
        "title": "[쿠키런스토어] 마스코트 인형 키링 1탄",
        "intro": "쿠키런 속 모든 쿠키와 캐릭터를 마스코트 인형 키링으로 만나보세요! 당신의 최애 캐릭터는 누구?",
        "price": 12000,
        "img": [
            "https://shop-phinf.pstatic.net/20220819_288/1660896333215ft9En_PNG/62032221856975838_457480920.png?type=m510",
            "https://shop-phinf.pstatic.net/20220819_96/1660896326451qatrU_PNG/62032215106791469_513009483.png?type=m510",
            "https://shop-phinf.pstatic.net/20220819_280/1660896336347i2PcY_PNG/62032225002720712_1069566276.png?type=m510"
        ],
        "views": 7,
        "sell": 7,
        "stock": 0,
        "textreview": 1,
        "photoreview": 0
    }
];
const cookieData = [
    {
        "name": "올리브맛 쿠키",
        "img": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/1bbb1f94-16ce-4ca6-0b53-508cc6b01c00/format=avif",
        "type": "에픽",
        "info": "구불거리는 협곡, 빽빽한 나무로 들어찬 밀림, 치즈 가루가 먼지처럼 날리는 사막까지! 아직 세상에 드러나지 않은 장소를 찾아다니는 고고학자 올리브맛 쿠키! 지중해의 햇빛을 듬뿍 받은, 그 중에서도 반질거리고 동그랗게 여문 올리브만 넣어서인지 누구보다 똑부러진다. 놀라운 역사와 믿기 힘든 이야기를 간직하고 있는 고대 왕국들을 찾아내 돋보기로 세심하게 조사하고 기록하는 쿠키. 오래된 유적의 비밀이 풀릴 때면 너무 기쁜 나머지 올리브유를 흘리기도 한다는데... ",
        "skill": {
            "skillName": "박쥐 대소동",
            "skillInfo": "탐사 도구를 두고 와 유적으로 돌아간 올리브맛 쿠키를 발견한 박쥐 떼가 날아든다. 도망가다 넘어진 올리브맛 쿠키를 보지 못한 박쥐 떼들은 올리브맛 쿠키 전방의 적들에게 피해를 입힌다. 박쥐 떼는 박쥐의 색에 따라 다양한 속성을 가지며, 적들에게 디버프를 걸고 확률적으로 기절시킨다",
            "skillImg": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/88e3d14e-88db-4777-ed92-684191321700/public"
        }
    },
    {
        "id": "mozza",
        "name": "모짜렐라맛 쿠키",
        "img": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/54e1ec2f-823d-4945-f54c-c2c31236ed00/format=webp",
        "type": "에픽",
        "info": "말랑말랑한 치즈 조각에 앉아, 공중에 가득 떠 있는 황금창을 통해 골드치즈 왕국 곳곳을 지켜보는 쿠키가 있으니.바로 관제실의 주인 모짜렐라맛 쿠키다! 왕국의 골칫거리를 해결하라는 골드치즈 쿠키의 명을 받들어 여러 문제를 처리해 왔다는데? 수로 속에 빠진 치즈볼새의 반지를 찾는 일부터, 황금도시로 침입한 몬스터 추적까지! 그 어떤 사건사고도 금창 조작 한 번으로 간단히 해결해 낸다.",
        "skill": {
            "skillName": "몰캉몰캉 모짜렐라",
            "skillInfo": "종을 흔들어 아군에게 버프를 걸고 모짜렐라 새를 부른다. 모짜렐라 새는 적들에게 피해를 주고 함께 멀리 날아가 모짜렐라 웅덩이를 만든다. 모짜렐라 웅덩이에 빠진 적들은 지속 피해를 입고 이동속도와 공격속도가 감소한다.",
            "skillImg": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/d27aa78f-06f1-42d6-7a2a-33938e342300/public"
        }
    },
    {
        "name": "페투치니맛 쿠키",
        "img": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/d7a5b0e6-595a-401d-e4ef-efc19dd70e00/format=avif",
        "type": "에픽",
        "info": "우우우... 모든 것이 현란하게 빛나는 골드치즈 왕국의 황금도시와 가장 어울리지 않는 존재, 미라 페투치니맛 쿠키! 이 쿠키는 번쩍이는 장신구나 재료를 올린 다른 쿠키들과 다르게 오래 묵은 파스타면을 칭칭 감고 있다. 하지만 황금을 좋아하는 걸 보면 확실히 골드치즈 왕국의 백성은 맞는 듯하다. 왜 자신만 미라인지, 여기가 어디인지 모르겠다는 얼굴로 뒤뚱대며 돌아다니는 걸 보면 왠지 모를 으스스함이 느껴진다나. 만약 황금도시를 걷다가 어둠 속을 홀로 걷고 있던 페투치니맛 쿠키를 만나면 생전 처음 경험하는 이상한 세계의 뒤편으로 빨려들어갈 수 있다고 하는데... ",
        "skill": {
            "skillName": "불안정한 페투치니",
            "skillInfo": "적을 도발하고 거대한 페투치니 손을 내려찍어 적에게 피해를 입히고 공격력과 방어력을 감소시킨다. 일정 시간 동안 자신의 체력을 회복하고 강화된 페투치니 붕대 버프를 부여한다. ",
            "skillImg": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/7e25ac3d-d985-4908-04ca-4ab13dcf8700/public"
        }
    },
    {
        "name": "락스타맛 쿠키",
        "img": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/a5bae60f-65cb-472b-09ba-4b2f62199700/format=webp",
        "type": "에픽",
        "info": "우우우... 모든 것이 현란하게 빛나는 골드치즈 왕국의 황금도시와 가장 어울리지 않는 존재, 미라 페투치니맛 쿠키! 이 쿠키는 번쩍이는 장신구나 재료를 올린 다른 쿠키들과 다르게 오래 묵은 파스타면을 칭칭 감고 있다. 하지만 황금을 좋아하는 걸 보면 확실히 골드치즈 왕국의 백성은 맞는 듯하다. 왜 자신만 미라인지, 여기가 어디인지 모르겠다는 얼굴로 뒤뚱대며 돌아다니는 걸 보면 왠지 모를 으스스함이 느껴진다나. 만약 황금도시를 걷다가 어둠 속을 홀로 걷고 있던 페투치니맛 쿠키를 만나면 생전 처음 경험하는 이상한 세계의 뒤편으로 빨려들어갈 수 있다고 하는데... ",
        "skill": {
            "skillName": "불안정한 페투치니",
            "skillInfo": "적을 도발하고 거대한 페투치니 손을 내려찍어 적에게 피해를 입히고 공격력과 방어력을 감소시킨다. 일정 시간 동안 자신의 체력을 회복하고 강화된 페투치니 붕대 버프를 부여한다. ",
            "skillImg": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/7e25ac3d-d985-4908-04ca-4ab13dcf8700/public"
        }
    },
    {
        "name": "프릴해파리맛 쿠키",
        "img": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/4c757485-3aa8-44e0-e216-bf5dcb749900/format=webp",
        "type": "에픽",
        "info": "말랑말랑한 치즈 조각에 앉아, 공중에 가득 떠 있는 황금창을 통해 골드치즈 왕국 곳곳을 지켜보는 쿠키가 있으니.바로 관제실의 주인 모짜렐라맛 쿠키다! 왕국의 골칫거리를 해결하라는 골드치즈 쿠키의 명을 받들어 여러 문제를 처리해 왔다는데? 수로 속에 빠진 치즈볼새의 반지를 찾는 일부터, 황금도시로 침입한 몬스터 추적까지! 그 어떤 사건사고도 금창 조작 한 번으로 간단히 해결해 낸다.",
        "skill": {
            "skillName": "몰캉몰캉 모짜렐라",
            "skillInfo": "종을 흔들어 아군에게 버프를 걸고 모짜렐라 새를 부른다. 모짜렐라 새는 적들에게 피해를 주고 함께 멀리 날아가 모짜렐라 웅덩이를 만든다. 모짜렐라 웅덩이에 빠진 적들은 지속 피해를 입고 이동속도와 공격속도가 감소한다.",
            "skillImg": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/d27aa78f-06f1-42d6-7a2a-33938e342300/public"
        }
    },
    {
        "name": "슈가 쿠키",
        "img": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/c27781aa-4293-49cf-e523-c2f63499d700/format=webp",
        "type": "스페셜",
        "info": "비둘기에게 밥주는 걸 좋아하고 꽃을 보면 꼭 챙겨가는 낭만쟁이, 뷔 쿠키! 잘생긴 외모에 풍성한 아래 속눈썹이 매력 포인트! 넘치는 끼와 감성적인 보이스로 방탄소년단 쿠키들의 무대를 더욱 풍부하게 만들어준다. 무대에 설 때마다 매번 다른 매력을 보여주는 것으로 유명한데, 어찌나 다양한 매력을 가지고 있는지 팬들 사이에서는 호랑이와 곰돌이 중 닮은 동물을 고르느라 애를 먹을 정도라고! 사교적인 성격 덕분에 누구와도 친해질 수 있다는 뷔 쿠키. 쿠키 왕국에 와서도 쿠키들과 소중한 추억을 하나하나 쌓아가는 것을 기대 중이라고 한다.",
        "skill": {
            "skillName": "아미의 가호",
            "skillInfo": "언제 어디서나 함께 하는 아미들의 따뜻한 가호 덕분에, 방탄소년단 쿠키는 적의 공격을 무시하는 특수 무적 효과를 가지고 있다. 스킬 사용 시 멋진 음악으로 아군 전체의 체력을 주기적으로 회복시켜주며 기절 면역 버프와 해로운 효과 감소 버프를 부여한다. ",
            "skillImg": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/b2b1aff8-f417-4aa5-7b15-938056897a00/public"
        }
    },
    {
        "name": "제이홉 쿠키",
        "img": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/07358c75-5680-4547-ea08-c2e5962d9100/format=webp",
        "type": "스페셜",
        "info": "비둘기에게 밥주는 걸 좋아하고 꽃을 보면 꼭 챙겨가는 낭만쟁이, 뷔 쿠키! 잘생긴 외모에 풍성한 아래 속눈썹이 매력 포인트! 넘치는 끼와 감성적인 보이스로 방탄소년단 쿠키들의 무대를 더욱 풍부하게 만들어준다. 무대에 설 때마다 매번 다른 매력을 보여주는 것으로 유명한데, 어찌나 다양한 매력을 가지고 있는지 팬들 사이에서는 호랑이와 곰돌이 중 닮은 동물을 고르느라 애를 먹을 정도라고! 사교적인 성격 덕분에 누구와도 친해질 수 있다는 뷔 쿠키. 쿠키 왕국에 와서도 쿠키들과 소중한 추억을 하나하나 쌓아가는 것을 기대 중이라고 한다.",
        "skill": {
            "skillName": "아미의 가호",
            "skillInfo": "언제 어디서나 함께 하는 아미들의 따뜻한 가호 덕분에, 방탄소년단 쿠키는 적의 공격을 무시하는 특수 무적 효과를 가지고 있다. 스킬 사용 시 멋진 음악으로 아군 전체의 체력을 주기적으로 회복시켜주며 기절 면역 버프와 해로운 효과 감소 버프를 부여한다. ",
            "skillImg": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/b2b1aff8-f417-4aa5-7b15-938056897a00/public"
        }
    },
    {
        "name": "진 쿠키",
        "img": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/57977eaf-57b3-4ee5-3f0d-5cb24b2c9200/format=webp",
        "type": "스페셜",
        "info": "비둘기에게 밥주는 걸 좋아하고 꽃을 보면 꼭 챙겨가는 낭만쟁이, 뷔 쿠키! 잘생긴 외모에 풍성한 아래 속눈썹이 매력 포인트! 넘치는 끼와 감성적인 보이스로 방탄소년단 쿠키들의 무대를 더욱 풍부하게 만들어준다. 무대에 설 때마다 매번 다른 매력을 보여주는 것으로 유명한데, 어찌나 다양한 매력을 가지고 있는지 팬들 사이에서는 호랑이와 곰돌이 중 닮은 동물을 고르느라 애를 먹을 정도라고! 사교적인 성격 덕분에 누구와도 친해질 수 있다는 뷔 쿠키. 쿠키 왕국에 와서도 쿠키들과 소중한 추억을 하나하나 쌓아가는 것을 기대 중이라고 한다.",
        "skill": {
            "skillName": "아미의 가호",
            "skillInfo": "언제 어디서나 함께 하는 아미들의 따뜻한 가호 덕분에, 방탄소년단 쿠키는 적의 공격을 무시하는 특수 무적 효과를 가지고 있다. 스킬 사용 시 멋진 음악으로 아군 전체의 체력을 주기적으로 회복시켜주며 기절 면역 버프와 해로운 효과 감소 버프를 부여한다. ",
            "skillImg": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/b2b1aff8-f417-4aa5-7b15-938056897a00/public"
        }
    },
    {
        "name": "지민 쿠키",
        "img": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/7490b8b8-5e15-4b8f-7ccb-bffe50cb3000/format=webp",
        "type": "스페셜",
        "info": "비둘기에게 밥주는 걸 좋아하고 꽃을 보면 꼭 챙겨가는 낭만쟁이, 뷔 쿠키! 잘생긴 외모에 풍성한 아래 속눈썹이 매력 포인트! 넘치는 끼와 감성적인 보이스로 방탄소년단 쿠키들의 무대를 더욱 풍부하게 만들어준다. 무대에 설 때마다 매번 다른 매력을 보여주는 것으로 유명한데, 어찌나 다양한 매력을 가지고 있는지 팬들 사이에서는 호랑이와 곰돌이 중 닮은 동물을 고르느라 애를 먹을 정도라고! 사교적인 성격 덕분에 누구와도 친해질 수 있다는 뷔 쿠키. 쿠키 왕국에 와서도 쿠키들과 소중한 추억을 하나하나 쌓아가는 것을 기대 중이라고 한다.",
        "skill": {
            "skillName": "아미의 가호",
            "skillInfo": "언제 어디서나 함께 하는 아미들의 따뜻한 가호 덕분에, 방탄소년단 쿠키는 적의 공격을 무시하는 특수 무적 효과를 가지고 있다. 스킬 사용 시 멋진 음악으로 아군 전체의 체력을 주기적으로 회복시켜주며 기절 면역 버프와 해로운 효과 감소 버프를 부여한다. ",
            "skillImg": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/b2b1aff8-f417-4aa5-7b15-938056897a00/public"
        }
    },
    {
        "name": "뷔 쿠키",
        "img": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/4780ff10-2546-42bd-3e01-aafad5678100/format=avif",
        "type": "스페셜",
        "info": "비둘기에게 밥주는 걸 좋아하고 꽃을 보면 꼭 챙겨가는 낭만쟁이, 뷔 쿠키! 잘생긴 외모에 풍성한 아래 속눈썹이 매력 포인트! 넘치는 끼와 감성적인 보이스로 방탄소년단 쿠키들의 무대를 더욱 풍부하게 만들어준다. 무대에 설 때마다 매번 다른 매력을 보여주는 것으로 유명한데, 어찌나 다양한 매력을 가지고 있는지 팬들 사이에서는 호랑이와 곰돌이 중 닮은 동물을 고르느라 애를 먹을 정도라고! 사교적인 성격 덕분에 누구와도 친해질 수 있다는 뷔 쿠키. 쿠키 왕국에 와서도 쿠키들과 소중한 추억을 하나하나 쌓아가는 것을 기대 중이라고 한다.",
        "skill": {
            "skillName": "아미의 가호",
            "skillInfo": "언제 어디서나 함께 하는 아미들의 따뜻한 가호 덕분에, 방탄소년단 쿠키는 적의 공격을 무시하는 특수 무적 효과를 가지고 있다. 스킬 사용 시 멋진 음악으로 아군 전체의 체력을 주기적으로 회복시켜주며 기절 면역 버프와 해로운 효과 감소 버프를 부여한다. ",
            "skillImg": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/b2b1aff8-f417-4aa5-7b15-938056897a00/public"
        }
    },
    {
        "name": "RM 쿠키",
        "img": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/33f8248a-1aa4-4ce0-b5ea-4294e41f3c00/format=webp",
        "type": "스페셜",
        "info": "비둘기에게 밥주는 걸 좋아하고 꽃을 보면 꼭 챙겨가는 낭만쟁이, 뷔 쿠키! 잘생긴 외모에 풍성한 아래 속눈썹이 매력 포인트! 넘치는 끼와 감성적인 보이스로 방탄소년단 쿠키들의 무대를 더욱 풍부하게 만들어준다. 무대에 설 때마다 매번 다른 매력을 보여주는 것으로 유명한데, 어찌나 다양한 매력을 가지고 있는지 팬들 사이에서는 호랑이와 곰돌이 중 닮은 동물을 고르느라 애를 먹을 정도라고! 사교적인 성격 덕분에 누구와도 친해질 수 있다는 뷔 쿠키. 쿠키 왕국에 와서도 쿠키들과 소중한 추억을 하나하나 쌓아가는 것을 기대 중이라고 한다.",
        "skill": {
            "skillName": "아미의 가호",
            "skillInfo": "언제 어디서나 함께 하는 아미들의 따뜻한 가호 덕분에, 방탄소년단 쿠키는 적의 공격을 무시하는 특수 무적 효과를 가지고 있다. 스킬 사용 시 멋진 음악으로 아군 전체의 체력을 주기적으로 회복시켜주며 기절 면역 버프와 해로운 효과 감소 버프를 부여한다. ",
            "skillImg": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/b2b1aff8-f417-4aa5-7b15-938056897a00/public"
        }
    },
    {
        "name": "정국 쿠키",
        "img": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/a3eac2a5-9860-440d-064e-f578529cfb00/format=webp",
        "type": "스페셜",
        "info": "비둘기에게 밥주는 걸 좋아하고 꽃을 보면 꼭 챙겨가는 낭만쟁이, 뷔 쿠키! 잘생긴 외모에 풍성한 아래 속눈썹이 매력 포인트! 넘치는 끼와 감성적인 보이스로 방탄소년단 쿠키들의 무대를 더욱 풍부하게 만들어준다. 무대에 설 때마다 매번 다른 매력을 보여주는 것으로 유명한데, 어찌나 다양한 매력을 가지고 있는지 팬들 사이에서는 호랑이와 곰돌이 중 닮은 동물을 고르느라 애를 먹을 정도라고! 사교적인 성격 덕분에 누구와도 친해질 수 있다는 뷔 쿠키. 쿠키 왕국에 와서도 쿠키들과 소중한 추억을 하나하나 쌓아가는 것을 기대 중이라고 한다.",
        "skill": {
            "skillName": "아미의 가호",
            "skillInfo": "언제 어디서나 함께 하는 아미들의 따뜻한 가호 덕분에, 방탄소년단 쿠키는 적의 공격을 무시하는 특수 무적 효과를 가지고 있다. 스킬 사용 시 멋진 음악으로 아군 전체의 체력을 주기적으로 회복시켜주며 기절 면역 버프와 해로운 효과 감소 버프를 부여한다. ",
            "skillImg": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/b2b1aff8-f417-4aa5-7b15-938056897a00/public"
        }
    },
    {
        "name": "바다요정 쿠키",
        "img": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/5c73d6cf-acca-4794-2c6b-e7657f07d500/format=webp",
        "type": "레전더리",
        "info": "말랑말랑한 치즈 조각에 앉아, 공중에 가득 떠 있는 황금창을 통해 골드치즈 왕국 곳곳을 지켜보는 쿠키가 있으니.바로 관제실의 주인 모짜렐라맛 쿠키다! 왕국의 골칫거리를 해결하라는 골드치즈 쿠키의 명을 받들어 여러 문제를 처리해 왔다는데? 수로 속에 빠진 치즈볼새의 반지를 찾는 일부터, 황금도시로 침입한 몬스터 추적까지! 그 어떤 사건사고도 금창 조작 한 번으로 간단히 해결해 낸다.",
        "skill": {
            "skillName": "몰캉몰캉 모짜렐라",
            "skillInfo": "종을 흔들어 아군에게 버프를 걸고 모짜렐라 새를 부른다. 모짜렐라 새는 적들에게 피해를 주고 함께 멀리 날아가 모짜렐라 웅덩이를 만든다. 모짜렐라 웅덩이에 빠진 적들은 지속 피해를 입고 이동속도와 공격속도가 감소한다.",
            "skillImg": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/d27aa78f-06f1-42d6-7a2a-33938e342300/public"
        }
    },
    {
        "name": "블랙펄 쿠키",
        "img": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/30b05211-31d7-4d89-731a-766236b80400/format=webp",
        "type": "레전더리",
        "info": "말랑말랑한 치즈 조각에 앉아, 공중에 가득 떠 있는 황금창을 통해 골드치즈 왕국 곳곳을 지켜보는 쿠키가 있으니.바로 관제실의 주인 모짜렐라맛 쿠키다! 왕국의 골칫거리를 해결하라는 골드치즈 쿠키의 명을 받들어 여러 문제를 처리해 왔다는데? 수로 속에 빠진 치즈볼새의 반지를 찾는 일부터, 황금도시로 침입한 몬스터 추적까지! 그 어떤 사건사고도 금창 조작 한 번으로 간단히 해결해 낸다.",
        "skill": {
            "skillName": "몰캉몰캉 모짜렐라",
            "skillInfo": "종을 흔들어 아군에게 버프를 걸고 모짜렐라 새를 부른다. 모짜렐라 새는 적들에게 피해를 주고 함께 멀리 날아가 모짜렐라 웅덩이를 만든다. 모짜렐라 웅덩이에 빠진 적들은 지속 피해를 입고 이동속도와 공격속도가 감소한다.",
            "skillImg": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/d27aa78f-06f1-42d6-7a2a-33938e342300/public"
        }
    },
    {
        "name": "샤이닝글리터맛 쿠키",
        "img": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/053b55cb-f072-4606-cc9b-0682c6109200/format=avif",
        "type": "슈퍼에픽",
        "info": "아침에는 음악방송에서, 점심에는 사인 남긴 가게에서, 저녁에는 빌딩 광고판에서! 하루라도 샤이닝글리터맛 쿠키의 얼굴을 보지 않는 날은 없다! 중독적인 노래와 독보적인 퍼포먼스로 데뷔하자마자 단숨에 슈퍼스타가 된 쿠키. 팝스타로서 최고점에 오른 대스타 샤이닝글리터맛 쿠키의 다음 행보는... 바로 락스타를 향한 새로운 도전! 오랫동안 간직해온 락을 향한 열정에 자신만의 반짝임을 더해 선보이는 새로운 모습과 노래에 쿠키 세계는 또 한 번 열광할 수밖에! 화려한 팝스타가 락 스피릿을 이해할 리 없다고 비판하는 쿠키도 있지만, 어떤 모습으로든 언제나 반짝이는 샤이닝글리터맛 쿠키는 새로운 도전이 무섭지 않다. 진심어린 열정을 담는 것이 바로 락 스피릿이니까!",
        "skill": {
            "skillName": "내 무대에 집중해!",
            "skillInfo": "샤이닝글리터맛 쿠키가 노래를 부르며 공연한다. 아군에게 샤이닝 락스피릿 버프를 걸고 노래를 부르며 적들에게 피해를 준다. 노래피해는 치명타 발동 시 대상의 피해감소를 일정량 무시하고 과전류를 건다.",
            "skillImg": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/8161e849-fd6e-4111-82a6-37175291f300/public"
        }
    },
    {
        "name": "퓨어바닐라 쿠키",
        "img": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/661a7cb3-20a3-4342-38b6-0002259dbc00/format=webp",
        "type": "에이션트",
        "info": "말랑말랑한 치즈 조각에 앉아, 공중에 가득 떠 있는 황금창을 통해 골드치즈 왕국 곳곳을 지켜보는 쿠키가 있으니.바로 관제실의 주인 모짜렐라맛 쿠키다! 왕국의 골칫거리를 해결하라는 골드치즈 쿠키의 명을 받들어 여러 문제를 처리해 왔다는데? 수로 속에 빠진 치즈볼새의 반지를 찾는 일부터, 황금도시로 침입한 몬스터 추적까지! 그 어떤 사건사고도 금창 조작 한 번으로 간단히 해결해 낸다.",
        "skill": {
            "skillName": "몰캉몰캉 모짜렐라",
            "skillInfo": "종을 흔들어 아군에게 버프를 걸고 모짜렐라 새를 부른다. 모짜렐라 새는 적들에게 피해를 주고 함께 멀리 날아가 모짜렐라 웅덩이를 만든다. 모짜렐라 웅덩이에 빠진 적들은 지속 피해를 입고 이동속도와 공격속도가 감소한다.",
            "skillImg": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/d27aa78f-06f1-42d6-7a2a-33938e342300/public"
        }
    },
    {
        "name": "홀리베리 쿠키",
        "img": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/1fa93893-b101-453c-20ed-b7f6558a7900/format=webp",
        "type": "에이션트",
        "info": "말랑말랑한 치즈 조각에 앉아, 공중에 가득 떠 있는 황금창을 통해 골드치즈 왕국 곳곳을 지켜보는 쿠키가 있으니.바로 관제실의 주인 모짜렐라맛 쿠키다! 왕국의 골칫거리를 해결하라는 골드치즈 쿠키의 명을 받들어 여러 문제를 처리해 왔다는데? 수로 속에 빠진 치즈볼새의 반지를 찾는 일부터, 황금도시로 침입한 몬스터 추적까지! 그 어떤 사건사고도 금창 조작 한 번으로 간단히 해결해 낸다.",
        "skill": {
            "skillName": "몰캉몰캉 모짜렐라",
            "skillInfo": "종을 흔들어 아군에게 버프를 걸고 모짜렐라 새를 부른다. 모짜렐라 새는 적들에게 피해를 주고 함께 멀리 날아가 모짜렐라 웅덩이를 만든다. 모짜렐라 웅덩이에 빠진 적들은 지속 피해를 입고 이동속도와 공격속도가 감소한다.",
            "skillImg": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/d27aa78f-06f1-42d6-7a2a-33938e342300/public"
        }
    },
    {
        "name": "다크카카오 쿠키",
        "img": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/e3cec218-533b-4c5b-54b1-b8cd0ff19c00/format=webp",
        "type": "에이션트",
        "info": "말랑말랑한 치즈 조각에 앉아, 공중에 가득 떠 있는 황금창을 통해 골드치즈 왕국 곳곳을 지켜보는 쿠키가 있으니.바로 관제실의 주인 모짜렐라맛 쿠키다! 왕국의 골칫거리를 해결하라는 골드치즈 쿠키의 명을 받들어 여러 문제를 처리해 왔다는데? 수로 속에 빠진 치즈볼새의 반지를 찾는 일부터, 황금도시로 침입한 몬스터 추적까지! 그 어떤 사건사고도 금창 조작 한 번으로 간단히 해결해 낸다.",
        "skill": {
            "skillName": "몰캉몰캉 모짜렐라",
            "skillInfo": "종을 흔들어 아군에게 버프를 걸고 모짜렐라 새를 부른다. 모짜렐라 새는 적들에게 피해를 주고 함께 멀리 날아가 모짜렐라 웅덩이를 만든다. 모짜렐라 웅덩이에 빠진 적들은 지속 피해를 입고 이동속도와 공격속도가 감소한다.",
            "skillImg": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/d27aa78f-06f1-42d6-7a2a-33938e342300/public"
        }
    },
    {
        "name": "골드치즈 쿠키",
        "img": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/77952fdb-e537-467f-4e6c-782343298600/format=webp",
        "type": "에이션트",
        "info": "말랑말랑한 치즈 조각에 앉아, 공중에 가득 떠 있는 황금창을 통해 골드치즈 왕국 곳곳을 지켜보는 쿠키가 있으니.바로 관제실의 주인 모짜렐라맛 쿠키다! 왕국의 골칫거리를 해결하라는 골드치즈 쿠키의 명을 받들어 여러 문제를 처리해 왔다는데? 수로 속에 빠진 치즈볼새의 반지를 찾는 일부터, 황금도시로 침입한 몬스터 추적까지! 그 어떤 사건사고도 금창 조작 한 번으로 간단히 해결해 낸다.",
        "skill": {
            "skillName": "몰캉몰캉 모짜렐라",
            "skillInfo": "종을 흔들어 아군에게 버프를 걸고 모짜렐라 새를 부른다. 모짜렐라 새는 적들에게 피해를 주고 함께 멀리 날아가 모짜렐라 웅덩이를 만든다. 모짜렐라 웅덩이에 빠진 적들은 지속 피해를 입고 이동속도와 공격속도가 감소한다.",
            "skillImg": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/d27aa78f-06f1-42d6-7a2a-33938e342300/public"
        }
    },
    {
        "name": "용과 드래곤 쿠키",
        "img": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/63318f83-07ec-4e91-5128-8f0b77180500/format=webp",
        "type": "드래곤",
        "info": "비둘기에게 밥주는 걸 좋아하고 꽃을 보면 꼭 챙겨가는 낭만쟁이, 뷔 쿠키! 잘생긴 외모에 풍성한 아래 속눈썹이 매력 포인트! 넘치는 끼와 감성적인 보이스로 방탄소년단 쿠키들의 무대를 더욱 풍부하게 만들어준다. 무대에 설 때마다 매번 다른 매력을 보여주는 것으로 유명한데, 어찌나 다양한 매력을 가지고 있는지 팬들 사이에서는 호랑이와 곰돌이 중 닮은 동물을 고르느라 애를 먹을 정도라고! 사교적인 성격 덕분에 누구와도 친해질 수 있다는 뷔 쿠키. 쿠키 왕국에 와서도 쿠키들과 소중한 추억을 하나하나 쌓아가는 것을 기대 중이라고 한다.",
        "skill": {
            "skillName": "아미의 가호",
            "skillInfo": "언제 어디서나 함께 하는 아미들의 따뜻한 가호 덕분에, 방탄소년단 쿠키는 적의 공격을 무시하는 특수 무적 효과를 가지고 있다. 스킬 사용 시 멋진 음악으로 아군 전체의 체력을 주기적으로 회복시켜주며 기절 면역 버프와 해로운 효과 감소 버프를 부여한다. ",
            "skillImg": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/b2b1aff8-f417-4aa5-7b15-938056897a00/public"
        }
    }
];
const cookieTypeImg = [
    {
        "올": "./img/tag_all.png",
        "에픽": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/e6cc601e-19ee-421b-e936-9cdd20eaf100/public",
        "레전더리": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/fb2bbed1-186c-4edf-1741-7edb8cdf7100/public",
        "슈퍼에픽": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/ef97da70-b550-428a-c03c-ed4db59a9300/public",
        "스페셜": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/dc7567c4-7d16-4017-52c2-4586e7112500/public",
        "에이션트": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/b80b67b8-dc5c-49e3-07ca-f1673e459100/public",
        "드래곤": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/9ea3ad41-1df7-4b8e-0e52-3c1f9ac48400/public"
    }
]
const slideMenuCookie = [
    {
        "html": "<div><img src=\"https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/54e1ec2f-823d-4945-f54c-c2c31236ed00/format=webp\" alt=\"\"><p>새소식</p><p>쿠키 세상의 새로운 소식을 만나보세요!</p></div>",
        "bgcolor": "#a71c44"
    },
    {
        "html": "<div><img src=\"https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/e3cec218-533b-4c5b-54b1-b8cd0ff19c00/format=webp\" alt=\"\"><p>게임 정보</p><p>다양한 쿠키들과 짜릿한 액션을 즐겨보세요!</p></div>",
        "bgcolor": "#d08e4e"
    },
    {
        "html": "<div><img src=\"https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/4780ff10-2546-42bd-3e01-aafad5678100/format=avif\" alt=\"\"><p>커뮤니티</p><p>유저분들의 생각과 의견을 공유해주세요!</p></div>",
        "bgcolor": "#E5B532"
    },
    {
        "html": "<div><img src=\"https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/5c73d6cf-acca-4794-2c6b-e7657f07d500/format=webp\" alt=\"\"><p>미디어</p><p>게임 밖 쿠키들의 이야기를 들어보세요!</p></div>",
        "bgcolor": "#E5B532"
    },
    {
        "html": "<div><img src=\"https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/5c73d6cf-acca-4794-2c6b-e7657f07d500/format=webp\" alt=\"\"><p>SHOP</p><p>쿠키들의 다양한 상품들을 만나보세요!</p></div>",
        "bgcolor": "#E5B532"
    },
    {
        "html": "<div><img src=\"https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/5c73d6cf-acca-4794-2c6b-e7657f07d500/format=webp\" alt=\"\"><p>고객센터</p><p>유저의 이야기를 직접 전달해주세요!</p></div>",
        "bgcolor": "#E5B532"
    }
];
const cookieGIF = [
    "https://i.pinimg.com/originals/5e/a7/82/5ea782dee1243d13f4fcdedf96cb4c4d.gif",
    "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/c27781aa-4293-49cf-e523-c2f63499d700/format=webp",
    "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/4780ff10-2546-42bd-3e01-aafad5678100/format=webp",
    "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/54e1ec2f-823d-4945-f54c-c2c31236ed00/format=webp",
    "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/33f8248a-1aa4-4ce0-b5ea-4294e41f3c00/format=webp",
    "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/07358c75-5680-4547-ea08-c2e5962d9100/format=webp",
    "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/5f4cbe1f-a8cd-417e-fe54-5ca34620da00/format=webp",
    "https://i.ibb.co/W3nhXY6/Madeleinecookiegachaanimation.gif",
    "https://i.ibb.co/kQkRzjB/Lattecookiegachaanimation.gif"
];
const eventImg = [
    [
        "./img/update1.jpg",
        "11월 업데이트",
        0
    ],
    [
        "./img/event1.png",
        "모험의 탑",
        1
    ],
    [
        "./img/event2.png",
        "퍼스트 브레이브",
        2
    ],
    [
        "./img/event3.png",
        "쿠키런 1조원",
        3
    ],
    [
        "./img/event1.png",
        "신규 레이드 모드",
        4
    ],
    [
        "./img/event1.png",
        "신규 쿠키",
        5
    ],
    [
        "./img/event1.png",
        "7주년 소원캠프",
        6
    ]
];
const headerImg = [
    "./img/bg1.webp",
    "./img/bg2.webp",
    "./img/bg3.png",
    "./img/bg4.webp",
    "./img/bg5.webp",
    "./img/bg6.webp",
    "./img/bg7.png",
    "./img/bg8.png",
    "./img/bg9.png"
];
const freeboard = [
    {
        "subject": "아오 밸런드 패치 언제함?",
        "userInfo": [
            "금광동 쏘스윗"
        ],
        "heart": 3,
        "read": 57,
        "commentNum": 2,
        "alticle": "게임하다 갑자기 화가 치밀올라서 글써봄\n\n\n\n업데이트 도데체 언제함??",
        "freeboard_date": "1시간 전",
        "comment_user_info": [
            "슈비버거조하",
            "내여친존예"
        ],
        "content": [
            "킹덤아레나 노잼; 업데이트좀",
            "솔직히 마틀렌 너무 사기야"
        ]
    },
    {
        "subject": "쿠키런 풀스펙 구매합니다..!",
        "userInfo": [
            "그린탑코인정"
        ],
        "heart": 62,
        "read": 81,
        "commentNum": 2,
        "alticle": "구글계정(구깡) 내보내기 안한계정만 구매 희망해요~\n\n캐릭 펫 마탕 당연히 만렙이어야 하구여\n                   \n스킨은 전부다 보유할필요한없지만 풀스펙계정답게\n                   \n많이보유했으면 하구요\n                   \n키티 미미같은 쿠키는 없어도 됩니다 ㅎㅎ",
        "freeboard_date": "3시간 전",
        "comment_user_info": [
            "섹시소녀네티",
            "깜구클럽"
        ],
        "content": [
            "메일보냈어요",
            "여기 이런거 올려도됨?"
        ]
    },
    {
        "subject": "두둠칫 둠칫 친추 ㄱ",
        "userInfo": [
            "두둠칫 둠칫"
        ],
        "heart": 74,
        "read": 231,
        "commentNum": 2,
        "alticle": "길드원 구함\n마를렌서버 두둠칫 둠칫 친추 ㄱㄱ",
        "freeboard_date": "5시간 전",
        "comment_user_info": [
            "창민이형파이팅",
            "★문석짱★"
        ],
        "content": [
            "마를렌 누가함;;",
            "킹덤전 열수있음?"
        ]
    },
    {
        "subject": "결정석너프하면접을거임",
        "userInfo": [
            "봉삼이"
        ],
        "heart": 333,
        "read": 571,
        "commentNum": 1,
        "alticle": "너프하지마라진짜\n\n",
        "freeboard_date": "10시간 전",
        "comment_user_info": [
            "지현누나힘내요"
        ],
        "content": [
            "접지마여 할만한데"
        ]
    },
    {
        "subject": "솔직히 자바스크립트 너무 어려움ㅠㅠ",
        "userInfo": [
            "그린실버타운"
        ],
        "heart": 32,
        "read": 5723,
        "commentNum": 5,
        "alticle": "CSS도 안익숙한데 자바스크립트 언제 할수있을까\n님들은 ㅓㅇ떰\n",
        "freeboard_date": "1시간 전",
        "comment_user_info": [
            "창민이형파이팅",
            "★문석짱★",
            "봉삼이",
            "민쥐",
            "지현누나힘내요",
            "자바의신 수미"
        ],
        "content": [
            "ㅇㅈ",
            "할만하던데",
            "와인정",
            "ㅇㅇ; 진도 너무빠름",
            "파이팅해보자구요..",
            "ㅇㅇ 할만함 ㅎㅎ"
        ]
    },
    {
        "subject": "롤하실분",
        "userInfo": [
            "금광동 쏘스윗"
        ],
        "heart": 32,
        "read": 5723,
        "commentNum": 5,
        "alticle": "친구 ㄱ 나 미드유저\n",
        "freeboard_date": "1시간 전",
        "comment_user_info": [
            "창민이형파이팅",
            "★문석짱★",
            "봉삼이",
            "민쥐",
            "지현누나힘내요",
            "자바의신 수미"
        ],
        "content": [
            "오",
            "오늘ㄱ",
            "그님티?",
            "나는 롤체 마스터",
            "피방가자",
            "하하 감삼다"
        ]
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 40,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 34,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 43,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 123,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼? 11번째",
        "userInfo": "그래도이쁨",
        "heart": 43,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 13,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "테스트용입니당",
        "userInfo": [
            "지현누나힘내요"
        ],
        "heart": 74,
        "read": 231,
        "commentNum": 2,
        "alticle": "머가이리힘든지",
        "freeboard_date": "19시간 전",
        "comment_user_info": [
            "창민이형파이팅",
            "★문석짱★"
        ],
        "content": [
            "마를렌 누가함;;",
            "쿠키런그만하자~~!"
        ]
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "나는 사실 짱구다",
        "userInfo": [
            "민쥐"
        ],
        "heart": 103,
        "read": 511,
        "commentNum": 1,
        "alticle": "나는 사실 짱구다\n하하\n",
        "freeboard_date": "10시간 전",
        "comment_user_info": [
            "지현누나힘내요"
        ],
        "content": [
            "ㅋㅋㅋㅋㅋㅋㅋ"
        ]
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼? 21번째",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "우리팀짱",
        "userInfo": [
            "그린실버타운"
        ],
        "heart": 123,
        "read": 51,
        "commentNum": 1,
        "alticle": "쿠키런 흥해라\n",
        "freeboard_date": "10시간 전",
        "comment_user_info": [
            "★문석짱★"
        ],
        "content": [
            "그린실버타운만쉐"
        ]
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼? 31번째",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "자바개쉬움",
        "userInfo": [
            "자바의신 수미"
        ],
        "heart": 123,
        "read": 51,
        "commentNum": 1,
        "alticle": "인정~\n",
        "freeboard_date": "10시간 전",
        "comment_user_info": [
            "봉삼이"
        ],
        "content": [
            "껌이지"
        ]
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼? 41번째",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "리액트의 신",
        "userInfo": [
            "봉삼이"
        ],
        "heart": 103,
        "read": 523,
        "commentNum": 1,
        "alticle": "은 누가 될까\n",
        "freeboard_date": "10시간 전",
        "comment_user_info": [
            "창민이형힘내요"
        ],
        "content": [
            "반장님?"
        ]
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼? 51번째",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "스토브 인증기 왜이럼?",
        "userInfo": "그래도이쁨",
        "heart": 12,
        "read": 57,
        "freeboard_date": "12시간 전",
        "commentNum": 65
    },
    {
        "subject": "반장님 사랑합니다",
        "userInfo": [
            "창민이형힘내요"
        ],
        "heart": 103,
        "read": 523,
        "commentNum": 1,
        "alticle": "사랑합니다^_^\n",
        "freeboard_date": "10시간 전",
        "comment_user_info": [
            "지현누나힘내요"
        ],
        "content": [
            "부장님만세~!"
        ]
    }
];
const noticeboard = [
    {
        "notice_subject": "알려진 이슈를 알려드립니다.",
        "notice_date": "2023.11.16"
    },
    {
        "notice_subject": "11월 업데이트 소식.",
        "notice_date": "2023.11.16"
    }
]
const user = [
    {
        "userInfo": "금광동 쏘스윗",
        "userImage": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/1bbb1f94-16ce-4ca6-0b53-508cc6b01c00/format=avif"
    },
    {
        "userInfo": "슈비버거조하",
        "userImage": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/54e1ec2f-823d-4945-f54c-c2c31236ed00/format=webp"
    },
    {
        "userInfo": "내여친존예",
        "userImage": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/d7a5b0e6-595a-401d-e4ef-efc19dd70e00/format=avif"
    },
    {
        "userInfo": "섹시소녀네티",
        "userImage": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/4c757485-3aa8-44e0-e216-bf5dcb749900/format=webp"
    },
    {
        "userInfo": "깜구클럽",
        "userImage": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/07358c75-5680-4547-ea08-c2e5962d9100/format=webp"
    },
    {
        "userInfo": "두둠칫 둠칫",
        "userImage": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/57977eaf-57b3-4ee5-3f0d-5cb24b2c9200/format=webp"
    },
    {
        "userInfo": "그린탑코인정",
        "userImage": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/7490b8b8-5e15-4b8f-7ccb-bffe50cb3000/format=webp"
    },
    {
        "userInfo": "봉삼이",
        "userImage": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/4780ff10-2546-42bd-3e01-aafad5678100/format=avif"
    },
    {
        "userInfo": "지현누나힘내요",
        "userImage": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/33f8248a-1aa4-4ce0-b5ea-4294e41f3c00/format=webp"
    },
    {
        "userInfo": "그린실버타운",
        "userImage": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/a3eac2a5-9860-440d-064e-f578529cfb00/format=webp"
    },
    {
        "userInfo": "창민이형파이팅",
        "userImage": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/5c73d6cf-acca-4794-2c6b-e7657f07d500/format=webp"
    },
    {
        "userInfo": "★문석짱★",
        "userImage": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/30b05211-31d7-4d89-731a-766236b80400/format=webp"
    },
    {
        "userInfo": "민쥐",
        "userImage": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/053b55cb-f072-4606-cc9b-0682c6109200/format=avif"
    },
    {
        "userInfo": "자바의신 수미",
        "userImage": "https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/661a7cb3-20a3-4342-38b6-0002259dbc00/format=webp"
    }
]

indexWrite();

// 인덱스 작성
function indexWrite() {
    indexBox.innerHTML = `<div id="headBottom" class="header_bottom">
    <div class="container">
        <div class="header_left">
            <img src="./img/update1_mini.jpg" alt="">
            <div>
                <p>업데이트 정보센터</p>
                <p>2023.11.21<br>ver.1.2.382 업데이트 </p>
            </div>
        </div>
        <img src="./img/index_logo.png" alt="">
        <div class="header_right">
            <div onclick="loginWrite(event)" class="dev_login">Devsisters<br>로그인</div>
            <div onclick="loginWrite(event)" class="kakao_login">Kakao <br>로그인</div>
        </div>
    </div>
    </div>
    <main id="main">
    <div class="img_box container">
        <div class="event_slide">
            <div>
                <i class="fa-solid fa-chevron-left"></i>
                <i class="fa-solid fa-pause"></i>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div class="event_slide_img">
            </div>
            <div class="event_slide_btn">
                <div>
                </div>
            </div>
        </div>
        <div class="shop_slide">
            <img src="./img/cookierunstore.jpg" alt="">
            <p>주간의 인기 상품</p>
            <div class="shop_slide_img">
            </div>
            <lu class="shop_slide_bth">
                <li onclick="mainShopSlideBtn(event)">0</li>
                <li onclick="mainShopSlideBtn(event)">1</li>
                <li onclick="mainShopSlideBtn(event)">2</li>
                <li onclick="mainShopSlideBtn(event)">3</li>
                <li onclick="mainShopSlideBtn(event)">4</li>
            </lu>
        </div>

    </div>
    <hr>
    <div class="main_info container">
        <div>
            <h3>쿠키런 킹덤<br>새소식</h3>
            <div>새소식 보러가기 <i class="fa-solid fa-square-caret-right"></i></div>
        </div>
        <div>
            <div class="info_slide">
                <div>
                    <img src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/54e1ec2f-823d-4945-f54c-c2c31236ed00/format=webp" alt="">
                    <p>새소식</p>
                    <p>쿠키 세상의 새로운 소식을 만나보세요!</p>
                </div>
                <div>
                    <img src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/e3cec218-533b-4c5b-54b1-b8cd0ff19c00/format=webp" alt="">
                    <p>게임 정보</p>
                    <p>다양한 쿠키들과 짜릿한 액션을 즐겨보세요!</p>
                </div>
                <div>
                    <img src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/4780ff10-2546-42bd-3e01-aafad5678100/format=avif" alt="">
                    <p>커뮤니티</p>
                    <p>유저분들의 생각과 의견을 공유해주세요!</p>
                </div>
                <div>
                    <p>미디어</p>
                    <p>게임 밖 쿠키들의 이야기를 들어보세요!</p>
                </div>
                <div>
                    <p>SHOP</p>
                    <p>쿠키들의 다양한 상품들을 만나보세요!</p>
                </div>
                <div>
                    <p>고객센터</p>
                    <p>유저의 이야기를 직접 전달해주세요!</p>
                </div>
            </div>
        </div>
    </div>
    </main>`;

    //(스크립트) nav 백그라운드 이미지
    let header = document.querySelector("header");
    // fetch("http://localhost:3000/headerImg")
    //     .then(response => response.json())
    //     .then(json =>
    //         header.style.backgroundImage = `url(${json[0][Math.floor(Math.random() * json[0].length)]})`
    //     )
    header.style.backgroundImage = `url(${headerImg[Math.floor(Math.random() * headerImg.length)]})`


    //(스크립트) nav 쿠키 gif
    let headerCookie = document.querySelector("#header_cookie");
    // fetch("http://localhost:3000/cookieGIF")
    //     .then(response => response.json())
    //     .then(json =>
    //         headerCookie.setAttribute('src', `${json[0][Math.floor(Math.random() * json[0].length)]}`)
    //     )

    headerCookie.setAttribute('src', `${cookieGIF[Math.floor(Math.random() * cookieGIF.length)]}`)


    //(스크립트) main 슬라이드 이미지
    // 슬라이드 버튼 & 이미지 생성
    // fetch("http://localhost:3000/eventImg")
    //     .then(response => response.json())
    //     .then(json => {
    //         let eventSlide = document.getElementsByClassName('event_slide'),
    //             eventSlideImg = eventSlide[0].getElementsByClassName('event_slide_img'),
    //             eventSlideBtn = eventSlide[0].getElementsByClassName('event_slide_btn');

    //         eventSlideImg[0].innerHTML = `<img src="${json[0][0][0]}" alt="${json[0][0][1]}">`;
    //         for (let i = 0; i < json[0].length; i++) {
    //             eventSlideBtn[0].children[0].innerHTML += `<span class="mainSlideBtn" onclick="eventslideBtn(event)">${json[0][i][1]}</span>`
    //         }
    //     })

    let eventSlide = document.getElementsByClassName('event_slide'),
        eventSlideImg = eventSlide[0].getElementsByClassName('event_slide_img'),
        eventSlideBtn = eventSlide[0].getElementsByClassName('event_slide_btn');

    eventSlideImg[0].innerHTML = `<img src="${eventImg[0][0]}" alt="${eventImg[0][1]}">`;
    for (let i = 0; i < eventImg.length; i++) {
        eventSlideBtn[0].children[0].innerHTML += `<span class="mainSlideBtn" onclick="eventslideBtn(event)">${eventImg[i][1]}</span>`
    }

    //(스크립트) main 우측 제품 슬라이드 이미지
    // fetch("http://localhost:3000/product")
    //     .then(response => response.json())
    //     .then(json => {
    //         let shopSlideImg = document.getElementsByClassName('shop_slide_img');
    //         for (let i = 0, t; i < json[0].length - 1; i++) {
    //             for (let j = i + 1; j < json[0].length; j++) {
    //                 if (json[0][i].price > json[0][j].price) {
    //                     t = json[0][i];
    //                     json[0][i] = json[0][j];
    //                     json[0][j] = t;
    //                 }
    //             }
    //         }
    //         for (let i = 0; i < 5; i++) {
    //             shopSlideImg[0].innerHTML += `<div><img src="${json[0][i].img[0]}" alt="${json[0][i].title}"><p class="item_title">${json[0][i].title}</p></div>`
    //         }
    //         let mainSlideBtn = document.getElementsByClassName('mainSlideBtn');
    //         lastSlideBtn = mainSlideBtn[0];
    //         lastSlideBtn.style.opacity = "1";
    //     })
    let shopSlideImg = document.getElementsByClassName('shop_slide_img');
    for (let i = 0, t; i < product.length - 1; i++) {
        for (let j = i + 1; j < product.length; j++) {
            if (product[i].price > product[j].price) {
                t = product[i];
                product[i] = product[j];
                product[j] = t;
            }
        }
    }
    for (let i = 0; i < 5; i++) {
        shopSlideImg[0].innerHTML += `<div><img src="${product[i].img[0]}" alt="${product[i].title}"><p class="item_title">${product[i].title}</p></div>`
    }
    let mainSlideBtn = document.getElementsByClassName('mainSlideBtn');
    lastSlideBtn = mainSlideBtn[0];
    lastSlideBtn.style.opacity = "1";

    //(스크립트) main 우측 제품 슬라이드 버튼
    let shopSlideBtn = document.getElementsByClassName('shop_slide_bth');
    lastSlideBtn2 = shopSlideBtn[0].children[0];
    lastSlideBtn2.style.opacity = "1";
    lastSlideBtn2.style.width = "30px";

    //(이벤트) nav 스크롤에따라 진하기 
    {
        window.addEventListener('scroll', () => {
            if (parseInt(window.scrollY) || navBg.style.visibility == "initial") {
                nav.style.backgroundColor = "#2b2b37ff";
            } else {
                nav.style.backgroundColor = "#2b2b3750";
            }
        });
    }

    //(이벤트) nav 마우스 진입시 서브메뉴 펼치기
    let nav = document.querySelector("nav");
    let subLi = document.querySelectorAll(".sub_li");
    nav.addEventListener('mouseenter', () => {
        navBg.style.visibility = "initial";
        nav.style.backgroundColor = "#2b2b37ff";
        for (let a of subLi) a.style.visibility = "initial";
    });
    let navBg = document.querySelector("#nav_bg");
    navBg.addEventListener('mouseout', () => {
        navBg.style.visibility = "hidden";
        for (let a of subLi) a.style.visibility = "hidden";
        if (parseInt(window.scrollY)) {
            nav.style.backgroundColor = "#2b2b37ff";
        } else {
            nav.style.backgroundColor = "#2b2b3750";
        }
    });

}
// 인덱스 메인 슬라이드 이미지 버튼 작동 함수
function eventslideBtn(event) {
    let eventSlide = document.getElementsByClassName('event_slide');
    let eventSlideImg = eventSlide[0].getElementsByClassName('event_slide_img');
    // fetch("http://localhost:3000/eventImg")
    //     .then(response => response.json())
    //     .then(json => {
    //         if (event.target.tagName == 'SPAN') {
    //             lastSlideBtn.style.opacity = "0.7";
    //             event.target.style.opacity = "1";
    //             lastSlideBtn = event.target;
    //             for (let i of json[0]) { if (i[1] == lastSlideBtn.innerText) eventSlideImg[0].children[0].src = `${i[0]}`; }
    //         }
    //     })
    if (event.target.tagName == 'SPAN') {
        lastSlideBtn.style.opacity = "0.7";
        event.target.style.opacity = "1";
        lastSlideBtn = event.target;
        for (let i of eventImg) { if (i[1] == lastSlideBtn.innerText) eventSlideImg[0].children[0].src = `${i[0]}`; }
    }
}

// 인덱스 상품 슬라이드 이미지 버튼 작동 함수
function mainShopSlideBtn(event) {
    let shopSlideImg = document.getElementsByClassName('shop_slide_img');
    if (event.target != lastSlideBtn2) {
        if (event.target.tagName == "LI") {
            lastSlideBtn2.style.opacity = "0.3";
            event.target.style.opacity = "1";
            event.target.style.width = "30px";
            lastSlideBtn2.style.width = "13px";
            lastSlideBtn2 = event.target;
            shopSlideImg[0].style.transform = `translateX(-${event.target.innerText * 20}%)`;
        }
    }
}

/*                    ▲▲▲▲  문석  ▲▲▲▲                    */
/*                    ▼▼▼▼  민지  ▼▼▼▼                    */

// 민지 쿠키소개 페이지 전환
let selectedAR = [];

function cookieinfoWrite(event) {
    if (event.stopPropagation()) event.stopPropagation();
    let headBottom = document.getElementById('headBottom')
    headBottom.classList.add("subPage")
    headBottom.innerHTML = `<div>
        <ul>
            <li onclick="cookieinfoWrite(event)">쿠키 소개</li>
            <li>게임 소개</li>
            <li>게임 월드 소개</li>
        </ul>
    </div>`;
    main.innerHTML = `
    </div><h3>쿠키소개</h3><div class="main_option_mj">
        <img class="selected" onclick="allTagSelect(event)" id="allTag" src="./img/tag_all.png" alt="올">
        <img onclick="cookieTag(event)" src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/e6cc601e-19ee-421b-e936-9cdd20eaf100/public" alt="에픽">
        <img onclick="cookieTag(event)" src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/dc7567c4-7d16-4017-52c2-4586e7112500/public" alt="스페셜">
        <img onclick="cookieTag(event)" src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/fb2bbed1-186c-4edf-1741-7edb8cdf7100/public" alt="레전더리">
        <img onclick="cookieTag(event)" src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/ef97da70-b550-428a-c03c-ed4db59a9300/public" alt="슈퍼에픽">
        <img onclick="cookieTag(event)" src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/b80b67b8-dc5c-49e3-07ca-f1673e459100/public" alt="에이션트">
        <img onclick="cookieTag(event)" src="https://imagedelivery.net/57rIj2o4cJ62boUSs_DLpA/9ea3ad41-1df7-4b8e-0e52-3c1f9ac48400/public" alt="드래곤">
    </div> <div class="main_list"></div>`;
    let mainList = document.getElementsByClassName('main_list');
    // fetch("http://localhost:3000/cookieData")
    //     .then(response => response.json())
    //     .then(json => {
    //         for (let i = 0; i < json[0].length; i++) {
    //             mainList[0].innerHTML += `<div onclick="cookieDetail(event)" class="main_list_box"><img src="${json[0][i].img}" alt="${json[0][i].name}"><div class="main_list_item_name">${json[0][i].name}</div><div class="main_list_item_type"><img src="${cookieType(json[0][i].type)}" alt="${json[0][i].type}"></div></div>`
    //         }
    //     })
    for (let i = 0; i < cookieData.length; i++) {
        mainList[0].innerHTML += `<div onclick="cookieDetail(event)" class="main_list_box"><img src="${cookieData[i].img}" alt="${cookieData[i].name}"><div class="main_list_item_name">${cookieData[i].name}</div><div class="main_list_item_type"><img src="${cookieType(cookieData[i].type)}" alt="${cookieData[i].type}"></div></div>`
    }
}
function cookieDetail(event) {
    if (event.stopPropagation()) event.stopPropagation();
    let eventOJ = event.target.closest('.main_list_box')
    let cookieName = eventOJ.children[1].innerText;
    let compare;
    // fetch("http://localhost:3000/cookieData")
    //     .then(response => response.json())
    //     .then(json => {
    //         for (let i = 0; i < json[0].length; i++) {
    //             if (cookieName == json[0][i].name) {
    //                 compare = i;
    //             }
    //         }
    //         main.innerHTML =
    //             `<h3 class="back_button" onclick="cookieinfoWrite(event)">목록가기</h3>
    //     <div class="main_info_container"><img src="${json[0][compare].img}" alt="${json[0][compare].name}">
    //     <div class="main_info_pic"></div>
    //     <div class="main_info_self">
    //         <div class="grid_box1"><img src="${cookieType(json[0][compare].type)}" alt="${json[0][compare].type}"></div>
    //         <div class="grid_box2">${json[0][compare].name}</div>
    //         <p class="cookie_self">${json[0][compare].info}</p>
    //     </div>
    // </div>
    // <div class="intro_box">
    //     <div class="skill_box">
    //         <p class="skill">스킬</p>
    //         <img src="${json[0][compare].skill.skillImg}" alt="${json[0][compare].skill.skillName}">
    //         <p class="skill_name">${json[0][compare].skill.skillName}</p>
    //         <p class="skill_intro">${json[0][compare].skill.skillInfo}</p>
    //     </div>
    // </div>`;
    //     })
    for (let i = 0; i < cookieData.length; i++) {
        if (cookieName == cookieData[i].name) {
            compare = i;
        }
    }
    main.innerHTML =
        `<h3 class="back_button" onclick="cookieinfoWrite(event)">목록가기</h3>
        <div class="main_info_container"><img src="${cookieData[compare].img}" alt="${cookieData[compare].name}">
        <div class="main_info_pic"></div>
        <div class="main_info_self">
            <div class="grid_box1"><img src="${cookieType(cookieData[compare].type)}" alt="${cookieData[compare].type}"></div>
            <div class="grid_box2">${cookieData[compare].name}</div>
            <p class="cookie_self">${cookieData[compare].info}</p>
        </div>
    </div>
    <div class="intro_box">
        <div class="skill_box">
            <p class="skill">스킬</p>
            <img src="${cookieData[compare].skill.skillImg}" alt="${cookieData[compare].skill.skillName}">
            <p class="skill_name">${cookieData[compare].skill.skillName}</p>
            <p class="skill_intro">${cookieData[compare].skill.skillInfo}</p>
        </div>
    </div>`;
}
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
function allTagSelect(event) {
    let mainOptionMj = document.getElementsByClassName('main_option_mj')
    let mainList = document.getElementsByClassName('main_list')
    if (event.target.getAttribute('class') == 'selected') {
        selectedAR = [];
        for (let i = 0; i < mainOptionMj[0].children.length; i++) {
            mainOptionMj[0].children[i].classList.remove('selected');
        }
    } else {
        selectedAR = [];
        event.target.classList.add('selected');
        for (let i = 1; i < mainOptionMj[0].children.length; i++) {
            mainOptionMj[0].children[i].classList.remove('selected');
            selectedAR.push(mainOptionMj[0].children[i].alt);
        }
    }
    mainList[0].innerHTML = '';
    // fetch("http://localhost:3000/cookieData")
    //     .then(response => response.json())
    //     .then(cookieAR => {
    //         for (let j = 0; j < selectedAR.length; j++) {
    //             for (let i = 0; i < cookieAR[0].length; i++) {
    //                 if (selectedAR[j] == cookieAR[0][i].type) {
    //                     mainList[0].innerHTML += `<div onclick="cookieDetail(event)" class="main_list_box"><img src="${cookieAR[0][i].img}" alt="${cookieAR[0][i].name}"><div class="main_list_item_name">${cookieAR[0][i].name}</div><div class="main_list_item_type"><img src="${cookieType(cookieAR[0][i].type)}" alt="${cookieAR[0][i].type}"></div></div>`;
    //                 }
    //             }
    //         }
    //     })
    for (let j = 0; j < selectedAR.length; j++) {
        for (let i = 0; i < cookieData.length; i++) {
            if (selectedAR[j] == cookieData[i].type) {
                mainList[0].innerHTML += `<div onclick="cookieDetail(event)" class="main_list_box"><img src="${cookieData[i].img}" alt="${cookieData[i].name}"><div class="main_list_item_name">${cookieData[i].name}</div><div class="main_list_item_type"><img src="${cookieType(cookieData[i].type)}" alt="${cookieData[i].type}"></div></div>`;
            }
        }
    }
}
function cookieTag(event) {
    let OptTypeImg = event.target;
    let mainList = document.getElementsByClassName('main_list')
    let mainOptionMj = document.getElementsByClassName('main_option_mj')
    let allTag = document.getElementById('allTag');
    if (selectedAR.length == 6) {
        selectedAR = [];
        for (let i = 0; i < mainOptionMj[0].children.length; i++) {
            mainOptionMj[0].children[i].classList.remove('selected');
        }
    }
    //선택한 태그에 따라 쿠키 나열하기
    if (OptTypeImg.tagName == "IMG") {
        let typeAlt = OptTypeImg.getAttribute('alt');
        if (selectedAR.indexOf(typeAlt) == -1) {
            selectedAR.push(typeAlt);
        } else {
            selectedAR = selectedAR.filter((a) => a != typeAlt);
        }
        if (selectedAR.length == 6) {
            allTag.classList.add('selected');
        } else {
            allTag.classList.remove('selected');
        }
        mainList[0].innerHTML = "";
        // 쿠키타입 클릭 시 opacity 설정
        if (event.target.getAttribute('class') === 'selected') {
            event.target.classList.remove('selected');
        } else {
            event.target.classList.add('selected');
        }
        // fetch("http://localhost:3000/cookieData")
        //     .then(response => response.json())
        //     .then(cookieAR => {
        //         if (typeAlt == "올") {
        //             for (let i = 0; i < cookieAR[0].length; i++) {
        //                 mainList[0].innerHTML += `<div onclick="cookieDetail(event)" class="main_list_box"><img src="${cookieAR[0][i].img}" alt="${cookieAR[0][i].name}"><div class="main_list_item_name">${cookieAR[0][i].name}</div><div class="main_list_item_type"><img src="${cookieType(cookieAR[0][i].type)}" alt="${cookieAR[0][i].type}"></div></div>`;
        //             }
        //         } else {
        //             for (let j = 0; j < selectedAR.length; j++) {
        //                 for (let i = 0; i < cookieAR[0].length; i++) {
        //                     if (selectedAR[j] == cookieAR[0][i].type) {
        //                         mainList[0].innerHTML += `<div onclick="cookieDetail(event)" class="main_list_box"><img src="${cookieAR[0][i].img}" alt="${cookieAR[0][i].name}"><div class="main_list_item_name">${cookieAR[0][i].name}</div><div class="main_list_item_type"><img src="${cookieType(cookieAR[0][i].type)}" alt="${cookieAR[0][i].type}"></div></div>`;
        //                     }
        //                 }
        //             }
        //         }
        //     })
        if (typeAlt == "올") {
            for (let i = 0; i < cookieData.length; i++) {
                mainList[0].innerHTML += `<div onclick="cookieDetail(event)" class="main_list_box"><img src="${cookieData[i].img}" alt="${cookieData[i].name}"><div class="main_list_item_name">${cookieData[i].name}</div><div class="main_list_item_type"><img src="${cookieType(cookieData[i].type)}" alt="${cookieData[i].type}"></div></div>`;
            }
        } else {
            for (let j = 0; j < selectedAR.length; j++) {
                for (let i = 0; i < cookieData.length; i++) {
                    if (selectedAR[j] == cookieData[i].type) {
                        mainList[0].innerHTML += `<div onclick="cookieDetail(event)" class="main_list_box"><img src="${cookieData[i].img}" alt="${cookieData[i].name}"><div class="main_list_item_name">${cookieData[i].name}</div><div class="main_list_item_type"><img src="${cookieType(cookieData[i].type)}" alt="${cookieData[i].type}"></div></div>`;
                    }
                }
            }
        }
    }
}

/*                    ▲▲▲▲  민지  ▲▲▲▲                    */
/*                    ▼▼▼▼  창민  ▼▼▼▼                    */

function noticeWrite(event) {
    if (event.stopPropagation()) event.stopPropagation();
    let headBottom = document.getElementById('headBottom')
    headBottom.classList.add("subPage")
    headBottom.innerHTML = `        <div>
    <ul>
        <li onclick="noticeWrite(event)">공지사항</li>
        <li>업데이트</li>
        <li>이벤트</li>
    </ul>
</div>`;
    main.innerHTML = `        <div class="notice_option">
        <h3>공지사항</h3>
        <div class="notice_option_right">
            <select name="" id="">
                <option value="">제목</option>
                <option value="">내용</option>
                <option value="">제목+내용</option>
            </select>
            <input placeholder="검색어를 입력해주세요.">
            
        </div>
    </div>
    <div class="notice_list">
        <div><a href="#" class = "all">전체</a></div>
        <div><a href="#" class = "notice">공지</a></div>
        <div><a href="#" class = "inspection">점검</a></div>
        <div><a href="#" class = "store">상점</a></div>
        <div><a href="#" class = "event">이벤트</a></div>

    </div>

    <div class="notice_post">

        <a onclick="noticeDetailWrite(event)">
            <div class><span class="notice_icon">공지</span></div>
            <div onclick="noticeDetailWrite(event)" class="notice_subject"><a onclick="noticeDetailWrite(event)">알려진 이슈를 안내해 드립니다.</a></div>
            <div></div>
            <div class="notice_date">2023.11.15</div>
        </a>

        <div><span class="notice_icon">공지</span></div>
        <div class="notice_subject">알려진 이슈를 안내해 드립니다.</div>
        <div></div>
        <div class="notice_date">2023.11.15</div>

        <div><span class="notice_icon">공지</span></div>
        <div class="notice_subject">알려진 이슈를 안내해 드립니다.</div>
        <div></div>
        <div class="notice_date">2023.11.15</div>

        <div><span class="inspection_icon">점검</span></div>
        <div class="inspection_subject">11월 15일 정기점검 안내</div>
        <div class="inspection_read"></div>
        <div class="inspection_date">2023.11.14</div>
        <div><span class="inspection_icon">점검</span></div>
        <div class="inspection_subject">11월 15일 정기점검 안내</div>
        <div class="inspection_read"></div>
        <div class="inspection_date">2023.11.14</div>
        <div><span class="inspection_icon">점검</span></div>
        <div class="inspection_subject">11월 15일 정기점검 안내</div>
        <div class="inspection_read"></div>
        <div class="inspection_date">2023.11.14</div>
        <div><span class="inspection_icon">점검</span></div>
        <div class="inspection_subject">11월 15일 정기점검 안내</div>
        <div class="inspection_read"></div>
        <div class="inspection_date">2023.11.14</div>
        <div><span class="inspection_icon">점검</span></div>
        <div class="inspection_subject">11월 15일 정기점검 안내</div>
        <div class="inspection_read"></div>
        <div class="inspection_date">2023.11.14</div>
        <div><span class="inspection_icon">점검</span></div>
        <div class="inspection_subject">11월 15일 정기점검 안내</div>
        <div class="inspection_read"></div>
        <div class="inspection_date">2023.11.14</div>
        <div><span class="inspection_icon">점검</span></div>
        <div class="inspection_subject">11월 15일 정기점검 안내</div>
        <div class="inspection_read"></div>
        <div class="inspection_date">2023.11.14</div>
        <div><span class="inspection_icon">점검</span></div>
        <div class="inspection_subject">11월 15일 정기점검 안내</div>
        <div class="inspection_read"></div>
        <div class="inspection_date">2023.11.14</div>
        <div><span class="inspection_icon">점검</span></div>
        <div class="inspection_subject">11월 15일 정기점검 안내</div>
        <div class="inspection_read"></div>
        <div class="inspection_date">2023.11.14</div>
        <div><span class="inspection_icon">점검</span></div>
        <div class="inspection_subject">11월 15일 정기점검 안내</div>
        <div class="inspection_read"></div>
        <div class="inspection_date">2023.11.14</div>
        <div><span class="inspection_icon">점검</span></div>
        <div class="inspection_subject">11월 15일 정기점검 안내</div>
        <div class="inspection_read"></div>
        <div class="inspection_date">2023.11.14</div>

    </div>`;
}
function noticeDetailWrite(event) {
    if (event.stopPropagation()) event.stopPropagation();
    main.innerHTML = `    <div class="notice_option2">
        <h3>공지사항</h3>
        <div class="notice_header">공지 알려진 이슈를 안내해드립니다. (11/22 수정)
            <div class="notice_date">2023.11.22 09:59
            </div>
        </div>
        <a href ="./01_notice.html" class="back_list">목록가기</a>
        <div class="notice_img22"></div>
        <div href ="../img/cookie1.gif.html"></div>

        <pre>안녕하세요 쿠키런 킹덤입니다.
현재까지 게임 내의 알려진 버그를 안내해 드립니다.

알려진 버그들은 수정 작업이 진행되고 있으며, 해결되면 공지사항을 통해 안내해 드리도록 하겠습니다.


            
알려진 버그 외, 다른 이상 현상을 확인하시는 경우 고객센터를 통해 제보해 주시기 바랍니다.
            
[ 고객센터 바로가기(PC) ] 
            
[ 고객센터 바로가기(Mobile) ]
            
            
            
※ 게임 내 우측 하단 [서비스센터] > [고객센터]를 통해서도 버그를 제보하실 수 있습니다.
            
게임 내에서는 스크린샷을 촬영하여 바로 이미지를 첨부하실 수도 있으며, 버그 제보 시 제보 내용과 관련된 정확한 명칭과
            
현상 설명을 함께 기재해 주시면 문제 확인에 큰 도움이 됩니다.
            
Ex) 퀘스트명, NPC 이름, 지역 이름, 아이템 이름 등
            
            
            
또한, 알려진 버그에 공지된 항목 중, 오류 현상이 아닌 것으로 확인되었거나 
            
각종 업데이트 및 클라이언트 패치로 해결된 오류는 항목에서 제외가 되었음을 안내해 드립니다.
            
            
            
보다 안정적이고 쾌적한 게임 환경을 제공하기 위해 최선을 다하겠습니다.
            
            
            
            
            
항상 감사 드립니다.</pre>
</div>
<div class="notice_side"></div>`;
}
function loginWrite(event) {
    if (event.stopPropagation()) event.stopPropagation();
    if (!indexBox.contains(document.getElementById('loginBG'))) {
        indexBox.innerHTML += `<div id="loginBG" onclick="closelogin(event)"><div class="login-wrapper">
    <h2 id="titleCookie">COOKIERUN</h2>
    <h2 id="titleKakao" style="display:none">KAKAO</h2>
    <pre>
        <ul class="login_list">
            <li class="Nexon" onClick="changeCookie(event)">NEXON로그인</li>
            <li class="Kakao" onClick="changeKakao(event)">KAKAO로그인</li>
        </ul>
        <div id="login">
            <!-- <form method="post" action="서버의url" id="login_form"> -->
                <input class="ID" cltype="text" name="userName" placeholder="ID를 입력해주세요."><br>
                <input class="PW" type="password" name="userPassword" placeholder="Password">
                <label for="remember-check">
                    <input type="checkbox" id="remember-check">로그인 유지
                </label>
                <input class="button" type="submit" value="로그인">
                <div class="logo"><a href="./img/google.svg"></a> <div class="logo1"></div> <div class="logo2"></div>
                <div id="imgCookie" class="notice_img"></div>
                <div id="imgKakao" class="notice_img2" style="display:none"></div>
                <div><span class="list1 span">아이디 찾기</span><span class="list2 span">비밀번호 찾기</span><span class="span">회원가입</span></div>
            </form>
        </div><div>`;
        document.getElementsByClassName('login-wrapper')[0].style.position = "fixed";
        document.getElementsByClassName('login-wrapper')[0].style.top = "50%";
        document.getElementsByClassName('login-wrapper')[0].style.left = "50%";
        document.getElementsByClassName('login-wrapper')[0].style.transform = "translate(-50%,-50%)";
        document.getElementById('loginBG').style.position = "fixed";
        document.getElementById('loginBG').style.top = "0";
        document.getElementById('loginBG').style.zIndex = "15";
        document.getElementById('loginBG').style.width = "100%"
        document.getElementById('loginBG').style.height = "100%"
        document.getElementById('loginBG').style.backgroundColor = "#00000090"
        let loginList = document.getElementsByClassName('login_list');
        loginList[0].children[0].style.border = "2px solid orange";
        loginList[0].children[0].style.color = "orange";
    }
    document.getElementById('loginBG').style.visibility = "initial";
}
function changeKakao(event) {
    var TitleCookie = document.getElementById("titleCookie");
    var TitleKakao = document.getElementById("titleKakao");
    var ImgCookie = document.getElementById("imgCookie");
    var ImgKakao = document.getElementById("imgKakao");
    let eventOJ = event.target.closest("li");

    let loginList = document.getElementsByClassName('login_list');
    loginList[0].children[0].style.border = "2px solid rgb(160, 159, 159)";
    loginList[0].children[0].style.color = "rgb(160, 159, 159)";
    //쿠키런 안보이게
    TitleCookie.style.display = "none";
    ImgCookie.style.display = "none";

    //카카오 보이게
    TitleKakao.style.display = "";
    ImgKakao.style.display = "";
    eventOJ.style.border = "2px solid orange";
    eventOJ.style.color = "orange";
    lastBtn = eventOJ;
}
function changeCookie(event) {
    var TitleCookie = document.getElementById("titleCookie");
    var TitleKakao = document.getElementById("titleKakao");
    var ImgCookie = document.getElementById("imgCookie");
    var ImgKakao = document.getElementById("imgKakao");
    let eventOJ = event.target.closest("li");
    let loginList = document.getElementsByClassName('login_list');
    loginList[0].children[1].style.border = "2px solid rgb(160, 159, 159)";
    loginList[0].children[1].style.color = "rgb(160, 159, 159)";
    //쿠키런 보이게
    TitleCookie.style.display = "";
    ImgCookie.style.display = "";

    //카카오 안보이게
    TitleKakao.style.display = "none";
    ImgKakao.style.display = "none";
    eventOJ.style.border = "2px solid orange";
    eventOJ.style.color = "orange";
    lastBtn = eventOJ;
}
function closelogin(event) {
    if (event.target == document.getElementById('loginBG')) document.getElementById('loginBG').style.visibility = "hidden";
}

/*                    ▲▲▲▲  창민  ▲▲▲▲                    */
/*                    ▼▼▼▼  수미  ▼▼▼▼                    */
let lastBtn,
    pageNum = 1,
    imgPage = 9;

function shopWrite(event) {
    event.stopPropagation();
    let headBottom = document.getElementById('headBottom')
    headBottom.classList.add("subPage")
    headBottom.innerHTML = `<div>
        <ul>
            <li onclick="shopWrite(event)">온라인 굿즈샵</li>
        </ul>
    </div>`;
    main.innerHTML = `
        <main>
        <div class="main_head">
            <h3>쿠키런 상품</h3>
            <div>
                <p id="total">상품 (총 <span></span>개)</p>
                <ul class="grid_box_sm">
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
    // 인기상품순(디폴트) 첫화면 굵게
    let listOption = document.getElementsByClassName('list_option');
    lastBtn = listOption[0].children[0].children[0];
    // fetch("http://localhost:3000/product")
    //     .then(response => response.json())
    //     .then(productAR => {
    //         listWriter(productAR[0]);
    //     })
    listWriter(product);
}
// 옵션 박스 열기
function optionBoxOpen(event) {
    let optionBox = document.getElementsByClassName('option_box');
    optionBox[0].style.visibility = "initial";
}
// 옵션 박스 닫기
function optionBoxClose(event) {
    let optionBox = document.getElementsByClassName('option_box');
    optionBox[0].style.visibility = "hidden";
}
// 옵션 박스 안에 옵션 선택 시 색상 변경
function optionBoxListColor(event) {
    if (event.target.style.backgroundColor == "orange") {
        event.target.style.backgroundColor = "rgb(250, 248, 248)"
    } else {
        event.target.style.backgroundColor = "orange"
    }
}
// 아이템 개수(배열) 9개씩 나타내기, 금액단위 설정 
function listWriter(productAR) {
    let mainItem = document.getElementsByClassName('main_item'),
        showScreen = document.getElementsByClassName('show_screen'),
        itemBox = document.getElementsByClassName('item_sm');
    mainItem[0].innerHTML = '';
    for (let i = 0 + (pageNum - 1) * imgPage; i < imgPage + (pageNum - 1) * imgPage; i++) {
        if (i == productAR.length) break;
        mainItem[0].innerHTML +=
            `<div onclick="shopDetail(event)" class="item_sm">
        <img src="${productAR[i].img[0]}" alt="">
        <p class="item_price">${productAR[i].price.toLocaleString()} 원</p>
        <p class="item_title">${productAR[i].title}</p>
        <p class="item_intro">${productAR[i].intro}</p>
        <div class="icon"><i class="fa-solid fa-neuter"></i></div>
        <div class="icon"><i class="fa-solid fa-plus"></i></div>
        </div>`;
        // 재고 없을 때 이미지 투명도, BEST/SOLDOUT 박스 넣기    
        if (productAR[i].stock == 0) {
            for (let j = 0; j < itemBox[i % imgPage].children.length - 2; j++) {
                itemBox[i % imgPage].children[j].style.opacity = '0.3';
            }
            itemBox[i % imgPage].innerHTML += `<div class="soldout">SOLD OUT</div>`;
        }
        if (productAR[i].sell >= 30) {
            itemBox[i % imgPage].innerHTML += `<div class="best_sm">BEST</div>`;
        }
        //아이템개수 9개 이상 등록시, 자동으로 다음 순번 페이지버튼 생성
        let pageAmount = productAR.length / imgPage
        showScreen[0].innerHTML = ``;
        for (let i = 0; i < pageAmount; i++) {
            showScreen[0].innerHTML += `<div onclick="screenPage(event)">${i + 1}</div>`;
        }
        // 상품 총 갯수 표시
        let total = document.getElementById('total');
        total.children[0].innerText = ` ${productAR.length} `;
    }
}
//페이지 넘어갈 때 보이는 화면 기준점 잡기    
function screenPage(event) {
    pageNum = event.target.innerText;
    window.scrollTo(0, 300);
    // fetch("http://localhost:3000/product")
    //     .then(response => response.json())
    //     .then(productAR => {
    //          listWriter(productAR[0]);
    //     })
    listWriter(product);
}
//아이템목록 누르면 검정 테두리 표시, 첫 화면 9개 배열로 고정표시
function gridBoxBtn(event) {
    let gridBoxLi = document.querySelectorAll('.grid_box_sm>li')
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
    // fetch("http://localhost:3000/product")
    //     .then(response => response.json())
    //     .then(productAR => {
    //         listWriter(productAR[0]);
    //     })
    listWriter(product);
}
// 인기도순 작성
function ProductARViewDown(event) {
    // fetch("http://localhost:3000/product")
    //     .then(response => response.json())
    //     .then(productAR => {
    //         for (let i = 0, t; i < productAR[0].length - 1; i++) {
    //             for (let j = i + 1; j < productAR[0].length; j++) {
    //                 if (productAR[0][i].views < productAR[0][j].views) {
    //                     t = productAR[0][i];
    //                     productAR[0][i] = productAR[0][j];
    //                     productAR[0][j] = t;
    //                 }
    //             }
    //         }
    //         lastBtn.style.fontWeight = 'lighter';
    //         lastBtn.style.opacity = "0.7";
    //         event.target.style.fontWeight = "bold";
    //         event.target.style.opacity = "initial";
    //         lastBtn = event.target;
    //     })
    for (let i = 0, t; i < product.length - 1; i++) {
        for (let j = i + 1; j < product.length; j++) {
            if (product[i].views < product[j].views) {
                t = product[i];
                product[i] = product[j];
                product[j] = t;
            }
        }
    }
    lastBtn.style.fontWeight = 'lighter';
    lastBtn.style.opacity = "0.7";
    event.target.style.fontWeight = "bold";
    event.target.style.opacity = "initial";
    lastBtn = event.target;
}
//최신등록순 작성
function ProductARDateDown(event) {
    // fetch("http://localhost:3000/product")
    //     .then(response => response.json())
    //     .then(productAR => {
    //         for (let i = 0, t; i < productAR[0].length - 1; i++) {
    //             for (let j = i + 1; j < productAR[0].length; j++) {
    //                 if (productAR[0][i].update > productAR[0][j].update) {
    //                     t = productAR[0][i];
    //                     productAR[0][i] = productAR[0][j];
    //                     productAR[0][j] = t;
    //                 }
    //             }
    //         }
    //         listWriter(productAR[0]);
    //         lastBtn.style.fontWeight = 'lighter';
    //         lastBtn.style.opacity = "0.7";
    //         event.target.style.fontWeight = "bold";
    //         event.target.style.opacity = "initial";
    //         lastBtn = event.target;
    //     })
    for (let i = 0, t; i < product.length - 1; i++) {
        for (let j = i + 1; j < product.length; j++) {
            if (product[i].update > product[j].update) {
                t = product[i];
                product[i] = product[j];
                product[j] = t;
            }
        }
    }
    listWriter(product);
    lastBtn.style.fontWeight = 'lighter';
    lastBtn.style.opacity = "0.7";
    event.target.style.fontWeight = "bold";
    event.target.style.opacity = "initial";
    lastBtn = event.target;
}
// 가격 낮은순 작성
function ProductARPriceRise(event) {
    // fetch("http://localhost:3000/product")
    //     .then(response => response.json())
    //     .then(productAR => {
    //         for (let i = 0, t; i < productAR[0].length - 1; i++) {
    //             for (let j = i + 1; j < productAR[0].length; j++) {
    //                 if (productAR[0][i].price > productAR[0][j].price) {
    //                     t = productAR[0][i];
    //                     productAR[0][i] = productAR[0][j];
    //                     productAR[0][j] = t;
    //                 }
    //             }
    //         }
    //         listWriter(productAR[0]);
    //         lastBtn.style.fontWeight = 'lighter';
    //         lastBtn.style.opacity = "0.7";
    //         event.target.style.fontWeight = "bold";
    //         event.target.style.opacity = "initial";
    //         lastBtn = event.target;
    //     })
    for (let i = 0, t; i < product.length - 1; i++) {
        for (let j = i + 1; j < product.length; j++) {
            if (product[i].price > product[j].price) {
                t = product[i];
                product[i] = product[j];
                product[j] = t;
            }
        }
    }
    listWriter(product);
    lastBtn.style.fontWeight = 'lighter';
    lastBtn.style.opacity = "0.7";
    event.target.style.fontWeight = "bold";
    event.target.style.opacity = "initial";
    lastBtn = event.target;
}
// 높은 가격순 작성
function ProductARPriceDown(event) {
    // fetch("http://localhost:3000/product")
    //     .then(response => response.json())
    //     .then(productAR => {
    //         for (let i = 0, t; i < productAR[0].length - 1; i++) {
    //             for (let j = i + 1; j < productAR[0].length; j++) {
    //                 if (productAR[0][i].price < productAR[0][j].price) {
    //                     t = productAR[0][i];
    //                     productAR[0][i] = productAR[0][j];
    //                     productAR[0][j] = t;
    //                 }
    //             }
    //         }
    //         listWriter(productAR[0]);
    //         lastBtn.style.fontWeight = 'lighter';
    //         lastBtn.style.opacity = "0.7";
    //         event.target.style.fontWeight = "bold";
    //         event.target.style.opacity = "initial";
    //         lastBtn = event.target;
    //     })
    for (let i = 0, t; i < product.length - 1; i++) {
        for (let j = i + 1; j < product.length; j++) {
            if (product[i].price < product[j].price) {
                t = product[i];
                product[i] = product[j];
                product[j] = t;
            }
        }
    }
    listWriter(product);
    lastBtn.style.fontWeight = 'lighter';
    lastBtn.style.opacity = "0.7";
    event.target.style.fontWeight = "bold";
    event.target.style.opacity = "initial";
    lastBtn = event.target;
}
//판매 높은순 작성
function ProductARSellDown(event) {
    // fetch("http://localhost:3000/product")
    //     .then(response => response.json())
    //     .then(productAR => {
    //         for (let i = 0, t; i < productAR[0].length - 1; i++) {
    //             for (let j = i + 1; j < productAR[0].length; j++) {
    //                 if (productAR[0][i].sell < productAR[0][j].sell) {
    //                     t = productAR[0][i];
    //                     productAR[0][i] = productAR[0][j];
    //                     productAR[0][j] = t;
    //                 }
    //             }
    //         }
    //         listWriter(productAR[0]);
    //         lastBtn.style.fontWeight = 'lighter';
    //         lastBtn.style.opacity = "0.7";
    //         event.target.style.fontWeight = "bold";
    //         event.target.style.opacity = "initial";
    //         lastBtn = event.target;
    //     })
    for (let i = 0, t; i < product.length - 1; i++) {
            for (let j = i + 1; j < product.length; j++) {
                if (product[i].sell < product[j].sell) {
                    t = product[i];
                    product[i] = product[j];
                    product[j] = t;
                }
            }
        }
    listWriter(product);
        lastBtn.style.fontWeight = 'lighter';
        lastBtn.style.opacity = "0.7";
        event.target.style.fontWeight = "bold";
        event.target.style.opacity = "initial";
        lastBtn = event.target;
}

/*                    ▲▲▲▲  수미  ▲▲▲▲                    */
/*                    ▼▼▼▼  지현  ▼▼▼▼                    */

let productPrice;

function shopDetail(event) {
    // fetch("http://localhost:3000/product")
    //     .then(response => response.json())
    //     .then(productAR => {
    //         for (let i = 0; i < productAR[0].length; i++) {
    //             if (event.target.closest('.item_sm').children[2].innerText == productAR[0][i].title) {
    //                 itemNum = i;
    //                 break;
    //             }
    //         }
    //         shopItemDetail(itemNum);
    //     })
    for (let i = 0; i < product.length; i++) {
        if (event.target.closest('.item_sm').children[2].innerText == product[i].title) {
                itemNum = i;
                break;
            }
        }
        shopItemDetail(itemNum);
}
//게시글 작성
function shopItemDetail(itemNum) {
    let textpoint = 0, photopoint = 0;
    // fetch("http://localhost:3000/product")
    //     .then(response => response.json())
    //     .then(productAR => {
    //         productPrice = productAR[0][itemNum].price;
    //         // 포인트 점수 구하기 식
    //         if (productAR[0][itemNum].textreview == 1) {
    //             textpoint = 50;
    //         }
    //         if (productAR[0][itemNum].photoreview == 1) {
    //             photopoint = 100;
    //         }

    //         main.innerHTML = `
    // <div class="item"><div class="item_leftbox">
    //             <div class="item_img"></div>
    //             <div class="item_imgBtn"></div>
    //         </div>
    //         <div class="item_rightbox">
    //             <div class="item_rightbox_info">
    //                 <div>${productAR[0][itemNum].title}</div>
    //                 <div>${productAR[0][itemNum].price.toLocaleString()} 원</div>
    //             </div>
    //             <div class="item_rightbox_point">
    //                 <div class="item_rightbox_point_title">
    //                     <span>쿠키런 스토어 고객을 위한 혜택</span>
    //                 </div>
    //                 <div class="item_rightbox_point_max">
    //                     <div>
    //                         <span>최대 적립 포인트</span>
    //                         <div>
    //                             <span id="maxpoint">${(productAR[0][itemNum].price / 100 + textpoint + photopoint).toLocaleString()} 원</span>
    //                             <i class="fa-regular fa-circle-question"></i>
    //                         </div>
    //                     </div>
    //                     <div>
    //                         <span>└ 기본적립</span> 
    //                         <div id="basic">${(productAR[0][itemNum].price / 100).toLocaleString()} 원</div>
    //                     </div>
    //                 </div>
    //                 <div class="item_rightbox_point_price_tip">
    //                     <div>
    //                         <div>TIP. 포인트 더 받는 방법</div>
    //                         <div><a href="https://nid.naver.com">최대 5% 적립, 무료 시작</a></div>
    //                         <div><a href="https://nid.naver.com">네이버 현대카드로 결제 시</a></div>
    //                         <div><a href="https://nid.naver.com/">네이버페이 머니로 결제 시</a></div>
    //                     </div>
    //                     <div>
    //                         <span>+최대 ${(productAR[0][itemNum].price * 0.09).toLocaleString()}원</span>
    //                         <span>${(productAR[0][itemNum].price * 0.04).toLocaleString()}원</span>
    //                         <span>${(productAR[0][itemNum].price * 0.05).toLocaleString()}원</span>
    //                         <span>${(productAR[0][itemNum].price * 0.02).toLocaleString()}원</span>
    //                     </div>
    //                 </div>
    //                 <div class="item_rightbox_ads"></div>
    //                 <div class="item_rightbox_point_card">
    //                     <span>무이자 할부</span>
    //                     <span>| 카드 자세히보기</span>
    //                     <i class="fa-regular fa-circle-question"></i>
    //                 </div>
    //                 <div id="pointDetails"></div>
    //                 <div class="item_rightbox_point_transit">
    //                     <p>택배배송 | 3,000원<span>&#40;주문시 결제&#41; &#183;</span> CJ 대한통운&#40;오네&#41;</p>
    //                     <p>30,000원 이상 구매 시 무료&#47;제주, 도서 지역 추가 3,000원</p>
    //                     <p><a href="#">배송비 절약상품 보기</a></p>
    //                 </div>
    //                 <div class="item_rightbox_point_quantity">
    //                     <div onclick="amountBtnMinus()" style="border: none;">&#45;</div>
    //                     <input onchange="amountCalc(event)" type="text" id="quantity" name="toBuy" value=1 style="text-align: center; "/>
    //                     <div onclick="amountBtnPlus()" style="border: none;">&#43;</div>
    //                 </div>
    //                 <div class="item_rightbox_point_decision">
    //                     <div>
    //                         <div>
    //                             <span>총 상품 금액</span>
    //                             <i class="fa-regular fa-circle-question"></i>
    //                         </div>
    //                         <div class="item_rightbox_point_decision_total">
    //                             <span id="totalAmount"></span>
    //                             <span id="totalPrice"></span>
    //                         </div>
    //                     </div>
    //                     <div>
    //                         <div onclick="loginWrite(event)" class="btn_1">
    //                             <i class="fa-solid fa-circle-chevron-right"></i>
    //                             <span>구매하기</span>
    //                         </div>
    //                         <div class="btn_2">
    //                             <i class="fa-regular fa-comment-dots"></i>
    //                             <span>톡톡문의</span>
    //                         </div>
    //                         <div class="btn_3">
    //                             <i class="fa-solid fa-heart-circle-plus"></i>
    //                             <span>찜하기</span>
    //                         </div>
    //                         <div class="btn_4">
    //                             <i class="fa-solid fa-bag-shopping"></i>
    //                             <span>장바구니</span>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             </div>
    //             </div>
    //             <div class='best'>
    //             <p>베스트 상품</p>
    //             <div class="best_items"></div></div>
    // `;
    //         let itemImgBtn = document.getElementsByClassName('item_imgBtn');
    //         let itemImg = document.getElementsByClassName('item_img');
    //         let bestitem = document.getElementsByClassName('best_items');

    //         // 토탈 구하기
    //         let totalAmount = document.getElementById('totalAmount');
    //         let totalPrice = document.getElementById('totalPrice');
    //         let quantityBox = document.getElementsByClassName('item_rightbox_point_quantity');
    //         totalAmount.innerText = `${quantityBox[0].children[1].value}개`
    //         totalPrice.innerText = `${((quantityBox[0].children[1].value) * productAR[0][itemNum].price).toLocaleString()}원`
    //         // 제품 이미지 슬라이드
    //         itemImg[0].innerHTML = `<img src="${productAR[0][itemNum].img[0]}" alt="${productAR[0][itemNum].title}">`;
    //         itemImgBtn[0].innerHTML = "";
    //         for (let i = 0; i < productAR[0][itemNum].img.length; i++) {
    //             itemImgBtn[0].innerHTML += `<img onclick="shopItemImgChange(event)" src="${productAR[0][itemNum].img[i]}" alt="${productAR[0][itemNum].title}">`;
    //         }
    //         // 베스트 상품
    //         for (let i = 0, t; i < productAR[0].length - 1; i++) {
    //             for (let j = i + 1; j < productAR[0].length; j++) {
    //                 if (productAR[0][i].sell < productAR[0][j].sell) {
    //                     t = productAR[0][i];
    //                     productAR[0][i] = productAR[0][j];
    //                     productAR[0][j] = t;
    //                 }
    //             }
    //         }
    //         for (let i = 0; i < 4; i++) {
    //             bestitem[0].innerHTML += `<div onclick="itemChangeInPage(event)"><img src="${productAR[0][i].img[0]}" alt="${productAR[0][i].title}"><p>${productAR[0][i].title}</p><p>${productAR[0][i].price.toLocaleString()}</p></div>`;
    //         }
    //     })
    productPrice = product[itemNum].price;
        // 포인트 점수 구하기 식
    if (product[itemNum].textreview == 1) {
            textpoint = 50;
        }
    if (product[itemNum].photoreview == 1) {
            photopoint = 100;
        }

        main.innerHTML = `
<div class="item"><div class="item_leftbox">
            <div class="item_img"></div>
            <div class="item_imgBtn"></div>
        </div>
        <div class="item_rightbox">
            <div class="item_rightbox_info">
                <div>${product[itemNum].title}</div>
                <div>${product[itemNum].price.toLocaleString()} 원</div>
            </div>
            <div class="item_rightbox_point">
                <div class="item_rightbox_point_title">
                    <span>쿠키런 스토어 고객을 위한 혜택</span>
                </div>
                <div class="item_rightbox_point_max">
                    <div>
                        <span>최대 적립 포인트</span>
                        <div>
                            <span id="maxpoint">${(product[itemNum].price / 100 + textpoint + photopoint).toLocaleString()} 원</span>
                            <i class="fa-regular fa-circle-question"></i>
                        </div>
                    </div>
                    <div>
                        <span>└ 기본적립</span> 
                        <div id="basic">${(product[itemNum].price / 100).toLocaleString()} 원</div>
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
                        <span>+최대 ${(product[itemNum].price * 0.09).toLocaleString()}원</span>
                        <span>${(product[itemNum].price * 0.04).toLocaleString()}원</span>
                        <span>${(product[itemNum].price * 0.05).toLocaleString()}원</span>
                        <span>${(product[itemNum].price * 0.02).toLocaleString()}원</span>
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
                    <input onchange="amountCalc(event)" type="text" id="quantity" name="toBuy" value=1 style="text-align: center; "/>
                    <div onclick="amountBtnPlus()" style="border: none;">&#43;</div>
                </div>
                <div class="item_rightbox_point_decision">
                    <div>
                        <div>
                            <span>총 상품 금액</span>
                            <i class="fa-regular fa-circle-question"></i>
                        </div>
                        <div class="item_rightbox_point_decision_total">
                            <span id="totalAmount"></span>
                            <span id="totalPrice"></span>
                        </div>
                    </div>
                    <div>
                        <div onclick="loginWrite(event)" class="btn_1">
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
            </div>
            </div>
            <div class='best'>
            <p>베스트 상품</p>
            <div class="best_items"></div></div>
`;
        let itemImgBtn = document.getElementsByClassName('item_imgBtn');
        let itemImg = document.getElementsByClassName('item_img');
        let bestitem = document.getElementsByClassName('best_items');

        // 토탈 구하기
        let totalAmount = document.getElementById('totalAmount');
        let totalPrice = document.getElementById('totalPrice');
        let quantityBox = document.getElementsByClassName('item_rightbox_point_quantity');
        totalAmount.innerText = `${quantityBox[0].children[1].value}개`
        totalPrice.innerText = `${((quantityBox[0].children[1].value) * product[itemNum].price).toLocaleString()}원`
        // 제품 이미지 슬라이드
        itemImg[0].innerHTML = `<img src="${product[itemNum].img[0]}" alt="${product[itemNum].title}">`;
        itemImgBtn[0].innerHTML = "";
        for (let i = 0; i < product[itemNum].img.length; i++) {
            itemImgBtn[0].innerHTML += `<img onclick="shopItemImgChange(event)" src="${product[itemNum].img[i]}" alt="${product[itemNum].title}">`;
        }
        // 베스트 상품
        for (let i = 0, t; i < product.length - 1; i++) {
            for (let j = i + 1; j < product.length; j++) {
                if (product[i].sell < product[j].sell) {
                    t = product[i];
                    product[i] = product[j];
                    product[j] = t;
                }
            }
        }
        for (let i = 0; i < 4; i++) {
            bestitem[0].innerHTML += `<div onclick="itemChangeInPage(event)"><img src="${product[i].img[0]}" alt="${product[i].title}"><p>${product[i].title}</p><p>${product[i].price.toLocaleString()}</p></div>`;
        }
}
// 제품 이미지 띄우기
function shopItemImgChange(event) {
    let itemImg = document.getElementsByClassName('item_img');
    itemImg[0].children[0].src = `${event.target.getAttribute('src')}`;
}
// 수량 버튼 올리기
function amountBtnPlus() {
    let revisedQunatity = ++document.getElementById('quantity').value;
    document.getElementById('totalAmount').innerText = `${revisedQunatity.toLocaleString()}개`;
    document.getElementById('totalPrice').innerText = `${(revisedQunatity * productPrice).toLocaleString()} 원`;
}
// 수량 버튼 내리기
function amountBtnMinus() {
    if (document.getElementById('quantity').value > 1) {
        let revisedQunatity = --document.getElementById('quantity').value;
        document.getElementById('totalAmount').innerText = `${revisedQunatity}개`;
        document.getElementById('totalPrice').innerText = `${(revisedQunatity * productPrice).toLocaleString()} 원`;
    }
}
// 수량 input 박스 변경
function amountCalc(event) {
    let inputQuantity = event.target.value;
    document.getElementById('totalAmount').innerText = `${inputQuantity}개`;
    document.getElementById('totalPrice').innerText = `${(inputQuantity * productPrice).toLocaleString()} 원`;
}
// 베스트상품 상세페이지로 변경하기
function itemChangeInPage(event) {
    event.target.closest('div').children[1].innerText;
    let itemBox = document.getElementsByClassName('item');
    // fetch("http://localhost:3000/product")
    //     .then(response => response.json())
    //     .then(productAR => {
    //         for (let i = 0; i < productAR[0].length; i++) {
    //             if (event.target.closest('div').children[1].innerText == productAR[0][i].title) {
    //                 itemNum = i;
    //                 break;
    //             }
    //         }
    //         productPrice = productAR[0][itemNum].price;
    //         itemBox[0].innerHTML = '';
    //         shopItemDetail(itemNum);
    //         window.scrollTo(0, 300);
    //     })
        for (let i = 0; i < product.length; i++) {
            if (event.target.closest('div').children[1].innerText == product[i].title) {
                itemNum = i;
                break;
            }
        }
    productPrice = product[itemNum].price;
        itemBox[0].innerHTML = '';
        shopItemDetail(itemNum);
        window.scrollTo(0, 300);
}

/*                    ▲▲▲▲  지현  ▲▲▲▲                    */
/*                    ▼▼▼▼  승삼  ▼▼▼▼                    */

let notistart = 0, notiend = 2;    // 초기화
let nextPageSt = 0, nextPageEnd = 9;                // 초기화
let selcet_option = 10;

function add(event) {
    if (event.stopPropagation()) event.stopPropagation();
    comunityWrite(notistart, notiend)
}
/** 공지부분 태그, 내용 채우기 반복문  **/
function comunityWrite(notistart, notiend) {
    let headBottom = document.getElementById('headBottom')
    headBottom.classList.add("subPage")
    headBottom.innerHTML = `
    <div>
        <ul>
            <li onclick="comunityWrite(notistart, notiend)">자유게시판</li>
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
    // fetch("http://localhost:3000/noticeboard")
    //     .then(response => response.json())
    //     .then(notiboardAR => {
    //         let content = main.querySelector('.content');
    //         for (let i = notistart; i < notiend; i++) {
    //             content.children[0].innerHTML += `
    //             <a href="#" class="list_notice">
    //                 <div class="notice_header">
    //                     <span class="notice_ss"></span>
    //                 </div>
    //                 <div class="notice_subject_ss">${notiboardAR[0][i].notice_subject}</div>
    //                 <div class="notice_date_ss">${notiboardAR[0][i].notice_date}</div>
    //             </a>
    //         `;
    //         }
    //     })
        let content = main.querySelector('.content');
        for (let i = notistart; i < notiend; i++) {
            content.children[0].innerHTML += `
            <a href="#" class="list_notice">
                <div class="notice_header">
                    <span class="notice_ss"></span>
                </div>
                <div class="notice_subject_ss">${noticeboard[i].notice_subject}</div>
                <div class="notice_date_ss">${noticeboard[i].notice_date}</div>
            </a>
        `;
        }
    // fetch("http://localhost:3000/freeboard")
    //     .then(response => response.json())
    //     .then(freeboardAR => {
    //         articleWrite(freeboardAR[0], nextPageSt, nextPageEnd)
    //     })
    articleWrite(freeboard, nextPageSt, nextPageEnd)
}
// content 부분 태그, 내용 채우기 반복문 
function articleWrite(freeboardAR, start, end) {
    let free_content = main.querySelector('.free_content');
    free_content.innerHTML = '';
    for (let i = start; i < end; i++) {
        free_content.innerHTML += `
            <div onclick="contentEnter(event)" class="list_freeboard">
                <div class="freeboard_subject">${freeboardAR[i].subject}</div>
                <div class="userInfo">${freeboardAR[i].userInfo}</div>
                <div class="heart">${freeboardAR[i].heart}</div>
                <div class="read">${freeboardAR[i].read}</div>
                <div class="freeboard_date">${freeboardAR[i].commentNum}</div> 
            </div>
        `;
    }
    update_page(freeboardAR, selcet_option);
}
function articleWrite2(freeboardAR, start, end) {
    let free_content = main.querySelector('.free_content');
    free_content.innerHTML = '';
    for (let i = start; i < end; i++) {
        free_content.innerHTML += `
            <div onclick="contentEnter(event)" class="list_freeboard">
                <div class="freeboard_subject">${freeboardAR[i].subject}</div>
                <div class="userInfo">${freeboardAR[i].userInfo}</div>
                <div class="heart">${freeboardAR[i].heart}</div>
                <div class="read">${freeboardAR[i].read}</div>
                <div class="freeboard_date">${freeboardAR[i].commentNum}</div> 
            </div>
        `;
    }
}
// read 순 freeboardAR 재 배열 함수
function changeArray(judgement) {
    // fetch("http://localhost:3000/freeboard")
    //     .then(response => response.json())
    //     .then(freeboardAR => {
    //         if (judgement == 1/*조회수 수 높은 순*/) {
    //             for (let i = 0, temp; i < freeboardAR[0].length - 1; i++) {
    //                 for (let j = i + 1; j < freeboardAR[0].length; j++) {
    //                     if (freeboardAR[0][i].read < freeboardAR[0][j].read) {
    //                         temp = freeboardAR[0][i];
    //                         freeboardAR[0][i] = freeboardAR[0][j];
    //                         freeboardAR[0][j] = temp;
    //                     }
    //                 }
    //             }
    //             articleWrite(freeboardAR[0], nextPageSt, nextPageEnd);
    //         }
    //         else {
    //             for (let i = 0, temp; i < freeboardAR[0].length - 1; i++) {
    //                 for (let j = i + 1; j < freeboardAR[0].length; j++) {
    //                     if (freeboardAR[0][i].heart < freeboardAR[0][j].heart) {
    //                         temp = freeboardAR[0][i];
    //                         freeboardAR[0][i] = freeboardAR[0][j];
    //                         freeboardAR[0][j] = temp;
    //                     }
    //                 }
    //             }
    //             articleWrite(freeboardAR[0], nextPageSt, nextPageEnd)
    //         }
    //     })
        if (judgement == 1/*조회수 수 높은 순*/) {
            for (let i = 0, temp; i < freeboard.length - 1; i++) {
                for (let j = i + 1; j < freeboard.length; j++) {
                    if (freeboard[i].read < freeboard[j].read) {
                        temp = freeboard[i];
                        freeboard[i] = freeboard[j];
                        freeboard[j] = temp;
                    }
                }
            }
            articleWrite(freeboard, nextPageSt, nextPageEnd);
        }
        else {
            for (let i = 0, temp; i < freeboard.length - 1; i++) {
                for (let j = i + 1; j < freeboard.length; j++) {
                    if (freeboard[i].heart < freeboard[j].heart) {
                        temp = freeboard[i];
                        freeboard[i] = freeboard[j];
                        freeboard[j] = temp;
                    }
                }
            }
            articleWrite(freeboard, nextPageSt, nextPageEnd)
        }
}
// 리뷰순, 좋아요순 감지 후 opacity 변경 및 freeboardAR 재 배열 함수 호출
function listWrite(event) {
    let list_sort = document.querySelectorAll('.list_sort');
    let turn = event.target;

    if (turn.innerText == "리뷰순") {
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
function insert_alticle(index) {
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
        <ul class="comment_list_ss">                      
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
    let comment_list_ss = document.getElementsByClassName('comment_list_ss');
    // fetch("http://localhost:3000/freeboard")
    //     .then(response => response.json())
    //     .then(freeboardAR => {
    //         title[0].children[0].innerText = `${freeboardAR[0][index].subject}`;
    //         title[0].children[1].innerText = `${freeboardAR[0][index].userInfo}`;
    //         title[0].children[2].innerText = `${freeboardAR[0][index].freeboard_date}`;
    //         alticle[0].children[0].innerText = `${freeboardAR[0][index].alticle}`;
    //         alticle_like[0].children[0].innerText = `${freeboardAR[0][index].heart}`;
    //         info[0].children[1].children[1].innerText = `${freeboardAR[0][index].commentNum}`;
    //         info[0].children[2].children[1].innerText = `${freeboardAR[0][index].heart}`;
    //         info[0].children[3].children[1].innerText = `${freeboardAR[0][index].read}`;
    //         for (let i = 0; i < freeboardAR[0][index].content.length; i++) {
    //             comment_list_ss[0].innerHTML += `                        
    // <li class="imglist">
    //     <img class="commentUserImg" src="" alt="">
    //     <button type="button" class="commentUser">${freeboardAR[0][index].comment_user_info[i]}</button>
    //     <p>${freeboardAR[0][index].content[i]}</p> 
    // </li>`
    //         }
    //     })
        title[0].children[0].innerText = `${freeboard[index].subject}`;
        title[0].children[1].innerText = `${freeboard[index].userInfo}`;
        title[0].children[2].innerText = `${freeboard[index].freeboard_date}`;
        alticle[0].children[0].innerText = `${freeboard[index].alticle}`;
        alticle_like[0].children[0].innerText = `${freeboard[index].heart}`;
        info[0].children[1].children[1].innerText = `${freeboard[index].commentNum}`;
        info[0].children[2].children[1].innerText = `${freeboard[index].heart}`;
        info[0].children[3].children[1].innerText = `${freeboard[index].read}`;
        for (let i = 0; i < freeboard[index].content.length; i++) {
            comment_list_ss[0].innerHTML += `                        
<li class="imglist">
    <img class="commentUserImg" src="" alt="">
    <button type="button" class="commentUser">${freeboard[index].comment_user_info[i]}</button>
    <p>${freeboard[index].content[i]}</p> 
</li>`
        }
    // fetch("http://localhost:3000/user")
    //     .then(response => response.json())
    //     .then(user => {
    //         for (let i = 0; i < user[0].length; i++) {
    //             /* 글쓴이 이미지 삽입 */
    //             if (title[0].children[1].innerText == user[0][i].userInfo) {
    //                 user_icon[0].children[0].children[0].children[0].src = user[0][i].userImage;
    //             }
    //         }
    //         /* 댓글 유저 이미지 삽입 */
    //         for (let i = 0; i < comment_list_ss[0].children.length; i++) {
    //             for (let j = 0; j < user[0].length; j++) {
    //                 if (comment_list_ss[0].children[i].children[1].innerText == user[0][j].userInfo) {
    //                     comment_list_ss[0].children[i].children[0].src = user[0][j].userImage;
    //                 }
    //             }
    //         }
    //     })
        for (let i = 0; i < user.length; i++) {
            /* 글쓴이 이미지 삽입 */
            if (title[0].children[1].innerText == user[i].userInfo) {
                user_icon[0].children[0].children[0].children[0].src = user[i].userImage;
            }
        }
        /* 댓글 유저 이미지 삽입 */
        for (let i = 0; i < comment_list_ss[0].children.length; i++) {
            for (let j = 0; j < user.length; j++) {
                if (comment_list_ss[0].children[i].children[1].innerText == user[j].userInfo) {
                    comment_list_ss[0].children[i].children[0].src = user[j].userImage;
                }
            }
        }
}
function addHeart(event) {
    let likeNum = document.getElementsByClassName('like_num');
    ++event.target.innerText;
    likeNum[0].innerText = `${event.target.innerText}`;
}
/* 게시판 진입 "클릭"이 감지 됐을 때 inner HTML 게시판 상호작용 실행 */
function contentEnter(event) {
    let turn = event.target,
        data = turn.innerText;
    let index;
    // fetch("http://localhost:3000/freeboard")
    //     .then(response => response.json())
    //     .then(freeboardAR => {
    //         index = freeboardAR[0].findIndex(item => item.subject === data);
    //         insert_alticle(index);       // 기존 HTML 삭제 / alticle 양식 추가
    //     })
        index = freeboard.findIndex(item => item.subject === data);
        insert_alticle(index);       // 기존 HTML 삭제 / alticle 양식 추가
}
/* 10개씩, 20개씩, 30개씩 보기 변경 감지, 현재 페이지에서 재 출력 */
function sortArray(event) {
    let selcet_option = event.target.value
    let start = 0;
    // fetch("http://localhost:3000/freeboard")
    //     .then(response => response.json())
    //     .then(freeboardAR => {
    //         articleWrite(freeboardAR[0], start, selcet_option);
    //         update_page(freeboardAR[0], selcet_option);
    //         update_page(freeboardAR[0], selcet_option);
    //     })
        articleWrite(freeboard, start, selcet_option);
        update_page(freeboard, selcet_option);
        update_page(freeboard, selcet_option);
}
/** 페이지 바꾸기 박스 클릭시 색상 변경 관련 코드  **/
function pageChanging(event) {
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
    // fetch("http://localhost:3000/freeboard")
    //     .then(response => response.json())
    //     .then(freeboardAR => {
    //         articleWrite2(freeboardAR[0], nextPageSt, nextPageEnd);
    //     })
        articleWrite2(freeboard, nextPageSt, nextPageEnd);
}
/* 페이지 네이션 생성 및 클릭 시 동적 모션 적용 */
function update_page(freeboardAR, selectedOption) {
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

/*                    ▲▲▲▲  승삼  ▲▲▲▲                    */ 