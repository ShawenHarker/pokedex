import React from "react";

let CaughtPokemon = () => {
    let date = new Date().toLocaleDateString();
    let abilities = ["Anticipation", "Adaptability", "Run-Away"];
    return (
      <div>
        <p>"Caught 0 Pokemon on" {date}</p>
        <ul>
          {abilities.map((ability, index) => (
            <li key = {index}>{ability}</li>
          ))}
        </ul>
      </div>
    );
};

export default CaughtPokemon;