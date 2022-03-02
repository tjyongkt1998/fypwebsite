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
          <Col xs={1} md={2} lg={4} />
          <Col xs={22} md={20} lg={16}>
            <Row>
              <img
                span={12}
                src="/assets/homebanner.jpg"
                alt="homepagebanner"
              />

              <img span={12} src="/assets/banner.jpg" alt="homebanner" />

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
                <Text>
                  <h1>TOPICS</h1>
                </Text>
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
                <Col span={16} style={{ marginTop: "50px" }}>
                  <Text>
                    Learn about key and common concepts of Localisaiton and
                    Internationalisations! Browse through our list of topics to
                    get an understanding of common challenges and how to
                    overcome them!
                    <br />
                    <br />
                  </Text>
                  <Text>
                    <h4>
                      <Link to="/topics">Click Here!</Link>
                    </h4>
                  </Text>
                </Col>

                <br />
                <br />
              </Row>

              <Col span={24}>
                <br />
                <br />
                <Text>
                  <h1>QUIZ</h1>
                </Text>
              </Col>

              <Row style={{}}>
                <Col span={8}>
                  {" "}
                  <img
                    src="/assets/quiz.png"
                    alt="homepageQuiz"
                    className="homepage-quiz-image"
                    style={{ width: "70%", height: "70%" }}
                  />
                </Col>
                <Col span={16} style={{ marginTop: "50px" }}>
                  <Text>
                    Test you understanding of your knowledge on common concepts
                    and challenges of Localisation! Take our quick quiz on the
                    topics of localisation and internationalisation!
                    <br />
                    <br />
                    <Text>
                      <h4>
                        <Link to="/topics">Click Here!</Link>
                      </h4>
                    </Text>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </Text>
                </Col>
              </Row>
            </Row>
          </Col>

          <Col xs={1} md={2} lg={4} />
        </Row>
      </Fragment>
    );
  }
}

export default (withRouter, Homepage);
