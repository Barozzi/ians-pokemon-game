import PokemonService from "./pokemon-service";
import sinon from "sinon";

describe("PokemonService", () => {
  describe("pokemon", () => {
    test("it calls fetch with the path provided", () => {
      const pokemonService = new PokemonService();
      const fetchStub = sinon.stub("http.");
      expect(true).toBe(true);
    });
  });
});
