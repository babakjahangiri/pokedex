import React from "react";

const Logo = (props) => {
  //const appName = "Pokedex";

  // function logWhenClicked() {
  //   console.log("Button was clicked!");
  //   console.log("");
  // }
  return (
    <header>
      <h1>Welcome to {props.appName}</h1>
      <img
        onClick={props.handleClick}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt=""
      />
    </header>
  );
};

export default Logo;
