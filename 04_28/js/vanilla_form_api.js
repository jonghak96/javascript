(function() {

    var formAPI = {

        init() {
            this.requestFn();
        },
        requestFn() {

            let customerName = document.querySelector("#customerName");
            let customerTel = document.querySelector("#customerTel");
            let customerEmail = document.querySelector("#customerEmail");
            let submitBtn = document.querySelector("#submitBtn");
            let mailForm = document.querySelector("#mailForm");
            

            // 전송버튼 클릭이벤트
            submitBtn.addEventListener("click", function(event) {
                event.preventDefault(); // submit 버튼의 원래 기능을 취소.
                // 유효성 검사
                // 빈 값 허용 안 함.
                if(customerName.value == "") {
                    alert("이름을 입력해주세요.");
                    return false;
                }
                if(customerTel.value == "") {
                    alert("전화번호를 입력해주세요.");
                    return false;
                }
                // 이메일은 반드시 @ & .를 포함.
                if((customerEmail.value == "") || (customerEmail.value.indexOf("@") == -1) || (customerEmail.value.indexOf(".") == -1)) {
                    if(customerEmail.value == "") {
                        alert("이메일을 입력해주세요.");
                    }
                    if(customerEmail.value.indexOf("@") == -1) {
                        alert("특수문자 '@'가 빠졌습니다.");
                    }
                    if(customerEmail.value.indexOf(".") == -1) {
                        alert("문자 '.'가 빠졌습니다.");
                    }
                    return false;
                }
                // 전송
                mailForm.submit();
            });


        }

    }; // formAPI //

    formAPI.init();

})();