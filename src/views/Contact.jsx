import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

import ContactCards from "../componant/ContactCards";
import MEspinner from "../icons/MEspinner";

export default function Contact() {
  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [formStyle, setFormStyle] = useState({});

  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [mobile, setMobile] = useState("");
  const [isValidMobile, setIsValidMobile] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
    privacy: false,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setLoading(true);
      setFormStyle({ opacity: 0.3 });
      try {
        // Sending POST request to backend API
        // let data = new FormData();
        // data.append("name", "dipak");
        // data.append("phone", "7699753019");
        // data.append("email", "dipak@gmail.com");
        // data.append("subject", "Test Subject");
        // data.append("message", "this is a test message");
        // data.append("message", "this is a test message");

        const data = {
          name: formData.name,
          contact_number: mobile,
          email: email,
          subject: formData.subject,
          message: formData.message,
        };
        console.log(data);
        let config = {
          method: "post",
          maxBodyLength: Infinity,
          url: "http://localhost/medicy.in/api/contact.php",
          headers: {
          'Content-Type': 'application/json',
        },
          data: JSON.stringify(data),
        };

        const response = await axios.request(config);
        console.log({'response':response})
        if (response.data.status === true) {
          setAlert(true);
          // setAlertMsg(response.data.message);
          setAlertMsg('Uploaded !')
        }
      } catch (error) {
        setAlert(true);
        setAlertMsg(
          `ERROR: ${error.message}, Please Make Sure Your Data Connection is Working Properly!`
        );
        console.error("Error Code", error.code);

        // Handle different types of errors
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error(
            "Server responded with error status:",
            error.response.status
          );
          console.error("Error data:", error.response.data);
          console.error("Error headers:", error.response.headers);
          // Handle specific error status codes or error responses here
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received:", error.request);
          // Handle timeout or network errors here
        } else {
          console.error("Request setup error:", error.message);
        }
      } finally {
        setLoading(false);
        // Reset inline CSS after submission
        setTimeout(() => {
          setFormStyle({});
        }, 2000); // Adjust timeout as needed
      }
    }
    setValidated(true);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (name == "email") {
      setEmail(value);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailValid(emailRegex.test(value));
    } else if (name == "mobile") {
      handleMobChange(value);
    }

    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  }; //handleChange

  const handleMobChange = (mobNumber) => {
    let inputValue = mobNumber.replace(/\D/g, "");

    if (inputValue.length > 10) {
      inputValue = inputValue.slice(0, 10);
    }
    setMobile(inputValue);

    if (inputValue.length !== 10) {
      setIsValidMobile(false);
    } else {
      setIsValidMobile(true);
    }
  }; //handleMobChange

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="main-contact"
      >
        <ContactCards />

        <div className="right-contact position-relative">
          <div className="contact-head mb-3">
            <h1>Contact Us</h1>
            <p className="text-center mt-4">
              Fill out the form below to get your Free Proposal.
            </p>
          </div>

          {alert && (
            <Alert variant="danger" onClose={() => setAlert(false)} dismissible>
              <p>{alertMsg}</p>
            </Alert>
          )}

          <Form
            style={formStyle}
            action=""
            method="POST"
            validated={validated}
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="form-floating contact-div  mb-4">
              <input
                type="text"
                className="form-control contact-input"
                id="floatingName"
                placeholder=""
                name="name"
                onChange={handleChange}
                value={formData.name}
                required
              />
              <Form.Label htmlFor="floatingName">Name</Form.Label>
              <Form.Control.Feedback type="invalid">
                Please provide a valid name.
              </Form.Control.Feedback>
            </div>
            <div className="form-floating contact-div  mb-4">
              <input
                type="tel"
                className={`form-control contact-input ${
                  isValidMobile ? "" : "is-invalid"
                }`}
                id="floatingMobile"
                placeholder=""
                name="mobile"
                value={mobile}
                onChange={handleChange}
                required
              />
              <Form.Label htmlFor="floatingMobile">Mobile</Form.Label>
              <Form.Control.Feedback type="invalid">
                Please provide a valid 10-digit mobile number.
              </Form.Control.Feedback>
            </div>
            <div className="form-floating contact-div mb-4">
              <input
                type="email"
                className={`form-control contact-input ${
                  !emailValid ? "is-invalid" : ""
                }`}
                id="floatingEmail"
                placeholder=""
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
              <label htmlFor="floatingEmail">Email</label>
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </div>
            <div className="form-floating contact-div  mb-4">
              <input
                type="text"
                className="form-control contact-input"
                id="floatingSub"
                placeholder=""
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <Form.Label htmlFor="floatingSub">Subject</Form.Label>
              <Form.Control.Feedback type="invalid">
                Please provide your subject.
              </Form.Control.Feedback>
            </div>
            <div className="form-floating contact-div ">
              <textarea
                className="form-control contact-input"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={{ height: "92px" }}
                required
              />
              <label htmlFor="floatingTextarea">Message</label>
            </div>

            <Form.Group className=" mt-3 mb-2" controlId="flexCheckDefault">
              <Form.Check
                type="checkbox"
                name="privacy"
                onChange={handleChange}
                label="By submitting this form I accept the privacy policy of this site"
                required
              />
              <Form.Control.Feedback type="invalid">
                You must agree before submitting.
              </Form.Control.Feedback>
            </Form.Group>
            <div className="contact-button ">
              <button type="submit" className="btn btn-primary btn-lg">
                Submit
              </button>
            </div>
          </Form>
          {/* Loading spinner */}
          {loading && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <MEspinner />
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
