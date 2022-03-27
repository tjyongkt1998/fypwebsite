import React, { Component, Fragment } from "react";
import { Row, Col, Typography, Divider } from "antd";
import {  withRouter } from "react-router-dom";
import "../EscapeComments/Escapecomments.css";

const { Text } = Typography;

class Escapecomments extends Component {
 
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
          <Col span={24} className="homepage-col">
            <Text
              style={{
                textAlign: "center",
                fontSize: "50px",
                fontFamily: "lato-bold",
                marginTop: "20px",
              }}
            >
              Escape and Comments
            </Text>
          </Col>

          <Col span={24}>
            <br />
            <br />
            <Text underline>
              <h2>Overview</h2>
            </Text>
            <br />
            <br />
          </Col>

          <Row style={{}}>
            <Col span={8}>
              {" "}
              <img
                src="/assets/comments.png"
                alt="topicsComments"
                className="topics-comment-Image"
              />
            </Col>
            <Col span={16}>
              <Text>
                Learn about key and common concepts of UI Sizing in
                Localisation. See how UI is affected by localisation and the
                commmon challenges. Learn how to implement concepts to have UI
                that can adapt to multiple languages and overcome these
                challenges.
                <br />
                <br />
              </Text>
            </Col>
          </Row>

          <Divider />

          <Col span={24}>
            <br />
            <br />
            <Text underline>
              <h2>Concepts</h2>
            </Text>
            <br />
            <br />
          </Col>

          <Row style={{}}>
            <Col span={8}>
              {" "}
              <img
                src="/assets/comments.png"
                alt="topicsComments"
                className="topics-comment-Image"
              />
            </Col>
            <Col span={16}>
              <Text>
                Learn about core concepts of localisation and
                internationalisation! These concepts will help you have a
                better understanding of the each respective topic and when to
                apply these topics according to required situations in
                localisation!
                <br />
                <br />
              </Text>
            </Col>
          </Row>

          <Divider />

          <Col span={24}>
            <br />
            <br />
            <Text underline>
              <h2>Challenges</h2>
            </Text>
            <br />
            <br />
          </Col>

          <Row style={{}}>
            <Col span={8}>
              {" "}
              <img
                src="/assets/comments.png"
                alt="topicsComments"
                className="topics-comment-Image"
              />
            </Col>
            <Col span={16}>
              <Text>
                Learn about core challenges commonly faced in localisation and
                internationalisation! Common concepts of localisation and
                internationalisation and the methods or solutions to overcome
                these common issues!
                <br />
                <br />
              </Text>
            </Col>
          </Row>

          <Divider />

          <Col span={24}>
            <br />
            <br />
            <Text underline>
              <h2>Interactivity</h2>
            </Text>
            <br />
            <br />
          </Col>

          <Row style={{}}>
            <Col span={8}>
              {" "}
              <img
                src="/assets/comments.png"
                alt="topicsComments"
                className="topics-comment-Image"
              />
            </Col>
            <Col span={16}>
              <Text>
                Learn about localisation topics with interactive features!
                Help better enable your understanding of localisation topics
                with visualising changes and issues you may face while
                learning about localisation and internationalisation!
                <br />
                <br />
              </Text>
            </Col>
          </Row>
          <Divider />
        </Col>
        <Col xs={1} md={2} lg={4} />
      </Row>
    </Fragment>
    );
  }
}

export default(
  withRouter,
  (Escapecomments))
