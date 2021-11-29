import React, { Component } from "react";
import axios from "axios";
import numberFormat from "easy-number-formatter";
import "../loading.css";

class CountryList extends Component {
  state = {
    data: [],
    countryNames: [],
    API: "https://restcountries.com/v2/all?fields=name,capital,population,flags,languages,currencies",
    searchInput: "",
    isLoading: true,
  };

  componentDidMount() {
    axios.get(this.state.API).then((res) => {
      this.setState({ data: res.data });
      console.log(this.state.data);
      this.setState({ countryNames: this.state.data.name });
      this.setState({ isLoading: false });
    });
  }

  searchInputHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <>
          <div className="background"></div>
          <div className="loading">
            <div class="lds-roller">
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
      <>
        <div className="background"></div>
        <div className="searchdiv">
          <input name="search" onChange={this.searchInputHandler} type="text" />
        </div>
        <div className="countryContainer">
          {this.state.data
            .filter((c) => {
              return c.name
                .toLowerCase()
                .includes(this.state.searchInput.toLocaleLowerCase());
            })
            .map((country) => (
              <div className="countryname" key={country.name}>
                <div className="title">
                  <h2>{country.name} </h2>
                  <h2>Capital: {country.capital}</h2>
                </div>
                <img src={country.flags.png} alt="country flag svg" />
                <p className="population">
                  Current Population:{" "}
                  <span>{numberFormat.formatNumber(country.population)}</span>
                </p>
                <p className="language">
                  Language(s):{" "}
                  {country.languages.map((lang, i) => (
                    <span key={i}>{lang.name} </span>
                  ))}{" "}
                </p>
                <p className="currencies">
                  Currencies:{" "}
                  {country.currencies.map((currency) => (
                    <span>
                      {currency.name} {currency.symbol}
                    </span>
                  ))}{" "}
                </p>
              </div>
            ))}
        </div>
      </>
    );
  }
}

export default CountryList;
