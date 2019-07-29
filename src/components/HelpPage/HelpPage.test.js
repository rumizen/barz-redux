import React from "react";
import HelpPage from "./HelpPage";
import { shallow } from "enzyme";

describe('HelpPage', () => {

  it ('should match the snapshot', () => {
    const wrapper = shallow(<HelpPage />);
    expect(wrapper).toMatchSnapshot();
  });

});
