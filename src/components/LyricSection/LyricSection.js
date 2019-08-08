import React, { Component } from "react";
import Bar from "../../containers/Bar/Bar";
import "./LyricSection.scss";
import "../../containers/WritePage/WritePage.scss";

class LyricSection extends Component {
  state = {
    sectionButtons: false,
    editTitle: false,
    editIcon: false,
    title: ""
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.title !== this.props.title) {
      this.setState({ title: nextProps.title });
    }
  }

  componentDidMount() {
    this.setState({ title: this.props.title });
  }

  showSectionButtons = () => {
    this.setState({ sectionButtons: true });
  };

  hideSectionButtons = () => {
    this.setState({ sectionButtons: false });
  };

  deleteSection = () => {
    this.props.deleteSection(this.props.id);
    localStorage.setItem("barzLyrics", JSON.stringify(this.props.lyrics));
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  editTitle = () => {
    this.setState({ editTitle: true });
  };

  handleKeyDown = async e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      await this.props.updateSectionTitle(this.props.id, this.state.title);
      await localStorage.setItem(
        "barzLyrics",
        JSON.stringify(this.props.lyrics)
      );
      await this.setState({ editTitle: false });
    }
  };

  handleBlur = () => {
      this.props.updateSectionTitle(this.props.id, this.state.title);
      localStorage.setItem(
        "barzLyrics",
        JSON.stringify(this.props.lyrics)
      );
      this.setState({ editTitle: false });
  };

  showEditIcon = () => {
    this.setState({ editIcon: true });
  };

  hideEditIcon = () => {
    this.setState({ editIcon: false });
  };

  render() {
    return (
      <article
        className={`lyric-section ${this.state.sectionButtons &&
          "lyric-section-background"}`}
      >
        <header
          className="section-header"
          onMouseEnter={this.showSectionButtons}
          onMouseLeave={this.hideSectionButtons}
        >
          {!this.state.editTitle && (
            <div
              className="lyric-section-title-wrapper"
              onClick={this.editTitle}
              onMouseEnter={this.showEditIcon}
              onMouseLeave={this.hideEditIcon}
            >
              <h3>{this.props.title}</h3>
              <img
                className={
                  this.state.editIcon ? "edit-icon-display" : "edit-icon"
                }
                src="./images/editBlue.svg"
                alt="edit icon"
              />
            </div>
          )}
          {this.state.editTitle && (
            <input
              className="lyric-section-title-input"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              onBlur={this.handleBlur}
            />
          )}
          {this.state.sectionButtons && (
            <div className="section-btns-wrapper">
              <img src="./images/menu.svg" alt="hamburger menu icon" />
              <button onClick={this.deleteSection}>&#x2715;</button>
            </div>
          )}
        </header>
        {this.props.bars.map((bar, index) => {
          return (
            <Bar
              key={index + 1}
              number={index + 1}
              text={bar.text}
              id={bar.id}
              active={bar.active}
              sectionId={this.props.id}
            />
          );
        })}
      </article>
    );
  }
}

export default LyricSection;
