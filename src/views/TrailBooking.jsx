import React from "react";
import freeTrail from '../../public/assets/img/freetrial.png';
import { motion } from 'framer-motion';

export default function TrailBooking() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      className="px-4">
      <div className="main-trail d-flex justify-content-around">
        <div className="col-2 trialImg d-none d-lg-block"><img src={freeTrail} alt="" /></div>
        <div className="sub-trail">
          <div className="trailhead">
            <div className="h1 sec-heading text-light">Book Your Free Trail</div>
          </div>
          <div className="trail-text">
            Talk to an expert today and learn how Medicy can help your business
          </div>
          <div className="trailButton">
            <a
              href="/schedule/"
              className="btn btn-primary text-white fw-bold shadow btn-lg tbtn me-4"
            >
              Get Demo
            </a>
            <a
              href="https://app.medicy.in/register.php"
              className="btn btn-primary text-white fw-bold shadow btn-lg tbtn"
            >
              Join Us Now
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
