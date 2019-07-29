import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Lyric.scss";
import {
  deleteLyric,
  setActive,
  setDefaultActive
} from "../../actions";
import { bindActionCreators } from "redux";

export class Lyric extends Component {
  state = {
    deleteWindow: false
  };

  goToWritePage = e => {
    this.props.setActive(parseInt(e.target.id));
    this.props.history.push(`/write`);
  };

  deleteWindow = async e => {
    e.stopPropagation();
    await this.setState({
      deleteWindow: !this.state.deleteWindow
    });
  };

  deleteLyric = async e => {
    e.stopPropagation();
    await this.props.deleteLyric(parseInt(e.target.id));
    await this.props.setDefaultActive();
    localStorage.setItem("lyrics", JSON.stringify(this.props.lyrics));
  };

  render() {
    return (
      <div
        id={this.props.id}
        key={this.props.id}
        className="lyric"
        onClick={this.goToWritePage}
      >
        <div className="lyric-left">
          <p id={this.props.id} className="lyric-title">
            {this.props.title}
          </p>
          <p id={this.props.id} className="lyric-date">
            {this.props.date}
          </p>
        </div>
        {this.state.deleteWindow === false && (
          <button className="delete-btn" onClick={this.deleteWindow}>
            &#x2715;
          </button>
        )}
        {this.state.deleteWindow && (
          <div className="delete-confirm-wrapper">
            <p id={this.props.id}>Delete?</p>
            <button
              className="delete-confrim-yes"
              id={this.props.id}
              onClick={this.deleteLyric}
            >
              Yes
            </button>
            <button
              className="delete-confrim-no"
              onClick={this.deleteWindow}
            >
              No
            </button>
          </div>
        )}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  lyrics: state.lyrics
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { deleteLyric, setActive, setDefaultActive },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Lyric)
);
