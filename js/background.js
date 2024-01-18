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

console.log(chosenImage);

//자바스크립트에서 이미지를 생성하여 html로~ <img>
const bgImage = document.createElement("img");

//src (백틱으로 바꾸고 chosenimage를 추가해서 string으로), 자바스크립트에서 Html element 생성
bgImage.src = `img/${chosenImage}`;

//body에 html을 추가
document.body.appendChild(bgImage);
