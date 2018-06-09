class Weather {
  constructor(city, api_key){
    this.api_key = "70a054b8fea95b5f7a0d2366eed79ca1";
    this.city = 'Banja Luka';
  }

  async getWeather(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.api_key}`);
    const data = await response.json();
    return data;
  }

  changeLocation(city){
    this.city = city;
  }
}
