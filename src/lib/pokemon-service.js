const API_BASE_URL = "https://pokeapi.co/api/v2";

export default class PokemonService {
  constructor(httpClient) {
    this.http = httpClient;
  }

  byName(name) {
    return this.http.get(`${API_BASE_URL}/pokemon/${name}`);
  }

  byType(type) {
    return this.http.get(`${API_BASE_URL}/type/${type}`);
  }
}
