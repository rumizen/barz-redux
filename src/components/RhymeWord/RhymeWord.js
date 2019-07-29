import React, { Component } from 'react';
import './RhymeWord.scss';
import { CopyToClipboard } from "react-copy-to-clipboard";

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

export default RhymeWord;