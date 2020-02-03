import React from "react";
import Pokemon from "./Pokemon";

const Arena = ({
  message,
  mob1,
  mob2,
  fetchMobOne,
  fetchMobTwo,
  startFight,
  doAttack
}) => {
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
        <Pokemon mob={mob1} />
        <button name="fetchMobTwo" onClick={e => fetchMobTwo("pancham")}>
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
