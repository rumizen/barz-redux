import React from "react";
import { App, mapDispatchToProps, mapStateToProps } from "./App";
import { shallow } from "enzyme";
import { setLyrics } from "../../actions";
import * as apiCalls from "../../apiCalls";

jest.mock("../../apiCalls", () => ({
  fetchRhymes: jest.fn().mockImplementation(() => {
    return Promise.resolve({
      word: "mockWord"
    });
  })
}));

describe("App", () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<App />);
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("mapStateToProps", () => {
    it("should return an array of lyrics objects", () => {
      const mockState = {
        lyrics: [
          {
            title: "mockLyric",
            id: 1,
            date: "11/25/1989",
            active: true,
            bars: [{ id: 1, text: "mockBar" }]
          }
        ],
        rhymes: [{ word: "mockWord" }]
      };
      const expected = {
        lyrics: [
          {
            title: "mockLyric",
            id: 1,
            date: "11/25/1989",
            active: true,
            bars: [{ id: 1, text: "mockBar" }]
          }
        ]
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
});
