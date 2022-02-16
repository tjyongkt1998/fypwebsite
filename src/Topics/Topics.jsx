import React, { Component, Fragment } from "react";
import {
  Row,
  Col,
  Typography,
  Form,
  Input,
  Button,
  notification,
  Divider,
} from "antd";
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
                Topics
              </h1>
            </Col>

            <Divider />

            <Col span={24}>
              <br />
              <br />
              <Text>
                <h2>UI Sizing</h2>
              </Text>
              <br />
              <br />
            </Col>

            <Row style={{}}>
              <Col span={12}>
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
                </Text>
              </Col>
              
              <br />
              <br />
            </Row>

            <Text>
                <h4>
                  <Link to="/uisizing">Click Here!</Link>
                </h4>
              </Text>

            <Divider />

            <Col span={24}>
              <br />
              <br />
              <Text><h2>Encoding</h2></Text>
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
  
                </Text>
              </Col>
            </Row>

            <Text>
                <h4>
                  <Link to="/encoding">Click Here!</Link>
                </h4>
              </Text>

            <Divider />

            <Col span={24}>
              <br />
              <br />
              <Text><h2>Escape and Comments</h2></Text>
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
               
                </Text>
              </Col>
            </Row>

            <Text>
                <h4>
                  <Link to="/escapecomments">Click Here!</Link>
                </h4>
              </Text>

            <Divider />

            <Col span={24}>
              <br />
              <br />
              <Text><h2>Bidirectional</h2></Text>
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
                </Text>
              </Col>
            </Row>

            <Text>
                <h4>
                  <Link to="/bidirectional">Click Here!</Link>
                </h4>
              </Text>

            <Divider />

            <Col span={24}>
              <br />
              <br />
              <Text><h2>Hard-Coded Text</h2> </Text>
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
                </Text>
              </Col>
            </Row>

            <Text>
                <h4>
                  <Link to="/hardcodedtext">Click Here!</Link>
                </h4>
              </Text>

            <Divider />
          </Col>
          <Col xs={1} md={2} lg={4} />
        </Row>
      </Fragment>
    );
  }
}

export default (withRouter, Topics);
