import React, { useRef, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Particle from "../Particle";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { AiFillGithub, AiFillInstagram, AiOutlineMail } from "react-icons/ai";

function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({
    text: "",
    isError: false,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_32oaq0i",
        "template_wkjm518",
        form.current,
        "87isppkTWGWp475db"
      )
      .then(
        () => {
          setSubmitMessage({
            text: "Message sent successfully!",
            isError: false,
          });
          form.current.reset();
        },
        () => {
          setSubmitMessage({
            text: "Failed to send message. Try again!",
            isError: true,
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitMessage({ text: "", isError: false }), 5000);
      });
  };

  return (
    <section>
      <Container
        fluid
        className="contact-section"
        id="contact"
        style={{ position: "relative" }}
      >
        <Particle />

        <Container className="home-content" style={{ position: "relative" }}>
          <Row className="align-items-center">
            {/* LEFT SIDE */}
            <Col
              md={6}
              className="contact-header"
              style={{ position: "relative", zIndex: 10 }}
            >
              <motion.h1
                className="heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ paddingBottom: 15 }}
              >
                Get in <strong className="main-name">Touch</strong>
              </motion.h1>

              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#c9c9c9",
                  maxWidth: "90%",
                }}
              >
                Have an opportunity, an idea to discuss, or just want to say
                hello? Drop me a message and I’ll get back to you at the
                earliest.
              </p>

              <div
                style={{
                  marginTop: "30px",
                  textAlign: "left",
                  lineHeight: "2rem",
                }}
              >
                <p style={{ fontSize: "1.1rem" }}>
                  <FaEnvelope
                    style={{ marginRight: "10px", color: "#c770f0" }}
                  />
                  <strong>Email:</strong> ishika14122004@gmail.com
                </p>
                <p style={{ fontSize: "1.1rem" }}>
                  <FaPhoneAlt
                    style={{ marginRight: "10px", color: "#c770f0" }}
                  />
                  <strong>Phone:</strong> +91-7897329745
                </p>
                <p style={{ fontSize: "1.1rem" }}>
                  <FaMapMarkerAlt
                    style={{ marginRight: "10px", color: "#c770f0" }}
                  />
                  <strong>Location:</strong> Varanasi, India
                </p>
              </div>

              <div style={{ marginTop: "25px" }}>
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
                      href="https://www.linkedin.com/in/ishika-barnwal/"
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
              </div>
            </Col>

            {/* RIGHT SIDE - FORM */}
            <Col md={6} style={{ position: "relative", zIndex: 20 }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Form
                  ref={form}
                  onSubmit={sendEmail}
                  style={{
                    background: "rgba(17, 4, 24, 0.95)",
                    padding: "25px",
                    borderRadius: "16px",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
                    transition: "all 0.4s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 8px 30px rgba(199, 112, 240, 0.4)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 4px 15px rgba(0, 0, 0, 0.4)")
                  }
                >
                
                  <Form.Group className="mb-3">
                    <Form.Label style={{ color: "white" }}>
                      Your Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Ginny"
                      required
                      style={{
                        background: "#fff",
                        color: "#000",
                        border: "2px solid transparent",
                        borderRadius: "8px",
                        padding: "10px 12px",
                        transition: "all 0.3s ease",
                      }}
                      onFocus={(e) =>
                        (e.target.style.border = "2px solid #c770f0")
                      }
                      onBlur={(e) =>
                        (e.target.style.border = "2px solid transparent")
                      }
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label style={{ color: "white" }}>
                      Your Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="ginny@gmail.com"
                      required
                      style={{
                        background: "#fff",
                        color: "#000",
                        border: "2px solid transparent",
                        borderRadius: "8px",
                        padding: "10px 12px",
                        transition: "all 0.3s ease",
                      }}
                      onFocus={(e) =>
                        (e.target.style.border = "2px solid #c770f0")
                      }
                      onBlur={(e) =>
                        (e.target.style.border = "2px solid transparent")
                      }
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label style={{ color: "white" }}>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      placeholder="Project Inquiry"
                      required
                      style={{
                        background: "#fff",
                        color: "#000",
                        border: "2px solid transparent",
                        borderRadius: "8px",
                        padding: "10px 12px",
                        transition: "all 0.3s ease",
                      }}
                      onFocus={(e) =>
                        (e.target.style.border = "2px solid #c770f0")
                      }
                      onBlur={(e) =>
                        (e.target.style.border = "2px solid transparent")
                      }
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label style={{ color: "white" }}>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      placeholder="Your message here..."
                      required
                      style={{
                        background: "#fff",
                        color: "#000",
                        border: "2px solid transparent",
                        borderRadius: "8px",
                        padding: "10px 12px",
                        transition: "all 0.3s ease",
                      }}
                      onFocus={(e) =>
                        (e.target.style.border = "2px solid #c770f0")
                      }
                      onBlur={(e) =>
                        (e.target.style.border = "2px solid transparent")
                      }
                    />
                  </Form.Group>

                  {submitMessage.text && (
                    <motion.p
                      style={{
                        color: submitMessage.isError ? "red" : "green",
                        padding: "10px",
                        fontSize: "0.95rem",
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {submitMessage.text}
                    </motion.p>
                  )}

                  <motion.button
  type="submit"
  style={{
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    background: "linear-gradient(135deg, #c770f0, #6a11cb)",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
    fontWeight: "600",
    letterSpacing: "0.5px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(199, 112, 240, 0.4)",
  }}
  whileHover={{
    y: -3,
    scale: 1.02,
    boxShadow: "0 8px 20px rgba(199, 112, 240, 0.6)",
  }}
  whileTap={{ scale: 0.98 }}
  disabled={isSubmitting}
>
  {isSubmitting ? "Sending..." : "Send Message"}
</motion.button>

                </Form>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;
