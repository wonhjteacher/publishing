const API_KEY='970a4f3a1e0b5d4d9123b0599621e2c9';  // 본인 api 넣기 
const country = document.querySelector('#country');
const area = document.querySelector('#area');
const currentTemp = document.querySelector('#currentTemp');
const currentDescription= document.querySelector('#currentDescription');
const maxTemp  = document.querySelector('#maxTemp')
const minTemp   = document.querySelector('#minTemp')
const citybtn = document.querySelectorAll('.citybtn');

citybtn.forEach((ele)=>{ele.addEventListener('click',(e)=>{getCitytWeather(e)})})

 const getCurrentLocation = () => {  // 현재 위치를 받아와서 lat lon 값을 넘기면서 getCurrentWeater  호출   
    navigator.geolocation.getCurrentPosition((position)=>{
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    
     getCurrentWeater(lat,lon)
  })
 }
 // 브라우저의 위치 정보가 허용되어 있어야 navigator.geolocation.getCurrentPosition 사용 가능 , requestGeolocationPermission()

const getCurrentWeater = async(lat , lon) =>{ 
  let url = new URL(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`);
  let response = await fetch(url);
  let data = await response.json();
  render(data)
}

const getCitytWeather = async(e) =>{
 let city = e.target.dataset.cityname;
 let url = new URL(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=kr`)
 let response = await fetch(url); 
 let data = await response.json();
 render(data)
}

const render = (data) => {
 country.innerText = data.sys.country ; 
 currentDescription.innerText = data.weather[0].description;
 area.innerText = data.name;
 currentTemp.innerText = data.main.temp
 maxTemp.innerText = data.main.temp_max;
 minTemp.innerText = data.main.temp_min;
}

getCurrentLocation();