export class MobModel {
  constructor(rawMobData) {
    this.name = rawMobData.name;
    this.imgUrl = rawMobData.sprites.front_default;
    this.hp = createHp(rawMobData);
    this.maxHp = this.hp;
    this.message = "";
    this.attack = createAttack(rawMobData);
    this.dodge = createDodge(rawMobData);
    this.special = createSpecial(rawMobData);
    this.regen = createRegen(rawMobData);
    this.rawMobData = rawMobData;
    this.powerup = 0;
  }
}

// C R E A T O R S ////////////////////////////////////

const createHp = data =>
  data.stats.find(e => e.stat.name === "hp").base_stat + 300;
const createAttack = data =>
  data.stats.find(e => e.stat.name === "attack").base_stat;
const createDodge = data =>
  data.stats.find(e => e.stat.name === "defense").base_stat;
const createSpecial = data =>
  data.stats.find(e => e.stat.name === "special-attack").base_stat;
const createRegen = data =>
  data.stats.find(e => e.stat.name === "special-defense").base_stat;

// D E F A U L T  E X P O R T /////////////////////////
export default MobModel;
