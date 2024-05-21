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
                <p>Equality Healthcare Private Limited, (“Company”, “we”, “us” or “our”) is the owner of, operates and manages, the www.eVitalRx.in website and the mobile application eVitalRx (collectively, the “Site”), which provides online cloud based platform for facilitating retail pharmacies in India (“user”, “users”, “you” or “your”) to procure pharmaceutical products, inventory management including QR codes scanning, lot tracking, expiration date tracking, automating purchase orders and a wide array of customer management solutions (“Services”) at the Site.</p>

                <h2 className='sec-heading med-main-blue'>Information Collected</h2>

                <p><li>We collect personal information that you voluntarily provide to us when you register on the Site, express an interest in obtaining information about us or our products and the Services, when you participate in activities on the Site or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the Site, the choices you make and the Site, the Services, the products and features you use. The personal information we collect may include your name, password, contact details (including mobile number, mailing address, email address), location, date of birth, geographical information, Apple ID, gender, PAN card/ Adhaar card/ election card/ driving licence, GST number, identity cards or registration details issued by relevant authorities, drug licence and pharmacist registration details, photos of your pharmacy store or any other details (as the case may be). We may collect such information which either directly or indirectly, in combination with other information available with us, could identify you (“Personal Information”).</li>

                    <li>We may also collect, receive, process or store certain sensitive personal data or information consisting of, but not limited to: (i) password; (ii) financial information (including bank account or credit/ debit card/ virtual wallets/ UPI information) and inventory data, sales and purchase data, accounting information (receivables from patients and payables to distributors); (iii) physical, physiological and mental health condition; (iv) any information relating to Personal Information provided to us for procuring the Services; (v) any of the information relating to Personal Information provided to us for processing, storing under lawful contract or otherwise; and (vi) biometric information (collectively “Sensitive Personal Data or Information”). In this regard, please note, any information that is freely available or accessible in public domain or any other law for the time being in force shall not be regarded as Sensitive Personal Data or Information, as per Information Technology (Reasonable security practices and procedures and sensitive personal data or information) Rules, 2011 (as amended from time to time).</li></p>

                <h2 className='sec-heading med-main-blue'>What Do We Do With Your Data?</h2>

                <p><li>We collect personal information that you voluntarily provide to us when you register on the Site, express an interest in obtaining information about us or our products and the Services, when you participate in activities on the Site or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the Site, the choices you make and the Site, the Services, the products and features you use. The personal information we collect may include your name, password, contact details (including mobile number, mailing address, email address), location, date of birth, geographical information, Apple ID, gender, PAN card/ Adhaar card/ election card/ driving licence, GST number, identity cards or registration details issued by relevant authorities, drug licence and pharmacist registration details, photos of your pharmacy store or any other details (as the case may be). We may collect such information which either directly or indirectly, in combination with other information available with us, could identify you (“Personal Information”).</li>

                    <li>We may also collect, receive, process or store certain sensitive personal data or information consisting of, but not limited to: (i) password; (ii) financial information (including bank account or credit/ debit card/ virtual wallets/ UPI information) and inventory data, sales and purchase data, accounting information (receivables from patients and payables to distributors); (iii) physical, physiological and mental health condition; (iv) any information relating to Personal Information provided to us for procuring the Services; (v) any of the information relating to Personal Information provided to us for processing, storing under lawful contract or otherwise; and (vi) biometric information (collectively “Sensitive Personal Data or Information”). In this regard, please note, any information that is freely available or accessible in public domain or any other law for the time being in force shall not be regarded as Sensitive Personal Data or Information, as per Information Technology (Reasonable security practices and procedures and sensitive personal data or information) Rules, 2011 (as amended from time to time).</li></p>

                <h2 className='sec-heading med-main-blue'>How Do We Protect Your Information?</h2>
                <p>When you make an order, submit, or access your personal information, we’ll take several security measures to keep your information safe.</p>
                <p>SSL (Secure Socket Layer) technology will be used to encrypt and send all provided feedback or credit information to our payment gateway providers' database. And this position is accessible only to those with special access rights and confidentiality obligations.</p>
                <p>Your personal information—including credit card numbers, social security numbers, financial details, etc.—won't be composed on our servers after a transaction.</p>

                <h2 className='sec-heading med-main-blue'>Do We Use Cookies?</h2>
                <p>Yes, we use cookies to remember and process the products to gather total information about site traffic and site dealings to deliver better site experiences and tools in the future.</p>
                <p>Cookies enable the website's or service provider's strategies to identify your browser and record and recover particular information.</p>

                <h2 className='sec-heading med-main-blue'>Do We Reveal Any Information To Outside Parties?</h2>
                <p>Your private details are never sold, traded, or otherwise transferred to irrelevant third parties. Therefore, we may reveal your information if we decide that doing so is necessary to pursue the law, execute our site's policies, or defend the rights, property, or security of other people.</p>
                <p>However, user data that cannot be used to identify an individual may still be shared with third parties for marketing, advertising, or other purposes.</p>

                <h2 className='sec-heading med-main-blue'>Your Support:</h2>
                <p>Accept our internet privacy policy by using our site.</p>

                <h2 className='sec-heading med-main-blue'>Modifications To Our Privacy Policy:</h2>
                <p>We will update this website if we decide to make changes to our privacy policy.</p>
            </div>
            <div className='privacy-footer text-center py-5'>
                <h2 className='sec-heading'>Contact Us</h2>
                <p>If You Have Any Concerns About This Privacy Statement, Please Feel Free To <a className='text-white' href="/contact">Contact</a> Us</p>
            </div>
        </motion.section>
    )
}
