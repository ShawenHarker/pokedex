import React, { useState } from "react";

let CaughtPokemon = (props) => {
  let [caught, setCaught] = useState([]);
  console.log(caught);
  let listOfPokemons = ["Pikachu", "Charizard", "Landorus", "Eevee", "Snorlax", "MewTwo", "Charmander", "Ditto", "Squirtle", "Lucario", "Gardevior", "Gengar", "Bulbasaur"];

  const catchPokemon = () => {
    setCaught((prevCaught) => prevCaught + 1);

    let newPokemon = listOfPokemons[Math.floor(Math.random() * listOfPokemons.length)];
    setCaught([...caught, newPokemon]);
  };

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
      <button
      onClick={catchPokemon} className="caught-btn">Pokemon's Caught</button>
    </div>
  );

};

export default CaughtPokemon;