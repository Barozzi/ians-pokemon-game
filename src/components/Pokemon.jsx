import React from "react";
import "./Pokemon.css";

const Pokemon = ({ mob }) => (
  <div className="pokemon-card">
    <div className="inner-card">
      <div className="card-title">
        <span className="card-name">{mob.name}</span>
        <span className="card-hp">HP: {mob.hp}</span>
      </div>
      <div className="card-image">
        <img className="pokemon-sprite" alt={mob.name} src={mob.imgUrl} />
      </div>
    </div>
    <div className="card-message">{mob.message}</div>
  </div>
);

export default Pokemon;
