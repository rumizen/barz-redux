import React from "react";
import { Bar, mapStateToProps, mapDispatchToProps } from "./Bar";
import {
  getRhymes,
  updateLyrics,
  addBar,
  setLyrics,
  updateBarActive,
  deleteBar
} from "../../actions";
import { shallow } from "enzyme";

describe("Bar", () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<Bar text="" id={0} active={false} />);
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have default state", () => {
    expect(instance.state).toEqual({ text: "", id: 0, active: false });
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
        ],
        rhymes: [{ word: "mockWord" }]
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe("mapDispatchToProps", () => {
    it("calls dispatch with a updateLyrics action when handleChange is called", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = updateLyrics(
        {
          barId: 1,
          text: "mockTitle",
        }
      );
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.updateLyrics(
        {
          barId: 1,
          text: "mockTitle",
        }
      );
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it("calls dispatch with a getRhymes action when handleSelect is called", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getRhymes([
        { word: "mockWord1" },
        { word: "mockWord2" }
      ]);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getRhymes([{ word: "mockWord1" }, { word: "mockWord2" }]);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it("calls dispatch with a addBar action when handleKeyDown is called", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addBar({
        id: Date.now(),
        text: "",
        active: true
      });
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addBar({
        id: Date.now(),
        text: "",
        active: true
      });
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it("calls dispatch with a updateBarActive action when handleKeyDown is called", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = updateBarActive({ barId: 1, active: true });
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.updateBarActive({ barId: 1, active: true });
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it("calls dispatch with a deleteBar action when handleKeyDown is called", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = deleteBar({ id: 1 });
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.deleteBar({ id: 1 });
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
