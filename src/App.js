import React from 'react';
function App() {
  console.log('Hi');
  return (
    <div>
      <Logo />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
}
let Logo = () => {
  let appName = 'Shawen Pokedex';
  return (
    <header>
      <h1>Welcome to the {appName}</h1>
      <img
        src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png'
        alt='Sparrow'
      />
    </header>
  );
};
let BestPokemon = () => <p>My favorite Pokemon is Squirtle</p>;
let CaughtPokemon = () => {
  let date = new Date().toLocaleDateString();
  let abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
  return (
    <div>
      <p>Caught 0 Pokemon on {date}</p>
      <ul>
        {abilities.map((ability, index) => (
          <li key = {index}>{ability}</li>
        ))}
      </ul>
    </div>
  );
};