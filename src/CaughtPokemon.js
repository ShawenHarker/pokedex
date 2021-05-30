import React, { useState } from "react";

let CaughtPokemon = (props) => {
  let [caught, setCaught] = useState([]);

  const catchPokemon = () => {
    let results = pokemonNameInput.length > "" ? setCaught([...caught, pokemonNameInput]) && setCaught((prevCaught) => prevCaught + 1) : null;
    setPokemonNameInput("");
    return results;
  };

  let [pokemonNameInput, setPokemonNameInput] = useState("");

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }

  return (
    <div>
      <p>Caught {caught.length} Pokemon on {props.date}</p>
      <ul>
        {caught.map ((pokemon, index) => {
          return (
            <li key={index}>{pokemon}</li>
          );
        })}
      </ul>
      <input
        type="text"
        name="pokemonName"
        value={pokemonNameInput.concat()}
        onChange={handleInputChange}
        placeholder="Catch that pokemon"
      />
      <button
        onClick={catchPokemon}
        className="caught-btn">
        Pokemon's Caught
      </button>
    </div>
  );
};

export default CaughtPokemon;