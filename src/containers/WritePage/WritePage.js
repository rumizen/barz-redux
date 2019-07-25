import React from 'react';
import { connect } from 'react-redux';
import Bar from '../Bar/Bar';
import './WritePage.scss';

export const WritePage = ({ lyrics }) => {
  const activeLyric = lyrics.find(lyric => lyric.active === true);
  const allBars = activeLyric.bars.map(bar => <Bar text={bar.text} id={bar.id}/>)

  return (
    <main className="write-page">
      <section className="write-page-bars-wrapper"></section>
      <section className="write-page-rhymes-wrapper"></section>
    </main>
  );
};

export const mapStateToProps = state => ({
  lyrics: state.lyrics
});

export default connect(mapStateToProps)(WritePage);