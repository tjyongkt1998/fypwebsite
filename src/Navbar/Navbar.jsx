import React, { Component, Fragment } from "react";
import { Row, Col, Typography} from "antd";
// import { HomeOutlined } from "@ant-design/icons";
import "../Navbar/Navbar.css";
import { Link, withRouter } from "react-router-dom";

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
            {/* <Layout
            style={{
              position: "fixed",
              width: "100%",
              paddingTop: "20px",
              paddingBottom: "20px",
              backgroundColor: "black",
              marginBottom:'30px',
              zIndex: 1,
            }}
          > */}
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
                  {/* <Col flex={1}>
                    <Button icon={<HomeOutlined />}>
                      <Link to="/" />
                    </Button>
                  </Col> */}

                  <Col flex={1}>
                    <Link to="/">
                      <Text className="navbar-text">Home</Text>
                    </Link>
                  </Col>

                  <Col flex={1}>
                    <Link to="/topics">
                      <Text className="navbar-text">Topics</Text>
                    </Link>
                  </Col>

                  <Col flex={1}>
                    <Link to="/quiz">
                      <Text className="navbar-text">Quiz</Text>
                    </Link>
                  </Col>
                  {/* <Col flex={1}>
                    <Link to="/contactus">
                      <Text className="navbar-text">Contact Us</Text>
                    </Link>
                  </Col>
                  <Col flex={1}>
                    <Link to="/aboutus">
                      <Text className="navbar-text">About Us</Text>
                    </Link>
                  </Col> */}
                </Row>
              </Col>
            </Row>
          </Col>
          {/* </Layout> */}
        </Row>
      </Fragment>
    );
  }
}
export default withRouter(NavBar);
