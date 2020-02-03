import React from "react";
import "./Pokemon.css";

const Pokemon = ({ name, url }) => (
  <div>
    <img className="pokemon-sprite" alt={name} src={url} />
    <h4>{name}</h4>
  </div>
);

export default Pokemon;
