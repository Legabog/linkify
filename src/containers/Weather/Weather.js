import { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import "./Weather.css";

import { getCoordinatesAddressWeather, setUnitsOfMeasure } from "redux/weather-reducer";

import { WeatherBody, WeatherHeader } from "containers/Weather/components";
import { CirclePreloader } from "pres-components/CirclePreloader";

const Weather_ = (props) => {
  useEffect(() => {
    props.getCoordinatesAddressWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={"weather-wrapper"}>
      {props.weatherFetching ? (
        <CirclePreloader margin_left={"50px"} margin_top={"30px"} />
      ) : (
        <div className={"weather"}>
          <WeatherHeader {...props} />
          <WeatherBody {...props}/>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  weatherCoordinates: state.weatherReducer.weatherCoordinates,
  weatherAddress: state.weatherReducer.weatherAddress,
  weatherToday: state.weatherReducer.weatherToday,
  weatherForecast5Days: state.weatherReducer.weatherForecast5Days,
  weatherFetching: state.weatherReducer.weatherFetching,
  weatherUnitsOfMeasure: state.weatherReducer.weatherUnitsOfMeasure
});

export const Weather = compose(
  withRouter,
  connect(mapStateToProps, {
    getCoordinatesAddressWeather,
    setUnitsOfMeasure
  })
)(Weather_);
