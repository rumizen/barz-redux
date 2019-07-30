import React, { Component } from "react";
import { connect } from "react-redux";
import "./RhymeBox.scss";
import RhymeWord from '../../components/RhymeWord/RhymeWord';
import PropTypes from "prop-types";


export class RhymeBox extends Component {

  render() {
    const allRhymes = this.props.rhymes.map(rhyme => {
      return <RhymeWord key={Math.random()} text={rhyme.word} />;
    });
    return (
      <section className="rhyme-box">
        <div className="rhyme-box-title">
          <h3 className="rhyme-title">Rhymes for:</h3>
          <h3 className="rhyme-selected">
            {window.getSelection().toString() || "Highlight a word"}
          </h3>
        </div>
        {allRhymes}
      </section>
    );
  }
};

RhymeBox.propTypes = {
  rhymes: PropTypes.array,
}

export const mapStateToProps = state => ({
  rhymes: state.rhymes
});

export default connect(mapStateToProps)(RhymeBox); 
