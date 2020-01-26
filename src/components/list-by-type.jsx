import React, { Component } from "react";
import PokemonService from "../lib/pokemon-service";
import HttpClient from "../lib/http-client";
import "./list-by-type.css";

class ListByType extends Component {
  constructor(props) {
    super(props);
    this.pokemonService = new PokemonService(HttpClient);
    this.state = {
      pokemonOfType: props.pokemonOfType || []
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  async handleSelectChange(event) {
    const inputValue = event.target.value;
    const pokemonOfType = await this.pokemonService.byType(inputValue);
    console.log(JSON.stringify(pokemonOfType.pokemon));
    this.setState(
      Object.assign({}, this.state, {
        pokemonOfType: pokemonOfType.pokemon,
        selectedType: inputValue
      })
    );
  }

  render() {
    return (
      <div className="list-by-type">
        <h2>Search By Pokemon Type</h2>
        <p>{this.state.selectedType}</p>

        <label>Choose a type:</label>

        <select name="pets" id="pet-select" onChange={this.handleSelectChange}>
          <option value="water">Water</option>
          <option value="dark">Dark</option>
          <option value="fire">Fire</option>
          <option value="fighting">Fighting</option>
          <option value="dragon">Dragon</option>
          <option value="fairy">Fairy</option>
        </select>

        <table className="list-by-type__table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {this.state.pokemonOfType.map((pokemon, index) => (
              <tr key={index}>
                <td>{pokemon.pokemon.name}</td>
                <td>{this.state.selectedType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListByType;
