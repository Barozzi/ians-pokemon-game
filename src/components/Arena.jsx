import React from "react";
import Pokemon from "./Pokemon";

const Arena = ({ mob1, mob2, fetchMobOne, fetchMobTwo }) => {
  if (!mob1 && !mob2) {
    return (
      <div className="arena">
        <button name="fetchMobOne" onClick={e => fetchMobOne("squirtle")}>
          Load Squirtle
        </button>
        <button name="fetchMobTwo" onClick={e => fetchMobTwo("snorlax")}>
          Load Snorlax
        </button>
      </div>
    );
  } else if (mob1 && !mob2) {
    return (
      <div className="arena">
        <Pokemon name={mob1.name} url={mob1.sprites.front_default} />
        <button name="fetchMobTwo" onClick={e => fetchMobTwo("snorlax")}>
          Load Snorlax
        </button>
      </div>
    );
  } else if (!mob1 && mob2) {
    return (
      <div className="arena">
        <button name="fetchMobOne" onClick={e => fetchMobOne("squirtle")}>
          Load Squirtle
        </button>
        <Pokemon name={mob2.name} url={mob2.sprites.front_default} />
      </div>
    );
  } else {
    return (
      <div className="arena">
        <Pokemon name={mob1.name} url={mob1.sprites.front_default} />
        <Pokemon name={mob2.name} url={mob2.sprites.front_default} />
      </div>
    );
  }
};

export default Arena;
