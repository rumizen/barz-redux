import React, { Component } from "react";
import { connect } from "react-redux";
import { setActive, setLyrics } from "../../actions";
import { bindActionCreators } from "redux";
import { NavLink } from "react-router-dom";
import "./HomePage.scss";

export class HomePage extends Component {
  componentDidMount() {
    // localStorage.setItem(
    //   "lyrics",
    //   JSON.stringify([
    //     {
    //       title: "sample1",
    //       id: 1,
    //       active: true,
    //       bars: [
    //         { id: 1, text: "yo yo yo yo yo" },
    //         { id: 2, text: "dude dude dude dude" },
    //         { id: 3, text: "i dont like your girlfriend" },
    //         { id: 4, text: "hey hey hey hey" },
    //         { id: 5, text: "you you you you you" },
    //         { id: 6, text: "i think you need a new one" }
    //       ]
    //     },
    //     {
    //       title: "sample2",
    //       id: 2,
    //       active: false,
    //       bars: [
    //         { id: 1, text: "yo yo yo yo yo" },
    //         { id: 2, text: "dude dude dude dude" },
    //         { id: 3, text: "i dont like your girlfriend" },
    //         { id: 4, text: "hey hey hey hey" },
    //         { id: 5, text: "you you you you you" },
    //         { id: 6, text: "i think you need a new one" }
    //       ]
    //     },
    //     {
    //       title: "sample3",
    //       id: 3,
    //       active: false,
    //       bars: [
    //         { id: 1, text: "yo yo yo yo yo" },
    //         { id: 2, text: "dude dude dude dude" },
    //         { id: 3, text: "i dont like your girlfriend" },
    //         { id: 4, text: "hey hey hey hey" },
    //         { id: 5, text: "you you you you you" },
    //         { id: 6, text: "i think you need a new one" }
    //       ]
    //     }
    //   ])
    // );
    const lyrics = JSON.parse(localStorage.getItem("lyrics")) || [];
    this.props.setLyrics(lyrics);
  }

  renderLyrics = () => {
    return this.props.lyrics.map(lyric => {
      return (
        <div className="lyric">
          <p className="lyric-title">{lyric.title}</p>
          <p className="lyric-id">{lyric.id}</p>
        </div>
      );
    });
  };

  render() {
    return (
      <main className="home-page">
        <div className="home-page-image">
          <img src="./images/djSmall.jpg" />
        </div>
        <NavLink to="/write" className="home-page-write-btn">
          Write<span className="home-page-write-btn-icon">+</span>
        </NavLink>
        <section className="home-page-lyrics-wrapper">
          {this.props.lyrics.length > 0 && this.renderLyrics()}
        </section>
      </main>
    );
  }
}

export const mapStateToProps = state => ({
  lyrics: state.lyrics
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ setActive, setLyrics }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
