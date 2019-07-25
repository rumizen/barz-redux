import React, { Component } from "react";
import { connect } from "react-redux";
import { getRhymes, setLyrics, addBar } from "../actions";
import { fetchRhymes } from "../../apiCalls";
import { bindActionCreators } from "redux";
import "./Bar.scss";

export class Bar extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSelect = async () => {
    const selection = window.getSelection().toString();
    const word = await fetchRhymes(selection);
    this.props.getRhymes(word);
  };

  render() {
    return (
      <article className="bar-wrapper">
        <p className="bar-number">#</p>
        <input
          className="bar-input"
          type="text"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        />
        <button className="bar-close">X</button>
      </article>
    );
  }
}

export const mapStateToProps = state => ({
  lyrics: state.lyrics,
  rhymes: state.rhymes
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ getRhymes, setLyrics, addBar }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bar);
