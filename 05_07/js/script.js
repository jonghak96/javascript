(function() {
    
    var obj = {
        init() {
            this.scrollEventFn();
            this.mouseWheelFn();
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

            // 위아래 여백 (탑 포지션) = (창높이 - 퀵메뉴박스높이) / 2
                var topPosition = (windowInnerHeight - quickMenuOffsetHeight) / 2
                
            // 퀵메뉴 애니메이션 함수()
                function quickMenuAnimationFn() {
                    quickMenu.style.transition = "top 1s";
                    quickMenu.style.top = `${window.scrollY + topPosition}px`;
                }

            // 퀵메뉴 애니메이션 함수();
                quickMenuAnimationFn();

            // 윈도우 스크롤 이벤트 리스너 등록
                window.addEventListener("scroll", function(event) {
                    quickMenuAnimationFn();
                });

        },// scrollEventFn() //

        mouseWheelFn() {

            // 마우스 휠 이벤트 (Smooth Scrolling)
            // 휠 아래or위로 방향에 따라서
            // 부드럽게 10개의 섹션을 이동한다.
            // 섹션 클래스 10개를 객체 배열처리하여, [ 스크롤은 막대 (모바일) | 휠은 마우스 (데스크탑) ]

            // 브라우저 판별법!
            console.log(window);
            console.log(window.navigator);
            console.log(window.navigator.userAgent);
            console.log(window.navigator.userAgent.toLowerCase());
            console.log("chrome :", window.navigator.userAgent.toLowerCase().indexOf("chrome"));
            console.log("firefox :", window.navigator.userAgent.toLowerCase().indexOf("firefox")); // window 생략가능.

            var delta = null;
            var mouseWheelEvent = "mousewheel"; // 파이어폭스를 제외한 모든 브라우저
            if(window.navigator.userAgent.toLowerCase().indexOf("firefox") != -1) { // 브라우저가 파이어폭스이면,
                mouseWheelEvent = "DOMMouseScroll"; // 파이어폭스 : 마우스 휠 이벤트 DOMMouseScroll
            }
            
            var sectionAll = document.querySelectorAll(".section");
            var footer = document.querySelector("#footer");

            sectionAll.forEach(function(element, index, array) {
                sectionAll[index].addEventListener(mouseWheelEvent, function(event) {
                    event.preventDefault();
                    // console.log(event);
                    // console.log(event.wheelDelta);
                    // console.log(event.detail);

                    // 브라우저 판별.
                    if(event.detail) {
                        delta = event.detail*-40;
                    } else {
                        delta = event.wheelDelta;
                    }

                    if(delta < 0) {
                        if(index < sectionAll.length-1) {
                            window.scrollTo({
                                top: sectionAll[index].nextElementSibling.offsetTop,
                                behavior: "smooth"
                            });
                        }
                        if(index == sectionAll.length-1) {
                            window.scrollTo({
                                top: footer.offsetTop,
                                behavior: "smooth"
                            });
                        }
                    }
                    if(delta > 0) {
                        if(index > 0) {
                            window.scrollTo({
                                top: sectionAll[index].previousElementSibling.offsetTop,
                                behavior: "smooth"
                            });
                        }
                    }
                });
            });

            footer.addEventListener(mouseWheelEvent, function(event) {
                event.preventDefault();
                
                // 브라우저 판별.
                if(event.detail) {
                    delta = event.detail*-40;
                } else {
                    delta = event.wheelDelta;
                }

                if(delta > 0) {
                    window.scrollTo({
                        top: sectionAll[sectionAll.length-1].offsetTop,
                        behavior: "smooth"
                    });
                }
            });

            // 스크롤로 위,아래 판별하기.
            var oldScroll = 0 // 이전 스크롤
            var newScroll = 0 // 현재 스크롤
            window.addEventListener("scroll", function(event) {
                newScroll = window.scrollY; // 현재 스크롤 값
                // console.log(oldScroll - newScroll); // 중간
                if(oldScroll-newScroll < 0) {
                    console.log("Down Scroll");
                }
                if(oldScroll-newScroll > 0) {
                    console.log("Up Scroll");
                }
                oldScroll = newScroll; // 전환
            });

        }// mouseWhellFn() //
        
    };// obj //

    obj.init();

})();//----