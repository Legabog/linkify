import * as axios from "axios";

export const weatherApi = {
  url: process.env.REACT_APP_WEATHER_URL,
  api_key: process.env.REACT_APP_WEATHER_API_KEY,

  getWeatherByCoordinates(lat, lon) {
    return axios
      .get(`${this.url}/weather?lat=${lat}&lon=${lon}&appid=${this.api_key}`)
      .then((response) => response.data);
  },

  getWeather5ByCoordinates(lat, lon) {
    return axios
      .get(`${this.url}/forecast?lat=${lat}&lon=${lon}&appid=${this.api_key}`)
      .then((response) => response.data);
  },
};
