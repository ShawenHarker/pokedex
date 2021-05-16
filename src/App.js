import React from "react";
import Logo from "./logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";


function App() {
  return (
    <div>
      <Logo appName="Pokedex"/>
      <BestPokemon abilities={["Anticipation", "Adaptability", "Fly-Away"]}/>
      <CaughtPokemon date = {new Date().toLocaleDateString()}/>
    </div>
  );
}

export default App;