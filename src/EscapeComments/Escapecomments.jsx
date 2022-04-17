import React, { Component, Fragment } from "react";
import { Row, Col, Typography, Divider } from "antd";
import { withRouter } from "react-router-dom";
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
              <Col span={2} />
              <Col span={8}>
                {" "}
                <img
                  src="/assets/comments.png"
                  alt="topicsComments"
                  className="topics-comment-Image"
                />
              </Col>
              <Col span={12}>
                <Text className="encoding-intro">
                  Learn about core concepts of localisation and
                  internationalisation! These concepts will help you have a
                  better understanding of the each respective topic and when to
                  apply these topics according to required situations in
                  localisation!
                  <br />
                  <br />
                </Text>
              </Col>
              <Col span={2} />
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
              <Col span={2} />
              <Col span={8}>
                {" "}
                <img
                  src="/assets/comments.png"
                  alt="topicsComments"
                  className="topics-comment-Image"
                />
              </Col>
              <Col span={12}>
                <Text className="encoding-intro">
                  Learn about core concepts of localisation and
                  internationalisation! These concepts will help you have a
                  better understanding of the each respective topic and when to
                  apply these topics according to required situations in
                  localisation!
                  <br />
                  <br />
                </Text>
              </Col>
              <Col span={2} />
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
              <Col span={2} />
              <Col span={8}>
                {" "}
                <img
                  src="/assets/comments.png"
                  alt="topicsComments"
                  className="topics-comment-Image"
                />
              </Col>
              <Col span={12}>
                <Text className="encoding-intro">
                  Learn about core concepts of localisation and
                  internationalisation! These concepts will help you have a
                  better understanding of the each respective topic and when to
                  apply these topics according to required situations in
                  localisation!
                  <br />
                  <br />
                </Text>
              </Col>
              <Col span={2} />
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
              <Col span={2} />
              <Col span={8}>
                {" "}
                <img
                  src="/assets/comments.png"
                  alt="topicsComments"
                  className="topics-comment-Image"
                />
              </Col>
              <Col span={12}>
                <Text className="encoding-intro">
                  Learn about core concepts of localisation and
                  internationalisation! These concepts will help you have a
                  better understanding of the each respective topic and when to
                  apply these topics according to required situations in
                  localisation!
                  <br />
                  <br />
                </Text>
              </Col>
              <Col span={2} />
            </Row>
            <Divider />
          </Col>
          <Col xs={1} md={2} lg={4} />
        </Row>
      </Fragment>
    );
  }
}

export default (withRouter, Escapecomments);
