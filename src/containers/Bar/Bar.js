import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getRhymes,
  updateLyrics,
  addBar,
  setLyrics,
  updateBarActive
} from "../../actions";
import { fetchRhymes } from "../../apiCalls";
import { bindActionCreators } from "redux";
import "./Bar.scss";

export class Bar extends Component {
  state = {
    text: "",
    id: 0,
    active: false
  };

  componentDidMount() {
    const { id, text, active } = this.props;
    this.setState({ text, id, active });
  }
  
  handleChange = e => {
    const { id, text } = this.state;
    this.setState({ text: e.target.value });
    this.props.updateLyrics(id, text);
    localStorage.setItem('lyrics', JSON.stringify(this.props.lyrics));
  };
  
  handleSelect = async () => {
    const selection = window.getSelection().toString();
    const word = await fetchRhymes(selection);
    this.props.getRhymes(word);
  };
  
  handleKeyDown = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.props.updateBarActive(this.state.id, false);
      this.props.addBar({ id: this.state.id + 1, text: "", active: true });
    }
  }

  render() {
    return (
      <article className="bar-wrapper">
        <p className="bar-number">{this.props.number}</p>
        {this.state.active &&
        <input
          autoFocus={this.state.active}
          className="bar-input"
          id={this.state.id}
          type="text"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
          onKeyDown={this.handleKeyDown}
        />}
        {!this.state.active &&
        <input
          autoFocus={this.state.active}
          className="bar-input"
          id={this.state.id}
          type="text"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
          onKeyDown={this.handleKeyDown}
        />}
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
  bindActionCreators({ getRhymes, updateLyrics, addBar, setLyrics, updateBarActive }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bar);
