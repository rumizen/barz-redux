import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bar from '../Bar/Bar';
import RhymeBox from "../RhymeBox/RhymeBox";
import './WritePage.scss';

export class WritePage extends Component {

  renderBars = () => {
    const activeLyric = this.props.lyrics.find(lyric => lyric.active === true);
    return activeLyric.bars.map((bar, index) => <Bar number={index + 1} text={bar.text} id={bar.id}/>)
  }

  render() {
    return (
      <main className="write-page">
        <section className="write-page-bars-wrapper">{this.props.lyrics.length > 0 && this.renderBars()}</section>
        <RhymeBox />
      </main>  
    )
  };
};

export const mapStateToProps = state => ({
  lyrics: state.lyrics,
});

export default connect(mapStateToProps)(WritePage);