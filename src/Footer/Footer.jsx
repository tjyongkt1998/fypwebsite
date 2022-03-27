import React, { Component, Fragment } from "react";
import {
  Col,
} from "antd";
import { withRouter } from "react-router-dom";
import "../Footer/Footer.css";


class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Col
          span={24}
          style={{
            padding: "80px 60px",
            background: "black",
            position:"fixed",
            left:"0",
            bottom:"0",
            right:"0",
            width: "100%",
            
          }}
        />
      </Fragment>
    );
  }
}

export default (withRouter, Footer);
