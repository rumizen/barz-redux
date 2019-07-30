import React from "react";
import { HomePage, mapStateToProps, mapDispatchToProps } from "./HomePage";
import { setActive, setLyrics } from "../../actions";
import { shallow } from "enzyme";

describe("HomePage", () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(
      <HomePage history={["/"]} setLyrics={jest.fn()} setActive={jest.fn()} lyrics={[{ title: "mockLyric", id: 1, date: "11/25/1989" }]} />
    );
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should invoke setLyrics when Create New button is clicked", () => {
    wrapper.find(".home-page-write-btn").simulate("click");
    expect(instance.props.setLyrics).toHaveBeenCalled();
  });

  it("should invoke setActive when Create New button is clicked", () => {
    wrapper.find(".home-page-write-btn").simulate("click");
    expect(instance.props.setActive).toHaveBeenCalled();
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

    it("calls dispatch with a setLyrics action when goToWritePage is called", () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setLyrics([
        { title: "mock1" },
        { title: "mock2" }
      ]);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setLyrics([{ title: "mock1" }, { title: "mock2" }]);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
