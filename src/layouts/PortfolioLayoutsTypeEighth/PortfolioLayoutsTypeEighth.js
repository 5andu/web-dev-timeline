import { Row, Col, Container } from "reactstrap";
import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.css";

import Portfolio from "./Portfolio/PortfolioTypeEighth";
import placeholder from "../../../img/placeholder-gray.png";
import Slider from "./Slider/Slider";
import classes from "./PortfolioLayoutsTypeEighth.module.css";

const title = "Projects";

class PortfolioLayoutsTypeEighth extends Component {
  state = {
    projects: [
      {
        title: "My first website for a client on Wordpress",
        id: 1,
        description:
          "I created my first website when I was 16, trying to build my first business, which was not successful. But I used this experience one year later to build my first client project on Wordpress",
        picture: placeholder,
        link: "https://europedemenagementgroupage.com/",
      },
      {
        title: "My first Webflow project",
        id: 2,
        description:
          "After working for a few clients as a freelancer, I joined the French fintech Bankin' as a marketer. I learned to design websites on the side using Webflow during that time, here's an example of a landing page I built for them.",
        picture: placeholder,
        link: "https://bankin.com/fr/referral.html",
      },
      {
        title: "Method Wireframe Kit 3.0",
        id: 3,
        description:
          "Change only three colors in pallete and get custom style that you need. The same thing with fonts, here are five text styles which you can change in a few clicks.",
        picture: placeholder,
        link: "/some-link",
      },
      {
        title: "Method Wireframe Kit 1.0",
        id: 4,
        description:
          "Change only three colors in pallete and get custom style that you need. The same thing with fonts, here are five text styles which you can change in a few clicks.",
        picture: placeholder,
        link: "/some-link",
      },
      {
        title: "Method Wireframe Kit 2.0",
        id: 5,
        description:
          "Change only three colors in pallete and get custom style that you need. The same thing with fonts, here are five text styles which you can change in a few clicks.",
        picture: placeholder,
        link: "/some-link",
      },
      {
        title: "Method Wireframe Kit 3.0",
        id: 6,
        description:
          "Change only three colors in pallete and get custom style that you need. The same thing with fonts, here are five text styles which you can change in a few clicks.",
        picture: placeholder,
        link: "/some-link",
      },
      {
        title: "Method Wireframe Kit 3.0",
        id: 7,
        description:
          "Change only three colors in pallete and get custom style that you need. The same thing with fonts, here are five text styles which you can change in a few clicks.",
        picture: placeholder,
        link: "/some-link",
      },
      {
        title: "Method Wireframe Kit 3.0",
        id: 8,
        description:
          "Change only three colors in pallete and get custom style that you need. The same thing with fonts, here are five text styles which you can change in a few clicks.",
        picture: placeholder,
        link: "/some-link",
      },
      {
        title: "Method Wireframe Kit 3.0",
        id: 9,
        description:
          "Change only three colors in pallete and get custom style that you need. The same thing with fonts, here are five text styles which you can change in a few clicks.",
        picture: placeholder,
        link: "/some-link",
      },
      {
        title: "Method Wireframe Kit 3.0",
        id: 10,
        description:
          "Change only three colors in pallete and get custom style that you need. The same thing with fonts, here are five text styles which you can change in a few clicks.",
        picture: placeholder,
        link: "/some-link",
      },
      {
        title: "Method Wireframe Kit 3.0",
        id: 11,
        description:
          "Change only three colors in pallete and get custom style that you need. The same thing with fonts, here are five text styles which you can change in a few clicks.",
        picture: placeholder,
        link: "/some-link",
      },
    ],
  };

  renderCards() {
    const card = this.state.projects;
    const listItems = card.map((item, index) => {
      return (
        <div key={index}>
          <Portfolio
            title={item.title}
            descr={item.description}
            link={item.link}
          >
            <img src={item.picture} width="920" height="500" alt="" />
          </Portfolio>
        </div>
      );
    });
    return <Slider array={listItems} />;
  }

  render() {
    return (
      <React.Fragment>
        <section
          className={`${classes.portfolio} ${
            this.props.dark ? `dark ${classes.dark}` : ""
          }`}
        >
          <div className={classes.gridWrapper}>
            <Container>
              <Row>
                <Col className={classes.hideElement}>
                  <h1>{title}</h1>
                </Col>
              </Row>
            </Container>
            <Container className={classes.portfolioContainer}>
              <Row>
                <Col className="col-lg-11 col-md-11 col-sm-11 ml-auto">
                  {this.renderCards()}
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default PortfolioLayoutsTypeEighth;
