(function() {

    var vanilla = {

        // init : function() {} // ECMA Script 5
        init() {
            this.slideFn();
        },
        slideFn() {
            var slideWrap = document.querySelector(".slide-wrap");
            var nextBtn = document.querySelector(".next-btn");
            var prevBtn = document.querySelector(".prev-btn");
            var slideAll = document.querySelectorAll(".slide");
            var cnt = 1;     // 0은 마지막 사진이기 때문에, 1부터 시작.
            var size = 1903; // 슬라이드 하나당 너비.
            
            // 첫번째 슬라이드 화면에 출력
            // transform : rotate() skew() scale()
            // slideWrap.style = "transform:translateX(-1903px);"; // css 방식
            // slideWrap.style.transform = "translateX(" + (-size) + "px)";
            slideWrap.style.transform = `translateX(-${size}px)`;
            
            // 1. 메인슬라이드 함수
            function mainSlideFn() {
                console.log(cnt);
                slideWrap.style.transition = "transform .6s";
                slideWrap.style.transform = `translateX(-${size*cnt}px)`;
            }
            // 2-1. 다음슬라이드 카운트 함수
            function nextSlideCountFn() {
                if(cnt==6) return;
                cnt++;
                mainSlideFn();
            }
            // 2-2. 이전슬라이드 카운트 함수
            function prevSlideCountFn() {
                if(cnt==0) return;
                cnt--;
                mainSlideFn();
            }
            // 3-1. 다음슬라이드 클릭 이벤트
            nextBtn.addEventListener("click", function(event) {
                event.preventDefault(); // 버튼이나 a링크
                nextSlideCountFn();
            });
            // 3-2. 이전슬라이드 클릭 이벤트
            prevBtn.addEventListener("click", function(event) {
                event.preventDefault();
                prevSlideCountFn();
            });
            // 4. 메인슬라이드 움직임 효과 이벤트 : 트랜지션(transition)
            // 시작(transitionstart), 실행중(transitionrun), 종료(transitionend).
            // 현재 실행중인 슬라이드의 아이디가 imgFirst면,
            // 초기화해서 처음으로 돌아감.
            slideWrap.addEventListener("transitionend",function() {
                if (slideAll[cnt].id == "imgFirst") {
                    cnt = 1;
                    slideWrap.style.transition = "none"; // 트랜지션 제거 : 애니메이션 중지.
                    slideWrap.style.transform = `translateX(-${size*cnt}px)`;
                }
                if (slideAll[cnt].id == "imgLast") {
                    cnt = 5;
                    slideWrap.style.transition = "none"; // 트랜지션 제거 : 애니메이션 중지.
                    slideWrap.style.transform = `translateX(-${size*cnt}px)`;
                }
            });

        } // slideFn() //

    }; // vanilla //

    vanilla.init();

})();