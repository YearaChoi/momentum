const images = [
  "01.jpeg",
  "02.jpeg",
  "03.jpeg",
  "04.jpeg",
  "05.jpeg",
  "06.jpeg",
  "07.jpeg",
  "08.jpeg",
  "09.jpeg",
  "10.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * quotes.length)];

const bgImageClass = document.getElementById("bgImge");

console.log(chosenImage);

//자바스크립트에서 이미지를 생성하여 html로~ <img>
const bgImage = document.createElement("img");

//src (백틱으로 바꾸고 chosenimage를 추가해서 string으로), 자바스크립트에서 Html element 생성
bgImage.src = `img/${chosenImage}`;

//html에서 <div id="bgImge"></div>추가하고 안에 <img> html을 추가
bgImageClass.appendChild(bgImage);
