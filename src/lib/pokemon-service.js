const API_BASE_URL = "https://pokeapi.co/api/v2";

export default class PokemonService {
  constructor(HttpClient) {
    this.http = new HttpClient();
  }

  byName(name) {
    return this.http.get(`${API_BASE_URL}/pokemon/${name}`);
  }

  byType(type) {
    return this.http.get(`${API_BASE_URL}/type/${type}`);
  }
}

// baseUrl(requestPath) {
//   return "https://pokiapi.co/api/v2/" + requestPath;
// }
