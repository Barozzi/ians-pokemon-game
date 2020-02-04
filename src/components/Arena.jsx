import React from "react";
import Pokemon from "./Pokemon";
import PokemonChooser from "./PokemonChooser";
import "./Arena.css";

const Arena = ({ mob1, mob2, fetchMobOne, fetchMobTwo, doAttack }) => {
  const DEFAULT_MOB_ONE = "squirtle";
  const DEFAULT_MOB_TWO = "pancham";

  if (!mob1 && !mob2) {
    return (
      <div className="arena">
        <PokemonChooser defaultName={DEFAULT_MOB_ONE} fetchMob={fetchMobOne} />
        <PokemonChooser defaultName={DEFAULT_MOB_TWO} fetchMob={fetchMobTwo} />
      </div>
    );
  } else if (mob1 && !mob2) {
    return (
      <div className="arena">
        <Pokemon mob={mob1} />
        <PokemonChooser defaultName={DEFAULT_MOB_TWO} fetchMob={fetchMobTwo} />
      </div>
    );
  } else if (!mob1 && mob2) {
    return (
      <div className="arena">
        <PokemonChooser defaultName={DEFAULT_MOB_ONE} fetchMob={fetchMobOne} />
        <Pokemon mob={mob2} />
      </div>
    );
  } else {
    return (
      <div className="arena">
        <Pokemon mob={mob1} />
        <Pokemon mob={mob2} />
        <button onClick={e => doAttack(mob1, mob2)}>next attack</button>
      </div>
    );
  }
};

export default Arena;
