import React, { Component, Fragment } from "react";
import { Row, Col, Typography, Form, Input, Button, notification } from "antd";
import { BrowserRouter, Link, withRouter } from "react-router-dom";
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
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
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
            <Text>Overview</Text>
            <br />
            <br />
          </Col>

          <Row style={{}}>
            <Col span={8}>
              {" "}
              {/* <img
                src="/assets/UISizing.png"
                alt="topicsUI"
                className="topics-UI-Image"
              /> */}
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
          </Row>

          <Col span={24}>
            <br />
            <br />
            <Text>Concepts</Text>
            <br />
            <br />
          </Col>

          <Row style={{}}>
            <Col span={12}>
              {" "}
              {/* <img
                src="/assets/encoding.png"
                alt="topicsEncoding"
                className="topics-encoding-image"
              /> */}
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

          <Col span={24}>
            <br />
            <br />
            <Text>Challenges</Text>
            <br />
            <br />
          </Col>

          <Row style={{}}>
            <Col span={12}>
              {" "}
              {/* <img
                src="/assets/comments.png"
                alt="topicsComments"
                className="topics-comments-image"
              /> */}
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

          <Col span={24}>
            <br />
            <br />
            <Text>Interactvitity</Text>
            <br />
            <br />
          </Col>

          <Row style={{}}>
            <Col span={12}>
              {" "}
              {/* <img
                src="/assets/bidirectional.png"
                alt="topicsBidirectional"
                className="topics-bidirectional-image"
              /> */}
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

        </Col>
      </Row>
    </Fragment>
    );
  }
}

export default(
  withRouter,
  (Escapecomments))
