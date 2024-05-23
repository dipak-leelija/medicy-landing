import React from 'react';
import logo from "/assets/img/logo.png";
import { motion } from 'framer-motion';
import TrailBooking from '../views/TrailBooking';

export default function RefundPolicy() {
  return (
    <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ margin: '80px 0px' }} >
            <div className='refund-banner'>
                <div className='col-lg-4 refund-logo rounded'>
                    <img className='' src={logo} alt="logo" />
                </div>
                <div className="col-lg-8 refund-head ps-4 me-5">
                    <h1 className="sec-heading text-white">Refund Policy</h1>
                    <p>Updated on 21 May, 2024</p>
                </div>
            </div>
            <div className='bg-light refund-content'>
                <p>Thank you for choosing Medicy. We strive to provide the best healthcare management solutions to our customers. Please read our Refund Policy carefully to understand our practices regarding purchases and refunds.</p>

                <h2 className='sec-heading med-main-blue'>No Refund Policy</h2>
                <p>Medicy does not provide refunds for any purchases once a transaction has been completed. This policy applies to all our software products and services. By making a purchase, you acknowledge and agree that all sales are final and non-refundable.</p>

                <h2 className='sec-heading med-main-blue'>Free Trial</h2>
                <p>To ensure that our software meets your needs, we offer a 7-day free trial period. During this trial, you will have full access to our features and capabilities, allowing you to evaluate the software thoroughly before committing to a purchase. We encourage you to take advantage of this trial period to determine if Medicy is the right solution for you.</p>

                <h2 className='sec-heading med-main-blue'>Subscription Cancellation</h2>
                <p>If you decide that Medicy is not suitable for your needs during the free trial period, you may cancel your subscription at any time before the trial ends without any charges. Once the trial period is over, and a payment has been made, the subscription will be subject to our no refund policy. </p>

                <h2 className='sec-heading med-main-blue'>Technical Support and Assistance</h2>
                <p>We are committed to providing excellent customer support. If you encounter any issues or need assistance with our software, please <a href="/contact/">contact</a> our support team. We are here to help you resolve any problems and ensure you get the most out of our services.
                <p>By purchasing and using Medicy, you acknowledge that you have read and understood our Refund Policy and cancellation policy and agree to its terms.</p>
</p>
            </div>
            {/* <div className='privacy-footer text-center py-5'>
                <h2 className='sec-heading'> Join Us Now</h2>
                <p>If You Have Any Concerns About This Privacy Statement, Please Feel Free To <a className='text-white' href="/schedule/">Meet</a> Us</p>
            </div> */}
            <TrailBooking/>
        </motion.section>
  )
}
