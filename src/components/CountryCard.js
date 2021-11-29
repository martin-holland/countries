import React from "react";
import numberFormat from "easy-number-formatter";
import { Link } from "react-router-dom";

function CountryCard({
  name,
  capital,
  languages,
  currencies,
  flags,
  population,
}) {
  return (
    <Link to={capital}>
      <div className="countryname" key={name}>
        <div className="title">
          <h2>{name} </h2>
          <h2>Capital: {capital}</h2>
        </div>
        <img src={flags.png} alt="country flag svg" />
        <p className="population">
          Current Population:{" "}
          <span>{numberFormat.formatNumber(population)}</span>
        </p>
        <p className="language">
          Language(s):{" "}
          {languages.map((lang, i) => (
            <span key={i}>{lang.name} </span>
          ))}{" "}
        </p>
        <p className="currencies">
          Currencies:{" "}
          {currencies.map((currency) => (
            <span>
              {currency.name} {currency.symbol}
            </span>
          ))}{" "}
        </p>
      </div>
    </Link>
  );
}

export default CountryCard;
