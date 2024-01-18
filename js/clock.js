const clock = document.querySelector("h2#clock");

//시계, 매 초마다 새로운 Date object 생성
function getClock() {
  const date = new Date();
  //.padStart사용하기 위해 String으로 감싸서 number->string으로 바꿔줌
  const hours = String(date.getHours()).padStart(2, "0");
  //String이 가져야하는 길이를 2로 설정하고, 그렇지 않으면 앞쪽에 0을 추가
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //새로고침시 즉시 실행
//2개의 argument를 받음. 실행하고자 하는 Function, function 간격을 몇 ms로 할 건지 (반복)
setInterval(getClock, 1000); //1초마다 실행
