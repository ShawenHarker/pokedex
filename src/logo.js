import React from "react";

let Logo = (props) => {

  return (
    <header>
      <h1>Welcome to {props.appName}</h1>
      <img
        onClick={props.handleClick}
        className="logo-image"
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="Sparrow"
      />
    </header>
  );
};

export default Logo;