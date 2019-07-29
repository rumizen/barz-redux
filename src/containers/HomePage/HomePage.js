import React, { Component } from "react";
import { connect } from "react-redux";
import { setActive, setLyrics } from "../../actions";
import { bindActionCreators } from "redux";
import Lyric from "../Lyric/Lyric";
import "./HomePage.scss";

export class HomePage extends Component {

  componentDidMount() {
    localStorage.setItem("lyrics", JSON.stringify(this.props.lyrics));
  }

  goToWritePage = e => {
    const newLyric = {
      title: "",
      date: new Date().toLocaleDateString("en-US"), 
      id: Date.now(),
      active: true,
      bars: [{ id: Date.now(), text: "" }]
    };
    localStorage.setItem(
      "lyrics",
      JSON.stringify([...this.props.lyrics, newLyric])
    );
    this.props.setLyrics([...this.props.lyrics, newLyric]);
    this.props.setActive(newLyric.id);
    this.props.history.push(`/write`);
  };

  render() {
    const allLyrics = this.props.lyrics
      .map(lyric => (
        <Lyric
          key={lyric.id}
          id={lyric.id}
          title={lyric.title}
          date={lyric.date}
        />
      )).reverse();

    return (
      <main className="home-page">
        <div className="home-page-image">
          <img
            src="./images/djSmall.jpg"
            alt="a DJ on his turntable with a spotlight shining on him and a background of red stage lights"
          />
        </div>
        <div
          id="createNewLyric"
          className="home-page-write-btn"
          onClick={this.goToWritePage}
        >
          <p id="createNewLyric">New Lyrics</p>
          <img
            id="createNewLyric"
            className="home-page-write-btn-icon"
            src="./images/plus.svg"
            alt="plus sign icon"
          />
        </div>
        <h3 className="recent-lyrics">Recent Lyrics</h3>
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
  bindActionCreators({ setActive, setLyrics }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
