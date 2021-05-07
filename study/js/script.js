(function() {
    
    var obj = {
        init() {
            this.scrollEventFn();
        },
        scrollEventFn() {

            // 선택자 퀵메뉴 박스의 너비,높이 가져오기.
                var quickMenu = document.querySelector("#quickMenu");

                // var quickMenuWidth = quickMenu.clientWidth;
                // var quickMenuHeight = quickMenu.clientHeight;

                // var quickMenuOffsetWidth = quickMenu.offsetWidth;
                var quickMenuOffsetHeight = quickMenu.offsetHeight;

                // var windowInnerWidth = window.innerWidth;
                var windowInnerHeight = window.innerHeight;

                // var windowOuterWidth = window.outerWidth;
                // var windowOuterHeight = window.outerHeight;

                // console.log(quickMenuWidth);
                // console.log(quickMenuHeight);
                
                // console.log("------------");
                
                // console.log(quickMenuOffsetWidth);
                // console.log(quickMenuOffsetHeight);
                
                // console.log("------------");
                
                // console.log(windowInnerWidth);
                // console.log(windowInnerHeight);
                
                // console.log("------------");

                // console.log(windowOuterWidth);
                // console.log(windowOuterHeight);

            // 위아래 여백 (탑 포지션) = (창높이 - 퀵메뉴박스높이) / 2
                var topPosition = (windowInnerHeight - quickMenuOffsetHeight) / 2

            quickMenu.style.transition = "top 1s";

            // 퀵메뉴 애니메이션 함수()
                function quickMenuAnimationFn() {
                    quickMenu.style.top = `${window.scrollY + topPosition}px`;
                }

            // 퀵메뉴 애니메이션 함수();
                quickMenuAnimationFn();

            // 윈도우 스크롤 이벤트 리스너 등록
                window.addEventListener("scroll", function() {
                    quickMenuAnimationFn();
                });

        }//

    };// obj

    obj.init();//

})();//