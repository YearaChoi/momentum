const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//string만 포함된 변수는 대문자 표기
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  //브라우저의 기본 동작을 막음
  event.preventDefault();
  //hidden class name을 더해서 form을 숨김
  loginForm.classList.add(HIDDEN_CLASSNAME);
  //유저 이름을 변수로 저장
  const username = loginInput.value;
  //저장된 유저의 이름을 h1 안에 넣음
  // greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`;

  //h1의 hidden class 제거
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

//submit의 이벤트 감지, 엔터를 누르거나 버튼을 클릭할 때 발생
// 1. form을 submit할 때 입력값을 받아냄 (submit 이벤트 감지)
// 2. 브라우저의 기본 동작을 막아 값이 sumbit되지 않고 화면에 그대로 남아있도록
loginForm.addEventListener("submit", onLoginSubmit);
