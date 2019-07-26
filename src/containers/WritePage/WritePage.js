import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTitle } from "../../actions";
import { bindActionCreators } from "redux";
import Bar from "../Bar/Bar";
import RhymeBox from "../RhymeBox/RhymeBox";
import "./WritePage.scss";

export class WritePage extends Component {
  state = {
    title: ""
  };

  handleKeyDown = async e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      await this.props.updateTitle(this.state.title);
      localStorage.setItem("lyrics", JSON.stringify(this.props.lyrics));
    }
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  }

  renderBars = () => {
    const activeLyric = this.props.lyrics.find(lyric => lyric.active === true);
    const allBars = activeLyric.bars.map((bar, index) => {
      return (
        <Bar
          key={index + 1}
          number={index + 1}
          text={bar.text}
          id={bar.id}
          active={bar.active}
        />
      );
    });
    return (
      <section className="write-page-bars-wrapper">
        {!(activeLyric.title.length > 0) && (
          <form className="title-form">
            <input
              type="text"
              name="title"
              value={this.state.title}
              className="title-input"
              placeholder="Enter title"
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            />
          </form>
        )}
        {activeLyric.title.length > 0 && (
          <h2 className="lyric-title">{activeLyric.title}</h2>
        )}
        {allBars}
      </section>
    );
  };

  render() {
    const activeLyric = this.props.lyrics.find(
      lyric => lyric.active === true
    );
    return (
      <main className="write-page">
        {this.props.lyrics.length > 0 && this.renderBars()}
        <RhymeBox />
      </main>
    );
  }
}

export const mapStateToProps = state => ({
  lyrics: state.lyrics
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateTitle }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WritePage);
