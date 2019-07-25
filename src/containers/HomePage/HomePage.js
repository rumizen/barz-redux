import React, { Component } from "react";
import { connect } from "react-redux";
import { setActive } from "../actions";
import { bindActionCreators } from "redux";
import "./HomePage.scss";

export class HomePage extends Component {
  state = {};

  render() {
    return (
      <section className="main-page">
        <div className="main-page-image" />
        <div className="main-page-lyrics-list" />
        <button className="main-page-write-btn">
          Write<span className="main-page-write-btn-icon">+</span>
        </button>
      </section>
    );
  }
};

export const mapStateToProps = state => ({
  lyrics: state.lyrics
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ setActive }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
