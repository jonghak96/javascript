(function() {

    var genesisHTML = {
        
        // property
        val : [10, 100, 1000, "egg"],
        winW : window.outerWidth,
        winH : window.outerHeight,
        sectionN : 12,

        // method
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
            console.log(this.winW);
            console.log(this.winH);
            console.log(this.val);
            console.log(this.val[3]);
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
            cnt+= 10;
            console.log(cnt);
        },
        footerFn : function() {
            let cnt = 0;
            cnt++;
            console.log(cnt);
        }
    
    };//--- Obj genesis ---
    
    genesisHTML.init();

})();

(function() {
    alert("IIFE : Immediately Invoked Function Expressions (즉시실행함수)");

    const genesis = {
        no : 1,
        carName : "제네시스G90",
        price : "99,800,000원"
    };

    console.log(genesis);
    console.log(genesis.no);
    console.log(genesis.carName);
    console.log(genesis.price);

    let student = {
        number : 1,
        name : "Barbara",
        korean : 100,
        english : 90,
        math : 95,
        web : 100,
        score : function() {
            let total = this.korean + this.english + this.math + this.web;
            let average = total / 4;
            return {
                "총점" : total,
                "평균" : average
            };
        }
    };

    console.log(student);
    console.log(student.number);
    console.log(student.name);
    console.log(student.score());

})();