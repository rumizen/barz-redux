import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import HomePage from "../../containers/HomePage/HomePage";
import WritePage from "../../containers/WritePage/WritePage";
import PerformPage from "../../containers/PerformPage/PerformPage";
import './App.scss';

const App = () => {
  return (
    <main className="app">
      <Route path="/" component={NavBar}/>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/write" component={WritePage}/>
      <Route exact path="/perform" component={PerformPage}/>
    </main>
  );
}

export default App;
