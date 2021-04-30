/*
(function(parameter) {
})(argument);

// 제이쿼리 충돌 방지.
(function($, win, doc) {
    $();
    $(win);
})(jQuery, window, document);

$(function() {
    // 권장사항 아님. 
});

window.onload = function() {
    // 권장사항 아님.        
};
*/

// 반드시 DOM 트리 먼저 읽고
// 스크립트 실행 시 하단에 스크립트 배치.

(function() {
    
    var genesis = {

        // 멤버변수 (공용속성)
        val : [10, 100, 1000, "egg"], // 배열
        winW : window.outerWidth, // 창 너비
        winH : window.outerHeight, // 창 높이
        SectionN : 12, // Section 갯수

        // 객체 내의 모든 메소드를 실행할 대표 메소드.
        init : function() {
            // var that = this;
            // that.headerFn();
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

            var $this = this;
            var that = this;
            let $btn = document.querySelector("#btn");

            $btn.addEventListener("click", function() {
                this.innerHTML = ";)";
                console.log("'this (button)' : ", this); // 버튼
                console.log("'that (object)' : ", that); // 객체
            });
        },
        mainFn : function() {

        },
        section01 : function() {

            // for, while, do while, forEach()
            
            var txt = 0;
            var txt = "";
            let $btnFor = document.querySelector("#btnFor");
            var $output = document.querySelector(".output");
            $btnFor.addEventListener("click", function() {
                for(let i=0; i<10; i++) {
                    txt += "<li>" + i + "</li>";
                }
                console.log(txt);
                $output.innerHTML = txt;
            });

        },
        section02 : function() {

            var $minusBtn = document.querySelector(".minusBtn");
            var $outputWrap = document.querySelector(".outputWrap");

            var txt = "";
            $minusBtn.addEventListener("click", function() {
                for(let i=10; i>0; i--) {
                    console.log(i);
                    txt += "<li>" + i + "</li>";
                    $outputWrap.innerHTML = txt;
                }
                
            });


        },
        section03 : function() {

            var $googoodanBtn = document.querySelector("#section03 .googoodanBtn");
            var $googoodan = document.querySelector("#section03 .googoodan");
            var txt = "";
            var result = "";

            $googoodanBtn.addEventListener("click", function() {
                for(let i=2; i<10; i++) {
                    txt += "<tr>";
                    for(let j=1; j<10; j++) {
                        if(i*j<10) {
                            result = "0" + String(i*j);
                        } else {
                            result = i*j;
                        }
                        txt += "<td>" + i + "x" + j + "=" + result  + "</td>";
                    }
                    txt += "</tr>";
                }
                $googoodan.innerHTML = txt;
            });

        },
        section04 : function() {

            var $googoodanBtn = document.querySelector("#section04 .googoodanBtn");
            var $googoodan = document.querySelector("#section04 .googoodan");
            var txt = "";
            var result = "";

            $googoodanBtn.addEventListener("click", function() {
                for(let i=1; i<10; i++) {
                    txt += "<tr>";
                    for(let j=2; j<10; j++) {
                        if(i*j<10) {
                            result = "0" + String(i*j);
                        } else {
                            result = i*j;
                        }
                        txt += "<td>" + j + "x" + i + "=" + result  + "</td>";
                    }
                    txt += "</tr>";
                }
                $googoodan.innerHTML = txt;
                console.log("this : ", this);
            });

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

