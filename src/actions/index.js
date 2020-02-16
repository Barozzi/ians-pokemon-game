import PokemonService from "../lib/pokemon-service";
import HttpClient from "../lib/http-client";
import { MobModel } from "../models";

export const addMobOne = mob => ({
  type: "ADD_MOB_ONE",
  mob: new MobModel(mob)
});

// Async/Thunk action
export const fetchMobOne = mobName => dispatch =>
  getMob(mobName).then(resp => {
    dispatch(addMobOne(resp));
  });

export const addMobTwo = mob => ({
  type: "ADD_MOB_TWO",
  mob: new MobModel(mob)
});

// Async/Thunk action
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

export const updateMessage = message => ({ type: "UPDATE_MESSAGE", message });

// Async/Thunk action
export const startFight = () => async (dispatch, getState) => {
  let { mob1, mob2 } = getState();
  if (!mob1 || !mob2) {
    dispatch(updateMessage("Must have two fighters to start a fight."));
    return;
  }
};

export const setPokemonTypesList = list => ({
  type: "SET_POKEMON_TYPES_LIST",
  list
});

export const fetchPokemonTypesList = () => async (dispatch, getState) => {
  const { pokemonTypesList } = getState();
  if (!pokemonTypesList) {
    const pokemonService = new PokemonService(new HttpClient());
    const res = await pokemonService.getTypes();
    const types = res.results.map(e => e.name);
    dispatch(setPokemonTypesList(types));
  }
};

////////////////////////////////////////////////////////////////////////////////
export const getMob = name => {
  const pokemonService = new PokemonService(new HttpClient());
  return pokemonService.byName(name);
};
