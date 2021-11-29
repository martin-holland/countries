import React, { Component } from "react";

class CountrySingle extends Component {
  render() {
    return (
      <div className="countrysingle">
        <div className="singleCountryCard">
          <h2>{this.props.params.name}</h2>
          <p>Current Temperature:</p>
          <p>Current Precipitation:</p>
        </div>
      </div>
    );
  }
}

export default CountrySingle;
