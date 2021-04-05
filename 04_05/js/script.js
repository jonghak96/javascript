function function01() {
    alert("경고창");

    // 자바스크립트 변수 설정
    // ECMA Script 5
    // var 키워드 사용, url은 변수명 = 값;
    // 변수에는 네이밍 규칙이 있음.
    // 첫글자는 영문으로 시작(&, _ 사용가능)
    // 다음부터는 숫자도 사용.
    // 변수명 대소문자 구분함.

    // 변수명 여러단어가 이어질 때, 첫문자를 대문자로 쓰자.(카멜기법)
    // 폴더명은 팟홀(_)케이스로 쓰자. (공백쓰지말것. 리눅스나 깃허브에서 막힘)
    // girl_img01.jpg
    // 함수(메소드)명 = 변수명

    // 키워드 식별자 대입연산자 값;
    let url = "https://naver.com";
    let windowName = "popup20210405(창이름)";
    window.open(url, windowName, "width=500px,height=500,top=100,left=100");
}

function function03(param) {
    alert(param);
}

// url
// https://google.com
// https://www.kurly.com
// https://www.starbucks.co.kr
function urlFn(parameter) { // 매개변수 <-> 전달인자(argument)
    alert(parameter);
}