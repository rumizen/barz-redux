import React, { Component } from "react";
import { connect } from "react-redux";
import { getRhymes, updateLyrics, addBar, setLyrics } from "../../actions";
import { fetchRhymes } from "../../apiCalls";
import { bindActionCreators } from "redux";
import "./Bar.scss";

export class Bar extends Component {
  state = {
    text: "",
    id: 0
  };

  componentDidMount() {
    this.setState({ text: this.props.text })
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
    this.props.updateLyrics(this.state.id, this.state.text);
    localStorage.setItem('lyrics', JSON.stringify(this.props.lyrics));
  };

  handleSelect = async () => {
    const selection = window.getSelection().toString();
    const word = await fetchRhymes(selection);
    this.props.getRhymes(word);
  };

  render() {
    return (
      <article className="bar-wrapper">
        <p className="bar-number">{this.props.number}</p>
        <input
          className="bar-input"
          id={this.state.id}
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
  bindActionCreators({ getRhymes, updateLyrics, addBar, setLyrics }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bar);
