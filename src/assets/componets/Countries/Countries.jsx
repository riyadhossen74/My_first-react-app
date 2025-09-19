import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./counntries.css";

const Countries = ({ CountriesPromise }) => {
  const [countryVisited, setCountryVisited] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);
  const handelCountryVisited = (country) => {
    // console.log('cffjsdjfdj', country)
    const newVisitedCountry = [...countryVisited, country];
    setCountryVisited(newVisitedCountry);
  };
  const handelVisitedFlag = (flag) => {
   
    const newVisitedCountryFlag = [...visitedFlag, flag];
    setVisitedFlag(newVisitedCountryFlag);
  };
  const Countriesdata = use(CountriesPromise);
  const Countries = Countriesdata.countries;

  return (
    <div>
      <h1>In the countries {Countries.length}</h1>
      <h4>Country visited: {countryVisited.length} </h4>
      <h3>Visited Flag: {visitedFlag.length}</h3>
      <ol>
        {countryVisited.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>
      <div className="visied-flag">
        {visitedFlag.map((flag, index)=>( 
          <img key={index} src={flag} alt="" />
        ))}
      </div>
      <div className="counntries">
        {Countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handelCountryVisited={handelCountryVisited}
            handelVisitedFlag={handelVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
