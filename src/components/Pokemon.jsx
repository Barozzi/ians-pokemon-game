import React from "react";
import PokemonService from "../lib/pokemon-service";
import HttpClient from "../lib/http-client";
import "./Pokemon.css";

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    const classes = props.faceRight
      ? "pokemon-sprite face-right"
      : "pokemon-sprite";
    this.state = { name: props.name, classes: classes };
  }
  async componentWillMount() {
    const pokemonService = new PokemonService(HttpClient);
    const pokemon = await pokemonService.byName(this.state.name);
    const pokemonImageUrl = pokemon.sprites.front_default;
    this.setState(
      Object.assign({}, this.state, {
        pokemonImageUrl: pokemonImageUrl
      })
    );
  }
  render() {
    return (
      <div>
        <img
          alt={this.state.name}
          className={this.state.classes}
          src={this.state.pokemonImageUrl}
        />
      </div>
    );
  }
}
export default Pokemon;
