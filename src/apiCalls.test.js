import { fetchRhymes } from "./apiCalls.js";

describe("apiCalls", () => {
  describe("fetchRhymes", () => {
    let word;
    let mockRhymesResponse;

    beforeEach(() => {
      word = "dog";
      mockRhymesResponse = [{ word: "hog" }, { word: "bog" }];

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockRhymesResponse)
        });
      });
    });

    it("should be called with correct params", () => {
      const expected = `https://api.datamuse.com/words?rel_rhy=${word}`;
      fetchRhymes(word);
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it("should return an error if status is not ok", async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      await expect(fetchRhymes()).rejects.toEqual(
        Error("There was an error getting your rhymes.")
      );
    });
  });
});
