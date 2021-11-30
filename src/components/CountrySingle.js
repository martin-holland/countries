import React, { Component } from "react";
import axios from "axios";

class CountrySingle extends Component {
  state = {
    country: [],
    weather: [],
  };

  componentDidMount() {
    console.log(this.props);

    function getCountry() {
      return axios.get(
        `'https://restcountries.com/v2/capital/${this.props.params.name}'`
      );
    }

    function getWeather() {
      return axios.get(
        `'api.openweathermap.org/data/2.5/weather?q=${this.props.params.name}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}'`
      );
    }
  }

  render() {
    return (
      <div className="countrysingle">
        <div className="singleCountryCard">
          <h2>{this.props.params.name}</h2>
          <p>Current Temperature:</p>
          <p>Current Precipitation:</p>
          <p>Population: {this.props.params.population}</p>
        </div>
      </div>
    );
  }
}

export default CountrySingle;
