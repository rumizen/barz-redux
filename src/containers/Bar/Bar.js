import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getRhymes,
  updateLyrics,
  addBar,
  updateBarActive,
  deleteBar
} from "../../actions";
import { fetchRhymes } from "../../apiCalls";
import { bindActionCreators } from "redux";
import "./Bar.scss";
import PropTypes from "prop-types";

export class Bar extends Component {
  state = {
    text: "",
    id: 0,
    active: false
  };

  componentWillReceiveProps(nextProps){
    if(nextProps.text !== this.props.text) {
      this.setState({ text: nextProps.text });
    }
    if(nextProps.id !== this.props.id) {
      this.setState({ id: nextProps.id });
    }
    if(nextProps.active !== this.props.active) {
      this.setState({ active: nextProps.active });
    }
  };

  componentDidMount() {
    const { id, text, active } = this.props;
    this.setState({ text, id, active });
  }

  handleChange = async e => {
    await this.setState({ text: e.target.value });
    this.props.updateLyrics(this.state.id, this.state.text);
    localStorage.setItem("lyrics", JSON.stringify(this.props.lyrics));
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
      this.props.addBar({
        id: Date.now(),
        text: "",
        active: true
      });
    }
  };

  deleteBar = async () => {
    await this.props.deleteBar(this.state.id);
    await localStorage.setItem("lyrics", JSON.stringify(this.props.lyrics));
  };

  render() {
    return (
      <article className="bar-wrapper">
        <p className="bar-number">{this.props.number}</p>
        {this.state.active && (
          <input
            autoComplete="off"
            autoFocus={this.state.active}
            className="bar-input"
            id={this.state.id}
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
            onKeyDown={this.handleKeyDown}
          />
        )}
        {!this.state.active && (
          <input
            autoComplete="off"
            autoFocus={this.state.active}
            className="bar-input"
            id={this.state.id}
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
            onKeyDown={this.handleKeyDown}
          />
        )}
        <button className="bar-close" onClick={this.deleteBar}>
          &#x2715;
        </button>
      </article>
    );
  }
};

Bar.propTypes = {
  lyrics: PropTypes.array,
  rhymes: PropTypes.array,
  updateLyrics: PropTypes.func,
  getRhymes: PropTypes.func,
  addBar: PropTypes.func,
  updateBarActive: PropTypes.func,
  deleteBar: PropTypes.func,
  text: PropTypes.string,
  id: PropTypes.number,
  active: PropTypes.bool
};

export const mapStateToProps = state => ({
  lyrics: state.lyrics,
  rhymes: state.rhymes
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { getRhymes, updateLyrics, addBar, updateBarActive, deleteBar },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bar);
