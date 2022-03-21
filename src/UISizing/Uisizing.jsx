import React, { Component, Fragment } from "react";
import {
  Row,
  Col,
  Typography,
  Button,
  notification,
  Divider,
  Menu,
  Dropdown,
  message,
  List, 
  Card, 
} from "antd";
import { DownOutlined, BookOutlined } from "@ant-design/icons";
import { BrowserRouter, Link, withRouter } from "react-router-dom";
import "../UISizing/Uisizing.css";

const { Text } = Typography;

class Uisizing extends Component {
  

  render() {
   

    function handleMenuClick(e) {
      message.info("Click on menu item.");
      console.log("click", e);
    }

   

    const menu = (
      <Menu onClick={handleMenuClick}>
        <Menu.Item key="1" icon={<BookOutlined />}>
          English
        </Menu.Item>
        <Menu.Item key="2" icon={<BookOutlined />}>
          Tamil
        </Menu.Item>
        <Menu.Item key="3" icon={<BookOutlined />}>
          Russian
        </Menu.Item>
        <Menu.Item key="4" icon={<BookOutlined />}>
          Chinese
        </Menu.Item>
        <Menu.Item key="5" icon={<BookOutlined />}>
          Japanese
        </Menu.Item>
      </Menu>
    );
    return (
      <Fragment>
        <Row
          style={{
            textAlign: "center",
            marginBottom: "80px",
          }}
        >
          <Col xs={1} md={2} lg={4} />
          <Col xs={22} md={20} lg={16} style={{ height: "150vh" }}>
            <Col span={24} className="homepage-col">
              <Text
                style={{
                  textAlign: "center",
                  fontSize: "50px",
                  fontFamily: "lato-bold",
                  marginTop: "20px",
                }}
              >
                UI Sizing
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
                  src="/assets/uiSizing_windowUI.png"
                  alt="topicsUI"
                  className="topics-UI-header"
                />
              </Col>
              <Col span={16}>
                <Text>
                  UI sizing is a very important aspect to consider during
                  localisation and internationalisation as some languages are
                  more verbose than others meaning that as a localiser you have
                  to account for expansion and contraction of sentences
                  depending on languages.
                  <br />
                  <br />
                  Examples: <br />
                  English : Learn about localisation! <br />
                  Russian: Узнайте о локализации! <br />
                  Chinese: 了解本地化 <br />
                  Arabic :تعرف على الأقلمة! <br />
                  Tamil: உள்ளூர்மயமாக்கல் பற்றி அறிக!
                  <br />
                  <br />
                  As you can see from the example above, there are changes in
                  the length of sentences after localisation. The Chinese and
                  Arabic languages got a contraction in the length of the
                  sentence while Tamil got an expansion in the length of the
                  sentence. English and Russian are fairly similar in sentence
                  length in this situation.
                  <br />
                  <br />
                  This is one of the most basic examples of issues to consider
                  and plan for during localisation. Although issues and concepts
                  of localisation may vary depending on localisation content,
                  language and framework. The common design issues to consider
                  are listed below:
                  <br />
                  <br />
                  1. Sizing Metrics
                  <br />
                  2. Word Wrapping <br />
                  3.Font Accountability
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
              <Col span={24}>
                <Text bold>
                  <h3>Sizing Metrics</h3>
                </Text>
                <br />
                <br />

                <Text>
                  A user interface and window should be designed so that it is
                  relative to each other without being fixed with specific sizes
                  and positions. This will enable them to realign with each
                  other after being localised/translated to each respective
                  language.
                  <br />
                  <br />
                  Responsive UI: In our current modern era, different types of
                  devices from phones, tablets and computers tend to cause
                  issues with localised languages as the screen will affect the
                  available space for sentences will be limited especially if
                  the sentences are more verbose and increase in length. The way
                  to overcome this issue is using a responsive UI when designing
                  your UI will enable localisation to go a lot smoother. This is
                  due to Responsive UI not needing to be fixed with specific
                  size and positions but rather the content adapting itself
                  accordingly to the size given to the responsive UI. This will
                  lead to a clean looking UI which will avoid having certain
                  sentences/images appearing cropped, messy or excessive white
                  empty spaces.
                  <br />
                  <br />
                  <br />
                </Text>
                <Text>
                  Example of Using Responsive Design and taking Sizing Metrics
                  into account:
                  <br />
                  <br />
                </Text>
              </Col>

              {/* <Col span={12}>
              <Row>
                {" "}
                <img
                  src="/assets/uiSizing_khmerWebsite_english.png"
                  alt="topicsUI"
                  className="topics-UI-Image"
                />
                <img
                  src="/assets/uiSizing_khmerWebsite.png"
                  alt="topicsUI"
                  className="topics-UI-Image"
                />
                 </Row>
              </Col> */}
            </Row>

            <Row style={{}}>
              <Col span={20}>
                {" "}
                <img
                  src="/assets/uiSizing_ikea_russia.png"
                  alt="topicsUI"
                  className="ikea-russia-Image"
                />
                <img
                  src="/assets/uiSizing_ikea_english.png"
                  alt="topicsUI"
                  className="ikea-englishImage"
                />
              </Col>
            </Row>

            <Col span={24}>
              <Text bold>
                <h3>Word Wrapping</h3>
              </Text>
              <br />
              <br />

              <Text>
                An important concept to understand in UI Sizing is word wrapping
                or also known and line breaking. The meaning of word
                wrapping/line breaking is breaking a section or multiple
                sections of a sentence so that it will fit into the available
                width of the page. Note example of word wrap and no word wrap in
                image below:
              </Text>
              <br />
              <br />
              <img
                src="/assets/uiSizing_wordwrap.png"
                alt="topicsUI"
                className="uiSizing-wordwrap-Image"
              />

              <br />
              <br />
              <Text>
                If word wrapping or line breaking was not implemented then the
                sentences would cascade out of the User Interface or screen.
                This causes a list of issues and problems for the user as the
                Application/ UI becomes hard to read and not user friendly, this
                will deter users from using your application as instead of just
                scrolling vertically, users will also have to scroll
                horizontally and vertically to read sentences and content.
                <br />
                <br />
                <br />
              </Text>
            </Col>

            <Col span={24}>
              <Text bold>
                <h3>Font Accountability</h3>
              </Text>
              <br />
              <br />

              <Text>
                The last important concept of UI Sizing is to consider Font
                Accountability. The different types of font styles may be
                localised differently in different languages and cause issues
                during localisation especially if the font type is not
                recognised by encoding. It would be dangerous for a
                developer/localiser for users to assume that all font styles
                “claiming ” to be unicode usable will resolve all font related
                issues when localised. A very important concept to remember for
                this is that there are many unicode resources which will provide
                a searchable list of fonts and characters that are unicode
                supported and compatible. A good example of resources to use to
                prevent non supported unicode characters and fonts is to use
                Google Noto Fonts. Example of Google Noto Fonts as a good
                resource in image below:
              </Text>
              <br />
              <br />
              <img
                style={{ width: "75%" }}
                src="/assets/uiSizing_googleFonts.png"
                alt="topicsUI"
                className="uiSizing-googleNoto-Image"
              />

              <br />
              <br />
              <br />
            </Col>

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
              {/* <Col span={10}>
                {" "}
                <img
                  src="/assets/UISizing.png"
                  alt="topicsUI"
                  className="topics-UI-Image"
                />
              </Col> */}
              <Col span={24}>
                <Text bold>
                  <h3>Sizing Metrics</h3>
                </Text>
                <br />
                <br />

                <Text>
                  One of the challenges we will come across is giving the right
                  sizing metrics for each specific localised/translated
                  language. We previously touched on how certain
                  localised/translated languages cause the length of sentences
                  to expand or contract due to some languages being more verbose
                  than others. There are many factors that will vary the length
                  of translated sentence but the chart below is a good guideline
                  to help understand the required changes and make preparations
                  for the incoming changes.
                  <br />
                  <br />
                  <img
                    style={{ width: "40%", height: "40%" }}
                    src="/assets/uiSizing_textexpansion_chart.png"
                    alt="topicsUI"
                    className="topics-UI-Image"
                  />
                  <br />
                  <br />
                  This chart should be a helpful guide for developers/localisers
                  to be able to design their UI’s so it is more flexible and
                  adaptable to the localised language and overcome the challenge
                  by adding the required sizing metrics according to required
                  language of localisation.
                  <br />
                </Text>
              </Col>

              <Col span={24}>
                <Text bold>
                  <h3>Word Wrapping</h3>
                </Text>
                <br />
                <br />

                <Text>
                  One of the challenges we will come across is word wrapping for
                  delimited spacing languages for certain asian languages.
                  Examples of these languages are Chinese, Japanese and Thai.
                  Unlike the English language or the majority of Latin languages
                  where word wrapping or line breaking can be inserted after a
                  space line, asian languages rely on syllable boundaries.
                  Syllable boundaries implies that one or two unit sounds define
                  a word, this gives rise to the challenge that word wrapping
                  cannot always be done with white spaces in comparison to the
                  English language. An example can be seen below on difference
                  between Chinese and English sentences, note how there is no
                  spacing between individual words in Chinese
                  <br />
                  <br />
                  Example:
                  <br />
                  English : Learn about localisation!
                  <br />
                  Chinese: 了解本地化!
                  <br />
                  Japanese: ローカリゼーションについて学ぶ
                  <br />
                  <br />
                  In most cases we cannot use common word wrapping or line
                  breaking in this situation. For an application to handle word
                  wrapping without using whitespaces is much easier said than to
                  be actually done, majority of the time this type of situation
                  will require linguistic expertise to handle these types of
                  issues correctly. The image below showcases how line breaking
                  is identified in the Japanese language:
                  <br />
                  <br />
                  <img
                    style={{ width: "25%", height: "25%" }}
                    src="/assets/uiSizing_linebreak_japan.png"
                    alt="topicsUI"
                    className="topics-UI-Image"
                  />
                  <br />
                  <br />
                  <br />
                </Text>
              </Col>

              <Col span={24}>
                <Text bold>
                  <br />
                  <br />
                  <h3>Font Sizing</h3>
                </Text>
                <br />
                <br />

                <Text>
                  One of the challenges that will be faced during localisation
                  is varying font sizes of languages. Many languages will
                  require a font rescale after being localised, a good example
                  of this is that most latin character languages are still very
                  readable at font size 12px. This is not the case for languages
                  like Chinese, or Japanese, such languages will require an
                  increase in font sizes to be readable. To expect a universal
                  font size is impractical as there are too many things that
                  could vary the font size of respective languages. The solution
                  to this issue is to use a dynamic layout to handle different
                  font sizes if using a universal font size but another more
                  practical solution is to give varying font sizes depending on
                  the language to ensure it fits perfectly in its container and
                  is still readable. A good example of this would be to use CSS
                  if one is building a website, CSS will enable a developer to
                  adapt the font size according to the languages.
                  <br />
                  <br />
                  <img
                    style={{ width: "70%", height: "50%" }}
                    src="/assets/uiSizing_font_css.png"
                    alt="topicsUI"
                    className="topics-UI-Image"
                  />
                  <br />
                  <Text>
                    Sample code which would use for adjust font size for tamil
                    specifically using CSS for website development.
                  </Text>
                  <br />
                  <br />
                  <br />
                  <br />
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
              <Col span={24}>
                <Dropdown overlay={menu}>
                  <Button>
                    Languages <DownOutlined />
                  </Button>
                </Dropdown>

                <div className="lang">
                  <div className={this.props.lang}></div>
                  <ul class="dropdown">{}</ul>
                </div>
              </Col>
            </Row>
            <Divider style={{ marginTop: "100px", marginBottom: "100px" }} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Col>
          <Col xs={1} md={2} lg={4} />
        </Row>
      </Fragment>
    );
  }
}

export default (withRouter, Uisizing);
