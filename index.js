/* git config --global core.autocrlf true */
/* npx tailwindcss -i ./input.css -o ./output.css --watch */ 

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
(() => {
    const wiseSayingObj = [
        {
            saying: '열정없이 사느니 차라리 죽는게 낫다.',
            human: 'Kurt Cobain',
            info: '미국의 록 뮤지션. 록 그룹 너바나(Nirvana)의 멤버'
        },
        {
            saying: '차분함이 몸에 밴 사람이 하루아침에 열정에 빠지면 그 감정의 폭발은 가장 폭력적인 사람이 갑자기 폭발할 때보다도 더 인상깊다.',
            human: 'Margery Allingham',
            info: '영국의 범죄추리소설 작가'
        },
        {
            saying: '세상의 중요한 업적 중 대부분은, 희망이 보이지 않는 상황에서도 끊임없이 도전한 사람들이 이룬 것이다.',
            human: 'Dale Carnegie',
            info: '미국의 처세술 전문가'
        },
        {
            saying: '자신을 믿어라. 자신의 능력을 신뢰하라. 겸손하지만 합리적인 자신감없이는 성공할 수도 행복할 수도 없다.',
            human: 'Norman Vincent Peale',
            info: '미국의 목사이자 작가'
        },
        {
            saying: '쉬운 일을 어려운 일처럼, 어려운 일을 쉬운 일처럼 대하라. 전자는 자신감이 잠들지 않게, 후자는 자신감을 잃지 않기 위함이다.',
            human: 'Baltasar Gracian',
            info: '17세기 예수회의 사제이자 신학교수'
        },
        {
            saying: '미래를 예측하는 최선의 방법은 미래를 창조하는 것이다.',
            human: 'Alan Kay',
            info: '미국의 컴퓨터 과학자'
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

        num += 1;
    });
    let fnInterval = () => {
        let progressBar = document.querySelector("#progressbar");
        if(progressBar.value === 100){
            progressBar.value = 0;
        }
        progressBar.value = progressBar.value + 1;
    }

    let interval = setInterval(fnInterval, 50);

    let fnTimer = setTimeout(function refreshTrigger() {
        refreshBtn.click();
        fnTimer = setTimeout(refreshTrigger, 5000);
    }, 5000);
})();
