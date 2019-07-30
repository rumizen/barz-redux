import React, { Component } from 'react';
import './RhymeWord.scss';
import { CopyToClipboard } from "react-copy-to-clipboard";
import PropTypes from "prop-types";

export class RhymeWord extends Component {
  state = {
    copied: false
  }

  handleClick = () => {
    this.setState({ copied: true });
  }

  render() {
    return (
      <CopyToClipboard text={this.props.text}>
        <div onClick={this.handleClick} className="rhyme-word">
          <p>{this.props.text}</p>
          {this.state.copied && <p className="copied-message">Copied to clipboard</p>}
        </div>
      </CopyToClipboard>
    );
  }
};

RhymeWord.propTypes = {
  text: PropTypes.string
}

export default RhymeWord;