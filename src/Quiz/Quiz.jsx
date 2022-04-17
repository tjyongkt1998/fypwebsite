import React, { Component, Fragment } from "react";
import { Row, Col, Typography, Divider } from "antd";
import { withRouter, Link } from "react-router-dom";
import "../Quiz/Quiz.css";

const { Text } = Typography;

class Quiz extends Component {
  render() {
    return (
      <Fragment>
        <Row
          style={{
            textAlign: "center",
          }}
        >
          <Col xs={1} md={2} lg={4} style={{ backgroundColor: "#F0F0F0" }} />
          <Col xs={22} md={20} lg={16}>
            <img
              style={{
                marginTop: "20px",
              }}
              src="/assets/quiz_new.png"
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
              ></h1>
            </Col>

            <Divider />

            <Col span={24}>
              <br />
              <br />
              <Text className="quiz-subtopics">
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
                <Text className={"quiz-body "}>
                  Test your understanding of your knowledge on common concepts
                  and challenges of UI Sizing! Take our quick quiz find your
                  weaknesses and improve them!
                  <br />
                  <br />
                </Text>
              </Col>

              <br />
              <br />
            </Row>

            <Text className={"quiz-button"}>
              <h4>
                <Link to="/quizquestions">Click Here!</Link>
              </h4>
            </Text>

            <Divider />

            <Col span={24}>
              <br />
              <br />
              <Text className="quiz-subtopics">
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
                <Text className={"quiz-body "}>
                  Test your understanding of your knowledge on common concepts
                  and challenges of Bidirectional Reading! Take our quick quiz
                  find your weaknesses and improve them!
                  <br />
                  <br />
                </Text>
              </Col>
            </Row>

            <Text className={"quiz-button"}>
              <h4>
                <Link to="/quizquestions">Click Here!</Link>
              </h4>
            </Text>
            <Divider />

            <Col span={24}>
              <br />
              <br />
              <Text className="quiz-subtopics">
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
                <Text className={"quiz-body "}>
                  Test your understanding of your knowledge on common concepts
                  and challenges of Encoding! Take our quick quiz find your
                  weaknesses and improve them!
                  <br />
                  <br />
                </Text>
              </Col>
            </Row>

            <Text className={"quiz-button"}>
              <h4>
                <Link to="/quizquestions">Click Here!</Link>
              </h4>
            </Text>

            <Divider />

            <Col span={24}>
              <br />
              <br />
              <Text className="quiz-subtopics">
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
                <Text className={"quiz-body "}>
                  Test your understanding of your knowledge on common concepts
                  and challenges of Escape and Comments! Take our quick quiz
                  find your weaknesses and improve them!
                  <br />
                  <br />
                </Text>
              </Col>
            </Row>

            <Text className={"quiz-button"}>
              <h4>
                <Link to="/quizquestions">Click Here!</Link>
              </h4>
            </Text>

            <Divider />

            <Col span={24}>
              <br />
              <br />
              <Text className="quiz-subtopics">
                <h2>Hard-Coded Text</h2>
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
                <Text className={"quiz-body "}>
                  Test your understanding of your knowledge on common concepts
                  and challenges of Hard Coded Text! Take our quick quiz find
                  your weaknesses and improve them!
                  <br />
                  <br />
                </Text>
              </Col>
            </Row>

            <Text className={"quiz-button"}>
              <h4>
                <Link to="/quizquestions">Click Here!</Link>
              </h4>
            </Text>

            <Divider />

            <Col span={24}>
              <br />
              <br />
              <Text className="quiz-subtopics">
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
                <Text className={"quiz-body "}>
                  Test your understanding of your knowledge on common concepts
                  and challenges of String Resources! Take our quick quiz find
                  your weaknesses and improve them!
                  <br />
                  <br />
                </Text>
              </Col>
            </Row>

            <Text className={"quiz-button"}>
              <h4>
                <Link to="/quizquestions">Click Here!</Link>
              </h4>
            </Text>

            <Divider />

            <Col span={24}>
              <br />
              <br />
              <Text className="quiz-subtopics">
                <h2>Translation Comments</h2>
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
                <Text className={"quiz-body "}>
                  Test your understanding of your knowledge on common concepts
                  and challenges of Translation Comments! Take our quick quiz
                  find your weaknesses and improve them!
                  <br />
                  <br />
                </Text>
              </Col>
            </Row>

            <Text className={"quiz-button"}>
              <h4>
                <Link to="/quizquestions">Click Here!</Link>
              </h4>
            </Text>

            <Divider />

            <Col span={24}>
              <br />
              <br />
              <Text className="quiz-subtopics">
                <h2>Text Concantenation</h2>
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
                <Text className={"quiz-body "}>
                  Test your understanding of your knowledge on common concepts
                  and challenges of Text Concantenation! Take our quick quiz
                  find your weaknesses and improve them!
                  <br />
                  <br />
                </Text>
              </Col>
            </Row>

            <Text className={"quiz-button"}>
              <h4>
                <Link to="/quizquestions">Click Here!</Link>
              </h4>
            </Text>

            <Divider />
          </Col>
          <Col xs={1} md={2} lg={4} style={{ backgroundColor: "#F0F0F0" }} />
        </Row>
      </Fragment>
    );
  }
}

export default (withRouter, Quiz);
