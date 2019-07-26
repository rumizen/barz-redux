import React from 'react';
import { connect } from "react-redux";
// import Bar from '../Bar/Bar';
import './PerformPage.scss';

export const PerformPage = ({ lyrics }) => {

  return (
    <main className="perform-page">
      <section className="perform-page-bars-wrapper"></section>
    </main>
  );
};

export const mapStateToProps = state => ({
  lyrics: state.lyrics
});

export default connect(mapStateToProps)(PerformPage);