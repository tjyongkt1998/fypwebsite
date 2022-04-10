import React, { Component, Fragment } from "react";
import { Row, Col, Typography, Divider, Menu, Button, Dropdown } from "antd";
import { DownOutlined, BookOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import "../Bidirectional/Bidirectional.css";

const { Text } = Typography;

class Bidirectional extends Component {
  handleMenuClick = (e) => {
    console.log("click", e);
    if (e.key === "1") {
      document.getElementById("uisizingEnglish").classList.add("unhidden2");
      document.getElementById("uisizingEnglish").classList.remove("hidden");
      document.getElementById("uisizingRussian").classList.add("hidden");
      document.getElementById("uisizingRussian").classList.remove("unhidden");
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
      document
        .getElementById("uisizingChinese2")
        .classList.remove("unhiddenChinese");
      document.getElementById("uisizingJapanese2").classList.add("hidden");
      document
        .getElementById("uisizingJapanese2")
        .classList.remove("unhiddenJapanese");
    } else if (e.key === "2") {
      document.getElementById("uisizingEnglish2").classList.add("hidden");
      document.getElementById("uisizingEnglish2").classList.remove("unhidden");
      document.getElementById("uisizingRussian2").classList.add("unhidden");
      document.getElementById("uisizingRussian2").classList.remove("hidden");
      document.getElementById("uisizingChinese2").classList.add("hidden");
      document
        .getElementById("uisizingChinese2")
        .classList.remove("unhiddenChinese");
      document.getElementById("uisizingJapanese2").classList.add("hidden");
      document
        .getElementById("uisizingJapanese2")
        .classList.remove("unhiddenJapanese");
    } else if (e.key === "3") {
      document.getElementById("uisizingEnglish2").classList.add("hidden");
      document.getElementById("uisizingEnglish2").classList.remove("unhidden");
      document.getElementById("uisizingRussian2").classList.add("hidden");
      document.getElementById("uisizingRussian2").classList.remove("unhidden");
      document
        .getElementById("uisizingChinese2")
        .classList.add("unhiddenChinese");
      document.getElementById("uisizingChinese2").classList.remove("hidden");
      document.getElementById("uisizingJapanese2").classList.add("hidden");
      document
        .getElementById("uisizingJapanese2")
        .classList.remove("unhiddenJapanese");

      console.log("ifStatement", this.state);
    } else if (e.key === "4") {
      document.getElementById("uisizingEnglish2").classList.add("hidden");
      document.getElementById("uisizingEnglish2").classList.remove("unhidden");
      document.getElementById("uisizingRussian2").classList.add("hidden");
      document.getElementById("uisizingRussian2").classList.remove("unhidden");
      document.getElementById("uisizingChinese2").classList.add("hidden");
      document
        .getElementById("uisizingChinese2")
        .classList.remove("unhiddenChinese");
      document
        .getElementById("uisizingJapanese2")
        .classList.add("unhiddenJapanese");
      document.getElementById("uisizingJapanese2").classList.remove("hidden");

      console.log("ifStatement", this.state);
    }
  };
  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1" className={"dropdown-text"} icon={<BookOutlined />}>
          Logo
        </Menu.Item>
        <Menu.Item key="2" className={"dropdown-text"} icon={<BookOutlined />}>
          Icon
        </Menu.Item>
        <Menu.Item key="3" className={"dropdown-text"} icon={<BookOutlined />}>
          Sentence
        </Menu.Item>
        <Menu.Item key="4" className={"dropdown-text"} icon={<BookOutlined />}>
          Number
        </Menu.Item>
      </Menu>
    );

    const menu2 = (
      <Menu onClick={this.handleMenuClick2}>
        <Menu.Item key="1" className={"dropdown-text"} icon={<BookOutlined />}>
          Logo
        </Menu.Item>
        <Menu.Item key="2" className={"dropdown-text"} icon={<BookOutlined />}>
          Icon
        </Menu.Item>
        <Menu.Item key="3" className={"dropdown-text"} icon={<BookOutlined />}>
          Sentence
        </Menu.Item>
        <Menu.Item key="4" className={"dropdown-text"} icon={<BookOutlined />}>
          Number
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
          <Col xs={1} md={2} lg={4} style={{ backgroundColor: "#F0F0F0" }} />
          <Col
            xs={22}
            md={20}
            lg={16}
            style={{ paddingRight: "20px", paddingLeft: "20px" }}
          >
            <Col span={24} className="homepage-col">
              <Text
                style={{
                  textAlign: "center",
                  fontSize: "50px",
                  fontFamily: "lato-bold",
                  marginTop: "20px",
                }}
              >
                Bidirectional
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
                  src="/assets/bidi_RTL.png"
                  alt="topicsBidirectional"
                  style={{ marginTop: "80px" }}
                />
              </Col>
              <Col span={14}>
                <Text className="bidi-intro">
                  In this topic of Localisaiton and internationalisation we wil
                  be talking about Bidirectional Languages, also better known as
                  "BiDi". BiDi is used where text and user interfaces are main
                  read and written in the format of Right to Left(RTL) instead
                  of the normal reading and writing format of Left to Right in
                  most Languages these days. It is important to note these RTL
                  language concepts and challenges as they are very different in
                  both UI Design and Structure during localisation.
                  <br />
                  <br />
                  Examples of Languages that use RTL Languages:
                  <br />
                  1. <b>Arabic</b>
                  <br />
                  2. <b>Hebrew</b>
                  <br />
                  3. <b>Armaic</b>
                  <br />
                  4. <b>Azeri</b>
                  <br />
                  5. <b>Dhivehi/Maldivian</b>
                  <br />
                  6. <b>Persian/Fars</b>
                  <br />
                  7. <b>Urdu</b>
                  <br />
                  <br />
                  Although there are so many RTL languages, our main language we
                  will use for RTL today will be Arabic. The concepts and
                  bidirectional languages which we will touch on today are
                  listed below:
                  <br />
                  <br />
                  <b>1. Right to Left(RTL)</b>
                  <br />
                  <b>2. UI Mirroring</b>
                  <br />
                  <b>3. Smaller Details</b>
                  <br />
                </Text>
              </Col>
              <Col span={2} />
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
                <Text className="bidi-header">Right To Left (RTL)</Text>
              </Col>
              <br />
              <br />
              <br />
              <br />
              <Col span={10}>
                {" "}
                <img
                  src="/assets/bidi_RTLsample.png"
                  alt="topicsBidirectionalRTL"
                />
                <br />
                <br />
                <br />
                <br />
                <br />
              </Col>
              <Col span={12}>
                <Text className="bidi-intro">
                  The importance of understanding Right To Left(RTL) reading and
                  writing for RTL languages is paramount. It is quite difficult
                  to understand arabic both conceptually and technologically due
                  to RTL as most computer systems software were developed for
                  Left to Right languages like English. The image to the{" "}
                  <b>left</b> is an example of a sentence in English, the
                  localised form of right to left in both correct and incorrect
                  form.
                  <br />
                  <br />
                </Text>
              </Col>

              <Col span={2} />
              <Col span={12}>
                <Text className="bidi-intro">
                  Another important concept to understand about RTL languages is
                  that it is not just the sentences that are in RTL format but
                  the actual layout and UI Design is in RTL also. What usually
                  starts off on the left hand side now start off on the right
                  hand side. Things like the insertion point/cursor for when you
                  are inserting text also start on the right handside of
                  document. Icons, Widget and Applications are also no expection
                  for this rule in RTL languages. A good example of such RTL
                  User Interface is the image to the right. It is the well known
                  Windows UI in Localised RTL languages format.
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </Text>
              </Col>
              <Col span={2} />

              <br />
              <Col span={10}>
                {" "}
                <img
                  src="/assets/bidi_flipping.png"
                  alt="topicsBidirectionalRTL"
                />
              </Col>

              <Col span={24}>
                <Text className="bidi-header">User Interface Mirroring</Text>
              </Col>
              <br />
              <br />
              <br />
              <br />

              <Col span={2} />
              <Col span={20}>
                <Text className="bidi-intro">
                  The next important concept of BiDi is User Interface
                  Mirroring. Due to the difference of layout between LTR and RTL
                  languages, the UI layout and design of the languages must
                  adapt change accordingly to from LTR to RTL. The reading and
                  writing directions not only change but also the image
                  positioning and icon positioning. Often times the layouts or
                  RTL is designed to mirror the original layout of LTR. Another
                  important note is that UI Mirroring requires to be formatted
                  to not only RTL but also change in UI Sizing must be noted as
                  Arabic sentence tend to expand after localisation.
                  <br />
                  <br />
                  The 2 images below are examples of UI Mirroring in English and
                  Arabic. The image on the left showcases an Ikea Product in
                  English, while the image on the right showcases the very same
                  Ikea product in Arabic and the differences in UI as well as a
                  example of UI Mirroring for LTR and RTL languages.
                  <br />
                  <br />
                </Text>
              </Col>
              <Col span={2} />

              <Col span={2} />
              <Col span={10}>
                {" "}
                <img
                  src="/assets/bidi_ikeaBed_OG.png"
                  alt="topicsBidirectionalRTL"
                />
                <br />
                <br />
                <br />
                <br />
                <br />
              </Col>

              <Col span={10}>
                {" "}
                <img
                  src="/assets/bidi_ikeaBed_Flipped.png"
                  alt="topicsBidirectionalRTL"
                  style={{ marginTop: "-23px" }}
                />
                <br />
                <br />
                <br />
                <br />
                <br />
              </Col>
              <Col span={2} />

              <Col span={24}>
                <Text className="bidi-header">Smaller Details</Text>
              </Col>
              <br />
              <br />
              <br />
              <br />

              <Col span={2} />
              <Col span={20}>
                <Text className="bidi-intro">
                  The next important concept of BiDi is for us to understand the
                  significance of the smaller details in BiDi. During
                  localisation of BiDi languages, the devil is in the detail! It
                  is the small details in BiDi which are often overlooked and
                  tend to cause issues in UI display that may confuse the user
                  as elements of LTR are mixed into a RTL UI.
                  <br />
                  <br />
                  Examples of the smaller details which we need to look out for
                  are:
                  <br />
                  1. <b>Ratings</b>: Online rating can impact the exposure and
                  performance of some applications. Traditionally rating stars
                  furthest left are the best rating in LTR but this is the
                  opposite in RTL localised applications.
                  <br />
                  2. <b>Icons</b>: Icons like search and categories are often
                  flipped in RTL languages, it may seem unusual but it perfectly
                  normal in RTL Languages.
                  <br />
                  3. <b>Logos</b>: Company Logos are often in the top left hand
                  corner of website/products but it would be on the top right
                  hand corrner in RTL Languages.
                  <br />
                  4. <b>Calenders</b>: In uniques cases like the Hebrew
                  Calendar, the calendar is also also in RTL instead of LTR.
                  Please note this is not for all RTL languages and only apply
                  in certain situations.
                  <br />
                  <br />
                  <br />
                  The images below shows an example of icons being mirrored into
                  the RTL format of arabic. This is an interesting example as
                  not only the position of the icon is mirrored but the actual
                  icons itself has been mirrored
                  <br />
                  <br />
                </Text>
              </Col>
              <Col span={2} />

              <Col span={24}>
                {" "}
                <img
                  src="/assets/bidi_searchbar_arabic.png"
                  alt="topicsBidirectionalRTL"
                />
              </Col>
              <br />
              <br />
              <Col span={2} />
              <Col span={20}>
                <Text>
                  Example of icons in a UI being localised Arabic RTL
                  <br />
                  <br />
                </Text>
              </Col>
              <Col span={2} />
              <br />
              <br />
            </Row>

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
                <Text className="bidi-header">Right To Left (RTL)</Text>
              </Col>
              <br />
              <br />
              <br />
              <br />
              <Col span={2} />
              <Col span={10}>
                {" "}
                <img
                  src="/assets/bidi_software.jpg"
                  alt="topicsBidirectionalRTL"
                  style={{ width: "50%" }}
                />
                <br />
                <br />
                <br />
                <br />
                <br />
              </Col>
              <Col span={10}>
                <Text className="bidi-intro">
                  One of the most common challenges we will face in
                  Bidirectional Localisation grasping the concepts of localising
                  in Right to Left from Left to right. It is especially
                  challenging if you are trying to localise software or computer
                  systems. This is an issue because most software and computer
                  systems are initially designed for Left to Right layout in
                  english, and due to the lack of technologically required to
                  localise Arabic complexity and diversity.
                  <br />
                  <br />
                  Image to the left showcases software being localised in
                  Arabic. The layout is very different in the both English and
                  Arabic. It is also noted that the UI for arabic has been
                  implemented in a way that it has a Reponsive UI to adapt to
                  the expanding of Arabic text.
                  <br />
                  <br />
                  <br />
                </Text>
              </Col>
              <Col span={2} />

              <Col span={24}>
                <Text className="bidi-header">User Interface Mirroring</Text>
              </Col>
              <br />
              <br />
              <br />
              <br />
              <Col span={2} />
              <Col span={20}>
                <Text className="bidi-intro">
                  The next important challenge of BiDi is User Interface
                  Mirroring. In most cases, UI Mirroring will apply to most
                  things in LTR. However there are a few exceptions, these
                  exceptions mean that certain asepcts in a UI cannot be plainly
                  mirrored. These execeptions are numbers, international phones
                  codes/numbers and zipcodes. This means that internation phone
                  codes/numbers like
                  <b>"+353 1234567" </b> in LTR layouts <b>do not</b>do not
                  become <b>"7654321 353+"</b>
                  after being localised into RTL.
                  <br />
                  <br />
                  The image below showcases a Phone UI which has been localised
                  into Arabic from English. You can note how the 2 layouts are
                  mirrored but there are exceptions to a few categories in the
                  mirrored layout. Those being Phone Number and Zipcode.
                  <br />
                  <br />
                </Text>
              </Col>
              <Col span={2} />

              <Col span={24}>
                {" "}
                <img
                  src="/assets/bidi_phoneUI_arabic.jpeg"
                  alt="topicsBidirectionalRTL"
                />
                <br />
                <br />
                <br />
                <br />
                <br />
              </Col>

              <Col span={24}>
                <Text className="bidi-header">Smaller Details</Text>
              </Col>
              <br />
              <br />
              <br />
              <br />
              <Col span={2} />
              <Col span={20}>
                <Text className="bidi-intro">
                  The next important challenge of BiDi is for us to understand
                  the commonly overlooked smaller details in BiDi. Small details
                  like ratings, posters and calenders are often overlooked in
                  Bidi. This leads to messy localisation of RTL languages which
                  tend to cause confusion or misunderstanding to users of these
                  localised applications. The way to overcome these issues is to
                  grasp the importance of these small details and understand the
                  appropriate implementation.
                  <br />
                  <br />
                  Examples of the smaller details which we need to look out for
                  are:
                  <br />
                  1. <b>Ratings</b>: Online rating can impact the exposure and
                  performance of some applications. Traditionally rating stars
                  furthest left are the best rating in LTR but this is the
                  opposite in RTL localised applications. The image below
                  showcases how Google Store rating looks in Arabic Languages.
                  <br />
                  2. <b>Loading Bars</b>: Loading Bars also loads from Right to
                  Left in RTL languages. An example of such a situation is in
                  the image below.
                  <br />
                  3. <b>Calenders</b>: In uniques cases like the Hebrew
                  Calendar, the calendar is also also in RTL instead of LTR.
                  Please note this is not for all RTL languages and only apply
                  in certain situations. The image below showcases the Hebrew
                  Calendar in the RTL format.
                  <br />
                  <br />
                  <br />
                  The images below shows an example of icons being mirrored into
                  the RTL format of arabic. This is an interesting example as
                  not only the position of the icon is mirrored but the actual
                  icons itself has been mirrored
                  <br />
                  <br />
                </Text>
              </Col>
              <Col span={2} />

              <Col span={8}>
                {" "}
                <img
                  src="/assets/bidi_arab_rating.png"
                  alt="topicsBidirectionalRTL"
                />
              </Col>
              <Col span={2} />
              <Col span={7}>
                {" "}
                <img
                  src="/assets/bidi_loadingbar.jpg"
                  alt="topicsBidirectionalRTL"
                  style={{ marginTop: "70px" }}
                />
              </Col>
              <Col span={1} />
              <Col span={6}>
                {" "}
                <img
                  src="/assets/bidi_calendar_hebrew.jpg"
                  alt="topicsBidirectionalRTL"
                  style={{ marginTop: "70px" }}
                />
              </Col>
              <br />
              <br />
              <Col span={9}>
                <Text className="bidi-intro">
                  1. Example of Rating in Arab Application
                  <br />
                  <br />
                </Text>
              </Col>
              <Col span={7}>
                <Text className="bidi-intro">
                  2. Example of Loading Bar in Arab Application
                  <br />
                  <br />
                </Text>
              </Col>
              <Col span={8}>
                <Text className="bidi-intro">
                  3. Example of a Hebrew Calendar with RTL
                  <br />
                  <br />
                </Text>
              </Col>
              <br />
              <br />
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
              <Col span={3} />
              <Col span={4}>
                <Text className="bidi-header">Left to Right</Text>
              </Col>

              <Col span={4}>
                <Dropdown overlay={menu}>
                  <Button className={"dropdown-button"}>
                    LTR <DownOutlined />
                  </Button>
                </Dropdown>
              </Col>
              <Col span={3} />
              <Col span={4}>
                <Dropdown overlay={menu2}>
                  <Button className={"dropdown-button"}>
                    RTL <DownOutlined />
                  </Button>
                </Dropdown>
              </Col>

              <Col span={4}>
                <Text className="bidi-header">Left to Right</Text>
              </Col>

              <br />
              <br />
              <br />

              <Col span={10} style={{ marginTop: "20px" }}>
                <div id="uisizingEnglish" className={"unhidden2"}>
                  <img
                    src="/assets/bigi_logo.PNG"
                    alt="topicsBidirectionalRTL"
                  />
                </div>
                <div id="uisizingRussian" className={"hidden"}>
                  <img
                    src="/assets/bidi_checkbox.PNG"
                    alt="topicsBidirectionalRTL"
                  />
                </div>
                <div id="uisizingChinese" className={"hidden"}>
                  <img
                    src="/assets/bidi_filter_english.PNG"
                    alt="topicsBidirectionalRTL"
                  />
                </div>
                <div id="uisizingJapanese" className={"hidden"}>
                  <img
                    src="/assets/bidi_number.PNG"
                    alt="topicsBidirectionalRTL"
                  />
                </div>
              </Col>

              <Col span={4}></Col>

              <Col span={10} style={{ marginTop: "20px" }}>
                <div id="uisizingEnglish2" className={"unhidden"}>
                  <img
                    src="/assets/bidi_logo_arabic.PNG"
                    alt="topicsBidirectionalRTL"
                  />
                </div>
                <div id="uisizingRussian2" className={"hidden"}>
                  <img
                    src="/assets/bidi_arabic_checkbox.PNG"
                    alt="topicsBidirectionalRTL"
                  />
                </div>
                <div id="uisizingChinese2" className={"hidden"}>
                  <img
                    src="/assets/bidi_filter_arabic.PNG"
                    alt="topicsBidirectionalRTL"
                  />
                </div>
                <div id="uisizingJapanese2" className={"hidden"}>
                  <img
                    src="/assets/bidi_number_arabic.PNG"
                    alt="topicsBidirectionalRTL"
                  />
                </div>
                <br />
                <br />
                <br />
                <br />
                </Col>
                <Col span={2} />
                <Col span={20}>
                  <Text className={"bidi-intro"}>
                    In this Interactivity Section, we have 2 buttons with which
                    will showcase the difference in LTR and RTL with the exam
                    same content. The Buttons contain Logo, Number, Sentence and
                    Icon in both LTR and RTL, all content is the exact same with
                    the only difference being localised from English (LTR) to
                    Arabic (RTL).
                  </Text>
                </Col>
                <br />
                <br />
                <br />
                <br />
                <br />
             
              <Col span={2} />
            </Row>
            <Divider style={{ marginTop: "100px", marginBottom: "100px" }} />
            <br />
            <br />
            <br />
          </Col>
          <Col xs={1} md={2} lg={4} style={{ backgroundColor: "#F0F0F0" }} />
        </Row>
      </Fragment>
    );
  }
}

export default (withRouter, Bidirectional);
