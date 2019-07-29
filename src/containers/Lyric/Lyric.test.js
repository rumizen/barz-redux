import React from "react";
import { Lyric, mapStateToProps, mapDispatchToProps } from "./Lyric";
import {
  deleteLyric,
  setActive,
  setDefaultActive
} from "../../actions";
import { shallow } from "enzyme";

describe("Lyric", () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(
      <Lyric date="11/25/1989" title="mockTitle" id={1} />
    );
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a default state", () => {
    expect(instance.state).toEqual({ deleteWindow: false });
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
    it("calls dispatch with a deleteLyric action when deleteLyric is called", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = deleteLyric({
        id: 1
      });
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.deleteLyric({
        id: 1
      });
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it("calls dispatch with a setActive action when goToWritePage is called", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setActive({
        id: 1
      });
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setActive({
        id: 1
      });
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it("calls dispatch with a setDefaultActive action when deleteLyric is called", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setDefaultActive();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setDefaultActive();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
