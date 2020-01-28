import React, { Component } from "react";
import ListByType from "./list-by-type";
import Pokemon from "./Pokemon";
import PokemonService from "../lib/pokemon-service";
import HttpClient from "../lib/http-client";
import "./development.css";

class Development extends Component {
  constructor(props) {
    super(props);
    this.pokemonService = new PokemonService(HttpClient);
    this.state = {
      inputValue: "",
      pokemonName: props.pokemonName || "Ian",
      pokemonImageUrl:
        props.pokemonImageUrl ||
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/143.png"
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    const pokemon = await this.pokemonService.byName(this.state.inputValue);
    this.setState(
      Object.assign({}, this.state, {
        pokemonName: pokemon.name,
        pokemonImageUrl: pokemon.sprites.front_default
      })
    );
  }

  handleSearchChange(event) {
    const inputValue = event.target.value;
    this.setState(Object.assign({}, this.state, { inputValue: inputValue }));
  }

  render() {
    return (
      <div>
        <Pokemon name="snorlax" faceRight={true} />
        <hr />
        <div className="title">Search Pokemon by Name</div>
        <input
          type="text"
          onChange={this.handleSearchChange}
          name="pokemon-name"
        />
        <button onClick={this.handleSubmit}>Search</button>
        <div>{this.state.pokemonName}</div>
        <img className="pokemon-sprite" src={this.state.pokemonImageUrl} />
        <hr />
        <ListByType />

        <hr />
      </div>
    );
  }
}

export default Development;
