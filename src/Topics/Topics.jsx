import React, { Component, Fragment } from "react";
import { Row, Col, Typography, Form, Input, Button, notification } from "antd";
import { BrowserRouter, Link, withRouter } from "react-router-dom";
import "../Topics/Topics.css";
import "../index.css";

const { Text } = Typography;

class Topics extends Component {
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
              <Text
                style={{
                  textAlign: "center",
                  fontSize: "50px",
                  fontFamily: "lato-bold",
                  marginTop: "20px",
                }}
              >
                Topics
              </Text>
            </Col>

            <Col span={24}>
              <br />
              <br />
              <Text>UI Sizing</Text>
              <br />
              <br />
            </Col>

            <Row style={{}}>
              <Col span={8}>
                {" "}
                <img
                  src="/assets/UISizing.png"
                  alt="topicsUI"
                  className="topics-UI-Image"
                />
              </Col>
              <Col span={8}>
                <Text>
                  Learn about key and common concepts of UI Sizing in
                  Localisation. See how UI is affected by localisation and the
                  commmon challenges. Learn how to implement concepts to have UI
                  that can adapt to multiple languages and overcome these
                  challenges.
                  <br />
                  <br />
                  <Link to="/uisizing">Click Here!</Link>
                  <br />
                  <br />
                </Text>
              </Col>
            </Row>

            <Col span={24}>
              <br />
              <br />
              <Text>Encoding</Text>
              <br />
              <br />
            </Col>

            <Row style={{}}>
              <Col span={12}>
                {" "}
                <img
                  src="/assets/encoding.png"
                  alt="topicsEncoding"
                  className="topics-encoding-image"
                />
              </Col>
              <Col span={8}>
                <Text>
                  Test you understanding of your knowledge on common concepts
                  and challenges of Localisation! Take our quick quiz on the
                  topics of localisation and internationalisation!
                  <br />
                  <br />
                  <Link to="/encoding">Click Here!</Link>
                </Text>
              </Col>
            </Row>

            <Col span={24}>
              <br />
              <br />
              <Text>Escape and Comments</Text>
              <br />
              <br />
            </Col>

            <Row style={{}}>
              <Col span={12}>
                {" "}
                <img
                  src="/assets/comments.png"
                  alt="topicsComments"
                  className="topics-comments-image"
                />
              </Col>
              <Col span={8}>
                <Text>
                  Test you understanding of your knowledge on common concepts
                  and challenges of Localisation! Take our quick quiz on the
                  topics of localisation and internationalisation!
                  <br />
                  <br />
                  <Link to="/escapecomments">Click Here!</Link>
                </Text>
              </Col>
            </Row>

            <Col span={24}>
              <br />
              <br />
              <Text>Bidirectional</Text>
              <br />
              <br />
            </Col>

            <Row style={{}}>
              <Col span={12}>
                {" "}
                <img
                  src="/assets/bidirectional.png"
                  alt="topicsBidirectional"
                  className="topics-bidirectional-image"
                />
              </Col>
              <Col span={8}>
                <Text>
                  Test you understanding of your knowledge on common concepts
                  and challenges of Localisation! Take our quick quiz on the
                  topics of localisation and internationalisation!
                  <br />
                  <br />
                  <Link to="/bidirectional">Click Here!</Link>
                </Text>
              </Col>
            </Row>

            <Col span={24}>
              <br />
              <br />
              <Text> Hard-Coded Text</Text>
              <br />
              <br />
            </Col>

            <Row style={{}}>
              <Col span={12}>
                {" "}
                <img
                  src="/assets/Hardcode.png"
                  alt="topicsHardCodedText"
                  className="topics-hardcode-image"
                />
              </Col>
              <Col span={8}>
                <Text>
                  Test you understanding of your knowledge on common concepts
                  and challenges of Localisation! Take our quick quiz on the
                  topics of localisation and internationalisation!
                  <br />
                  <br />
                  <Link to="/hardcodedtext">Click Here!</Link>
                </Text>
              </Col>
            </Row>


          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default (withRouter, Topics);
