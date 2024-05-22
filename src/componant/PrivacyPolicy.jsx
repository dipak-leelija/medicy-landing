import React from 'react';
import logo from "/assets/img/logo.png";
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ margin: '80px 0px' }} >
            <div className='privacy-banner'>
                <div className='col-lg-4 privacy-logo rounded'>
                    <img className='' src={logo} alt="logo" />
                </div>
                <div className="col-lg-8 privacy-head ps-4 me-5">
                    <h1 className="sec-heading text-white">Privacy Policy</h1>
                    <p>Updated on 21 May, 2024</p>
                </div>
            </div>
            <div className='bg-light privacy-content'>
                <p>Medicy is committed to protecting the privacy of our users. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our software solutions. By using Medicy, you agree to the terms of this Privacy Policy.</p>

                <h2 className='sec-heading med-main-blue'>Information We Collect</h2>
                <h3 className='h5'>Personal Information</h3>
                <p>We may collect personal information, such as your name, email address, phone number, and billing information when you register for an account or make a purchase.</p>
                <h3 className='h5'>Healthcare Data</h3>
                <p>We may collect healthcare-related data, including patient information, appointment details, report details, and prescription records to provide our services.</p>

                <h2 className='sec-heading med-main-blue'>How We Use Your Information?</h2>
                <h3 className='h5'>To Provide Services</h3>
                <p>We use your information to deliver and improve our software solutions, manage your account, and process transactions.</p>
                <h3 className='h5'>To Communicate</h3>
                <p>We may use your contact information such as phone number or email address to send you updates, respond to inquiries, and provide customer support.</p>
                <h3 className='h5'>For Analytics</h3>
                <p>We analyse usage data to enhance the performance and functionality of our software.</p>
                <h3 className='h5'>To Comply with Legal Obligations</h3>
                <p>We may use your information to comply with applicable laws, regulations, and legalprocesses.</p>

                <h2 className='sec-heading med-main-blue'>How Do We Share Your Information?</h2>
                <h3 className='h5'>Service Providers</h3>
                <p>We may share your information with third-party service providers who perform services on our behalf, such as payment processing and data analysis.</p>
                <h3 className='h5'>Business Transfers</h3>
                <p>In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of the transaction.</p>

                <h2 className='sec-heading med-main-blue'>Data Security</h2>
                <p>We value your confidential information and patient data security. We implement reasonable security measures to protect your information from unauthorised access, use, or disclosure. However, data transmission or storage systems can not be guaranteed to be 100% secure.</p>

                <h2 className='sec-heading med-main-blue'>Your Choices</h2>
                <h3 className='h5'>Account Information</h3>
                <p>You can update, correct, or delete your account information at any time by logging into your account.</p>

                <h2 className='sec-heading med-main-blue'>Children's Privacy</h2>
                <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have inadvertently received personal information from a child under 18, we will delete such information from our records.</p>

                <h2 className='sec-heading med-main-blue'>Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website and updating the effective date. Your continued use of our software after any changes indicates your acceptance of the updated Privacy Policy.</p>

                <h2 className='sec-heading med-main-blue'>Contact Us</h2>
                <p>If you have any questions or concerns about this Privacy Policy, please <a href="/contact/">contact</a> us.</p>
                <p>By using Medicy, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.</p>
            </div>
            <div className='privacy-footer text-center py-5'>
                <h2 className='sec-heading'> Join Us Now</h2>
                <p>If You Have Any Concerns About This Privacy Statement, Please Feel Free To <a className='text-white' href="/schedule/">Meet</a> Us</p>
            </div>
        </motion.section>
    )
}
