import React, { Component } from "react";
import { connect } from "react-redux";
import { setActive } from "../../actions";
import { bindActionCreators } from "redux";
import { NavLink } from "react-router-dom";
import "./HomePage.scss";

export class HomePage extends Component {

  render() {
    return (
      <main className="home-page">
        <div className="home-page-image">
          <img src="./images/djSmall.jpg"/>
        </div>
        <NavLink to="/write" className="home-page-write-btn">
          Write<span className="home-page-write-btn-icon">+</span>
        </NavLink>
        <section className="home-page-lyrics-wrapper" />
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
