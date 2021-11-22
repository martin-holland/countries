import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header";

class App extends Component {
  state = {
    data: [],
    countryNames: [],
  };

  componentDidMount() {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      this.setState({ data: res.data });
      console.log(this.state.data);
      this.setState({ countryNames: this.state.data.name });
    });
  }
  render() {
    return (
      <>
        <Header />
        <div className="background"></div>
        <div className="countryContainer">
          {this.state.data.map((country) => (
            <div className="countryname" key={country.name.common}>
              <h2>{country.name.common} </h2>
              <p>Capital: {country.capital}</p>
              <img src={country.flags.png} alt="country flag svg" />
              <p>Current Population: {country.population} </p>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default App;
