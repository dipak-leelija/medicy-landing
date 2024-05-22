import React from "react";
import { motion } from "framer-motion";
import Accordion from "react-bootstrap/Accordion";

const faqsList = [
  {
    question: "How does Medicy benefit pharmacies and diagnostic centres?",
    answer:
      "Pharmacies and diagnostic centres can manage their sales, returns, stocks, appointment booking, reports, and payments effortlessly with Medicy’s user-friendly software solution. It is one of the best choices for enhanced patient-provider interactions in India.",
    transition: { duration: 0.4, delay: 0.3 },
  },
  {
    question: "Does Medicy have solutions for pharmacy warehouse management?",
    answer:
      "Medicy offers excellent warehouse inventory management solutions for pharmacy businesses. You can manage low-stock, overstock, expiry reports, sales and purchases, supplier payments, and real-time stock updates using this software.",
    transition: { duration: 0.4, delay: 0.4 },
  },
  {
    question: "How do I contact the Medicy support team?",
    answer:
      "You can contact the Medicy support team via email or call. You can also visit the <a href='/contact'>contact page</a> available on our site for more information.",
    transition: { duration: 0.4, delay: 0.5 },
  },
  {
    question: "Is Medicy capable of GST billing?",
    answer:
      "Yes, Medicy is capable of filing returns with easy GST invoice generation.",
    transition: { duration: 0.4, delay: 0.6 },
  },
  {
    question: "Is my data safe on Medicy?",
    answer:
      "The experts in Medicy focus highly on the data safety and security of pharmacies and diagnostic centres. It offers advanced encryption and reliable backup measures for distributor data, stock and payment data, and patients’ confidential information.",
    transition: { duration: 0.4, delay: 0.7 },
  },
  {
    question: "What are the pricing options of Medicy Software?",
    answer:
      "Medicy offers affordable pricing for its software solution. You can also get discounts on seasonal offers. To know more about the pricing <a href='/pricing'>visit the pricing page</a>.",
    transition: { duration: 0.4, delay: 0.8 },
  },
];

export default function Faqs() {
  return (
    <section>
      <div className="main-faqs">
        <div className="text-center faq-heading">
          <h2 className="h1">FAQs</h2>
        </div>
        <p className="d-flex justify-content-center align-items-center faq-text">
          Frequently Asked Questions
        </p>
        <div className="main-accordino">
          <Accordion className="accordinobtn" flush>
            {faqsList.map((faq, index) => (
              <motion.div key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 1 }}
                transition={faq.transition}
                viewport={{ once: true }}
              >
                <Accordion.Item
                  eventKey={index}
                  className="border border-2 mb-2 rounded"
                >
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body dangerouslySetInnerHTML={{ __html: faq.answer }}></Accordion.Body>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
