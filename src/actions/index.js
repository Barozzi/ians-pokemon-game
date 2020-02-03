import PokemonService from "../lib/pokemon-service";
import HttpClient from "../lib/http-client";

export const addMobOne = mob => ({
  type: "ADD_MOB_ONE",
  mob: mob
});

export const fetchMobOne = mobName => dispatch =>
  getMob(mobName).then(resp => {
    dispatch(addMobOne(resp));
  });

export const addMobTwo = mob => ({
  type: "ADD_MOB_TWO",
  mob: mob
});

export const fetchMobTwo = mobName => dispatch =>
  getMob(mobName).then(resp => {
    dispatch(addMobTwo(resp));
  });

export const doSpecial = (mob1, mob2) => ({
  type: "DO_SPECIAL",
  mob1,
  mob2
});

export const doAttack = (mob1, mob2) => ({
  type: "DO_ATTACK",
  mob1,
  mob2
});

export const doRegen = (mob1, mob2) => ({
  type: "DO_REGEN",
  mob1,
  mob2
});

export const getMob = name => {
  const pokemonService = new PokemonService(new HttpClient());
  return pokemonService.byName(name);
};
