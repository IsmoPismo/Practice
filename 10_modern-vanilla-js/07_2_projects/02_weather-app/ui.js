class UI {
  constructor(){
    this.location = document.querySelector('#w-location');
    this.description = document.querySelector('#w-desc');
    this.temperature = document.querySelector('#w-string');
    this.humidity = document.querySelector('#w-humidity');
    this.pressure = document.querySelector('#w-pressure');
    this.windSpeed = document.querySelector('#wind-speed');
  }

  paint(weather){
    this.location.innerText = weather.name;
    this.description.innerText = weather.weather[0].description;
    this.temperature.innerText = `${weather.main.temp - 272.15}°`
    this.humidity.innerText = `Humidity is ${weather.main.humidity}`;
    this.pressure.innerText = `Pressure is ${weather.main.pressure}`;
    this.windSpeed.innerText = `Wind Speed is ${weather.wind.speed}`;
  }
}
