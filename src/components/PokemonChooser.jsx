import React, { useState } from "react";
import "./PokemonChooser.css";

const PokemonChooser = ({ defaultName, fetchMob }) => {
  const [mobSearchString, setMobSearchString] = useState(defaultName);

  return (
    <div className="pokemon-chooser">
      <input
        className="pokemon-chooser__input"
        type="text"
        value={mobSearchString}
        onChange={e => setMobSearchString(e.target.value)}
      />
      <button
        className="pokemon-chooser__button"
        name="fetchMobOne"
        onClick={e => fetchMob(mobSearchString)}
      >
        Load {mobSearchString}
      </button>
    </div>
  );
};

export default PokemonChooser;
