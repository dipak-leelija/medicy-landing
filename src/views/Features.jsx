import React from "react";
import { motion } from "framer-motion";
import { Row, Col } from "react-bootstrap";
import onlinehealth from "../../public/assets/icon/online-health.svg";


export default function Features() {
  const xValue = window.innerWidth < 1024 ? 0 : 160;

  const features = [
    {
      label: "Modern Charts",
      icon: "/assets/icon/combo-chart.svg",
      init: { opacity: 0, x: xValue },
      wIV: { opacity: 1, x: 1 },
      trs: { duration: 0.5, delay: 0.8 }
    },
    {
      label: "Easy Filtering",
      icon: "/assets/icon/filter.svg",
      init: {opacity: 0, x: xValue},
      wIV: {opacity: 1, x: 1},
      trs: {duration: 0.5, delay: 0.6}
    },
    {
      label: "Transection Report",
      icon: "/assets/icon/patient-report.svg",
      init: {opacity: 0},
      wIV: {opacity: 1},
      trs: {duration: 0.4, delay: 0.6,}
    },
    {
      label: "GST Report",
      icon: "/assets/icon/percentage.svg",
      init: {opacity: 0, x: -xValue},
      wIV: {opacity: 1, x: 1},
      trs: {duration: 0.5, delay: 0.6}
    },
    {
      label: "Listed Distributors",
      icon: "/assets/icon/contacts.svg",
      init: { opacity: 0, x: -xValue},
      wIV: { opacity: 1, x: 1},
      trs: { duration: 0.5, delay: 0.8 },
    },
    {
      label: "Maximun Item Units",
      icon: "/assets/icon/org-unit.svg",
      init: { opacity: 0, x: xValue },
      wIV: { opacity: 1, x: 1 },
      trs: { duration: 0.5, delay: 0.8 }
    },
    {
      label: "Quick Search",
      icon: "/assets/icon/search-icon.svg",
      init: { opacity: 0, x: xValue },
      wIV: { opacity: 1, x: 1 },
      trs: { duration: 0.5, delay: 0.6 },
    },
    {
      label: "Expiry Monitor",
      icon: "/assets/icon/checklist.svg",
      init: { opacity: 0},
      wIV: { opacity: 1},
      trs: { duration: 0.4, delay: 0.6 },
    },
    {
      label: "Customer Monitor",
      icon: "/assets/icon/checked-user-male.svg",
      init: { opacity: 0, x: -xValue },
      wIV: { opacity: 1, x: 1 },
      trs: { duration: 0.5, delay: 0.5 },
    },
    {
      label: "Product Monitor",
      icon: "/assets/icon/more-details.svg",
      init: { opacity: 0, x: -xValue },
      wIV: { opacity: 1, x: 1 },
      trs: { duration: 0.5 , delay: 0.8 },
    },
  ];

  return (
    <section>
      <div className="main-feat">
        <Row className="text-center pb-5 main-feat-head">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="h1 sec-heading med-main-blue">Useful Features</h2>
            <p className="pt-4">
              Designed for showcasing all manner of creative work in a truly
              modern, art-inspired & animation-driven environment.
            </p>
          </motion.div>
        </Row>
        <Row xs={2} md={3} lg={5} className="g-4">
          {/* fast row animation start  */}

          {features.map((feature, index) => (
            <Col key={index}>
              <motion.div
                initial={feature.init}
                whileInView={feature.wIV}
                transition={{ duration: feature.trs.duration, delay: feature.trs.delay }}
                viewport={{ once: true }}
                className="card feat-card"
              >
                <div className="card-body feat-card-body">
                  <div className="pb-5 svgIcon">
                    <img src={feature.icon} alt="" />
                  </div>
                  <div className="feat-head">{feature.label}</div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
