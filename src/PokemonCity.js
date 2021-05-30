import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");

  function updateCity(event) {
    let cityName = event.target.value;
    setCity(cityName);
    cityName = "";
  }

  return (
    <div>
        <input type="text"
        value={city}
        onChange={updateCity}
        placeholder="What city are you in now?" />
      <p>Welcome to the city of {city}</p>
    </div>
  );
}

export default PokemonCity;