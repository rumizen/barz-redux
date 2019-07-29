import React from "react";
import { shallow } from "enzyme";
import RhymeWord from './RhymeWord';
import { CopyToClipboard } from "react-copy-to-clipboard";

describe("RhymeWord", () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<RhymeWord text="Word" />);
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a default state", () => {
    expect(instance.state).toEqual({ copied: false });
  });
});
