import { rhymesReducer } from "./rhymesReducer";

describe("rhymesReducer", () => {
  
  it("should return the initial state", () => {
    const expected = [];
    const result = rhymesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should set the array of rhymes when called", () => {
    const testAction = {
      type: "GET_RHYMES",
      word: [{ word: "one" }, { word: "two" }]
    };
    const expected = [{ word: "one" }, { word: "two" }];
    const result = rhymesReducer([], testAction);
    expect(result).toEqual(expected);
  });
});
