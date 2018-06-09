const weather = new Weather;
const ui_location = document.querySelector('#w-location');
const ui_temp = document.querySelector('#w-desc');

// weather.changeLocation('Odzak');
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
  weather.getWeather()
    .then(result => {
      console.log(result);
      // ui_temp.innerText = `${result.main.temp - 272.15}°`;
      // ui_location.innerText = result.name;
    })
    .catch(err => console.log(err));
}
