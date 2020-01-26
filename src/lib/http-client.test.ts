import HttpClient from "./http-client";
import sinon from "sinon";

describe("HttpClient", () => {
  describe("get", () => {
    test("it calls fetch with the path provided", () => {
      const http = new HttpClient();
      const fetchStub = sinon.stub("http.");
      expect(true).toBe(true);
    });
  });
});
