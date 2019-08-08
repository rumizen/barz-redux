import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateTitle,
  addSection,
  deleteSection,
  updateSectionTitle
} from "../../actions";
import { bindActionCreators } from "redux";
import RhymeBox from "../RhymeBox/RhymeBox";
import "./WritePage.scss";
import PropTypes from "prop-types";
import LyricSection from "../../components/LyricSection/LyricSection";

export class WritePage extends Component {
  state = {
    title: "",
    editTitle: false,
    editIcon: false,
    showSections: false,
    sectionButtons: false
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

  handleBlur = async () => {
    await this.props.updateTitle(this.state.title);
    await localStorage.setItem("barzLyrics", JSON.stringify(this.props.lyrics));
    await this.setState({ editTitle: false });
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
      title: e.target.name === "Custom" ? "New Section" : e.target.name,
      id: sectionId,
      bars: [{ id: Date.now(), text: "", sectionId: sectionId }]
    };
    this.props.addSection(newSection);
  };

  showEditIcon = () => {
    this.setState({ editIcon: true });
  };

  hideEditIcon = () => {
    this.setState({ editIcon: false });
  };

  renderBars = () => {
    const activeLyric = this.props.lyrics.find(lyric => lyric.active === true);

    const allSections = activeLyric.sections.map(section => (
      <LyricSection
        key={section.id}
        title={section.title}
        id={section.id}
        bars={section.bars}
        lyrics={this.props.lyrics}
        deleteSection={this.props.deleteSection}
        updateSectionTitle={this.props.updateSectionTitle}
      />
    ));

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
              onBlur={this.handleBlur}
            />
          </form>
        )}
        {!this.state.editTitle && (
          <div
            className="lyric-title-wrapper"
            onClick={this.editTitle}
            onMouseEnter={this.showEditIcon}
            onMouseLeave={this.hideEditIcon}
          >
            <h2 className="write-page-lyric-title">{activeLyric.title}</h2>
            <img
              className={
                this.state.editIcon ? "edit-icon-display" : "edit-icon"
              }
              src="./images/edit.svg"
              alt="edit icon"
            />
          </div>
        )}
        {allSections}
        <div onBlur={this.closeSections} className="sections-display">
          <p
            className="section-btn open-sections-btn"
            onClick={this.showSections}
          >
            <img
              className={this.state.showSections ? "close-btn" : null}
              src="./images/plus.svg"
              alt="plus sign icon"
            />
            {!this.state.showSections && "New section"}
            {this.state.showSections && "Close"}
          </p>
          {this.state.showSections && (
            <div className="section-btn-wrapper">
              <button
                name="Verse"
                onClick={this.createNewSection}
                className="section-btn"
              >
                Verse
              </button>
              <button
                name="Pre-Chorus"
                onClick={this.createNewSection}
                className="section-btn"
              >
                Pre-Chorus
              </button>
              <button
                name="Hook"
                onClick={this.createNewSection}
                className="section-btn"
              >
                Hook
              </button>
              <button
                name="Bridge"
                onClick={this.createNewSection}
                className="section-btn"
              >
                Bridge
              </button>
              <button
                name="Custom"
                onClick={this.createNewSection}
                className="section-btn"
              >
                Custom
              </button>
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
  bindActionCreators(
    {
      updateTitle,
      addSection,
      deleteSection,
      updateSectionTitle
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WritePage);
