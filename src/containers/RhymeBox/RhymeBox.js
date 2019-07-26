import React from "react";
import { connect } from 'react-redux';
import './RhymeBox.scss';

export const RhymeBox = ({ rhymes }) => {

  const allRhymes = rhymes.map(rhyme => {
    return (
      <p className="rhyme-word" key={Math.random()}>
        {rhyme.word}
      </p>
    );
  });

  return (
    <section className="rhyme-box">
      <h3>
        Rhymes for <span>selected</span>
      </h3>
      {allRhymes}
    </section>
  );
};


export const mapStateToProps = state => ({
  rhymes: state.rhymes
});

export default connect(mapStateToProps)(RhymeBox);