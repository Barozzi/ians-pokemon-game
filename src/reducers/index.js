// A reducer is a function that takes STATE and an ACTION and returns a new STATE
const combat = (state = {}, action) => {
  let mob1, mob2;

  switch (action.type) {
    case "ADD_MOB_ONE":
      return Object.assign({}, state, {
        mob1: action.mob
      });

    case "ADD_MOB_TWO":
      return Object.assign({}, state, {
        mob2: action.mob
      });

    case "DO_ATTACK":
      if (!state.turn) {
        [mob1, mob2] = doAttack(action.mob1, action.mob2);
        return Object.assign({}, state, { mob1, mob2, turn: 1 });
      } else if (state.turn === 1) {
        [mob1, mob2] = doSpecial(action.mob1, action.mob2);
        return Object.assign({}, state, {
          mob1,
          mob2,
          turn: 2
        });
      } else {
        [mob1, mob2] = doRegen(action.mob1, action.mob2);
        return Object.assign({}, state, { mob1, mob2, turn: 0 });
      }

    case "UPDATE_MESSAGE":
      return Object.assign({}, state, { message: action.message });

    default:
      return state;
  }
};

// T H E  D O ' S /////////////////////////////////////////////////////

export const doSpecial = (mob1, mob2) => [
  specialSuccess(mob2)
    ? Object.assign({}, doDamage(mob2.special, mob1), {
        message: `${mob1.name} is hit by ${mob2.name}'s *SPECIAL* ${mob2.rawMobData.abilities[getRandomIndex(mob2.rawMobData.abilities)].ability.name}`
      })
    : Object.assign({}, mob1, {
        message: `${mob1.name} dodges ${mob2.name}'s special attack.`
      }),
  specialSuccess(mob1)
    ? Object.assign({}, doDamage(mob1.special, mob2), {
        message: `${mob2.name} is hit by ${mob1.name}'s *SPECIAL* ${mob1.rawMobData.abilities[getRandomIndex(mob1.rawMobData.abilities)].ability.name}`
      })
    : Object.assign({}, mob2, {
        message: `${mob2.name} dodges ${mob1.name}'s special attack.`
      })
];

export const doAttack = (mob1, mob2) => [
  attackSuccess(mob2) && !dodgeSuccess(mob1)
    ? Object.assign({}, doDamage(mob2.attack, mob1), {
        message: `${mob1.name} is hit by ${mob2.name}'s ${mob2.rawMobData.moves[getRandomIndex(mob2.rawMobData.moves)].move.name}`
      })
    : Object.assign({}, mob1, { message: `${mob1.name} dodges ${mob2.name}.` }),
  attackSuccess(mob1) && !dodgeSuccess(mob2)
    ? Object.assign({}, doDamage(mob1.attack, mob2), {
        message: `${mob2.name} is hit by ${mob1.name}'s ${mob1.rawMobData.moves[getRandomIndex(mob1.rawMobData.moves)].move.name}`
      })
    : Object.assign({}, mob2, {
        message: `${mob2.name} dodges ${mob1.name}`
      })
];

export const doRegen = (mob1, mob2) => [
  regenSuccess(mob1)
    ? Object.assign({}, doDamage(-mob1.regen, mob1), {
        message: `something regen`
      })
    : Object.assign({}, mob1, {
        message: `${mob1.name} tries but fails to heal`
      }),
  regenSuccess(mob2)
    ? Object.assign({}, doDamage(-mob2.regen, mob2), {
        message: "something regen"
      })
    : Object.assign({}, mob2, {
        message: `${mob2.name} tries but fails to heal`
      })
];

export const doDamage = (damage, targetMob) => {
  if (targetMob.hp - damage > targetMob.maxHp) {
    return Object.assign({}, targetMob, { hp: targetMob.maxHp });
  } else if (targetMob.hp - damage <= 0) {
    return Object.assign({}, targetMob, { hp: 0 });
  }
  return Object.assign({}, targetMob, { hp: targetMob.hp - damage });
};

// S U C C E S S  //////////////////////////////////////////////////
export const specialSuccess = mob =>
  dieRoll() < mob.special && dieRoll() < mob.special;
export const attackSuccess = mob => dieRoll() < mob.attack;
export const regenSuccess = mob => mob.hp < mob.regen && dieRoll() < mob.regen;
export const dodgeSuccess = mob => dieRoll() < mob.dodge / 2; // MAGIC NUMBERS OH NO!

// D I E  R O L L //////////////////////////////////////////////////
const MAX_DIE_ROLL = 80; // lower number makes things happen more
export const dieRoll = () => Math.floor(Math.random() * MAX_DIE_ROLL);
export const getRandomIndex = inputArray =>
  Math.floor(Math.random() * inputArray.length);

export default combat;
