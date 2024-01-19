const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//newToDo가 그려질 때마다 텍스트를 array에 push
//aplication이 실행 될 때, toDos array를 빈 값으로 시작하는 대신 const를 let으로 바꿔 업데이트가 가능하도록. localStorage에서 발견되는 이전의 toDo들로 업데이트
let toDos = [];

//toDos array의 내용을 LocalStorage에 넣는 것
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //toDos에 text를 저장하지 않고 object를 저장함
}

//toDo를 삭제하는 Function
function deleteToDo(event) {
  //버튼 클릭시 버튼의 부모에 접근하여 li삭제
  const li = event.target.parentElement;
  li.remove();

  //클릭했던 li의 id를 갖고 있는 toDo를 지움 = toDo의 id가 li의 id와 다른 걸 남김
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  //이 toDo는 toDos DB에 있는 요소 중 하나-> 이 함수는 DB에 있는 모든 것과 함께 실행
  //toDo.id 의 타입은 number, li.id타입은 string이므로 .filter가 잘 동작하려면 parseint를 사용하여 타입을 숫자로 맞춰줘야함

  saveToDos();
}

//li, span element를 만들고 ul 안에 추가하는 역할
//인자를 newToDo로 줘서, handleToDoSubmit함수가 paintToDo함수 사용하게 됨
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text; //object의 text
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  //li태그 안에 span태그가 오도록(span이라는 자식을 가짐)
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  //엔터를 쳤을 때 화면이 새로고침되는 것을 막음
  event.preventDefault();
  //input값을 저장
  const newTodo = toDoInput.value;
  //엔터를 치면 화면에서 값이 비워짐
  toDoInput.value = "";

  //사용자가 적은 text대신 object를 push하기 위한 새 object
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), //각각의 li item구별
  };

  //toDos(데이터베이스) array에 사용자가 적은 newToDO(object)를 push
  toDos.push(newTodoObj);
  //input에서 값을 얻어 painToDo함수 호출
  //String으로 newTodo를 주는 것 대신에 newTodoObj을 줌
  paintToDo(newTodoObj);
  //toDos 저장
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

//localStorage에서 가져온 String을 살아있는 JS Object로 만들 것임
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);

  //toDos array를 가지고 와서  let toDos = []; 에 복원
  toDos = parsedToDos;

  //forEach는 array의 각 item에 대해 function을 실행시킴
  //paintToDo에 array에 있는 각각의 Item을 넣어줌
  parsedToDos.forEach(paintToDo);
  //forEach함수는 paintToDo를 parsedToDos 배열의 요소마다 실행 (paintToDo를 기본적으로 실행)
}

//예전 array는 그대로 있고, 지우고 싶은 item을 제외하고 새 array를 만듦 (.filter이용)
