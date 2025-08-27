import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar4.png"; // PNG image
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I discovered my love for programming and have been learning and
              exploring ever since!
              <br />
              <br />
              I am comfortable with languages like
              <i>
                <b className="purple"> JavaScript and Java. </b>
              </i>
              <br />
              <br />
              My areas of interest include building new &nbsp;
              <i>
                <b className="purple">Web Applications and Products </b> and
                also exploring{" "}
                <b className="purple">emerging technologies.</b>
              </i>
              <br />
              <br />
              Whenever possible, I love applying my passion for building
              products with
              <i>
                <b className="purple">
                  {" "}modern JavaScript libraries and frameworks
                </b>
              </i>
              &nbsp; such as
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>

          <Col md={3} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ishika14122004"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:ishikabarnwal2004@gmail.com"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ishika-barnwal-/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_ishikaushik__/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
