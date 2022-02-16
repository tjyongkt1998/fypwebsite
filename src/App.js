import React, { Fragment } from "react";
import Navbar from "./Navbar/Navbar"
import {BrowserRouter, Switch ,Route, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

 import HomePage from "./HomePage/Homepage.jsx";
import Topics from "./Topics/Topics.jsx";
import UISizing from "./UISizing/Uisizing.jsx";
import Encoding from "./Encoding/Encoding.jsx";
import EscapeComments from "./EscapeComments/Escapecomments.jsx";
import Bidirectional from "./Bidirectional/Bidirectional.jsx";
import Hardcodedtext from "./HardCodedText/Hardcodedtext";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <Navbar />
      <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/topics" component={Topics} />
            <Route exact path="/uisizing" component={UISizing} />
            <Route exact path="/encoding" component={Encoding} />
            <Route exact path="/escapecomments" component={EscapeComments} />
            <Route exact path="/bidirectional" component={Bidirectional} />
            <Route exact path="/hardcodedtext" component={Hardcodedtext} />
      </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default withRouter(App);