import React, { Component } from "react";
import ListByType from "./list-by-type";
import Pokemon from "./Pokemon";
import Arena from "./Arena";
import PokemonService from "../lib/pokemon-service";
import HttpClient from "../lib/http-client";
import "./development.css";

class Development extends Component {
  constructor(props) {
    super(props);
    this.pokemonService = new PokemonService(new HttpClient());
    this.state = {
      inputValue: "",
      mob1: { name: "Ian", sprites: {} }
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    const pokemon = await this.pokemonService.byName(this.state.inputValue);
    this.setState(
      Object.assign({}, this.state, {
        mob1: pokemon
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
        <div className="title">Search Pokemon by Name</div>
        <input
          type="text"
          onChange={this.handleSearchChange}
          name="pokemon-name"
        />
        <button onClick={this.handleSubmit}>Search</button>
        <div>{this.state.pokemonName}</div>
        <img className="pokemon-sprite" src={this.state.pokemonImageUrl} />
        <Pokemon
          name={this.state.mob1.name}
          url={this.state.mob1.sprites.front_default}
        />
        <hr />
        <ListByType />
        <hr />
        <Arena mob1Name="snorlax" mob2Name="squirtle" />
      </div>
    );
  }
}

export default Development;
