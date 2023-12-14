import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../assets/img/img.png";

export default function HeroSection() {
  return (
    <div className="main-container">
      <Container
        style={{ paddingTop: "3rem", paddingBottom: "3rem", columnGap: "1rem" }}
      >
        <Row>
          <Col lg={8} sm={12}>
            <h1 className="heading">
              Request <span style={{ color: "#4040DA" }}>Callback</span>
            </h1>
            <Container>
              <Row>
                <Col>
                  Name <span style={{ color: "#4040DA" }}>*</span>
                  <br />
                  <input
                    placeholder="John"
                    style={{ paddingLeft: "6px" }}
                  ></input>
                </Col>
                <Col>
                  Email<span style={{ color: "#4040DA" }}>*</span>
                  <br />
                  <input
                    placeholder="john@email.com"
                    style={{ paddingLeft: "6px" }}
                  ></input>
                </Col>
              </Row>
              <Row>
                <Col>
                  Mobile no. <span style={{ color: "#4040DA" }}>*</span>
                  <br />
                  <input
                    placeholder="00 (123) 456 78 90"
                    style={{ paddingLeft: "6px" }}
                  ></input>
                </Col>
                <Col>
                  Looking to invest (in Rs.)
                  <br />
                  <input
                    placeholder="john@email.com"
                    style={{ paddingLeft: "6px" }}
                  ></input>
                </Col>
              </Row>
            </Container>
            <div>
              <input
                type="checkbox"
                style={{ width: "auto", marginLeft: "14px", display: "inline" }}
              ></input>
              <span style={{ display: "inline" }}>
                I authorize Estee Advisors Pvt. Ltd. to contact me. This will
                override registry on the NDNC. As per SEBI guide Lines, minimum
                investment required is of ₹50 Lakhs.
              </span>
            </div>
            <div className="callback-btn">Request Callback</div>
          </Col>
          <Col
            lg={4}
            sm={12}
            style={{
              backgroundColor: "#A73A3A ",
              width: "418px",
              height: "500px",
              borderRadius: "60px",
              position: "absolute",
              left: "39.5rem",
              top: "6rem",
            }}
          >
            <div>
              <img
                src={img}
                alt="img"
                style={{
                  width: "auto",
                  height: "500px",
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}