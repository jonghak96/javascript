(function() {

    var formAPI = {

        init() {
            this.requestFn();
        },
        requestFn() {

            let mailForm = document.querySelector("#mailForm");
            let submitBtn = document.querySelector("#submitBtn");

            // 전송버튼 클릭이벤트
            submitBtn.addEventListener("click", function(event) {

                let name = document.querySelector("#name").value;
                let tel = document.querySelector("#tel").value;
                let email = document.querySelector("#email").value;

                event.preventDefault(); // submit 버튼의 원래 기능을 취소.

// 유효성 검사 //

// 정규표현식
// 문자만 사용.
let name_regExp = /^[ㄱ-ㅎㅏ-ㅣ가-힣A-Za-z]$/g;
let name_regExp_result = null;
name_regExp_result = name_regExp.test(name);
console.log("이름 정규표현식 결과 :", name_regExp_result);
if(!name_regExp_result) {
    alert("한글 또는 영문만 입력해주세요.");
    return false;
}

                // if(name == "") {
                //     alert("이름을 입력해주세요.");
                //     return false;
                // }

                console.log("tel.length :", tel.length);
                console.log("tel.indexOf('-') :", tel.indexOf("-"));
                // 배열 X
                // tel.forEach(function(el,idx,arr) {
                //     el.indexOf("-");
                // });

// 정규표현식
// 예) 010-1234-5678 : 전화번호 입력 규칙
// 정해진 규칙에 어긋나면 오류 발생 시킴.
// 양쪽 끝 : //
// 시작문자 : ^
// 끝문자 : $
// 전체(Global)검색 : /^  $/g
// \(역슬래쉬)로 구분 : \
// 숫자(Digit)3자 이내의 범위 : d{3}
// 3자 ~ 4자 : {3,4}
// [^d] == [D]
// abc|adc == a(b|d)c
// 숫자3자-숫자4자-숫자4자
// let 주민등록번호 = /^\d{6}-\d{7}$/;
// let 집전화 = /^\d{2,3}-\d{3,4}-\d{4}$/;
let tel_regExp = /^\d{3}-\d{3,4}-\d{4}$/;
// let result; // Undefined
let result = null; // Null
result = tel_regExp.test(tel);
console.log("전화번호 정규표현식 결과 :", result);
if(!result) {
    alert("전화번호는 '-'를 포함하여 12자 혹은 13자로 입력해주세요.\n예) 010-1234-5678");
    return false;
}

                // if(tel == "") {
                //     alert("전화번호를 입력해주세요.");
                //     return false;
                // }
                // if(tel.length != 13) {
                //     alert("13자리 전화번호를 입력해주세요.");
                //     return false;
                // }
                // if(tel.indexOf("-") == -1) {
                //     alert("문자'-'가 빠졌습니다.");
                //     return false;
                // }

                console.log("email.indexOf('@') :", email.indexOf("@"));
                console.log("email.search('@') :", email.search("@"));
                console.log("email.indexOf('.') :", email.indexOf("."));
                // console.log("email.search('.') :", email.search("."));

// 정규표현식
// 이메일은 반드시 @ & .를 포함.
// 영문,숫자 특수문자(@._-)
let email_regExp = /^[A-Za-z0-9]+@[A-Za-z]+.[A-Za-z]+$/;
let email_regExp_result = null;
email_regExp_result = email_regExp.test(email);
console.log("이메일 정규표현식 결과 :", email_regExp_result);
if(!email_regExp_result) {
    alert("이메일을 올바르게 입력해주세요.");
    return false;
}

                // if((email == "") || (email.indexOf("@") == -1) || (email.indexOf(".") == -1)) {
                //     if(email == "") {
                //         alert("이메일을 입력해주세요.");
                //     }
                //     if(email.indexOf("@") == -1) {
                //         alert("특수문자 '@'가 빠졌습니다.");
                //     }
                //     if(email.indexOf(".") == -1) {
                //         alert("문자 '.'가 빠졌습니다.");
                //     }
                //     return false;
                // }
                
                // 전송
                mailForm.submit();
            });


        }

    }; // formAPI //

    formAPI.init();

})();