import React from "react";
import { WritePage, mapStateToProps, mapDispatchToProps } from "./WritePage";
import { updateTitle } from "../../actions";
import { shallow } from "enzyme";

describe("WritePage", () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(
      <WritePage lyrics={[{ title: "mockLyric", id: 1, active: true, date: "11/25/1989", bars: [{ id: 1, text: "awesome" }] }]} />
    );
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a default state", () => {
    expect(instance.state).toEqual({ title: "mockLyric", editTitle: false });
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

  describe("mapDispatchToProps", () => {
    it("calls dispatch with a updateTitle action when handleKeyDown is called", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = updateTitle({
        title: "a title"
      });
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.updateTitle({
        title: "a title"
      });
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
