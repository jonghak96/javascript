/////////////////////////////////
// 변수의 중복성 막기 위한 방식 : 함수 //
/////////////////////////////////

// ();
// (function() {});
// (function() {
//     // 즉시 실행 함수 표현식 (IIFE : Immediately Invoked Function Expressions)
// })();
;(function() {
    alert("IIFE : 즉시실행표현식");

    var obj = {
        init : function() {
            this.nav();
            this.section01();
        },
        nav : () => {
            alert("nav method");
            var cnt = 0;
        },
        section01 : ()=> {
            alert("section01 method");
            var cnt = 0;
        }
    };

    obj.init();

})();

////////////////////////
///   슬라이드 이미지    ///
////////////////////////

var slideWrap = document.querySelector("#slide-container .slide-wrap");
var slideWrap2 = document.querySelectorAll(".slide-wrap");

var prevBtn = document.querySelector("#prevBtn");
var nextBtn = document.querySelector("#nextBtn");

var slideCnt = 0;

// querySelector 와 querySelectorAll 의 차이
console.log("slideWrap : ", slideWrap);
console.log("slideWrap[0] : ", slideWrap[0]);
console.log("slideWrap2 : ", slideWrap2);
console.log("slideWrap2[0] : ", slideWrap2[0]);

// a 태그 모두 불러오기
var aTag = document.querySelectorAll(".nav a");
console.log(aTag);
for(i in aTag) {
    console.log(i);
    console.log(aTag[i]);
}

// 메인 슬라이드 함수
function mainSlideFn() {
    slideWrap.style = `left:${-1903*slideCnt}px`;
}

// 다음 버튼 클릭 이벤트
nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    slideCnt++;
    slideCnt>4 ? slideCnt=0 : slideCnt;
    mainSlideFn();
});

// 이전 버튼 클릭 이벤트
prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    slideCnt--;
    slideCnt<0 ? slideCnt=4 : slideCnt;
    mainSlideFn();
});
