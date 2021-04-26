(function() {

    var createTable = {
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
            this.forEachFn();
        },
        domNode : function() {
            var $doc = document;
            var $body = document.body;

            console.log("$doc", $doc);
            console.log("$body", $body);
            console.log("<body>의 노드이름 :", $body.nodeName);
            console.log("<body>의 노드타입 :", $body.nodeType);
            console.log("<body>의 노드값 :", $body.nodeValue);
            console.log("<body>의 자식요소갯수 :", $body.childElementCount);
            console.log("<body>의 자식요소들 :", $body.childNodes);
            console.log("<body>의 자식들 :", $body.children);
            console.log("<body>의 자식들[0] :", $body.children[0]);

            for(let i=0; i<10; i++) {
                var $section = $doc.createElement("section");
                $section.id = `section${i+1}`;
                $body.appendChild($section);
            }

            var section1 = $doc.querySelector("#section1");
            var sectionAll = $doc.querySelectorAll("section");

            for(let i=0; i<10; i++) {
                var $h2 = $doc.createElement("h2");
                $h2.textContent = `5x5 Matrix [No.${i+1}]`;
                sectionAll[i].appendChild($h2);
            }
            
            for(let i=0; i<10; i++) {
                var $table = $doc.createElement("table");
                sectionAll[i].appendChild($table);
            }
            
            for(let i=0; i<10; i++) {
                var tableAll = $doc.querySelectorAll("section table");
                for(let j=0; j<5; j++) {
                    var $tr = $doc.createElement("tr");
                    tableAll[i].appendChild($tr);
                }
            }
            
            for(let i=0; i<10; i++) {
                for(let j=0; j<5; j++) {
                    for(let k=0; k<5; k++) {
                        var $td = $doc.createElement("td");
                        tableAll[i].children[j].appendChild($td);
                    }
                }
            }
        }, ///
        algo01 : function() {
            let cnt = 0;
            let section_table = document.querySelector("#section1 table");
            for(let i=0; i<=4; i++) {
                for(let j=0; j<=4; j++) {
                    section_table.children[i].children[j].textContent = ++cnt;
                }
            }
        },
        algo02 : function() {
            let cnt = 25;
            let section_table = document.querySelector("#section2 table");
            for(let i=0; i<=4; i++) {
                for(let j=0; j<=4; j++) {
                    section_table.children[i].children[j].textContent = cnt--;
                }
            }
        },
        algo03 : function() {
            let cnt = 0;
            let section_table = document.querySelector("#section3 table");
            for(let i=0; i<=4; i++) {
                for(let j=i; j<=4; j++) {
                    section_table.children[i].children[j].textContent = ++cnt;
                }
            }
        },
        algo04 : function() {
            let cnt = 0;
            let section_table = document.querySelector("#section4 table");
            for(let i=0; i<=4; i++) {
                for(let j=0; j<=i; j++) {
                    section_table.children[i].children[j].textContent = ++cnt;
                }
            }
        },
        algo05 : function() {
            let cnt = 0;
            let section_table = document.querySelector("#section5 table");
            for(let i=0; i<=4; i++) {
                for(let j=0; j<=4-i; j++) {
                    section_table.children[i].children[j].textContent = ++cnt;
                }
            }
        },
        algo06 : function() {
            let cnt = 0;
            let section_table = document.querySelector("#section6 table");
            for(let i=0; i<=4; i++) {
                if(i<=2) {
                    for(let j=i; j<=4-i; j++) {
                        section_table.children[i].children[j].textContent = ++cnt;
                    }
                } else {
                    for(let j=4-i; j<=i; j++) {
                        section_table.children[i].children[j].textContent = ++cnt;
                    }
                }
            }
        },
        algo07 : function() {
            let cnt = 0;
            let section_table = document.querySelector("#section7 table");
            for(let i=0; i<=4; i++) {
                if(i<=2) {
                    for(let j=2-i; j<=2+i; j++) {
                        section_table.children[i].children[j].textContent = ++cnt;
                    }
                } else {
                    for(let j=i-2; j<=6-i; j++) {
                        section_table.children[i].children[j].textContent = ++cnt;
                    }
                }
            }
        },
        algo08 : function() {
            let cnt = 0;
            let section_table = document.querySelector("#section8 table");
            for(let i=0; i<=4; i++) {
                if(i%2 == 0) {
                    for(let j=0; j<=4; j++) {
                        section_table.children[i].children[j].textContent = ++cnt;
                    }
                } else {
                    for(let j=4; j>=0; j--) {
                        section_table.children[i].children[j].textContent = ++cnt;
                    }
                }
            }
        },
        forEachFn : function() {
            let a = [0,1,2,3,4,5,6,7,8,9];
            a.forEach(function(el, idx, arr) {
                console.log(`a[${idx}] = ${el}`);
            });
        }

    }; // -- Object createTable -- //

    createTable.init();

})();