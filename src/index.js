/* git config --global core.autocrlf true */
/* npx tailwindcss -i ./src/input.css -o ./src/output.css --watch */ 

/* 메뉴 드롭 다운 */
(() => {
    const alink = document.querySelectorAll('nav ul li');
    
    alink.forEach(element => {
        element.addEventListener('mouseover', function(e){
            element.childNodes[3].style.display = "block";
        });
        element.addEventListener('mouseout', function(e){
            element.childNodes[3].style.display = "none";
        });
    });
})();

/* 스크롤 헤더 고정 */
(() => {
    const content = document.querySelector("#mainVisual");

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
    };

    let callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.remove("style-show");
            } else {
                entry.target.classList.add("style-show");
            }
        });
    };

    let observer = new IntersectionObserver(callback, options);

    observer.observe(content);
})();

/* 명언 입력 */
const wiseSayingObj = [
    {
        saying: '스스로를 존경하면 다른 사람도 당신을 존경할 것이다.',
        human: '공자',
        info: '동아시아 인문주의의 원형이 된 고대 중국의 사상가'
    },
    {
        saying: '인간은 오직 사고(思考)의 산물일 뿐이다. 생각하는 대로 되는 법.',
        human: '마하트마 간디',
        info: '인도의 정신적·정치적 지도자'
    },
    {
        saying: '스스로를 존경하면 다른 사람도 당신을 존경할 것이다.',
        human: '공자',
        info: '동아시아 인문주의의 원형이 된 고대 중국의 사상가'
    },
    {
        saying: '여가시간을 가지려면 시간을 잘 써라.',
        human: '벤자민 프랭클린',
        info: '미국의 정치인, 과학자, 저술가.'
    }
]

let fnWiseSaying = (wiseSayingObj, ranNum) => {
    const wiseSayingEle = document.querySelector("#wiseSaying");
    const wiseSayingHumanEle = document.querySelector("#wiseSayingHuman");
    const wiseSayingHumanInfoEle = document.querySelector("#wiseSayingHumanInfo");

    wiseSayingEle.innerHTML = wiseSayingObj[ranNum].saying;
    wiseSayingHumanEle.innerHTML = wiseSayingObj[ranNum].human;
    wiseSayingHumanInfoEle.innerHTML = wiseSayingObj[ranNum].info;
}

// localStorage.clear();
let strogeRanNum = Math.floor(Math.random() * wiseSayingObj.length);
let ranNum = Math.floor(Math.random() * wiseSayingObj.length);
localStorage.setItem("localNumber", strogeRanNum);

if(parseInt(localStorage.getItem("localNumber")) === parseInt(ranNum)){
    let newRanNum = Math.floor(Math.random() * wiseSayingObj.length);
    fnWiseSaying(wiseSayingObj, newRanNum);
} else {
    fnWiseSaying(wiseSayingObj, parseInt(localStorage.getItem("localNumber")));
}

// (() => {
//     const refreshBtn = document.querySelector("#refreshBtn");
//     refreshBtn.addEventListener('click', () => {
//         fnWiseSaying(wiseSayingObj);
//     })
// })();
//const ranNum = wiseSayingObj[Math.floor(Math.random() * wiseSayingObj.length)];