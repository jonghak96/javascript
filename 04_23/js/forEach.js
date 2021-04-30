(function() {

    var obj = {

        // init : function() {} // ECMA Script 5
        init() {
            this.forEachFn();
        },
        forEachFn() {
            console.log("forEachFn();");
            
            // 체크박스 배열처리
            let chk = document.querySelectorAll("input[name='chk']");
            let chKAll = document.querySelector("input[name='chkAll']");

            chk.forEach(function(el,idx,arr) {
                // console.log(el.value);
                // console.log(chk[idx].value);
                // console.log(arr[idx].value);
                chk[idx].addEventListener("change", function(e) {
                    console.log(`${el.value} is checked = ${this.checked}`);
                    // if (this.checked === true) { // .checked 자체가 Boolean 값을 가진다.
                    // if (this.checked == 0) {
                    if (this.checked) {
                        console.log(`선택되었습니다.`);
                    }
                });
            });

            chKAll.addEventListener("change", function(e) {
                var that = this;
                // if (that.checked) {
                //     chk.forEach(function(el,idx,arr) {
                //         chk[0].checked = true;
                //     });
                // } else {
                //     chk.forEach(function(el,idx,arr) {
                //         chk[0].checked = false;
                //     });
                // }
                chk.forEach(function(el,idx,arr) {
                    el.checked = that.checked;
                });
            });

        }

    }; // obj //

    obj.init();

})();