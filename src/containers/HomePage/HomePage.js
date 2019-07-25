import React, { Component } from "react";
import { connect } from "react-redux";
import { setActive } from "../../actions";
import { bindActionCreators } from "redux";
import NavBar from '../../components/NavBar/NavBar';
import "./HomePage.scss";

export class HomePage extends Component {

  render() {
    return (
      <main className="home-page">
        <NavBar />
        <div className="home-page-image"></div>
        <section className="home-page-lyrics-wrapper"></section>
        <button className="home-page-write-btn">
          Write<span className="home-page-write-btn-icon">+</span>
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
