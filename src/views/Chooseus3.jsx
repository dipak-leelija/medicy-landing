import React from "react";
import { motion } from "framer-motion";
import chooseImg from "/assets/img/chooseus.png";
import completeHealthcare1 from "../../public/assets/icon/chooseusIcon/completeHeathcare1.svg";
import completeHealthcare2 from "../../public/assets/icon/chooseusIcon/completeHeathcare2.svg";
import cloudBased1 from "../../public/assets/icon/chooseusIcon/cloudBased1.svg";
import cloudBased2 from "../../public/assets/icon/chooseusIcon/coludBased2.svg";
import easyReport1 from "../../public/assets/icon/chooseusIcon/easyReport1.svg";
import easyReport2 from "../../public/assets/icon/chooseusIcon/easyReport2.svg";
import secureReliable1 from "../../public/assets/icon/chooseusIcon/secureReliable1.svg";
import secureReliable2 from "../../public/assets/icon/chooseusIcon/secureReliable2.svg";
import simplifyGSTBill1 from "../../public/assets/icon/chooseusIcon/simplifiGST1.svg";
import simplifyGSTBill2 from "../../public/assets/icon/chooseusIcon/simplifiGST2.svg";
import freeSuport1 from "../../public/assets/icon/chooseusIcon/freeSuport1.svg";
import freeSuport2 from "../../public/assets/icon/chooseusIcon/freeSuport2.svg";
import affordable1 from "../../public/assets/icon/chooseusIcon/affordable1.svg";
import affordable2 from "../../public/assets/icon/chooseusIcon/affordable2.svg";
import preUploadFMCG1 from "../../public/assets/icon/chooseusIcon/preUploadFMCG1.svg";
import preUploadFMCG2 from "../../public/assets/icon/chooseusIcon/preUploadFMCG2.svg";

