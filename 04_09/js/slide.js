///////////////////////////////////////
// 변수의 중복성 막기 위한 방식 : 함수 //
///////////////////////////////////////
// ();
// (function() {});
// (function() {

// })(); // 마지막() : 즉시 실행 가능한 함수 표현식 (IIFE : Immediately Invoked Function Expressions)
;(function() {
    alert("즉시실행표현식(IIFE)");
    // var obj = {} // 객체(Object) 생성.
    var obj = {
        init : function() { // 이름없는 함수 (익명함수) : 메소드 !!
            this.nav(); // this = obj !!
            this.section01();
        },
        nav : function() {
            alert("nav 메소드");
            var cnt = 0; // 프로퍼티 : 속성 !!
        },
        section01 : function() {
            alert("section01 메소드");
            var cnt = 0;
        }
    };

    obj.init();

})();

////////////////////////////////////////////////
// 선택자(아이디,클래스,태그명...) 변수 설정하기 //
////////////////////////////////////////////////

var slideWrap = document.querySelector("#slide-container .slide-wrap");
var prevBtn = document.querySelector("#prevBtn");
var nextBtn = document.querySelector("#nextBtn");
// var slideWrap = document.getElementsByClassName("slide-wrap");
// var prevBtn = document.getElementById("prevBtn");
// var nextBtn = document.getElementById("nextBtn");
// var button = document.getElementsByTagName("button");

var slideCnt = 0;

// 1. 메인 슬라이드 애니메이션 함수
function mainSlideFn() {
    console.log(slideCnt);
    // +slideWrap.style = "left:" + (-1903*slideCnt) + "px"; // ECMA Script 5 (ES5)
    slideWrap.style = `left:${-1903*slideCnt}px;`; // ECMA Script 6 (ES6) : 백틱사용
    // slideWrap.style.left = `${-1903*slideCnt}px`;
}

// 2. 다음 버튼 클릭 이벤트
// nextBtn.onclick = function() {}

// nextBtn.addEventListener("click", function(event) {
//     slideCnt++;
//     mainSlideFn(); // 메인슬라이드함수 호출하면서 증가변수값 전달
// });

// prevBtn.addEventListener("click", function() {
//     slideCnt--;
//     mainSlideFn();
// });

// ECMA Script 6
nextBtn.addEventListener("click", (event) => {

    console.log(event);
    event.preventDefault(); // 브라우저에서 기본 발생되는 이벤트를 제거!!!

    slideCnt++;
    slideCnt>4 ? slideCnt=0 : slideCnt; // 변수 slideCnt가 4보다 크면 0으로 초기화 (삼항연산자)
    mainSlideFn(); // 메인슬라이드함수 호출하면서 증가변수값 전달
});

prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    slideCnt--;
    slideCnt<0 ? slideCnt=4 : slideCnt;
    mainSlideFn();
});
