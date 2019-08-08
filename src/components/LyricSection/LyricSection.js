import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteSection } from "../../actions";
import Bar from "../../containers/Bar/Bar";
import "./LyricSection.scss";
import "../../containers/WritePage/WritePage.scss";

class LyricSection extends Component {
  state = {
    sectionButtons: false
  };

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

  render() {
    return (
      <article className="lyric-section">
        <header
          className="section-header"
          onMouseEnter={this.showSectionButtons}
          onMouseLeave={this.hideSectionButtons}
        >
          <h3>{this.props.title}</h3>
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
