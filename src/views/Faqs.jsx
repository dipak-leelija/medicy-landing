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
							<Accordion.Header>General FAQs</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
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
							<Accordion.Header>Sales Related FAQs</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
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
							<Accordion.Header>Customer Relations FAQs</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
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
							<Accordion.Header>Pricing Related FAQs</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</Accordion.Body>
						</Accordion.Item>
						</motion.div>
					</Accordion>
				</div>
			</div>
		</section>
	);
}
