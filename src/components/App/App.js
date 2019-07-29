import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import HomePage from "../../containers/HomePage/HomePage";
import WritePage from "../../containers/WritePage/WritePage";
import PerformPage from "../../containers/PerformPage/PerformPage";
import HelpPage from "../../components/HelpPage/HelpPage";
import { setLyrics } from "../../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./App.scss";

export class App extends Component {

  renderApp = () => {
    return (
      <main className="app">
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/write" component={WritePage} />
        <Route exact path="/perform" component={PerformPage} />
        <Route exact path="/help" component={HelpPage} />
      </main>
    );
  };

  render() {
    return <>{this.props.lyrics && this.renderApp()}</>;
  }
};

export const mapStateToProps = state => ({
  lyrics: state.lyrics
});

export default connect(
  mapStateToProps)(App);
