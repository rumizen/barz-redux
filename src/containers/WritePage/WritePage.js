import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTitle } from "../../actions";
import { bindActionCreators } from "redux";
import Bar from "../Bar/Bar";
import RhymeBox from "../RhymeBox/RhymeBox";
import "./WritePage.scss";

export class WritePage extends Component {
  state = {
    title: "",
    editTitle: false
  };

  componentDidMount() {
    const activeLyric = this.props.lyrics.find(lyric => lyric.active === true);
    this.setState({ title: activeLyric.title, editTitle: !(activeLyric.title.length > 0)});
  }

  handleKeyDown = async e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      await this.props.updateTitle(this.state.title);
      localStorage.setItem("lyrics", JSON.stringify(this.props.lyrics));
      this.setState({ editTitle: false })
    }
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  }

  editTitle = () => {
    this.setState({ editTitle: true });
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
        {this.state.editTitle && (
          <form className="title-form">
            <input
              autoFocus={true}
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
        {!this.state.editTitle && (
          <h2 className="write-page-lyric-title" onClick={this.editTitle}>
            {activeLyric.title}
          </h2>
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
        <div className="background-img-wrapper">
          <img src="./images/twoRappersMed.jpg" alt="two rappers performing intensely on stage" />
        </div>
        {this.props.lyrics.length > 0 && activeLyric && this.renderBars()}
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
