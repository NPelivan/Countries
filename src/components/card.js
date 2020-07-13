import React from "react";

export default function Card(props) {
  const { clickHandler, country } = props;
  const { name, population, region, capital, flag } = country;
  return (
    <div className="country-card" onClick={clickHandler}>
      <img src={flag} alt={`${name} flag`}></img>
      <div className="country-card-body">
        <div className="country-card-name">{name}</div>

        <div className="country-card-body-row">
          <span className="country-card-body-row-title">Population:</span>
          <span>{population.toLocaleString()}</span>
        </div>

        <div className="country-card-body-row">
          <span className="country-card-body-row-title">Region:</span>
          <span>{region.toLocaleString()}</span>
        </div>

        <div className="country-card-body-row">
          <span className="country-card-body-row-title">Capital:</span>
          <span>{capital.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
