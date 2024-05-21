import React from 'react';
import { motion } from 'framer-motion';
import mainabout from '/assets/img/mainAbout.jpg';
import aboutTwo from '/assets/img/aboutTwo.jpg';
import awardIcon from '/assets/icon/award-icon.svg';
import groupOfPeoples from '/assets/img/group-of-peoples.webp';
import missionlogo from '/assets/icon/missionLogo.svg';

export default function AboutUs() {
	return (
		<>
			<section>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					viewport={{ once: true }}
					className='main-about'>
					<div className='main-aboutImg'>
						<img src={mainabout} alt='' />
					</div>
					<div className='design-one'></div>
					<div className='design-two'></div>
					<div className='d-flex justify-content-end'>
						<div className='design-three'></div>
					</div>
					<div className='headdiv'>
						<div className='head-text'>
							<h1>About Us</h1>
						</div>
						<p>
							We are a software solution designed to simplify healthcare operations, enhance patient care, and empower Pharmacies, OPDs, and Diagnostic Centers across India.
						</p>
						{/* <div className='headdiv-button'>
							<button
								type='button'
								className='btn btn-primary btn-lg rounded-pill mt-4'>
								LEARN MORE
							</button>
						</div> */}
					</div>

					<div className='about-one'>
						<div>
							<p>WHY WE LOVE LEARNING...</p>
							<h1 className='mt-4'>Foundation Stories</h1>
							<p className='mt-4'>
								If we talk about the beginning, Medicy was not a healthcare software solution from its start. We were a pharmacy and diagnostic centre that wanted to deliver enhanced patient care through advanced technologies. We tried so many software and tools but nothing worked best for our services. We decided to develop our own software solution that is a single hub for pharmacy, OPD, and Diagnostic centre management.
							</p>
							<p className='mt-4'>Our professional development team designed innovative software that can transform traditional healthcare services. Now, we are delivering satisfying care to our patients with the Medicy Software. We can manage inventories, sales, overstocking, payments, patient appointments, and GST billing using a single solution. </p>
						</div>
						<div>
							<h1 className='mt-5'>Our Mission</h1>
							<p className='mt-4'>
								At Medicy, our mission is to revolutionise traditional healthcare management by empowering healthcare providers with a user-friendly software solution tailored to their needs. We aim to enhance patient care through innovative inventory management, patient appointment scheduling, and accurate billing operations.
							</p>
						</div>
						{/* <div className='mt-5'>
							<button
								type='button'
								className='btn btn-primary btn-lg rounded-pill'>
								LEARN MORE
							</button>
						</div> */}
					</div>
				</motion.div>
				{/* ////////// */}
				<div className='trusted-layout d-flex justify-content-center align-items-center'>
					<div className='trusted-banner'>
						<h5>― Our Team</h5>
						<h3 className=' mb-0'>Dedicated Experts,</h3>
						<h3 className=' mb-3'>Exceptional Results</h3>
						<p className=' mb-4 mr-5'>
							Medicy’s success is driven by its dedicated team of software developers. Our team is composed of experienced professionals, passionate about designing an innovative software solution to benefit all healthcare providers.
						</p>
						<h6 className='mb-3 tickline'>
							<svg
								width='1rem'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 512 512'>
								<path
									fill='#ffffff'
									d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z'
								/>
							</svg>{' '}
							Dedicated Development Team
						</h6>
						<h6 className=' mb-3 tickline'>
							{' '}
							<svg
								width='1rem'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 512 512'>
								<path
									fill='#ffffff'
									d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z'
								/>
							</svg>{' '}
							24/7 Support
						</h6>
						<h6 className=' mb-5 tickline'>
							{' '}
							<svg
								width='1rem'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 512 512'>
								<path
									fill='#ffffff'
									d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z'
								/>
							</svg>{' '}
							Enhanced Client Satisfaction
						</h6>
						<div className='trusted-button'>
							<a href='/contact/' className='btn btn-outline-light btn-lg'>
								Let's Connect
							</a>
						</div>
					</div>
					<div className='trusted-img'>
						<img src={groupOfPeoples} alt='' width='500px' height='350px' />
						{/* <div className='textinpicdiv'>
							<div className='textinpicture'>
								<h5>850+ Completed Project </h5>
							</div>
						</div> */}
					</div>
				</div>

				{/* ///// */}
				{/* <div className='about-layout'>
					<div className=''>
						<div className='about-layoutImg'>
							<img src={aboutTwo} alt='' />
						</div>
						<div className='aboutLayout-div'>
							<div className='aboutHead-layout'>
								<h1>Develop practical new skills anytime</h1>
								<p className='mt-4'>
									Duis aute irure dolor in reprehenderit in voluptate velit esse
									cillum dolore eu fugiat nulla pariatur. Excepteur sint
									occaecat cupidatat non proident, sunt in culpa qui officia.
								</p>
								<div className='aboutHead-button'>
									<button
										type='button'
										className='btn btn-primary btn-lg rounded-pill mt-4'>
										LEARN MORE
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='aboutLayout-award'>
						<img src={awardIcon} alt='' />
						<div className='award-head'>
							<h1>
								Find out more about our awards & recognition, including Top 20
								Leadership Training company & others...
							</h1>
						</div>
						<div>
							<button
								type='button'
								className='btn  btn-outline-light btn-lg rounded-pill'>
								LEARN MORE
							</button>
						</div>
					</div>
				</div> */}
				<div className='company-layout'>
					<div className='compnayLayout-head'>
						<div className='d-flex justify-content-center '>
							<h1 className='me-4'>Mission</h1>
							<img src={missionlogo} alt='' />
						</div>
						<h4>Efficient Healthcare Management | Elevate Patientcare standards.</h4>
					</div>
				</div>
			</section>
		</>
	);
}
