import React, { Component } from "react";
import { connect } from "react-redux";
import { setActive } from "../actions";
import { bindActionCreators } from "redux";
import "./HomePage.scss";

export class HomePage extends Component {

  render() {
    return (
      <main className="main-page">
        <div className="main-page-image"></div>
        <section className="main-page-lyrics-wrapper"></section>
        <button className="main-page-write-btn">
          Write<span className="main-page-write-btn-icon">+</span>
        </button>
      </main>
    );
  };
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
