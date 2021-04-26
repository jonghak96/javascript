// 1. 즉시실행함수 생성
// 2. 객체 생성
// 3. init(), 슬라이드함수() 생성
// 4. 요소 변수 생성
// 5. 첫번째 이미지가 슬라이드 처음에 위치하도록 지정.
// 6. 슬라이드 움직이는 메인함수 생성
// 7. 이전,다음 슬라이드 함수 생성 (cnt가 오버되면 초기화)
// 8. 이전,다음 버튼 클릭 이벤트 생성 (event.preventDefault();)


(function() {

    var obj = {

        init () {
            this.slideFn();
        },
        slideFn() {
            
            var slideWrap = document.querySelector(".slide-wrap");
            var prevBtn = document.querySelector(".prev-btn");
            var nextBtn = document.querySelector(".next-btn");
            var cnt = 0;
            
            slideWrap.style = "transform:translateX(-1903px);";

            function mainSlideFn() {
                console.log(cnt);
            }
            function prevSlideFn() {
                if(cnt==0) return;
                cnt--;
                mainSlideFn();
            }
            function nextSlideFn() {
                if(cnt==6) return;
                cnt++;
                mainSlideFn();
            }

            prevBtn.addEventListener("click", function(event) {
                event.preventDefault();
                prevSlideFn();
            });
            nextBtn.addEventListener("click", function(event) {
                event.preventDefault();
                nextSlideFn();
            });



        }

    };// obj //

    obj.init();

})();
