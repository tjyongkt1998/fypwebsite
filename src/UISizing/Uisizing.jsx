import React, { Component, Fragment } from "react";

import { Row, Col, Typography, Button, Divider, Menu, Dropdown } from "antd";
// import { useTranslation, withTranslation, Trans } from "react-i18next";
import { DownOutlined, BookOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import "../UISizing/Uisizing.css";

const { Text } = Typography;

class Uisizing extends Component {
  handleMenuClick = (e) => {
    console.log("click", e);
    if (e.key === "1") {
      document.getElementById("uisizingEnglish").classList.add("unhidden2");
      document.getElementById("uisizingEnglish").classList.remove("hidden");
      document.getElementById("uisizingRussian").classList.add("hidden");
      document.getElementById("uisizingRussian").classList.remove("unhidden2");
      document.getElementById("uisizingChinese").classList.add("hidden");
      document.getElementById("uisizingChinese").classList.remove("unhidden2");
      document.getElementById("uisizingJapanese").classList.add("hidden");
      document.getElementById("uisizingJapanese").classList.remove("unhidden2");
    } else if (e.key === "2") {
      document.getElementById("uisizingEnglish").classList.add("hidden");
      document.getElementById("uisizingEnglish").classList.remove("unhidden2");
      document.getElementById("uisizingRussian").classList.add("unhidden2");
      document.getElementById("uisizingRussian").classList.remove("hidden");
      document.getElementById("uisizingChinese").classList.add("hidden");
      document.getElementById("uisizingChinese").classList.remove("unhidden2");
      document.getElementById("uisizingJapanese").classList.add("hidden");
      document.getElementById("uisizingJapanese").classList.remove("unhidden2");
    } else if (e.key === "3") {
      document.getElementById("uisizingEnglish").classList.add("hidden");
      document.getElementById("uisizingEnglish").classList.remove("unhidden2");
      document.getElementById("uisizingRussian").classList.add("hidden");
      document.getElementById("uisizingRussian").classList.remove("unhidden2");
      document.getElementById("uisizingChinese").classList.add("unhidden2");
      document.getElementById("uisizingChinese").classList.remove("hidden");
      document.getElementById("uisizingJapanese").classList.add("hidden");
      document.getElementById("uisizingJapanese").classList.remove("unhidden2");

      console.log("ifStatement", this.state);
    } else if (e.key === "4") {
      document.getElementById("uisizingEnglish").classList.add("hidden");
      document.getElementById("uisizingEnglish").classList.remove("unhidden2");
      document.getElementById("uisizingRussian").classList.add("hidden");
      document.getElementById("uisizingRussian").classList.remove("unhidden2");
      document.getElementById("uisizingChinese").classList.add("hidden");
      document.getElementById("uisizingChinese").classList.remove("unhidden2");
      document.getElementById("uisizingJapanese").classList.add("unhidden2");
      document.getElementById("uisizingJapanese").classList.remove("hidden");

      console.log("ifStatement", this.state);
    }
  };

  handleMenuClick2 = (e) => {
    console.log("click", e);
    if (e.key === "1") {
      document.getElementById("uisizingEnglish2").classList.add("unhidden");
      document.getElementById("uisizingEnglish2").classList.remove("hidden");
      document.getElementById("uisizingRussian2").classList.add("hidden");
      document.getElementById("uisizingRussian2").classList.remove("unhidden");
      document.getElementById("uisizingChinese2").classList.add("hidden");
      document.getElementById("uisizingChinese2").classList.remove("unhiddenChinese");
      document.getElementById("uisizingJapanese2").classList.add("hidden");
      document.getElementById("uisizingJapanese2").classList.remove("unhiddenJapanese");
    } else if (e.key === "2") {
      document.getElementById("uisizingEnglish2").classList.add("hidden");
      document.getElementById("uisizingEnglish2").classList.remove("unhidden");
      document.getElementById("uisizingRussian2").classList.add("unhidden");
      document.getElementById("uisizingRussian2").classList.remove("hidden");
      document.getElementById("uisizingChinese2").classList.add("hidden");
      document.getElementById("uisizingChinese2").classList.remove("unhiddenChinese");
      document.getElementById("uisizingJapanese2").classList.add("hidden");
      document.getElementById("uisizingJapanese2").classList.remove("unhiddenJapanese");
    } else if (e.key === "3") {
      document.getElementById("uisizingEnglish2").classList.add("hidden");
      document.getElementById("uisizingEnglish2").classList.remove("unhidden");
      document.getElementById("uisizingRussian2").classList.add("hidden");
      document.getElementById("uisizingRussian2").classList.remove("unhidden");
      document.getElementById("uisizingChinese2").classList.add("unhiddenChinese");
      document.getElementById("uisizingChinese2").classList.remove("hidden");
      document.getElementById("uisizingJapanese2").classList.add("hidden");
      document.getElementById("uisizingJapanese2").classList.remove("unhiddenJapanese");

      console.log("ifStatement", this.state);
    } else if (e.key === "4") {
      document.getElementById("uisizingEnglish2").classList.add("hidden");
      document.getElementById("uisizingEnglish2").classList.remove("unhidden");
      document.getElementById("uisizingRussian2").classList.add("hidden");
      document.getElementById("uisizingRussian2").classList.remove("unhidden");
      document.getElementById("uisizingChinese2").classList.add("hidden");
      document.getElementById("uisizingChinese2").classList.remove("unhiddenChinese");
      document.getElementById("uisizingJapanese2").classList.add("unhiddenJapanese");
      document.getElementById("uisizingJapanese2").classList.remove("hidden");

      console.log("ifStatement", this.state);
    }
  };



  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1" className={"dropdown-text"} icon={<BookOutlined />}>
          English
        </Menu.Item>
        <Menu.Item key="2" className={"dropdown-text"} icon={<BookOutlined />}>
          Russian
        </Menu.Item>
        <Menu.Item key="3" className={"dropdown-text"} icon={<BookOutlined />}>
          Chinese
        </Menu.Item>
        <Menu.Item key="4" className={"dropdown-text"} icon={<BookOutlined />}>
          Japanese
        </Menu.Item>
      </Menu>
    );

    const menu2 = (
      <Menu onClick={this.handleMenuClick2}>
        <Menu.Item key="1" className={"dropdown-text"} icon={<BookOutlined />}>
          English
        </Menu.Item>
        <Menu.Item key="2" className={"dropdown-text"} icon={<BookOutlined />}>
          Russian
        </Menu.Item>
        <Menu.Item key="3" className={"dropdown-text"} icon={<BookOutlined />}>
          Chinese
        </Menu.Item>
        <Menu.Item key="4" className={"dropdown-text"} icon={<BookOutlined />}>
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
          <Col xs={1} md={2} lg={3} style={{ backgroundColor: "#F0F0F0" }} />
          <Col
            xs={22}
            md={20}
            lg={18}
            style={{ paddingRight: "20px", paddingLeft: "20px" }}
          >
            <Col span={24} className="homepage-col">
              <Text
                style={{
                  textAlign: "center",
                  fontSize: "50px",
                  fontFamily: "lato-bold",
                  marginTop: "30px",
                }}
              >
                UI Sizing
              </Text>
            </Col>

            <Col span={24}>
              <br />
              <br />
              <Text underline className="uisizing-header">
                <h2>Overview</h2>
              </Text>
              <br />
              <br />
            </Col>

            <Row style={{}}>
              <Col span={10}>
                {" "}
                <img
                  src="/assets/uiSizing_windowUI.png"
                  alt="topicsUI"
                  className="topics-UI-header"
                />
              </Col>
              <Col span={14} className="uisizing-intro">
                <Text>
                  UI sizing is a very important aspect to consider during
                  localisation and internationalisation as some languages are
                  more verbose than others meaning that as a localiser you have
                  to account for expansion and contraction of sentences
                  depending on languages.
                  <br />
                  <br />
                  <b> Examples:</b> <br />
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
                  <b> 1. Sizing Metrics</b>
                  <br />
                  <b> 2. Word Wrapping</b> <br />
                  <b>3.Font Accountability</b>
                  <br />
                  <br />
                </Text>
              </Col>
            </Row>

            <Divider />

            <Col span={24}>
              <br />
              <br />
              <Text
                underline
                style={{
                  textAlign: "center",
                  fontSize: "50px",
                  fontFamily: "lato-bold",
                  marginTop: "30px",
                }}
              >
                <h2>Concepts</h2>
              </Text>

              <br />
            </Col>

            <Row style={{}}>
              <Col span={24}>
                <Text className="uisizing-header">
                  Sizing Metrics
                </Text>
                <br />
                <br />

                <Text className="uisizing-intro">
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
            </Row>

            <Row style={{}}>
              <Col span={24}>
                {" "}
                <img
                  src="/assets/uiSizing_ikea_russia.PNG"
                  alt="topicsUI"
                  className="ikea-russia-Image"
                />
                <img
                  src="/assets/uiSizing_ikea_english.PNG"
                  alt="topicsUI"
                  className="ikea-englishImage"
                />
              </Col>
            </Row>

            <Divider />

            <Col span={24}>
              <Text className="uisizing-header">
                <h3>Word Wrapping</h3>
              </Text>
              <br />
              <br />

              <Text className="uisizing-intro">
                An important concept to understand in UI Sizing is word wrapping
                or also known and line breaking. The meaning of word
                wrapping/line breaking is breaking a section or multiple
                sections of a sentence so that it will fit into the available
                width of the page. Note example of word wrap and no word wrap in
                image below:
              </Text>
              <br />
              <br />
              <br />
              <img
                src="/assets/uiSizing_wordwrap.png"
                alt="topicsUI"
                className="uiSizing-wordwrap-Image"
              />

              <br />
              <br />
              <Text className="uisizing-intro">
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

            <Divider />
            <Col span={24}>
              <Text className="uisizing-header">
                
                Font Accountability
              </Text>
              <br />
              <br />

              <Text className="uisizing-intro">
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
              <br />
              <br />
              <Text>
                Example of Google Noto Font:
                <br />
                <br />
              </Text>
              <img
                style={{ width: "75%" }}
                src="/assets/uiSizing_googleFonts.PNG"
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
              <Col span={24}>
                <Text className="uisizing-header">
                  Sizing Metrics
                </Text>
                <br />
                <br />

                <Text className="uisizing-intro">
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
                    style={{ width: "75%", height: "70%" }}
                    src="/assets/uiSizing_textexpansion_chart.PNG"
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
                </Text>
              </Col>
              <br />
              <br />
              
              <Divider style={{paddingTop:"20px",paddingBottom:"20px"}} />
              <br />
              <br />
              <Col span={24}>
                <Text className="uisizing-header">
                  Word Wrapping
                </Text>
                <br />
                <br />

                <Text className="uisizing-intro">
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
                    style={{ width: "40%", height: "30%" }}
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
                <Text className="uisizing-header">
                  <br />
                  <br />
                  <Divider />
                 Font Sizing
                </Text>
                <br />
                <br />

                <Text className="uisizing-intro">
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
                    style={{ width: "100%", height: "25%" }}
                    src="/assets/uiSizing_font_css.PNG"
                    alt="topicsUI"
                    className="topics-UI-Image"
                  />
                  <br />
                  <Text className="uisizing-intro">
                    Sample code which we would use for adjust font size for
                    tamil specifically using CSS for website development.
                  </Text>
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

            <Row>
              <Col span={12}>
                <Dropdown overlay={menu}>
                  <Button className={"dropdown-button"}>
                    Languages <DownOutlined />
                  </Button>
                </Dropdown>
              </Col>

              <Col span={12}>
                <Dropdown overlay={menu2}>
                  <Button className={"dropdown-button"}>
                    Languages <DownOutlined />
                  </Button>
                </Dropdown>
              </Col>
              <br />
              <br />
              <br />

<Col span={1}/>
              <Col
                span={7}
                style={{ outline: "solid black", marginTop: "20px" }}
              >
                <div id="uisizingEnglish" className={"unhidden2"}>
                  "Learn about UI Sizing localisation issues and concepts!"
                </div>
                <div id="uisizingRussian" className={"hidden"}>
                  " Узнайте о проблемах и концепциях локализации размера
                  пользовательского интерфейса!"
                </div>
                <div id="uisizingChinese" className={"hidden"}>
                  "了解 UI Sizing 本地化问题和概念！"
                </div>
                <div id="uisizingJapanese" className={"hidden"}>
                  "UIサイジングのローカリゼーションの問題と概念について学びましょう！"
                </div>
              </Col>

              <Col span={8}>
                {/* <Text className="uisizing-header">
                  <h3>Sizing Metrics</h3>
                </Text> */}
              </Col>

              <Col
                span={7}
                style={{ outline: "solid black", marginTop: "20px" }}
              >
                <div id="uisizingEnglish2" className={"unhidden"}>
                  "Learn about UI Sizing localisation issues and concepts!"
                </div>
                <div id="uisizingRussian2" className={"hidden"}>
                  " Узнайте о проблемах и концепциях локализации размера
                  пользовательского интерфейса!"
                </div>
                <div id="uisizingChinese2" className={"hidden"}>
                  "了解 UI Sizing 本地化问题和概念！"
                </div>
                <div id="uisizingJapanese2" className={"hidden"}>
                  "UIサイジングのローカリゼーションの問題と概念について学びましょう！"
                </div>
              </Col>
              <Col span={1}/>
            </Row>
            <br />
            <br />
            <br />

            <Row>
            <Col span={1}/>
              <Col span={10}>
                <Text className="uisizing-interactivity"> <b>UI Sizing Issues Detected </b><br/>
                <br/>
                All Languages have the same phrases<br/>
               <b> English</b> : No Word Wrapping/Breaking and No Responsive Design!<br/>
               <b> Russian</b> : No Word Wrapping/Breaking,No Responsive Design and Expansion of Sentence Length! <br/>
               <b> Chinese</b> : No Word Wrapping/Breaking and Responsive Design, Shrinking of Sentence Length and no Font Accountability(Small Fonts)!<br/>
               <b>  Japanese</b> : No Word Wrapping/Breaking and Responsive Design, Expansion of Sentence Length and no Font Accountability(Small Fonts)!<br/>
                </Text>
              </Col>

              <Col span={3} />

              <Col span={9}>
                <Text className="uisizing-interactivity"> <b>UI Sizing Fixes Implemented </b><br/>
                <br/>
                All Languages have the same phrases<br/>
               <b> English</b> : Word Wrapping/Breaking and Responsive Design!<br/>
               <b> Russian</b> : Word Wrapping/Breaking, Responsive Design and Expansion of Sentence Length ! <br/>
               <b> Chinese</b> : Wrapping/Breaking, Responsive Design, Shrinking of Sentence Length and Accountability(Increased Fonts)!<br/>
               <b>  Japanese</b> : Wrapping/Breaking, Responsive Design, Expansion of Sentence Length and Font Accountability(Increased Fonts)!<br/>
                </Text>
              </Col>

              <Col span={1}/>
            </Row>

            <Divider style={{ marginTop: "100px", marginBottom: "100px" }} />
            <br />
            <br />
            <br />
          </Col>
          <Col xs={1} md={2} lg={3} style={{ backgroundColor: "#F0F0F0" }} />
        </Row>
      </Fragment>
    );
  }
}

export default (withRouter, Uisizing);
