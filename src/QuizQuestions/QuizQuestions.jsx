import React, { Component, Fragment } from "react";
import { Row, Col, Typography, Divider } from "antd";
import { withRouter,Link } from "react-router-dom";
import "../QuizQuestions/QuizQuestions.css";

const { Text } = Typography;

class QuizQuestions extends Component {
 
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
          <img
            src="/assets/topics.png"
            alt="homepageTopics"
            className="homepage-topics-image"
          />
          <Col span={24} className="homepage-col">
            {/* <img
                src="/assets/topics.png"
                alt="homepageTopics"
                className="homepage-topics-image"
              /> */}

            <h1
              style={{
                textAlign: "center",
                fontSize: "50px",
                fontFamily: "lato-bold",
                marginTop: "20px",
              }}
            >
              Quiz Questions
            </h1>
          </Col>


        </Col>
        <Col xs={1} md={2} lg={4} />
      </Row>
    </Fragment>
    );
  }
}

export default(
  withRouter,
  (QuizQuestions))
