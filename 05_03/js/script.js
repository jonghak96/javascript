(function() {

    var quickMenu = {

        init() {
            this.scrollEventFn();
        },
        scrollEventFn() {

            // 선택자 퀵메뉴 박스의 너비,높이 가져오기.
            var quickMenu = document.querySelector("#quickMenu");
            var quickMenuClientWidth = quickMenu.clientWidth;
            var quickMenuClientHeight = quickMenu.clientHeight;
            var quickMenuOffsetWidth = quickMenu.offsetWidth;
            var quickMenuOffsetHeight = quickMenu.offsetHeight;

            var windowInnerWidth = window.innerWidth;
            var windowInnerHeight = window.innerHeight;
            var windowOuterWidth = window.outerWidth;
            var windowOuterHeight = window.outerHeight;

            // console.log("clientWidth :", quickMenuClientWidth);
            // console.log("clientHeight :", quickMenuClientHeight);
            // console.log("offsetWidth(테두리,패딩 포함) :", quickMenuOffsetWidth);
            // console.log("offsetHeight(테두리,패딩 포함) :", quickMenuOffsetHeight);

            // console.log("innerWidth(창의 내부 너비) :", windowInnerWidth);
            // console.log("innerHeight(창의 내부 높이) :", windowInnerHeight);
            // console.log("outerWidth(창의 외부 너비) :", windowOuterWidth);
            // console.log("outerHeight(창의 외부 높이) :", windowOuterHeight);

            // 위아래 여백 (탑 포지션) = (창높이 - 퀵메뉴 박스높이) / 2
            var topPosition = (windowInnerHeight-quickMenuOffsetHeight)/2;
            quickMenu.style.top = topPosition + "px";
            
            // 퀵메뉴 애니메이션 함수
            function quickMenuAnimationFn() {
                // 스크롤 탑 값 + 퀵메뉴 박스 탑 값
                // console.log("스크롤 탑 값 :", window.scrollY);
                quickMenu.style.top = (-window.scrollY + topPosition) + "px";
                quickMenu.style.transition = "top .3s";
            }

            // 윈도우 스크롤 이벤트 리스너 등록
            window.addEventListener("scroll", function() {
                quickMenuAnimationFn();
            });

        } //

    }; //

    quickMenu.init();

})(); //