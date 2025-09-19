import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handelCountryVisited, handelVisitedFlag }) => {
    // console.log(handelCountryVisited);
  const [visited, setVisited] = useState(false);
  const handelVisited = () => {
    // setVisited(visited ? false : true);
    setVisited(!visited);
    handelCountryVisited(country);
  };
  return (
    <div className={`country ${visited && "country-visited"}`}>
      <h3>name: {country.name.common}</h3>
      <img src={country.flags.flags.png} alt="" />
      <h3>Capital {country.capital.capital}</h3>
      <p>Languages {country.languages.languages.jam}</p>
      <p>Population{country.population.population}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "big country" : "small country"}
      </p>
      <button onClick={handelVisited}>
        {visited ? "visited" : "not visited"}
      </button>
      <button onClick={()=>{handelVisitedFlag(country.flags.flags.png)}}>visited flag </button>
    </div>
  );
};

export default Country;
