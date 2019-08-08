import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTitle, addSection } from "../../actions";
import { bindActionCreators } from "redux";
import Bar from "../Bar/Bar";
import RhymeBox from "../RhymeBox/RhymeBox";
import "./WritePage.scss";
import PropTypes from "prop-types";

export class WritePage extends Component {
  state = {
    title: "",
    editTitle: false,
    showSections: false
  };

  componentDidMount() {
    const activeLyric = this.props.lyrics.find(lyric => lyric.active === true);
    if (activeLyric) {
      this.setState({
        title: activeLyric.title,
        editTitle: !(activeLyric.title.length > 0)
      });
    }
  }

  handleKeyDown = async e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      await this.props.updateTitle(this.state.title);
      localStorage.setItem("barzLyrics", JSON.stringify(this.props.lyrics));
      this.setState({ editTitle: false });
    }
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  editTitle = () => {
    this.setState({ editTitle: true });
  };

  showSections = () => {
    this.setState({ showSections: !this.state.showSections });
  };

  closeSections = () => {
    this.setState({ showSections: !this.state.showSections });
  };

  createNewSection = e => {
    const sectionId = Math.random();
    const newSection = {
      title: e.target.name,
      id: sectionId,
      bars: [{ id: Date.now(), text: "", sectionId: sectionId }]
    };
    this.props.addSection(newSection);
  }

  renderBars = () => {
    const activeLyric = this.props.lyrics.find(lyric => lyric.active === true);

    const allBars = activeLyric.sections.map(section => {
      return (
        <article className="lyric-section">
          <h3>{section.title}</h3>
          {section.bars.map((bar, index) => {
            return (
              <Bar
                key={index + 1}
                number={index + 1}
                text={bar.text}
                id={bar.id}
                active={bar.active}
                sectionId={section.id}
              />
            );
          })}
        </article>
      );
    });

    return (
      <section className="write-page-bars-wrapper">
        {this.state.editTitle && (
          <form className="title-form">
            <input
              autoComplete="off"
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
        <div onBlur={this.closeSections} className="sections-display">
          <p
            className="section-btn open-sections-btn"
            onClick={this.showSections}
          >
            <img src="./images/plus.svg" />
            Add section
          </p>
          {this.state.showSections && (
            <div className="section-btn-wrapper">
              <button name="Verse" onClick={this.createNewSection} className="section-btn">Verse</button>
              <button name="Pre-Chorus" onClick={this.createNewSection} className="section-btn">Pre-Chorus</button>
              <button name="Hook" onClick={this.createNewSection} className="section-btn">Hook</button>
              <button name="Bridge" onClick={this.createNewSection} className="section-btn">Bridge</button>
              <button name="Customer" onClick={this.createNewSection} className="section-btn">Custom</button>
            </div>
          )}
        </div>
      </section>
    );
  };

  render() {
    const activeLyric = this.props.lyrics.find(lyric => lyric.active === true);
    return (
      <main className="write-page">
        <div className="background-img-wrapper">
          <img
            src="./images/twoRappersMed.jpg"
            alt="two rappers performing intensely on stage"
          />
        </div>
        {this.props.lyrics.length > 0 && activeLyric && this.renderBars()}
        {/* {this.props.lyrics.length !== 0 && <p>Create new lyrics on the home page</p>} */}
        <RhymeBox />
      </main>
    );
  }
}

WritePage.propTypes = {
  lyrics: PropTypes.array,
  updateTitle: PropTypes.func
};

export const mapStateToProps = state => ({
  lyrics: state.lyrics
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateTitle, addSection }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WritePage);
