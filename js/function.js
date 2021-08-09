const timeDisplay = document.querySelector('.time');
const WeatherDisplay = document.querySelector('.weather');
const locationDisplay = document.querySelector('.location');

//weather api
const api ={
    key: "YOUR_KEY",
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



//Get Time
var today = new Date();
var hours = today.getHours();
var mins = today.getMinutes();

hours > 11 ? timeDisplay.innerText = `${hours} : ${mins} pm` : 
timeDisplay.innerText = `0${hours} : ${mins} am`


//build todolist
const todobtn = document.querySelector('.todo');
const todoCon = document.querySelector('.todobox');
const Input = document.querySelector('.todotext');
const todobox = document.querySelector('.todolist');
const form = document.querySelector('form');

todobtn.addEventListener('click', (e) => {
  e.preventDefault;
  todoCon.classList.toggle('active');

});

form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  const currentValue = Input.value;
  createTodolist(currentValue);
  Input.value = "";

}

//To do list UI
function createTodolist(text){
  const li = document.createElement('li');
  li.classList.add('list-line');
  todobox.appendChild(li);
  li.innerText = text;

  const checkbox = document.createElement('span');
  checkbox.classList.add('checkbox')
  checkbox.innerHTML = `<i class="fas fa-check"></i>`;

  const delBtn = document.createElement('p');
  delBtn.classList.add('delete');
  delBtn.innerHTML = `<i class="far fa-trash-alt"></i>`;

  li.prepend(checkbox);
  li.append(delBtn);

  delBtn.addEventListener('click', deltodo);
  checkbox.addEventListener('click', doneEvent);
  
}

//delete todo list
function deltodo(event){
  const btn = event.target;
  const listLine = btn.parentNode.parentNode;
  todobox.removeChild(listLine);

}

function doneEvent(event){
  const checkBtn = event.target;
  const listLine = checkBtn.parentNode;
  listLine.classList.toggle('active');  
}
