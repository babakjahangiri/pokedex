import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CoughPokemon";

function App() {
  function logWhenClicked() {
    console.log("Button was clicked!");
    console.log("");
  }

  return (
    <div>
      <Logo appName="Pokedex" handleClick={logWhenClicked} />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
}

export default App;
