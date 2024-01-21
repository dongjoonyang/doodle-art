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
(() => {
    const wiseSaying = [
        "꿈을 기록하는 것이 나의 목표였던 적은 없다, 꿈을 실현하는 것이 나의 목표이다.<br><br>- 만 레이<br>초현실주의와 다다이스트 사진가.",
        "인간은 오직 사고(思考)의 산물일 뿐이다. 생각하는 대로 되는 법.<br><br>- 마하트마 간디<br>인도의 정신적·정치적 지도자",
        "스스로를 존경하면 다른 사람도 당신을 존경할 것이다.<br><br>-공자<br>동아시아 인문주의의 원형이 된 고대 중국의 사상가",
        "여가시간을 가지려면 시간을 잘 써라.<br>-벤자민 프랭클린<br>미국의 정치인, 과학자, 저술가.",
    ]

    const wiseSayingElement = document.querySelector("#wiseSaying");
    wiseSayingElement.innerHTML = wiseSaying[Math.floor(Math.random() * wiseSaying.length)]
})();
