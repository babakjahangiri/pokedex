import React, { useState } from "react";
import "./CoughPokemon.css";

function CaughtPokemon() {
  const date = new Date().toLocaleDateString();

  const [totalCaught, setTotalCaught] = useState(14);

  function updateTotalCaught() {
    setTotalCaught(totalCaught + 1);
  }
  return (
    <div>
      <p>
        Caught {totalCaught} Pokemon on {date}
      </p>

      <button className="btn-cough" onClick={updateTotalCaught}>
        {"catch a pokemon"}
      </button>
    </div>
  );
}

export default CaughtPokemon;
