const loginWord = document.getElementById("login-word");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");

//string만 포함된 변수는 대문자 표기
const HIDDEN_CLASSNAME = "hidden";
//String을 변수로 고정, 변수명이 오타났을 경우 방지할 수 있음
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  //브라우저의 기본 동작(페이지 새로고침)을 막음
  event.preventDefault();
  //hidden class name을 더해서 form을 숨김
  loginWord.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  todoList.classList.add(HIDDEN_CLASSNAME);
  //form이 submit 될 경우 input으로부터 유저 이름을 변수로 저장
  const username = loginInput.value;
  //유저가 제출한 이름을 저장 (저장될 아이템 이름+변수)
  localStorage.setItem(USERNAME_KEY, username);
  //input에서 받은 user를 가진 paintGreetings를 호출
  paintGreetings(username);
  //유저 정보는 input으로부터 옴
}

//submit의 이벤트 감지, 엔터를 누르거나 버튼을 클릭할 때 발생
// 1. form을 submit할 때 입력값을 받아냄 (submit 이벤트 감지)
// 2. 브라우저의 기본 동작을 막아 값이 sumbit되지 않고 화면에 그대로 남아있도록
loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(username) {
  //함수 호출시
  //greetings를 보여줌 (백틱이용)
  greeting.innerText = `Hello ${username}, have a great day!`;
  // hidden class 제거
  greeting.classList.remove(HIDDEN_CLASSNAME);

  clock.classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  todoList.classList.remove(HIDDEN_CLASSNAME);
}

//localStorage에 유저 정보 유무 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);

//초기에 login-form, greeting 모두 Hidden으로 설정
if (savedUsername === null) {
  //유저 정보가 없다면 form을 보여주고 submit을 기다림
  loginWord.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //유저정보가 있다면 정보를 받아 인자로 넣어주고, greetings를 보여줌
  paintGreetings(savedUsername);
  //유저 정보는 저장된 localStorage로부터 옴
}
