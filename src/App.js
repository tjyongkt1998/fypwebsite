import React, { Fragment } from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import "./App.css";

import HomePage from "./HomePage/Homepage.jsx";
import Topics from "./Topics/Topics.jsx";
import UISizing from "./UISizing/Uisizing.jsx";
import Encoding from "./Encoding/Encoding.jsx";
import EscapeComments from "./EscapeComments/Escapecomments.jsx";
import Bidirectional from "./Bidirectional/Bidirectional.jsx";
import Hardcodedtext from "./HardCodedText/Hardcodedtext";
import ScrollToTop from "./ScrollToTop";

import Aboutus from "./AboutUs/Aboutus.jsx";
import ContactUs from "./ContactUs/Contactus.jsx";
import Translationcomments from "./TranslationComments/Translationcomments.jsx";
import Stringresources from "./StringResources/Stringresources.jsx";
import Textconcant from "./TextConcant/Textconcant.jsx";
import Quiz from "./Quiz/Quiz.jsx";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/topics" component={Topics} />
            <Route exact path="/uisizing" component={UISizing} />
            <Route exact path="/encoding" component={Encoding} />
            <Route exact path="/escapecomments" component={EscapeComments} />
            <Route exact path="/bidirectional" component={Bidirectional} />
            <Route exact path="/hardcodedtext" component={Hardcodedtext} />

            <Route exact path="/aboutus" component={Aboutus} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/translationcomments" component={Translationcomments} />
            <Route exact path="/stringresources" component={Stringresources} />
            <Route exact path="/textconcant" component={Textconcant} />
            <Route exact path="/quiz" component={Quiz} />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </Fragment>
  );
}

export default withRouter(App);
