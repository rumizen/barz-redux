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
      <div>
        <h3 className="rhyme-title">Rhymes for:</h3>
        <h3 className="rhyme-selected">
          {window.getSelection().toString() || "Highlight a word"}
        </h3>
      </div>
      {allRhymes}
    </section>
  );
};


export const mapStateToProps = state => ({
  rhymes: state.rhymes
});

export default connect(mapStateToProps)(RhymeBox);