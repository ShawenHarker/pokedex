import React from "react";

let Logo = () => {
    let appName = "Shawen Pokedex";
    return (
      <header>
        <h1>Welcome to the {appName}</h1>
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          alt="Sparrow"
        />
      </header>
    );
};

export default Logo;