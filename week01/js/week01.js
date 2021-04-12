function function01() {
    alert("경고창");

    let url = "https://naver.com"
    let windowName = "popup20210407"
    window.open(url, windowName, "width=500,height=500,top=100,left=100");
}

function function02(param) {
    alert(param);
}

function urlFn(parameter01) {
    location.href = parameter01;
}

        /////////////////////////
        ///   버튼 등록 후 사용   ///
        /////////////////////////

var btn01 = document.querySelector("#btn01");
var btn02 = document.querySelector("#btn02");
var btn03 = document.querySelector("#btn03");
var btn04 = document.querySelector("#btn04");
var btn05 = document.querySelector("#btn05");
var output = document.querySelector('#output');

console.log(btn01);

btn01.onclick = function() {
    alert("버튼01 클릭이벤트 발생");
    urlFn("https://google.com.au");
}

btn02.onclick = function() {
    location.href = "https://naver.com";
}

btn03.onclick = function() {
    window.open("https://www.kurly.com", "", "width=500,height=500");
}

var cnt = 0;
btn04.addEventListener("click", function() {
    alert("버튼04 클릭이벤트 발생");
    cnt++;
    console.log(cnt);
});

cnt = 0;
setInterval(autoNum, 100);

function autoNum() {
    cnt++;
    console.log(output);
    output.innerHTML = "<mark>카운트</mark><br>" + cnt;

    console.log(5/2);
    console.log(5%2);
    console.log(5 == "5");
    console.log(5 != "5");
    console.log(5 === "5");
    console.log(5 !== "5");
}
