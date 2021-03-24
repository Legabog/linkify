import { addressApi } from "api/address-api";
import { weatherApi } from "api/weather-api";

const WEATHER_TOGGLE_FETCH = "WEATHER_TOGGLE_FETCH";
const WEATHER_SET_COORDINATES = "WEATHER_SET_COORDINATES";
const WEATHER_SET_ADDRESS = "WEATHER_SET_ADDRESS";
const WEATHER_SET_WEATHER_TODAY = "WEATHER_SET_WEATHER_TODAY";
const WEATHER_SET_FORECAST_5DAYS = "WEATHER_SET_FORECAST_5DAYS";
const WEATHER_SET_UNITS_OF_MEASURE = "WEATHER_SET_UNITS_OF_MEASURE";

let initialState = {
  coordinates: {
    latitude: null,
    longitude: null,
  },
  address: null,
  weatherFetch: false,
  weatherToday: null,
  forecast5Days: null,
  unitsOfMeasure: "C",
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_SET_COORDINATES:
      return {
        ...state,
        coordinates: {
          latitude: action.latitude,
          logitude: action.longitude,
        },
      };
    case WEATHER_SET_ADDRESS:
      return {
        ...state,
        address: action.address,
      };
    case WEATHER_TOGGLE_FETCH:
      return {
        ...state,
        weatherFetch: action.boolean,
      };
    case WEATHER_SET_WEATHER_TODAY:
      return {
        ...state,
        weatherToday: action.weather,
      };

    case WEATHER_SET_FORECAST_5DAYS:
      return {
        ...state,
        forecast5Days: action.forecast,
      };

    case WEATHER_SET_UNITS_OF_MEASURE:
      return {
        ...state,
        unitsOfMeasure: action.units,
      };
    default:
      return state;
  }
};

export const toggleWeatherFetch = (boolean) => {
  return {
    type: WEATHER_TOGGLE_FETCH,
    boolean,
  };
};

export const setWeatherToday = (weather) => {
  return {
    type: WEATHER_SET_WEATHER_TODAY,
    weather,
  };
};

export const setForecast5Days = (forecast) => {
  return {
    type: WEATHER_SET_FORECAST_5DAYS,
    forecast,
  };
};

export const setUnitsOfMeasure = (units) => {
  return {
    type: WEATHER_SET_UNITS_OF_MEASURE,
    units
  }
}

export const setCoorginates = (latitude, longitude) => {
  return {
    type: WEATHER_SET_COORDINATES,
    latitude,
    longitude,
  };
};

export const setAddress = (address) => {
  return {
    type: WEATHER_SET_ADDRESS,
    address,
  };
};

export const getCoordinatesAddressWeather = () => {
  return async (dispatch) => {
    dispatch(toggleWeatherFetch(true));

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const { latitude, longitude } = pos.coords;

      dispatch(setCoorginates(latitude, longitude));

      Promise.all([
        addressApi
          .getAddressByCoordinates(latitude, longitude)
          .then((response) => dispatch(setAddress(response)))
          .catch((e) => console.log(e)),
        weatherApi
          .getWeatherByCoordinates(latitude, longitude)
          .then((data) => dispatch(setWeatherToday(data)))
          .catch((e) => console.log(e)),
        weatherApi
          .getWeather5ByCoordinates(latitude, longitude)
          .then((data) => dispatch(setForecast5Days(data.list)))
          .catch((e) => console.log(e)),
      ]).finally(() => dispatch(toggleWeatherFetch(false)));
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  };
};

export default weatherReducer;
