import React from "react";
import { motion } from "framer-motion";
import chooseImg from "/assets/img/chooseus.png";

export default function Chooseus() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [showImage, setShowImage] = React.useState(window.innerWidth > 767);

  React.useEffect(() => {
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
      <div className="wby-choose-us">
        <div className="main-div">
          <div className="frame mt-4">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="why-choose-us-wrapper"
            >
              <h1 className="why-choose-us">Why Choose Us?</h1>
            </motion.div>
          </div>
          <div className="frame-parent ">
            {/* Image for Mobile Version starts here */}
            {!showImage && (
              <div className="frame1">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="frame2"
                >
                  <img
                    className="removebg-preview-1-icon"
                    alt=""
                    src={chooseImg}
                  />
                </motion.div>
              </div>
            )}
            {/* Image for Mobile Version ends here*/}

            {(windowWidth <= 767 || windowWidth > 1024) && (
              <>
                <div className="frame3">
                  <div className="frame4">
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="frame5"
                    >
                      <div className="cloud-based-software-wrapper">
                        <h4>Complete Healthcare Solution</h4>
                      </div>
                      <div className="be-always-connected-with-your-wrapper">
                        <div className="be-always-connected">
                          Medicy is a holistic healthcare management software
                          that is a one-stop solution for pharmacy, diagnostic,
                          OPD, and inventory management. It is one of the best
                          suites for all healthcare provider’s needs.
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="frame6"
                  >
                    <div className="frame7">
                      <div className="cloud-based-software-wrapper">
                        <h4>Cloud Based Software</h4>
                      </div>
                      <div className="be-always-connected-with-your-wrapper">
                        <div className="be-always-connected">
                          We present a cloud-based platform. This software
                          allows you to access your healthcare management system
                          anytime and anywhere. We offer excellent flexibility
                          and scalability to meet all your clinical management,
                          stock management, and doctor appointment management
                          demands.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </>
            )}

            {/* image for tab/desktop(window.width > 767) version starts here */}
            {showImage && (
              <div className="frame1">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="frame2"
                >
                  <img
                    className="removebg-preview-1-icon"
                    alt=""
                    src={chooseImg}
                  />
                </motion.div>
              </div>
            )}
            {/* image for tab/desktop(window.width > 767) version ends here */}

            {(windowWidth <= 767 || windowWidth > 1024) && (
              <div className="frame8">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="frame9"
                >
                  <div className="frame10">
                    <div className="cloud-based-software-wrapper">
                      <h4> Easy Report Generation</h4>
                    </div>
                    <div className="be-always-connected-with-your-frame">
                      <div className="be-always-connected">
                        Our EHR (Electronic Health Record) system simplifies the
                        report generation process. Being one of the best clinic
                        management software India, we are dedicated to offering
                        real-time and patient-centric records generation.
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="frame12"
                >
                  <div className="frame13">
                    <div className="cloud-based-software-wrapper">
                      <h4> Secure & Reliable</h4>
                    </div>
                    <div className="be-always-connected-with-your-frame">
                      <div className="be-always-connected">
                        Medicy prioritizes customer data security. We offer a
                        secure and reliable software solution with advanced
                        encryption and backup measures. Our software ensures the
                        confidentiality and morality of sensitive healthcare
                        information. Healthcare providers can have peace of mind
                        with the distributor data, stock and payment data, and
                        patient information.
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </div>

          {/* Ipad/Tab View starts from here */}
          {windowWidth >= 768 && windowWidth <= 1024 && (
            <div className="frame-parent ">
              <div className="row row-cols-1 row-cols-md-2 g-4 p-4">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="col"
                >
                  <div className="choose-card">
                    <div className="card-body">
                      <h5 className="card-title text-white pb-2">
                        Complete Healthcare Solution
                      </h5>
                      <p className="card-text">
                        Medicy is a holistic healthcare management software that
                        is a one-stop solution for pharmacy, diagnostic, OPD,
                        and inventory management. It is one of the best suites
                        for all healthcare provider’s needs.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="col"
                >
                  <div className="choose-card">
                    <div className="card-body">
                      <h5 className="card-title text-white pb-2">
                        Cloud Based Software
                      </h5>
                      <p className="card-text">
                        We present a cloud-based platform. This software allows
                        you to access your healthcare management system anytime
                        and anywhere. We offer excellent flexibility and
                        scalability to meet all your clinical management, stock
                        management, and doctor appointment management demands.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="col"
                >
                  <div className="choose-card">
                    <div className="card-body">
                      <h5 className="card-title text-white pb-2">
                        Easy Report Generation
                      </h5>
                      <p className="card-text">
                        Our EHR (Electronic Health Record) system simplifies the
                        report generation process. Being one of the best clinic
                        management software India, we are dedicated to offering
                        real-time and patient-centric records generation.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="col"
                >
                  <div className="choose-card">
                    <div className="card-body">
                      <h5 className="card-title text-white pb-2">
                        Secure & Reliable
                      </h5>
                      <p className="card-text">
                        Medicy prioritizes customer data security. We offer a
                        secure and reliable software solution with advanced
                        encryption and backup measures. Our software ensures the
                        confidentiality and morality of sensitive healthcare
                        information. Healthcare providers can have peace of mind
                        with the distributor data, stock and payment data, and
                        patient information.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
          {/* Ipad/Tab View ends here */}
        </div>
      </div>
    </section>
  );
}
