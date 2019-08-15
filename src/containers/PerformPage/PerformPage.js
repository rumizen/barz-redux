import React, { Component } from "react";
import { connect } from "react-redux";
import "./PerformPage.scss";

export class PerformPage extends Component {
  state = {
    scroll: false
  };

  handleClick = () => {
    if (!this.state.scroll) {
      setTimeout(() => {
        this.setState({ scroll: true });
      }, 2000);
    } else {
      this.setState({ scroll: false });
    }
  };

  renderAllBars = () => {
    const activeLyric = this.props.lyrics.find(lyric => lyric.active);

    return activeLyric.sections.map(section => {
      return (
        <article className="lyric-section">
          <h3>{section.title}</h3>
          {section.bars.map((bar, index) => {
            if (bar.text.length) {
              return (
                <div key={bar.id} className="display-bar">
                  <p className="display-bar-num">{index + 1}</p>
                  <p className="display-bar-text">{bar.text}</p>
                </div>
              );
            }
          })}
        </article>
      );
    });
  };

  render() {
    const activeLyric = this.props.lyrics.find(lyric => lyric.active);
    return (
      <main className="perform-page">
        <img
          src="./images/performPageImg.jpg"
          alt="rapper on stage performing with a mic on a blue and purple lit stage"
        />
        <section className="perform-page-bars-wrapper">
          <div className="perform-page-title-bar">
            <h2 className="perform-lyric-title">
              {activeLyric && activeLyric.title}
            </h2>
          <button onClick={this.handleClick} className="scroll-btn">
            {!this.state.scroll && "Start"}
            {this.state.scroll && "Stop"}
          </button>
          </div>
          <div
            className={`scroll-section ${this.state.scroll && "scroll-on"}`}
          >
            {activeLyric && this.renderAllBars()}
          </div>
        </section>
      </main>
    );
  }
}

export const mapStateToProps = state => ({
  lyrics: state.lyrics
});

export default connect(mapStateToProps)(PerformPage);
