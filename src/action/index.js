export const addMobOne = mob => ({
  type: 'ADD_MOB_ONE',
  mob: mob,
});

export const addMobTwo = mob => ({
  type: 'ADD_MOB_TWO',
  mob: mob,
});

//export const removeMob = mob => ({
//  type: 'REMOVE_MOB',
//  mob: mob,
//});

export const doSpecial = (mob1, mob2) => ({
  type: 'DO_SPECIAL',
  mob1,
  mob2,
});

export const doAttack = (mob1, mob2) => ({
  type: 'DO_ATTACK',
  mob1,
  mob2,
});

export const doRegen = (mob1, mob2) => ({
  type: 'DO_REGEN',
  mob1,
  mob2,
});
