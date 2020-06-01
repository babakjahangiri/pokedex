import React, { useState, useEffect } from "react";

function BestPokemon(props) {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <p>
        My favourite Pokemon is <b>{props.pokemon}</b>
      </p>
      <p>
        <ul>
          {abilities.map((a) => {
            return <li>{a}</li>;
          })}
        </ul>
      </p>
    </div>
  );
}

export default function BestPokemonFetcher() {
  let [bestPokemon, setBestPokemon] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/1/`)
      .then((res) => res.json())
      .then((data) => setBestPokemon(data.name));
  }, []);

  // if (!bestPokemon) {
  //   return null;
  // } else {
  //   return <BestPokemon pokemon={bestPokemon} />;
  // }

  return !bestPokemon ? null : <BestPokemon pokemon={bestPokemon} />;
}
