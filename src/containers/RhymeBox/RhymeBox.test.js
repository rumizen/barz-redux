import React from "react";
import { RhymeBox, mapStateToProps } from "./RhymeBox";
import { shallow } from "enzyme";

describe("RhymeBox", () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<RhymeBox rhymes={[{ word: "mockWord" }]} />);
    instance = wrapper.instance();
  });

  it.skip("should match the snapshot", () => {
    global.getSelection = () => {
      return "MockSelection";
    }
    expect(wrapper).toMatchSnapshot();
  });

  describe("mapStateToProps", () => {
    it.skip("should return an array of lyrics objects", () => {
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
        rhymes: [{ word: "mockWord" }]
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

});