export default function Chooseus3() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [showImage, setShowImage] = React.useState(window.innerWidth > 1023);
  const [showIcon, setShowIcon] = React.useState(window.innerWidth > 767);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return function cleanup() {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setShowImage(window.innerWidth > 1023);
    setShowIcon(window.innerWidth > 767);
  };

  const isLargeScreen = () => {
    return window.innerWidth > 1024;
  };

  var n =
    window.innerWidth < 768 ? "py-2 py-5 px-4 mb-3 m-0 shadow rounded-4 " : "";
  var n1 = window.innerWidth < 1024 ? "col-12 my-0  text-center" : "col-8 my-5";

  return (
    <section className="my-4">
      <div className={`${window.innerWidth < 767 ? "my-0" : "my-5"}`}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2
            className={`sec-heading h1 med-main-blue ${
              window.innerWidth < 768 ? "mb-0" : "mb-5"
            }`}
          >
            Why Choose Us ?
          </h2>
        </motion.div>
      </div>
      <div className="d-flex mx-4">
        {showImage && (
          <>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="d-flex"
            >
              <img className="wcuLeftImg " src={chooseImg} alt="" />
            </motion.div>
          </>
        )}
        {showIcon && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              className={`${window.innerWidth > 1024 ? "col-1" : "col-0"}`}
              style={{ marginLeft: isLargeScreen() ? "-2rem" : "0" }}
            >
              <div className="borderCircle"></div>
            </motion.div>
          </>
        )}
        <div className={`${n1} mt-4`}>
          <div
            className={`d-flex ${window.innerWidth > 767 ? "mt-5" : "mt-2"}`}
          >
            {showIcon && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="col-2  rounded-circle circleIcon"
                  style={{
                    marginLeft: isLargeScreen() ? "-50px" : "0",
                    marginRight: isLargeScreen() ? "3rem" : "0",
                  }}
                >
                  <img src={completeHealthcare1} alt="" />
                </motion.div>
              </>
            )}

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`be-always-connected ${n}`}
            >
              <div className="d-flex justify-content-center">
                {window.innerWidth < 768 && (
                  <motion.div
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="col-2  rounded-circle circleIcon"
                  >
                    <img src={completeHealthcare2} alt="" />
                  </motion.div>
                )}
              </div>
              <h3 className="wcuSubHead mt-3">Complete Healthcare Solution</h3>
              Medicy is a holistic healthcare management software that is a
              one-stop solution for pharmacy, diagnostic, OPD, and inventory
              management. It is one of the best suites for all healthcare
              provider’s needs.
            </motion.div>
          </div>
          <div className="d-flex mt-2">
            {showIcon && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="col-2 rounded-circle circleIcon"
                >
                  <img src={cloudBased1} alt="" />
                </motion.div>
              </>
            )}

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className={`be-always-connected ${n}`}
            >
              <div className="d-flex justify-content-center">
                {window.innerWidth < 768 && (
                  <motion.div
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="col-2 rounded-circle circleIcon"
                  >
                    <img src={cloudBased2} alt="" />
                  </motion.div>
                )}
              </div>
              <h3 className="wcuSubHead mt-3">Cloud Based Software</h3>
              We present a cloud-based platform. This software allows you to
              access your healthcare management system anytime and anywhere. We
              offer excellent flexibility and scalability to meet all your
              clinical management, stock management, and doctor appointment
              management demands.
            </motion.div>
          </div>
          <div className="d-flex mt-2">
            {showIcon && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="col-2 rounded-circle circleIcon"
                >
                 <img src={easyReport1} alt="" />
                </motion.div>
              </>
            )}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className={`be-always-connected ${n}`}
            >
              <div className="d-flex justify-content-center">
                {window.innerWidth < 768 && (
                  <motion.div
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="col-2 rounded-circle circleIcon"
                  >
                    <img src={easyReport2} alt="" />
                  </motion.div>
                )}
              </div>
              <h3 className="wcuSubHead mt-3">Easy Report Generation</h3>
              Our EHR (Electronic Health Record) system simplifies the report
              generation process. Being one of the best clinic management
              software India, we are dedicated to offering real-time and
              patient-centric records generation.
            </motion.div>
          </div>
          <div className="d-flex mt-2">
            {showIcon && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="col-2 rounded-circle circleIcon"
                  style={{
                    marginLeft: isLargeScreen() ? "-50px" : "0",
                    marginRight: isLargeScreen() ? "3rem" : "0",
                  }}
                >
                  <img src={simplifyGSTBill1} alt="" />
                </motion.div>
              </>
            )}

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className={`be-always-connected ${n}`}
            >
              <div className="d-flex justify-content-center">
                {window.innerWidth < 768 && (
                  <motion.div
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="col-2 rounded-circle circleIcon"
                  >
                    <img src={simplifyGSTBill2} alt="" />
                  </motion.div>
                )}
              </div>
              <h3 className="wcuSubHead mt-3">Simplify GST Billing</h3>
              Our billing software allows effortless GST billing and return
              filing. With 100% error-free GST invoice generation, strengthen
              your billing techniques. Simplify your tax management with Medicy.
            </motion.div>
          </div>
        </div>
      </div>

      <div
        className={`d-flex ${
          window.innerWidth < 768 ? " mt-0 mb-5 mx-4" : "mx-4"
        }`}
      >
        <div className={` ${n1} mt-4`}>
          <div
            className={`d-flex ${window.innerWidth < 768 ? "mt-0 " : "mt-5"}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`be-always-connected ${n}`}
            >
              <div className="d-flex justify-content-center">
                {window.innerWidth < 768 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="col-2 rounded-circle circleIcon "
                  >
                    <img src={secureReliable2} alt="" />
                  </motion.div>
                )}
              </div>
              <h3 className="wcuSubHead mt-3">Secure & Reliable</h3>
              Medicy prioritizes customer data security. We offer a secure and
              reliable software solution with advanced encryption and backup
              measures. Our software ensures the confidentiality and morality of
              sensitive healthcare information. Healthcare providers can have
              peace of mind with the distributor data, stock and payment data,
              and patient information.
            </motion.div>
            {showIcon && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="col-2 rounded-circle circleIcon "
                  style={{
                    marginRight: isLargeScreen() ? "-50px" : "0",
                    zIndex: 1,
                  }}
                >
                  <img src={secureReliable1} alt="" />
                </motion.div>
              </>
            )}
          </div>
          <div className="d-flex mt-2">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className={`be-always-connected ${n}`}
            >
              <div className="d-flex justify-content-center">
                {window.innerWidth < 768 && (
                  <motion.div
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="col-2 rounded-circle circleIcon"
                  >
                    <img src={freeSuport1} alt="" />
                  </motion.div>
                )}
              </div>
              <h3 className="wcuSubHead mt-3">Unlimited Free Support</h3>
              Enjoy outstanding support with Medicy’s commitment to an unlimited
              and free system. We ensure prompt explanation of any queries and
              issues. Our dedicated support team is committed to ensuring your
              software experience is smooth and hassle-free.
            </motion.div>
            {showIcon && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="col-2 rounded-circle circleIcon"
              >
               <img src={freeSuport2} alt="" />
              </motion.div>
            )}
          </div>
          <div className="d-flex mt-2">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className={`be-always-connected ${n}`}
            >
              <div className="d-flex justify-content-center">
                {window.innerWidth < 768 && (
                  <motion.div
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="col-2 rounded-circle circleIcon"
                  >
                    <img src={affordable1} alt="" />
                  </motion.div>
                )}
              </div>
              <h3 className="wcuSubHead mt-3">Affordable</h3>
              Medicy has been designed to be cost-effective. We offer affordable
              pricing plans according to the beads and budgets of healthcare
              practices. Our low-budget plans do not compromise the quality or
              functionality of the software.
            </motion.div>
            {showIcon && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="col-2 rounded-circle circleIcon"
              >
                <img src={affordable2} alt="" />
              </motion.div>
            )}
          </div>
          <div className="d-flex mt-2">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className={`be-always-connected ${n}`}
            >
              <div className="d-flex justify-content-center">
                {window.innerWidth < 768 && (
                  <motion.div
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="col-2 rounded-circle circleIcon"
                  >
                    <img src={preUploadFMCG1} alt="" />
                  </motion.div>
                )}
              </div>
              <h3 className="wcuSubHead mt-3">Pre-uploaded FMCG Items</h3>
              Medicy already has lots of Pre-uploaded FMCG products. Pharmacies
              and diagnostic centres don’t need to upload their items every time
              manually. It offers a sustainable and value-for-money solution.
            </motion.div>
            {showIcon && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="col-2 rounded-circle circleIcon"
                style={{
                  marginRight: isLargeScreen() ? "-50px" : "0",
                  zIndex: 1,
                }}
              >
               <img src={preUploadFMCG2} alt="" />
              </motion.div>
            )}
          </div>
        </div>
        {showIcon && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              className={`${window.innerWidth > 1024 ? "col-1" : "col-0"}`}
              style={{ marginLeft: isLargeScreen() ? "-2rem" : "0" }}
            >
              <div className=" borderCircle2"></div>
            </motion.div>
          </>
        )}
        {showImage && (
          <>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="d-flex"
            >
              <img className="wcuLeftImg" src={chooseImg} alt="" />
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
