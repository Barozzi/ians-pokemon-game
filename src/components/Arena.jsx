import React from "react";
import Pokemon from "./Pokemon";
import DropdownSelector from "./DropdownSelector/DropdownSelector";

import "./Arena.css";

const Arena = ({
  mob1,
  mob2,
  pokemonTypesList,
  fetchMobOne,
  fetchMobTwo,
  fetchPokemonTypesList,
  doAttack
}) => {
  if (!pokemonTypesList) fetchPokemonTypesList();

  if (!mob1 && !mob2) {
    return (
      <div className="arena">
        <DropdownSelector
          pokemonTypesList={pokemonTypesList}
          fetchMob={fetchMobOne}
        />
        <DropdownSelector
          pokemonTypesList={pokemonTypesList}
          fetchMob={fetchMobTwo}
        />
      </div>
    );
  } else if (mob1 && !mob2) {
    return (
      <div className="arena">
        <Pokemon mob={mob1} />
        <DropdownSelector
          pokemonTypesList={pokemonTypesList}
          fetchMob={fetchMobTwo}
        />
      </div>
    );
  } else if (!mob1 && mob2) {
    return (
      <div className="arena">
        <DropdownSelector
          pokemonTypesList={pokemonTypesList}
          fetchMob={fetchMobOne}
        />
        <Pokemon mob={mob2} />
      </div>
    );
  } else {
    return (
      <div className="arena-container">
        <div className="arena">
          <table>
            <tbody>
              <tr>
                <td>
                  <Pokemon mob={mob1} />
                </td>
                <td>
                  <Pokemon mob={mob2} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          className="arena-attack-button"
          onClick={e => doAttack(mob1, mob2)}
        >
          next attack
        </button>
      </div>
    );
  }
};

export default Arena;
