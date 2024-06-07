import React from "react";
import { motion } from "framer-motion";
import doctor from "../../public/assets/img/doctor.png";
import circleCheck from "/assets/icon/circle-check.svg";
import TrailBooking from './TrailBooking';
export default function Doctor() {
  return (
    <>
    <section>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="d-flex justify-content-between doctor-banner "
      >
        <div className="doc-shape1"></div>
        <div className="doc-shape2"></div>
        <div className="doc-shape3"></div>
        <div className="doc-shape4"></div>
        <div className="doc-shape5"></div>

        <div className="doc-Leftdiv">
          <p className="bg-warning text-center fw-bold fs-4 mb-2 p-3 w-100" style={{ position: 'relative', zIndex: '1' }}>Under Construction</p>
          <h2 className="title">What You Can Look Forward To</h2>

          <div className="mb-2 doc-feat">
            <img src={circleCheck} alt="" className="me-3" />{" "}
            <span><strong>Search by Location:</strong> Easily find doctors near you based on your location.</span>
          </div>
          <div className="mb-2 doc-feat">
            <img src={circleCheck} alt="" className="me-3" />{" "}
            <span><strong>Filter by Specialty:</strong> Look for doctors by their designation and specialty.</span>
          </div>
          <div className="mb-2 doc-feat">
            <img src={circleCheck} alt="" className="me-3" />{" "}
            <span><strong>View Detailed Information:</strong> Access addresses, contact details, and available hours.</span>
          </div>
          <div className="mb-2 doc-feat">
            <img src={circleCheck} alt="" className="me-3" />{" "}
            <span><strong>Real-Time Availability:</strong> Check when doctors are available and book appointments.</span>
          </div>
          <p>Stay tuned for more updates and get ready to find the best healthcare providers in your area!</p>
        </div>

        <div className="d-flex justify-content-end">
          <div className="doctor-img">
            <img src={doctor} alt="" />
          </div>
        </div>
      </motion.div>
    </section>
    <div className="mb-5">
    <TrailBooking/>
    </div>
    </>
  );
}
