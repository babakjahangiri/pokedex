import React from "react";

function BestPokemon() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <p>My favourite Pokemon is Squirtle</p>
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

export default BestPokemon;
