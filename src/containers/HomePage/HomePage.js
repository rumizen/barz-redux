import React, { Component } from "react";
import { connect } from "react-redux";
import { setActive } from "../../actions";
import { bindActionCreators } from "redux";
import { NavLink } from "react-router-dom";
import "./HomePage.scss";

export class HomePage extends Component {
  // componentDidMount() {
    // localStorage.setItem(
    //   "lyrics",
    //   JSON.stringify([
    //     {
    //       title: "sample1",
    //       id: 1,
    //       active: true,
    //       bars: [
    //         { id: 1, text: "yo yo yo yo yo", active: false},
    //         { id: 2, text: "dude dude dude dude", active: false},
    //         { id: 3, text: "i dont like your girlfriend", active: false},
    //         { id: 4, text: "hey hey hey hey", active: false},
    //         { id: 5, text: "you you you you you", active: false},
    //         { id: 6, text: "i think you need a new one", active: false}
    //       ]
    //     },
    //     {
    //       title: "sample2",
    //       id: 2,
    //       active: false,
    //       bars: [
    //         { id: 1, text: "yo yo yo yo yo", active: false},
    //         { id: 2, text: "dude dude dude dude", active: false},
    //         { id: 3, text: "i dont like your girlfriend", active: false},
    //         { id: 4, text: "hey hey hey hey", active: false},
    //         { id: 5, text: "you you you you you", active: false},
    //         { id: 6, text: "i think you need a new one", active: false}
    //       ]
    //     },
    //     {
    //       title: "sample3",
    //       id: 3,
    //       active: false,
    //       bars: [
    //         { id: 1, text: "yo yo yo yo yo", active: false},
    //         { id: 2, text: "dude dude dude dude", active: false},
    //         { id: 3, text: "i dont like your girlfriend", active: false},
    //         { id: 4, text: "hey hey hey hey", active: false},
    //         { id: 5, text: "you you you you you", active: false},
    //         { id: 6, text: "i think you need a new one", active: false}
    //       ]
    //     }
    //   ])
    // );
    // const lyrics = JSON.parse(localStorage.getItem("lyrics")) || [];
    // this.props.setLyrics(lyrics);
  // }

  render() {

    const allLyrics = this.props.lyrics.map(lyric => {
      return (
        <div key={lyric.id} className="lyric">
          <p className="lyric-title">{lyric.title}</p>
          <p className="lyric-id">{lyric.id}</p>
        </div>
      );
    });

    return (
      <main className="home-page">
        <div className="home-page-image">
          <img src="./images/djSmall.jpg" alt="a DJ on his turntable with a spotlight shining on him and a background of red stage lights" />
        </div>
        <NavLink to="/write" className="home-page-write-btn">
          Write<span className="home-page-write-btn-icon">+</span>
        </NavLink>
        <section className="home-page-lyrics-wrapper">
          {allLyrics}
        </section>
      </main>
    );
  }
}

export const mapStateToProps = state => ({
  lyrics: state.lyrics
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ setActive }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
