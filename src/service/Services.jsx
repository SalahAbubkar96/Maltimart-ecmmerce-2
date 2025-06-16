import React from "react";
import "./service.css";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import serviceData from "../assets/data/serviceData";

const Services = () => {
  return (
    <section className="sercices">
      <Container>
        <Row>
          {serviceData.map((item, index) => (
            <Col lg="3" md="4" key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="sevice_item"
                style={{ background: `${item.bg}` }}
              >
                <span>
                  <i class={item.icon}></i>
                </span>
                <div className="">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
