import React, { Component } from "react";
import { connect } from "react-redux";
import { setActive, setLyrics } from "../../actions";
import { bindActionCreators } from "redux";
import "./HomePage.scss";

export class HomePage extends Component {

  componentDidMount() {
    localStorage.setItem("lyrics", JSON.stringify(this.props.lyrics));
  }

  handleClick = () => {
    const newLyric = {
      title: "",
      date: new Date().toLocaleDateString("en-US"),
      id: this.props.lyrics.length,
      active: true,
      bars: [{ id: 1, text: "" }]
    };
    localStorage.setItem("lyrics", JSON.stringify([ ...this.props.lyrics, newLyric]));
    this.props.setLyrics([...this.props.lyrics, newLyric]);
    this.props.setActive(newLyric.id);
    this.props.history.push(`/write`);
  };

  render() {
    const allLyrics = this.props.lyrics.map(lyric => {
      return (
        <div key={lyric.id} className="lyric">
          <p className="lyric-title">{lyric.title}</p>
          <p className="lyric-date">{new Date().toLocaleDateString("en-US")}</p>
        </div>
      );
    });

    return (
      <main className="home-page">
        <div className="home-page-image">
          <img
            src="./images/djSmall.jpg"
            alt="a DJ on his turntable with a spotlight shining on him and a background of red stage lights"
          />
        </div>
        <button
          to="/write"
          className="home-page-write-btn"
          onClick={this.handleClick}
        >
          Write<span className="home-page-write-btn-icon">+</span>
        </button>
        <section className="home-page-lyrics-wrapper">{allLyrics}</section>
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
