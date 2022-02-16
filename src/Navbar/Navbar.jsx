import React, { Component, Fragment } from "react";
import {
  Row,
  Col,
  Typography,
  Menu,
  Popover,
  Divider,
  Drawer,
  Button,
  Spin,
} from "antd";
import { BrowserRouter, Link, withRouter } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
const { Text } = Typography;

class NavBar extends Component {
  render() {
    return (
     
      <Fragment>
        <Row
          style={{
            backgroundColor: "grey",
          }}
        >
          <Col md={24}>
            <Row
              align="center"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
              <Col
                md={24}
                mode="inline"
                style={{
                  borderRight: "none",
                  background: "transparent",
                  borderBottom: "none",
                  textAlign: "center",
                }}
              >
                <Row>
                  <Col flex={1}>
                    <Link to="/topics">
                      <Text className="top-bar-text">Topics</Text>
                    </Link>
                  </Col>

                  <Col flex={1}>
                    <Link to="/">
                      <Text className="top-bar-text">Quiz</Text>
                    </Link>
                  </Col>
                  <Col flex={1}>
                    <Link to="/">
                      <Text className="top-bar-text">Contact Us</Text>
                    </Link>
                  </Col>
                  <Col flex={1}>
                    <Link to="/">
                      <Text className="top-bar-text">About Us</Text>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
export default withRouter(NavBar);
