import React, { Component } from "react";
import axios from "axios";
import "../loading.css";
import CountryCard from "./CountryCard";

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
              <CountryCard {...country} key={country.name} />
            ))}
        </div>
      </>
    );
  }
}

export default CountryList;
