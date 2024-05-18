import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import pharmamanage1 from "../../public/assets/img/pharmamanage1.png";
import pharmamanage3 from "../../public/assets/img/pharmamanage3.png";
import parmamanage4 from "../../public/assets/img/parmamanage4.png";

export default function KeyFeature() {
  const [listItems, setListItems] = useState([
    "Dashboard",
    "Open stock, Real-time Stock Update",
    "Low Stock, Overstock Expiry Reporting",
    "Sales & Purchase, Returns Management",
    "Sales & Purchase Report",
    "Customer Payment Management",
    "Supplier and Payment Management",
  ]);

  useEffect(() => {
    if (listItems.length > 4) {
      const halfLength = Math.ceil(listItems.length / 2);
      const firstHalf = listItems.slice(0, halfLength);
      const secondHalf = listItems.slice(halfLength);

      setListItems([firstHalf, secondHalf]);
    }
  }, [listItems]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showImage, setShowImage] = useState(window.innerWidth > 767);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return function cleanup() {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setShowImage(window.innerWidth > 767); // Update showImage state based on window width
  };

  return (
    <section>
      <div className="featuresmain">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          viewport={{ once: true }}
          className="mainhead"
        >
          <div className="text-center featureHead">
            <h2 className="h1 sec-heading med-main-blue">Key Features Of Medicy</h2>
          </div>
          <p>
            Here are the key features of our healthcare management software that
            can help you optimise the workflow and enhance patient experience.
          </p>
        </motion.div>
        <div className="main-card">
          <div className="keycontent">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="maincontent"
            >
              {!showImage && (
                <div className="keycard-img">
                  <img src={pharmamanage1} alt="" />
                </div>
              )}
              <h4 className="card-title">Pharmacy Management</h4>
              <p className="card-text">
                Medicy’s online pharmacy software delivers a user-friendly
                dashboard. It offers Real-time Stock Updates and detailed
                insight into Overstock Expiry Reporting. The application allows
                healthcare providers to access features like Returns Management,
                Sales & Purchase Report, Customer Payment Management, and
                Supplier and Payment Management. The pharmacy management system
                ensures perfect operations and efficient supplier management.
              </p>
              <div className="d-flex justify-content-between">
                <ul>
                  <li>Open stock, Real-time Stock Update</li>
                  <li>Low Stock, Overstock Expiry Reporting</li>
                  <li>Sales & Purchase, Returns Management</li>
                </ul>
                <ul>
                  <li>Sales & Purchase Report</li>
                  <li>Customer Payment Management</li>
                  <li>Supplier and Payment Management</li>
                </ul>
              </div>
            </motion.div>
            {showImage && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="keycard-img"
              >
                <img src={pharmamanage1} alt="" />
              </motion.div>
            )}
          </div>
          <div className="keycontent">
            {showImage && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="keycard-img"
              >
                <img src={parmamanage4} alt="" />
              </motion.div>
            )}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="maincontent"
            >
              {!showImage && (
                <div className="keycard-img">
                  <img src={parmamanage4} alt="" />
                </div>
              )}
              <h4 className="card-title">OPD Management</h4>
              <p className="card-text">
                Our OPD Management module simplifies the patient’s journey with
                easy registration and appointment scheduling. This software is
                integrated with lab and pharmacy systems for accurate
                prescription management. The online doctor appointment software
                also offers a communication management tool for enhanced
                patient-provider interactions. The advanced reporting and
                analytics can empower you to make informed decisions and
                optimise clinic operations flawlessly.
              </p>
              <div className="d-flex justify-content-between">
                <ul>
                  <li>Patient Registration </li>
                  <li>Appointment</li>
                  <li>Doctor prescription</li>
                </ul>
                <ul>
                  <li>Integrated with Lab and Pharmacy </li>
                  <li>Communication Management </li>
                  <li>Report and Analytics</li>
                </ul>
              </div>
            </motion.div>
          </div>
          <div className="keycontent">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="maincontent"
            >
              {!showImage && (
                <div className="keycard-img">
                  <img src={pharmamanage3} alt="" />
                </div>
              )}
              <h4 className="card-title">
                Diagnostic or Pathology Lab Management
              </h4>
              <p className="card-text">
                Medicy offers a Diagnostic or Pathology Lab Management system
                that makes lab management easy. From patient registration to
                accurate billing and efficient payment management, our software
                can handle every operation without a single mistake. With
                features like Referral Payment Management and Vendor Payment
                Management, our diagnostic lab management software ensures
                smooth money transactions. Medicy empowers labs to focus on
                delivering quality diagnostics services for customer
                satisfaction.
              </p>
              <div className="d-flex justify-content-between">
                <ul>
                  <li>Patient Registration </li>
                  <li>Billing</li>
                  <li>Payment Management</li>
                </ul>
                <ul>
                  <li>Referral Payment Management</li>
                  <li>Vendor Payment Management</li>
                </ul>
              </div>
            </motion.div>
            {showImage && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="keycard-img"
              >
                <img src={pharmamanage3} alt="" />
              </motion.div>
            )}
          </div>
          <div className="keycontent">
            {showImage && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="keycard-img"
              >
                <img src={parmamanage4} alt="" />
              </motion.div>
            )}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="maincontent"
            >
              {!showImage && (
                <div className="keycard-img">
                  <img src={parmamanage4} alt="" />
                </div>
              )}
              <h4 className="card-title">Inventory Management Software</h4>
              <p className="card-text">
                Our Inventory Management Software offers comprehensive control
                over purchases, stocks, and accounting processes. From efficient
                Purchase Management to careful Stock Management, it ensures an
                excellent inventory operation. With features for quality check
                and maintenance, product utilization management, and robust
                analytics and reports, our software solution can empower your
                business by enhancing productivity and profitability.
              </p>
              <div className="d-flex justify-content-between">
                <ul>
                  <li>Purchase Management</li>
                  <li>Stock Management</li>
                  <li>Accounting</li>
                </ul>
                <ul>
                  <li>Quality Check and Maintenance</li>
                  <li>Product Utilization Management</li>
                </ul>
              </div>
            </motion.div>
          </div>
          <div className="keycontent">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="maincontent"
            >
              {!showImage && (
                <div className="keycard-img">
                  <img src={pharmamanage3} alt="" />
                </div>
              )}
              <h4 className="card-title">GST Billing & Return Filing</h4>
              <p className="card-text">
                Medicy simplifies GST billing and return filing for healthcare
                providers with its comprehensive software suite. The platform
                allows healthcare providers to file returns easily with easy GST
                invoice generation. Medicy offers smooth-running tax management
                with accuracy. Our software solution allows providers to focus
                on delivering excellent patient services while minimizing
                administrative burdens.
              </p>
            </motion.div>
            {showImage && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="keycard-img"
              >
                <img src={pharmamanage3} alt="" />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
