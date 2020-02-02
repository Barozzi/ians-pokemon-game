import React from "react";
import PokemonService from "../lib/pokemon-service";
import Pokemon from "./Pokemon";
import HttpClient from "../lib/http-client";

class Arena extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mob1Name: props.mob1Name, mob2Name: props.mob2Name };
  }

  async componentWillMount() {
    const pokemonService = new PokemonService(HttpClient);
    const mob1 = await pokemonService.byName(this.state.mob1Name);
    const mob2 = await pokemonService.byName(this.state.mob2Name);
    console.log("asdfasdfasdfasdfasdfasdfasdfasdf");
    console.log(mob1.sprites.front_default);
    this.setState(
      Object.assign({}, this.state, {
        mob1: mob1,
        mob1image: mob1.sprites.front_default,
        mob2: mob2,
        mob2image: mob2.sprites.front_default
      })
    );
  }

  render() {
    return (
      <div className="arena">
        <Pokemon name={this.state.mob1Name} url={this.state.mob1image} />
        <Pokemon name={this.state.mob2Name} url={this.state.mob2image} />
      </div>
    );
  }
}

export default Arena;
