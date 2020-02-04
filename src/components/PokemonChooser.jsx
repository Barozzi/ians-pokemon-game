import React, { useState } from "react";

const PokemonChooser = ({ defaultName, fetchMob }) => {
  const [mobSearchString, setMobSearchString] = useState(defaultName);

  return (
    <div className="pokemon-chooser">
      <input
        type="text"
        value={mobSearchString}
        onChange={e => setMobSearchString(e.target.value)}
      />
      <button name="fetchMobOne" onClick={e => fetchMob(mobSearchString)}>
        Load {mobSearchString}
      </button>
    </div>
  );
};

export default PokemonChooser;
