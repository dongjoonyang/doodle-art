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