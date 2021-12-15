import React, { Component } from "react";
import axios from "axios";
import numberFormat from "easy-number-formatter";

function getCountry(capital) {
  return axios.get(`https://restcountries.com/v2/capital/${capital}`);
}

function getWeather(capital) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
  );
}

class CountrySingle extends Component {
  state = {
    country: {},
    weather: {},
    isLoading: true,
  };

  componentDidMount() {
    Promise.all([
      getCountry(this.props.params.name),
      getWeather(this.props.params.name),
    ]).then((res) => {
      this.setState({
        country: res[0].data[0],
        weather: res[1].data,
        isLoading: false,
      });
      //   console.log("response", res);
      //   console.log("country data", this.state.country);
      //   console.log("weather data", this.state.weather);
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <>
          <div className="background"></div>
          <div className="loading">
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </>
      );
    }
    return (
      <div className="countrysingle">
        <div className="singleCountryCard">
          <h2>{this.state.country.name}</h2>
          <div className="weather">
            <p>
              Current Temperature: {Math.round(this.state.weather.main.temp)} °C
            </p>
            <p>
              Feels like: {Math.round(this.state.weather.main.feels_like)} °C
            </p>
            <img
              alt={this.state.weather.weather[0].description}
              src={`http://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}@2x.png`}
            />
          </div>
          <div className="countrystats">
            <p>
              Population:{" "}
              {numberFormat.formatNumber(`${this.state.country.population}`)}
            </p>
            <p>Size: {Math.round(this.state.country.area / 1000)} sq km</p>
            <p>Native Name: " {this.state.country.nativeName} "</p>
            <p>
              Country Region: " {this.state.country.region},{" "}
              {this.state.country.subregion} "
            </p>
            <p>
              {" "}
              Currencies:{" "}
              {this.state.country.currencies.map((currency, i) => (
                <span key={i}>
                  {" "}
                  {currency.name}, Symbol: {currency.symbol}
                </span>
              ))}{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CountrySingle;
