const combat = (state = {}, action) => {
  let mob1, mob2;

  switch (action.type) {
    case 'ADD_MOB_ONE':
      return Object.assign({}, state, {
        mob1: action.mob,
      });

    case 'ADD_MOB_TWO':
      return Object.assign({}, state, {
        mob1: action.mob,
      });

    case 'DO_SPECIAL':
      [mob1, mob2] = doSpecial(action.mob1, action.mob2);
      return Object.assign({}, state, {
        mob1,
        mob2,
      });

    case 'DO_ATTACK':
      [mob1, mob2] = doAttack(action.mob1, action.mob2);
      return Object.assign({}, state, {mob1, mob2});

    case 'DO_REGEN':
      [mob1, mob2] = doRegen(action.mob1, action.mob2);
      return Object.assign({}, state, {mob1, mob2});

    default:
      return state;
  }
};

// T H E  D O ' S /////////////////////////////////////////////////////
export const doSpecial = (mob1, mob2) => [
  specialSuccess(mob2) ? doDamage(mob2.special, mob1) : mob1,
  specialSuccess(mob1) ? doDamage(mob1.special, mob2) : mob2,
];

export const doAttack = (mob1, mob2) => [
  attackSuccess(mob2) && !dodgeSuccess(mob1)
    ? doDamage(mob2.attack, mob1)
    : mob1,
  attackSuccess(mob1) && !dodgeSuccess(mob2)
    ? doDamage(mob1.attack, mob2)
    : mob2,
];

export const doRegen = (mob1, mob2) => [
  regenSuccess(mob1) ? doDamage(mob1.regen, mob1) : mob1,
  regenSuccess(mob2) ? doDamage(mob2.regen, mob2) : mob2,
];

export const doDamage = (damage, targetMob) =>
  Object.assign({}, targetMob, {hp: targetMob.hp - damage});

// S U C C E S S  //////////////////////////////////////////////////
export const specialSuccess = mob => dieRoll < mob.specialRoll();
export const attackSuccess = mob => dieRoll < mob.attackRoll();
export const regenSuccess = mob => dieRoll < mob.regenRoll();
export const dodgeSuccess = mob => dieRoll < mob.dodgeRoll();

// D I E  R O L L //////////////////////////////////////////////////
const MAX_DIE_ROLL = 100; // lower number makes things happen more
export const dieRoll = () => Math.floor(Math.random() * MAX_DIE_ROLL);

export default combat;
