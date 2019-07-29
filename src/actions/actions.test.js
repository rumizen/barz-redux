import * as actions from "./index.js";

describe("actions", () => {
  it("setActive should have a type of SET_ACTIVE", () => {
    const id = 1;

    const expected = {
      type: "SET_ACTIVE",
      id: 1
    };

    const result = actions.setActive(id);

    expect(result).toEqual(expected);
  });

  it("updateLyrics should have a type of UPDATE_LYRICS", () => {
    const barId = 1;
    const text = "some text";
    const expected = {
      type: "UPDATE_LYRICS",
      barId: 1,
      text: "some text"
    };

    const result = actions.updateLyrics(barId, text);

    expect(result).toEqual(expected);
  });

  it("deleteLyric should have a type of DELETE_LYRIC", () => {
    const expected = {
      type: "DELETE_LYRIC",
      id: 1
    };

    const result = actions.deleteLyric(1);

    expect(result).toEqual(expected);
  });

  it("addBar should have a type of ADD_BAR", () => {
    const expected = {
      type: "ADD_BAR",
      newBar: { id: 1, text: "hello"}
    };

    const result = actions.addBar({ id: 1, text: "hello" });

    expect(result).toEqual(expected);
  });

  it("getRhymes should have a type of GET_RHYMES", () => {
    const expected = {
      type: "GET_RHYMES",
      word: [{ word: "something"}, { word: "another"}]
    };

    const result = actions.getRhymes([
      { word: "something" },
      { word: "another" }
    ]);

    expect(result).toEqual(expected);
  });

  it("setLyrics should have a type of SET_LYRICS", () => {
    const expected = {
      type: "SET_LYRICS",
      lyrics: [{ title: "rando" }]
    };

    const result = actions.setLyrics([{ title: "rando" }]);

    expect(result).toEqual(expected);
  });

  it("updateBarActive should have a type of UPDATE_BAR_ACTIVE", () => {
    const expected = {
      type: "UPDATE_BAR_ACTIVE",
      barId: 1,
      active: true
    };

    const result = actions.updateBarActive(1, true);

    expect(result).toEqual(expected);
  });

  it("updateTitle should have a type of UPDATE_TITLE", () => {
    const expected = {
      type: "UPDATE_TITLE",
      title: "New Title"
    };

    const result = actions.updateTitle("New Title");

    expect(result).toEqual(expected);
  });

  it("deleteBar should have a type of DELETE_BAR", () => {
    const expected = {
      type: "DELETE_BAR",
      id: 1
    };

    const result = actions.deleteBar(1);

    expect(result).toEqual(expected);
  });

  it("setDefaultActive should have a type of SET_DEFAULT_ACTIVE", () => {
    const expected = {
      type: "SET_DEFAULT_ACTIVE",
    };

    const result = actions.setDefaultActive();

    expect(result).toEqual(expected);
  });
});
