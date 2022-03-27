import React, { Component, Fragment } from "react";
import { Row, Col, Typography, Divider } from "antd";
import { Link, withRouter } from "react-router-dom";
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
          <Col xs={1} md={2} lg={4}  style={{backgroundColor:"#F0F0F0"}}/>
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
              <Text className={"topics-subtopics"}>
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
                <Text className={"topics-body"}>
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
              <Text className={"topics-subtopics"}>
                <h2>Bidirectional</h2>
              </Text>
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
              <Text className={"topics-body"}>
                  Learn about key and common concepts of Bidirectional Languages
                  in Localisation. See how different languages are affected by
                  localisation and the commmon challenges. Learn how to
                  implement concepts to have UI that can adapt to multiple
                  languages and overcome these challenges.
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
              <Text className={"topics-subtopics"}>
                <h2>Encoding</h2>
              </Text>
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
              <Text className={"topics-body"}>
                  Learn about key and common concepts of Encoding in
                  Localisation.Test you understanding of your knowledge on
                  common concepts and challenges of Encoding and Localisation!
                  Learn how to implement concepts of Encoding to apply to
                  multiple languages and overcome these challenges.
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
              <Text className={"topics-subtopics"}>
                <h2>Escape and Comments</h2>
              </Text>
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
              <Text className={"topics-body"}>
                  Learn about key and common concepts of Escape and Comments in
                  Localisation. Test you understanding of your knowledge on
                  common concepts and challenges of escape and comments in
                  Localisation! Learn how to implement concepts of escape and
                  comments to apply to multiple languages and overcome these
                  challenges.
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
              <Text className={"topics-subtopics"}>
                <h2>Hard-Coded Text</h2>{" "}
              </Text>
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
              <Text className={"topics-body"}>
                  Learn about key and common concepts of Hardcoded texts in
                  Localisation. Test you understanding of your knowledge on
                  common concepts and challenges of hardcoded text in
                  Localisation! Learn how to implement concepts of hardcoded
                  text to apply to multiple languages and overcome these
                  challenges.
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

            <Col span={24}>
              <br />
              <br />
              <Text className={"topics-subtopics"}>
                <h2>String Resources</h2>
              </Text>
              <br />
              <br />
            </Col>

            <Row style={{}}>
              <Col span={12}>
                {" "}
                <img
                  src="/assets/stringResources.png"
                  alt="topicsStringResources"
                  className="topics-stringResources-image"
                />
              </Col>
              <Col span={8}>
              <Text className={"topics-body"}>
                  Learn about key and common concepts of String Resources in
                  Localisation. Test you understanding of your knowledge on
                  common concepts and challenges of String Resources in
                  Localisation! Learn how to implement concepts of String
                  Resources to apply to multiple languages and overcome these
                  challenges.
                  <br />
                  <br />
                </Text>
              </Col>
            </Row>

            <Text>
              <h4>
                <Link to="/stringresources">Click Here!</Link>
              </h4>
            </Text>

            <Divider />

            <Col span={24}>
              <br />
              <br />
              <Text className={"topics-subtopics"}>
                <h2>Translation Comments</h2>{" "}
              </Text>
              <br />
              <br />
            </Col>

            <Row style={{}}>
              <Col span={12}>
                {" "}
                <img
                  src="/assets/translationComment.png"
                  alt="topicsTranslationComment"
                  className="topics-translationComment-image"
                />
              </Col>
              <Col span={8}>
              <Text className={"topics-body"}>
                  Learn about key and common concepts of Translation Comments in
                  Localisation. Test you understanding of your knowledge on
                  common concepts and challenges of TranslationComments in
                  Localisation! Learn how to implement concepts of
                  TranslationComments to apply to multiple languages and
                  overcome these challenges.
                  <br />
                  <br />
                </Text>
              </Col>
            </Row>

            <Text>
              <h4>
                <Link to="/translationcomments">Click Here!</Link>
              </h4>
            </Text>

            <Divider />

            <Col span={24}>
              <br />
              <br />
              <Text className={"topics-subtopics"}>
                <h2>Text Concantenation</h2>{" "}
              </Text>
              <br />
              <br />
            </Col>

            <Row style={{}}>
              <Col span={12}>
                {" "}
                <img
                  src="/assets/textConcant.png"
                  alt="topicsTextConcant"
                  className="topics-textConcant-image"
                />
              </Col>
              <Col span={8}>
              <Text className={"topics-body"}>
                  Learn about key and common concepts of Text Concatenation in
                  Localisation. Test you understanding of your knowledge on
                  common concepts and challenges of Concatenation in
                  Localisation! Learn how to implement concepts of Concatenation
                  to apply to multiple languages and overcome these challenges.
                  <br />
                  <br />
                </Text>
              </Col>
            </Row>

            <Text>
              <h4>
                <Link to="/textconcant">Click Here!</Link>
              </h4>
            </Text>

            <Divider />
          </Col>
          <Col xs={1} md={2} lg={4} style={{backgroundColor:"#F0F0F0"}}/>
        </Row>
      </Fragment>
    );
  }
}

export default (withRouter, Topics);
