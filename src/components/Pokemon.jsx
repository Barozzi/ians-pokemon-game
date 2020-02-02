import React from "react";
import "./Pokemon.css";

const Pokemon = props => (
  <div>
    <h4>{props.name}</h4>
    <img className="pokemon-sprite" alt={props.name} src={props.url} />
  </div>
);

export default Pokemon;
