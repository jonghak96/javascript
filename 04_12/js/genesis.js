// (function(parameter) {
// })(argument);

// (function($) {
// })(jQuery);

(function() {
    
    var genesis = {

        // 멤버변수 (공용속성)
        val : [10, 100, 1000, "egg"], // 배열
        winW : window.outerWidth, // 창 너비
        winH : window.outerHeight, // 창 높이
        SectionN : 12, // Section 갯수

        // 객체 내의 모든 메소드를 실행할 대표 메소드.
        init : function() {
            this.headerFn();
            this.section01();
            this.section02();
            this.section03();
            this.section04();
            this.section05();
            this.section06();
            this.section07();
            this.section08();
            this.section09();
            this.section10();
            this.section11();
            this.section12();
            this.footerFn();
        },
        headerFn : function() {
            console.log("Window.outerWidth :", this.winW);
            console.log("Window.outerHeight :", this.winH);
            console.log("val :", this.val);
            console.log("val[3] :", this.val[3]);
        },
        mainFn : function() {

        },
        section01 : function() {

        },
        section02 : function() {

        },
        section03 : function() {

        },
        section04 : function() {

        },
        section05 : function() {

        },
        section06 : function() {

        },
        section07 : function() {

        },
        section08 : function() {

        },
        section09 : function() {

        },
        section10 : function() {

        },
        section11 : function() {

        },
        section12 : function() {
            let cnt = 0;
            cnt += 10;
            console.log("section12() cnt :", cnt);
        },
        footerFn : function() {
            let cnt = 0;
            cnt++;
            console.log("footerFn() cnt :", cnt);
        }
    };//--- Object genesis---

    genesis.init();

})();

//------------------------------------------------------------------------------------

// javascript 3대 요소
// 1. 함수 (function) : 리터럴,생성자 / 이름있는함수,익명함수 / 즉시실행함수
// 2. 객체 (Object)
// 3. 배열 (array)

// 즉시 실행 함수, IIFE
(function() {
    alert("즉시 실행 함수, IIFE");

    /*
    // 객체 생성 : 리터럴 방식 (권장)
    var genesis = {};

    // 객체 생성 : 생성자 방식
    var genesis2 = new Object();

    console.log("리터럴 방식 :", genesis);
    console.log("생성자 방식 :", genesis2);
    */


    // Keyword ObjectName = { Property : Value }
    // 키워드 객체이름 = { 속성 : 값 }
    // Block,Scope (객체 범위)
    const genesis = {
        no : 1,
        carName : "제네시스G90",
        price : "99,800,000원"
    };

    // 객체 호출 결과
    // console.log(genesis.no);
    // console.log(genesis.carName);
    // console.log(genesis.price);


    // 키워드 종류
    // var      : ECMA Script 5
    // let      : ECMA Script 6
    // const    : ECMA Script 6

    let student = {
        number : 1,
        name : "Barbara",
        korean : 100,
        english : 90,
        math : 95,
        web : 100,
        // 프로퍼티 : function() {}
        // 메소드 (리터럴함수 == 익명함수 == 멤버함수)
        score : function() {
            let total = this.korean + this.english + this.math + this.web;
            let average = total / 4;
            return {
                "총점" : total,
                "평균" : average
            };
        }
    };
    
    // console.log(student.number);
    // console.log(student.name);
    // console.log(student.score());

    
})();
