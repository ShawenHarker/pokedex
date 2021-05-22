import React from "react";
import Logo from "./logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Logo appName="Shawen's Pokedex" handleClick={logWhenClicked} />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Fly-Away"]}/>
      <CaughtPokemon date = {new Date().toLocaleDateString()}/>
    </div>
  );
}

const logWhenClicked = () => {
  console.log("Hello to Pokedex");
};

export default App;