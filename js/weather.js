const API_KEY = "dc7eb416eb815471c59e500ffb768541";

//정상적으로 동작할 때 함수
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  //fetch는 promise인데, 당장 뭔가 일어나지 않고 시간이 걸린 뒤에 일어남
  //url의 정보 얻음, 내용을 추출하고 데이터를 얻음

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
    });
}

//위치를 받는데 에러 발생시 함수
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

//브라우저에서 위치 좌표를 줌
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
