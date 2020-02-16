import React, { useState } from "react";
import PokemonService from "../../lib/pokemon-service";
import HttpClient from "../../lib/http-client";

import "./DropdownSelector.css";

const DropdownSelector = ({ pokemonTypesList, fetchMob }) => {
  const pokemonService = new PokemonService(new HttpClient());
  const setType = useState()[1];
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");

  const fetchPokemonOfType = async type => {
    setType(type);
    const list = await pokemonService.byType(type);
    setPokemonList(list.pokemon.map(e => e.pokemon.name));
  };

  return (
    <div className="dropdown-selector">
      <select
        className="dropdown-selector__type-selector"
        name="type"
        onChange={e => fetchPokemonOfType(e.target.value)}
      >
        <option value="">--Pokemon Type--</option>
        {pokemonTypesList &&
          pokemonTypesList.map(pokemonType => (
            <option key={pokemonType} value={pokemonType}>
              {pokemonType}
            </option>
          ))}
      </select>

      <select
        className="dropdown-selector__pokemon-selector"
        name="pokemon"
        onChange={e => setSelectedPokemon(e.target.value)}
      >
        <option value="">--Pokemon--</option>
        {pokemonList.map(pokemonName => (
          <option key={pokemonName} value={pokemonName}>
            {pokemonName}
          </option>
        ))}
      </select>

      <button
        className="dropdown-selector__button"
        name="fetchMob"
        onClick={e => fetchMob(selectedPokemon)}
      >
        Load {selectedPokemon}
      </button>
    </div>
  );
};

export default DropdownSelector;
