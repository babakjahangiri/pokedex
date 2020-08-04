import React, { useState } from "react";
import "./CoughPokemon.css";

function CaughtPokemon() {
  const date = new Date().toLocaleDateString();

  const [totalCaught, setTotalCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  function updateTotalCaught() {
    if (pokemonNameInput !== "") {
      setTotalCaught(totalCaught.concat(pokemonNameInput));
    } else {
      alert("you must type your pokemon name");
    }
    setPokemonNameInput("");
  }

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);

    // console.log(event.target.value);
  }

  return (
    <div>
      <p>
        Caught
        <ul>
          {totalCaught.map((name) => {
            return <li>{name}</li>;
          })}
        </ul>
        Pokemon on {date}
      </p>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      ></input>

      <button className="btn-cough" onClick={updateTotalCaught}>
        {"catch a pokemon"}
      </button>
    </div>
  );
}

export default CaughtPokemon;
