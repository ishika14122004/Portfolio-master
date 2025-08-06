import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Lottie from "lottie-react";
import homeAnimation from "../../Assets/home-main3.json";
import Particle from "../Particle";
import Home2 from "./Home2";
import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion";

// Animation setup
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

// FlipWords style
const flipTextStyle = {
  color: "#a855f7",         // Purple
  fontSize: "2.4rem",       // Bigger
  fontWeight: "600",
  marginTop: "0 rem",      // Brings closer to your name
};

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="home-name"> Ishika Barnwal</strong>
              </h1>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginTop: "-130px",
                  marginLeft: "35px",
                }}
              >
                <motion.div
                  className="home-content"
                  initial={fadeUp.initial}
                  animate={fadeUp.animate}
                  transition={fadeUp.transition}
                  viewport={{ once: true }}
                  style={{ width: "100%" }}
                >
                  <div className="main-left">
                    <div style={flipTextStyle}>
                      <FlipWords
                        words={[
                          "Frontend Developer",
                          "UI/UX Designer",
                          "Freelancer",
                          "Open Source Contributor",
                        ]}
                        duration={3000}
                        className="flip-text"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 50 }}>
              <Lottie
                animationData={homeAnimation}
                loop={true}
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
