const timeDisplay = document.querySelector('.time');
const WeatherDisplay = document.querySelector('.weather');
const locationDisplay = document.querySelector('.location');

//weather api
const api ={
    key: "2dce14b5cb89113de2ab27e458030969",
    base: "https://api.openweathermap.org/data/2.5/"
}
//Get Current location
function findLocation() {
  if (navigator.geolocation) { 
    navigator.geolocation.getCurrentPosition(getResults); 
    } else { 
    alert("이 문장은 사용자의 웹 브라우저가 Geolocation API를 지원하지 않을 때 나타납니다!") ; 
    }
}
findLocation();




//Get Time
var today = new Date();
var hours = today.getHours();
var mins = today.getMinutes();

hours > 11 ? timeDisplay.innerText = `${hours} : ${mins} pm` : 
timeDisplay.innerText = `0${hours} : ${mins} am`


//Get weather
function getResults(position){
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
    fetch(`${api.base}weather?lat=${lat}&lon=${lon}&units=metric&appid=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(getWeather);
}


function getWeather(weather){
  WeatherDisplay.innerText = `${weather.weather[0].main}, ${Math.round(weather.main.temp)}℃`;
  locationDisplay.innerText = `${weather.name}/${weather.sys.country}`;
}




