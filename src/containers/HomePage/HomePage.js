import React, { Component } from "react";
import { connect } from "react-redux";
import { setActive, setLyrics } from "../../actions";
import { bindActionCreators } from "redux";
import Lyric from "../Lyric/Lyric";
import "./HomePage.scss";
import PropTypes from "prop-types";

export class HomePage extends Component {
  componentDidMount() {
    localStorage.setItem("barzLyrics", JSON.stringify(this.props.lyrics));
  }

  goToWritePage = e => {
    const sectionId = Math.random();
    const newLyric = {
      title: "",
      date: new Date().toLocaleDateString("en-US"),
      id: Date.now(),
      active: true,
      sections: [
        {
          title: "Verse",
          id: sectionId,
          bars: [{ id: Date.now(), text: "", sectionId: sectionId }]
        }
      ]
    };
    localStorage.setItem(
      "barzLyrics",
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
      ))
      .reverse();

    return (
      <main className="home-page">
        <img
          className="home-page-main-img"
          src="./images/djSmall.jpg"
          alt="a DJ on his turntable with a spotlight shining on him and a background of red stage lights"
        />
        <section className="home-page-interface">
          <div
            id="createNewLyric"
            className="home-page-write-btn"
            onClick={this.goToWritePage}
          >
            <p id="createNewLyric">New Lyrics</p>
            <img
              id="createNewLyric"
              className="home-page-write-btn-icon"
              src="./images/plusBlack.svg"
              alt="plus sign icon"
            />
          </div>
          <h3 className="recent-lyrics">Recent Lyrics</h3>
          <section className="home-page-lyrics-wrapper">{allLyrics}</section>
        </section>
      </main>
    );
  }
}

HomePage.propTypes = {
  lyrics: PropTypes.array,
  setActive: PropTypes.func,
  setLyrics: PropTypes.func,
  history: PropTypes.object
};

export const mapStateToProps = state => ({
  lyrics: state.lyrics
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ setActive, setLyrics }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
