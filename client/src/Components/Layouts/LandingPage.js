import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

class LandingPage extends Component {
  render() {
    return (
      <>
        <Header />
        <Content />
        {/* <Footer /> */}
      </>
    );
  }
}

export default LandingPage;
