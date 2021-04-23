// 즉시실행함수
(function() {

    // 객체
    var algorithm = {
        init : function() {
            this.domNode();
            this.algo01();
            this.algo02();
            this.algo03();
            this.algo04();
            this.algo05();
            this.algo06();
            this.algo07();
            this.algo08();
        },
        domNode : function() {
            var $doc = document;
            var $body = document.body;

            console.log("$doc", $doc);
            console.log("$body", $body);
            console.log("$body.nodeName(태그이름)", $body.nodeName);
            console.log("$body.nodeType()", $body.nodeType);
            console.log("$body.nodeValue(태그안값)", $body.nodeValue);
            console.log("$body.childElementCount", $body.childElementCount);
            console.log("$body.childNodes", $body.childNodes); // text node : 텍스트(공백포함), comment node : 주석
            console.log("$body.children", $body.children);
            console.log("$body.children[0]", $body.children[0]);

            // 요소 생성(CREATE)

            // body요소 안에 섹션요소 만들기
            
                // 1-1 섹션요소 안에 헤딩요소 만들기
                // 1-2 섹션요소에 아이디 설정하기
                // 1-3 만들어진 요소를 body요소에 삽입하기
                
                // 2-1 헤딩요소 만들기
                // 2-2 헤딩에 제목 넣기
                // 2-3 스타일 설정하기

            // 테이블(table,tr,td) 요소 만들기

                // 3-1 table요소 생성
                // 3-2 생성된 테이블요소 섹션에 자식요소로 넣기

                // 4-1 tr요소 생성
                // 4-2 생성된 tr요소를 table 자식요소로 넣기

                // 5-1 td요소 생성
                // 5-2 생성된 td요소를 tr요소 자식요소로 넣기

            // 1. createElement("section");
            for (let i=0; i<10; i++) {
                var $section = document.createElement("section"); // 섹션요소 생성
                $section.id = `section${i+1}`;
                $body.appendChild($section);
            }

            // 2. createElement("h2"); 
            var section1 = document.querySelector("#section1");
            var sectionAll = document.querySelectorAll("section");
            for (let i=0; i<10; i++) {
                var $h2 = document.createElement("h2");
                $h2.textContent = `5행5열 행렬[Matrix] No.${i+1}`; // 순수한 텍스트만 넣음.
                sectionAll[i].appendChild($h2);
            }

            // 3. createElement("table");
            for (let i=0; i<10; i++) {
                var $table = document.createElement("table");
                sectionAll[i].appendChild($table);
            }

            // 4. createElement("tr");
            var tableAll = document.querySelectorAll("table");
            for (let i=0; i<10; i++) {
                for (let j=0; j<5; j++) {
                    var $tr = document.createElement("tr");
                    tableAll[i].appendChild($tr);
                }
            }
            
            // 5. createElement("td");
            for (let i=0; i<10; i++) { // table
                for (let j=0; j<=4; j++) { // tr
                    for (let k=0; k<=4; k++) { // td
                        var $td = document.createElement("td");
                        tableAll[i].children[j].appendChild($td); // children[i]
                    }
                }
            }

        },
        algo01 : function() {
            // 줄이 증가하면서 칸도 증가하는 삼각형 알고리즘.
            // section1 > table[0] > tr(행) > td(열) 채우기
            let cnt = 0;
            let section1_table = document.querySelector("#section1 table");
            for (let i=0; i<=4; i++) {
                for (let j=0; j<=i; j++) {
                    section1_table.children[i].children[j].textContent = ++cnt;
                }
            }
        },
        algo02 : function() {
            // 줄이 증가하면서 칸도 증가하는 삼각형 알고리즘.
            // section1 > table[0] > tr(행) > td(열) 채우기
            let cnt = 0;
            let section2_table = document.querySelector("#section2 table");
            for (let i=0; i<=4; i++) {
                for (let j=4-i; j<=4; j++) {
                    section2_table.children[i].children[j].textContent = ++cnt;
                }
            }
        },
        algo03 : function() {
            // 줄이 증가하면서 칸은 감소하는 삼각형 알고리즘.
            // section1 > table[0] > tr(행) > td(열) 채우기
            let cnt = 0;
            let section3_table = document.querySelector("#section3 table");
            for (let i=0; i<=4; i++) {
                for (let j=0; j<=4-i; j++) {
                    section3_table.children[i].children[j].textContent = ++cnt;
                }
            }
        },
        algo04 : function() {
            // 줄이 증가하면서 칸은 감소하는 삼각형 알고리즘.
            // section1 > table[0] > tr(행) > td(열) 채우기
            let cnt = 0;
            let section4_table = document.querySelector("#section4 table");
            for (let i=0; i<=4; i++) {
                for (let j=i; j<=4; j++) {
                    section4_table.children[i].children[j].textContent = ++cnt;
                }
            }
        },
        algo05 : function() {
            let cnt = 0;
            let section5_table = document.querySelector("#section5 table");
            for (let i=0; i<=4; i++) {
                if (i <= 2) {
                    for (let j=2-i; j<=4-j+(2*i); j++) {
                        section5_table.children[i].children[j].textContent = ++cnt;
                    }
                } else {
                    for (let k=i-2; k<=6-i; k++) {
                        section5_table.children[i].children[k].textContent = ++cnt;
                    }
                }
            }
        },
        algo06 : function() {
            let cnt = 0;
            let section6_table = document.querySelector("#section6 table");
            for (let i=0; i<=4; i++) {
                if (i <= 2) {
                    for (let j=i; j<=4-i; j++) {
                        section6_table.children[i].children[j].textContent = ++cnt;
                    }
                } else {
                    for (let k=4-i; k<=i; k++) {
                        section6_table.children[i].children[k].textContent = ++cnt;
                    }
                }
            }
        },
        algo07 : function() {
            let cnt = 0;
            let section7_table = document.querySelector("#section7 table");
            for (let i=0; i<=4; i++) {
                if (i%2 == 0) {
                    for (let j=0; j<=4; j++) {
                        section7_table.children[i].children[j].textContent = ++cnt;
                    }
                } else {
                    for (let k=4; k>=0; k--) {
                        section7_table.children[i].children[k].textContent = ++cnt;
                    }
                }
            } 
        },
        algo08 : function() {
            var sectionAll = document.querySelectorAll("section");
            sectionAll.forEach(function(element, index, array) {
                console.log("element : ", element);
                console.log("index : ", index);
                console.log("array : ", array);
            });

            let a = [0,1,2,3,4,5,6,7,8,9];
            a.forEach(function(el,idx,arr) {
                console.log(`a[${idx}] = ${a[idx]}`);
            });
        }
    }; // Object algorithm //

    algorithm.init();

})(); //(jQuery)-($)