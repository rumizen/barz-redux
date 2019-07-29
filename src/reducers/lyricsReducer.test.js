import { lyricsReducer } from "./lyricsReducer";

describe("lyricsReducer", () => {
  it("should return the initial state", () => {
    const expected = [];
    const result = lyricsReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should set the array of lyrics on page load", () => {
    const testAction = {
      type: "SET_LYRICS",
      lyrics: [{ title: "one" }, { title: "two" }]
    };
    const expected = [{ title: "one" }, { title: "two" }];
    const result = lyricsReducer([], testAction);
    expect(result).toEqual(expected);
  });

  it("should set the active lyric", () => {
    const mockState = [
      { title: "one", id: 1, active: false },
      { title: "two", id: 2, active: false }
    ];
    const testAction = {
      type: "SET_ACTIVE",
      id: 1
    };
    const expected = [
      { title: "one", id: 1, active: true },
      { title: "two", id: 2, active: false }
    ];
    const result = lyricsReducer(mockState, testAction);
    expect(result).toEqual(expected);
  });

  it("should update a lyric title", () => {
    const mockState = [
      { title: "one", id: 1, active: true },
      { title: "two", id: 2, active: false }
    ];
    const testAction = {
      type: "UPDATE_TITLE",
      title: "New Title"
    };
    const expected = [
      { title: "New Title", id: 1, active: true },
      { title: "two", id: 2, active: false }
    ];
    const result = lyricsReducer(mockState, testAction);
    expect(result).toEqual(expected);
  });

  it("should update a bar in a lyric", () => {
    const mockState = [
      { title: "one", id: 1, active: true, bars: [{ id: 1, text: "unchanged" }] },
      { title: "two", id: 2, active: false }
    ];
    const testAction = {
      type: "UPDATE_LYRICS",
      text: "changed",
      barId: 1
    };
    const expected = [
      {
        title: "one",
        id: 1,
        active: true,
        bars: [{ id: 1, text: "changed" }]
      },
      { title: "two", id: 2, active: false }
    ];
    const result = lyricsReducer(mockState, testAction);
    expect(result).toEqual(expected);
  });

  it("should add a bar to a lyric", () => {
    const mockState = [
      {
        title: "one",
        id: 1,
        active: true,
        bars: [{ id: 1, text: "unchanged" }]
      },
      { title: "two", id: 2, active: false }
    ];
    const testAction = {
      type: "ADD_BAR",
      newBar: { id: 4, text: "its a new one" },
    };
    const expected = [
      {
        title: "one",
        id: 1,
        active: true,
        bars: [{ id: 1, text: "unchanged" }, { id: 4, text: "its a new one" }]
      },
      { title: "two", id: 2, active: false }
    ];
    const result = lyricsReducer(mockState, testAction);
    expect(result).toEqual(expected);
  });

  it("should update the active bar in a lyric", () => {
    const mockState = [
      {
        title: "one",
        id: 1,
        active: true,
        bars: [{ id: 1, text: "unchanged", active: false }]
      },
      { title: "two", id: 2, active: false }
    ];
    const testAction = {
      type: "UPDATE_BAR_ACTIVE",
      barId: 1,
      active: true
    };
    const expected = [
      {
        title: "one",
        id: 1,
        active: true,
        bars: [{ id: 1, text: "unchanged", active: true }]
      },
      { title: "two", id: 2, active: false }
    ];
    const result = lyricsReducer(mockState, testAction);
    expect(result).toEqual(expected);
  });

  it("should delete a bar in a lyric", () => {
    const mockState = [
      {
        title: "one",
        id: 1,
        active: true,
        bars: [
          { id: 1, text: "unchanged", active: false },
          { id: 2, text: "something", active: false }
        ]
      },
      { title: "two", id: 2, active: false }
    ];
    const testAction = {
      type: "DELETE_BAR",
      id: 2,
    };
    const expected = [
      {
        title: "one",
        id: 1,
        active: true,
        bars: [{ id: 1, text: "unchanged", active: false }]
      },
      { title: "two", id: 2, active: false }
    ];
    const result = lyricsReducer(mockState, testAction);
    expect(result).toEqual(expected);
  });

  it("should delete a lyric", () => {
    const mockState = [
      {
        title: "one",
        id: 1,
        active: true,
        bars: [{ id: 1, text: "unchanged", active: false }]
      },
      { title: "two", id: 2, active: false }
    ];
    const testAction = {
      type: "DELETE_LYRIC",
      id: 2
    };
    const expected = [
      {
        title: "one",
        id: 1,
        active: true,
        bars: [{ id: 1, text: "unchanged", active: false }]
      }
    ];
    const result = lyricsReducer(mockState, testAction);
    expect(result).toEqual(expected);
  });
});
