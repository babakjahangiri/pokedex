import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CoughPokemon";

function App() {
  return (
    <div>
      <Logo appName="Pokedex" />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
}

export default App;
