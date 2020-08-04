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

// function BestPokemonSelector() {
//   const [pokemonId, setPokemonId] = useState(null);

//   function handleBulbasaurClick() {
//     setPokemonId(1);
//   }
//   function handleCharmanderClick() {
//     setPokemonId(4);
//   }

//   return (
//     <div>
//       <button onClick={handleBulbasaurClick}>Fetch Bulbasaur</button>
//       <button onClick={handleCharmanderClick}>Fetch Charmander</button>
//       {pokemonId ? <BestPokemonFetcher pokemonId={pokemonId} /> : null}
//     </div>
//   );
// }

// export default BestPokemonSelector;
