import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../store/actions/index";
import CountryCard from "../components/card";
import FilterRow from "../components/filterRow";

export default function HomePage(props) {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.filteredCountries);

  useEffect(() => {
    dispatch(action.fetchCountries());
  }, [dispatch]);

  const countryClickedHandler = (alpha3code) => {
    console.log("alpha3code");
  };

  return (
    <>
      <FilterRow />
      {countries.length > 0 && (
        <div className="countries-wrapper">
          {countries.map((c) => (
            <CountryCard
              clickHanlder={() => countryClickedHandler(c.alpha3code)}
              key={c.alpha3code}
              country={c}
            />
          ))}
        </div>
      )}
    </>
  );
}
