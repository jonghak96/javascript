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
    let url = "https://naver.com"; // Uniform Resource Locators
    let windowName = "popup20210405(창이름)";
    window.open(url, windowName, "width=500px,height=500,top=100,left=100");
    // 관공서에서 자주 쓰고, 요즘에는 모달창을 씀. (레이어팜업) (div로 자주 씀.) (팝업차단해도 뜸.)
}

function function03(param) {
    alert(param);
}

// url
// https://google.com
// https://www.kurly.com
// https://www.starbucks.co.kr
function urlFn(parameter) { // 매개변수 <-> 전달인자(argument)
    // alert(parameter);
    // window.location.hraf = parameter;
    location.href = parameter; // hypertext reference (셀프창)
}


        /////////////////////////
        ///   버튼 등록 후 사용   ///
        /////////////////////////

// 1. 태그 아이디 클래스 속성선택자(type이 버튼이냐/텍스트냐..), 이러한 명칭(이름) 필요. 선택하기 위해
var btn01 = document.querySelector("#btn01"); // 아이디가 btn01인 선택자
console.log(btn01);

// 2. 선택(selector)된 버튼을 등록 후 사용.
btn01.onclick = function() { // 익명 콜백함수
    alert("버튼01 클릭이벤트 발생");
    urlFn("https://google.com");
} // 버튼 클릭 이벤트 핸들러 (인라인이랑 외부등록이랑 같음.)

var btn02 = document.querySelector("#btn02");
var btn03 = document.querySelector("#btn03");
var btn04 = document.querySelector("#btn04");
var btn05 = document.querySelector("#btn05");
var output = document.querySelector("#output");

btn02.onclick = function() {
    location.href = "https://naver.com";
}

btn03.onclick = function() {
    window.open("https://www.kurly.com","","width=800,height=500");
}


// 2-1. 버튼 등록 : 이벤트 추가 리스너(핸들러) : addEventListener
// javascript의 버튼등록은 이제 이걸로 함. (실전용)
var cnt = 0;
btn04.addEventListener("click", function() {
    alert("btn04 클릭 이벤트");
    // cnt += 1
    cnt++;
    console.log(cnt);
    console.log("5/2", 5/2);
    console.log("5%2", 5%2);
    // + 문자열과 변수 또는 숫자들을 연결할 때 사용하는 '연결연산자'라고도 한다.
});

// 1초에 1씩 증가하는 함수 만들기
cnt = 0; // 변수 초기화
function autoNum() { // 이름이 있는 함수. (선언적 함수)
    cnt++;
    // console.log(cnt);
    // h1 태그 안에 cnt 숫자 출력.
    console.log(output);
    console.log(5 == '5');
    console.log(5 === '5');
    console.log(5 != '5');
    console.log(5 !== '5');
    output.innerHTML = "<mark>카운트</mark><br>" + cnt; // innerHTML is not a function!
}

// 자동 설정 타이머 호출 실행
// 1초 간격으로 1씩 증가하는 함수 호출 실행
// 0.01초   : 10 밀리세컨드
// 0.1초    : 100 밀리세컨드
// 1초      : 1000 밀리세컨드
// 10초     : 10000 밀리세컨드
setInterval(autoNum, 1000);


        ////////////////////////
        ///   슬라이드 이미지    ///
        ////////////////////////

var slideWrap = document.querySelectorAll(".slide-wrap"); // querySelectorAll : 배열
var slideWrap2 = document.querySelector(".slide-wrap"); // 클래스 이름이 1개인 경우.

var prevBtn = document.querySelector("#prevBtn");
var nextBtn = document.querySelector("#nextBtn");

var aTag = document.querySelectorAll(".nav a"); // 중복 피할 수 있게 작성할 것. (".nav > li > a"), ("#section2 .slide-wrap")

// 클래스는 2개 이상, 중복이 가능하기 때문에 하나만 있더라도 [0]을 써야함.
console.log("slideWrap : ", slideWrap);
console.log("slideWrap[0] : ", slideWrap[0]);
console.log("slideWrap2 : ", slideWrap2);
console.log("slideWrap2[0] : ", slideWrap2[0]);

console.log(aTag);
for (i in aTag) {
    console.log(i);
    console.log(aTag[i]);
}

cnt = 2;
// slideWrap[0].style = "left:calc(-1920px*4)";
slideWrap[0].style = "left:" + (-1920*cnt) + "px";
 