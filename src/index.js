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
        saying: '1',
        human: '공자',
        info: '동아시아 인문주의의 원형이 된 고대 중국의 사상가'
    },
    {
        saying: '2',
        human: '마하트마 간디',
        info: '인도의 정신적·정치적 지도자'
    },
    {
        saying: '3',
        human: '아하드 하암',
        info: '잠이 오는구만'
    },
    {
        saying: '4',
        human: '벤자민 프랭클린',
        info: '미국의 정치인, 과학자, 저술가.'
    }
]

let wiseSayingObjClone = [];
Object.assign(wiseSayingObjClone, wiseSayingObj);

const wiseSayingEle = document.querySelector("#wiseSaying");
const wiseSayingHumanEle = document.querySelector("#wiseSayingHuman");
const wiseSayingHumanInfoEle = document.querySelector("#wiseSayingHumanInfo");

let num = 0;
wiseSayingEle.innerHTML = wiseSayingObjClone[num].saying;
wiseSayingHumanEle.innerHTML = wiseSayingObjClone[num].human;
wiseSayingHumanInfoEle.innerHTML = wiseSayingObjClone[num].info;

wiseSayingObjClone.splice(num, 1);

refreshBtn.addEventListener("click", function(){
    let num = 0;

    if(wiseSayingObjClone.length < 1){
        num = 0;
        Object.assign(wiseSayingObjClone, wiseSayingObj);
    }
    
    wiseSayingEle.innerHTML = wiseSayingObjClone[num].saying;
    wiseSayingHumanEle.innerHTML = wiseSayingObjClone[num].human;
    wiseSayingHumanInfoEle.innerHTML = wiseSayingObjClone[num].info;

    wiseSayingObjClone.splice(num, 1);
    console.dir(`${JSON.stringify(wiseSayingObjClone, null, 2)}`);
    console.log(`${wiseSayingObjClone.length}`);

    num += 1;
});

let fnInterval = () => {
    let progressBar = document.querySelector("#progressbar");
    progressBar.value = progressBar.value + 1;
    
    if(progressBar.value === 100){
        progressBar.value = 0;
    }
}

let interval = setInterval(fnInterval, 50);

let timerId = setTimeout(function refreshTrigger() {
    refreshBtn.click();
    timerId = setTimeout(refreshTrigger, 5000);
  }, 5000);
