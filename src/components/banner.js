import React from "react";
import { Container, Row } from "react-bootstrap";
import banner from "../images/hops-brew.jpg";

const Banner = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <img className="banner-image" src={banner} alt="banner" />
        </Row>
      </Container>{" "}
    </>
  );
};

export default Banner;
