import React from 'react';
import { motion } from 'framer-motion';
import Accordion from 'react-bootstrap/Accordion';
export default function Faqs() {
	return (
		<section>
			<div className='main-faqs'>
				<div className='text-center faq-heading'>
					<h2 className='h1'>FAQs</h2>
				</div>
				<p className='d-flex justify-content-center align-items-center faq-text'>
					Frequently Asked Questions
				</p>
				<div
					className='main-accordino'>
					<Accordion className='accordinobtn' flush>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 1 }}
							transition={{ duration: 0.4, delay: 0.3 }}
							viewport={{ once: true }}
						>
							<Accordion.Item eventKey='0' className='border border-2 mb-2 rounded'>
								<Accordion.Header>How does Medicy benefit pharmacies and diagnostic centres?</Accordion.Header>
								<Accordion.Body>
									Pharmacies and diagnostic centres can manage their sales, returns, stocks, appointment booking, reports, and payments effortlessly with Medicy’s user-friendly software solution. It is one of the best choices for enhanced patient-provider interactions in India.
								</Accordion.Body>
							</Accordion.Item>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 1 }}
							transition={{ duration: 0.4, delay: 0.4 }}
							viewport={{ once: true }}
						>
							<Accordion.Item eventKey='1' className='border border-2 mb-2 rounded'>
								<Accordion.Header>Does Medicy have solutions for pharmacy warehouse management?</Accordion.Header>
								<Accordion.Body>
									Medicy offers excellent warehouse inventory management solutions for pharmacy businesses. You can manage low-stock, overstock, expiry reports, sales and purchases, supplier payments, and real-time stock updates using this software.
								</Accordion.Body>
							</Accordion.Item>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 1 }}
							transition={{ duration: 0.4, delay: 0.5 }}
							viewport={{ once: true }}
						>
							<Accordion.Item eventKey='2' className='border border-2 mb-2 rounded'>
								<Accordion.Header>How do I contact the Medicy support team?</Accordion.Header>
								<Accordion.Body>
									You can contact the Medicy support team via email or call. You can also visit the contact page available on our site for more information.
								</Accordion.Body>
							</Accordion.Item>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 1 }}
							transition={{ duration: 0.4, delay: 0.6 }}
							viewport={{ once: true }}
						>
							<Accordion.Item eventKey='3' className='border border-2 mb-2 rounded'>
								<Accordion.Header>Is Medicy capable of GST billing?</Accordion.Header>
								<Accordion.Body>
									Yes, Medicy is capable of filing returns with easy GST invoice generation.
								</Accordion.Body>
							</Accordion.Item>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 1 }}
							transition={{ duration: 0.4, delay: 0.7 }}
							viewport={{ once: true }}
						>
							<Accordion.Item eventKey='4' className='border border-2 mb-2 rounded'>
								<Accordion.Header>Is my data safe on Medicy?</Accordion.Header>
								<Accordion.Body>
								The experts in Medicy focus highly on the data safety and security of pharmacies and diagnostic centres. It offers advanced encryption and reliable backup measures for distributor data, stock and payment data, and patients’ confidential information.
								</Accordion.Body>
							</Accordion.Item>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 1 }}
							transition={{ duration: 0.4, delay: 0.8 }}
							viewport={{ once: true }}
						>
							<Accordion.Item eventKey='5' className='border border-2 mb-2 rounded'>
								<Accordion.Header>What are the pricing options of Medicy Software?</Accordion.Header>
								<Accordion.Body>
								Medicy offers affordable pricing for its software solution. You can also get discounts on seasonal offers. To know more about the pricing visit the pricing page. 
								</Accordion.Body>
							</Accordion.Item>
						</motion.div>
					</Accordion>
				</div>
			</div>
		</section>
	);
}
