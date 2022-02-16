import React, { Component, Fragment } from "react";
import { Row, Col, Typography, Form, Input, Button, notification } from "antd";
import { BrowserRouter, Link, withRouter } from "react-router-dom";
import "../HomePage/Homepage.css";
import "../index.css";

const { Text } = Typography;

class Homepage extends Component {
  render() {
    return (
      <Fragment>
        <Row
          style={{
            textAlign: "center",
            marginBottom: "80px",
          }}
        >
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <img
                  src="/assets/homebanner.jpg"
                  alt="homepagebanner"
                  
                />
            <Col span={24} className="homepage-col">
              <Text
                style={{
                  textAlign: "center",
                  fontSize: "50px",
                  fontFamily: "lato-bold",
                }}
              >
                Localisation Website
              </Text>
            </Col>

            <Col span={24}>
              <br />
              <br />
              <Text>TOPICS</Text>
              <br />
              <br />
            </Col>

            <Row style={{}}>
              <Col span={8}>
                {" "}
                <img
                  src="/assets/topics.png"
                  alt="homepageTopics"
                  className="homepage-topics-image"
                />
              </Col>
              <Col span={8}>
                <Text>
                  Learn about key and common concepts of Localisaiton and
                  Internationalisations! Browse through our list of topics to
                  get an understanding of common challenges and how to overcome
                  them!
                  <br />
                  <br />
                  <Link to="/topics">Click Here!</Link>
                  <br />
                  <br />
                </Text>
              </Col>
            </Row>

            <Col span={24}>
              <br />
              <br />
              <Text>QUIZ!</Text>
              <br />
              <br />
            </Col>

            <Row style={{}}>
              <Col span={12}>
                {" "}
                <img
                  src="/assets/quiz.png"
                  alt="homepageQuiz"
                  className="homepage-quiz-image"
                />
              </Col>
              <Col span={8}>
                <Text>
                  Test you understanding of your knowledge on common concepts
                  and challenges of Localisation! Take our quick quiz on the
                  topics of localisation and internationalisation!
                  <br />
                  <br />
                  <Link to="/quiz">Click Here!</Link>
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default (withRouter, Homepage);
