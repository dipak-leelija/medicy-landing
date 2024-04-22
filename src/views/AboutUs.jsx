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
							UI designer, photographer and travel enthusiast. Nisl purus in
							mollis nunc sed id semper.
						</p>
						<div className='headdiv-button'>
							<button
								type='button'
								className='btn btn-primary btn-lg rounded-pill mt-4'>
								LEARN MORE
							</button>
						</div>
					</div>

					<div className='about-one'>
						<div>
							<p>WHY WE LOVE LEARNING...</p>
							<h1 className='mt-4'>Learning is essential to life</h1>
							<p className='mt-4'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</div>
						<div>
							<h1 className='mt-5'>We believe in diverse thinking</h1>
							<p className='mt-4'>
								We take action with the urgency that our mission deserves. We
								focus on learning faster so that we can invest in the most
								important things. We achieve more with less by creating systems
								at the right scale (sometimes with duct tape.) We are
								intentional about when we move fast and when we are more
								considered.
							</p>
						</div>
						<div className='mt-5'>
							<button
								type='button'
								className='btn btn-primary btn-lg rounded-pill'>
								LEARN MORE
							</button>
						</div>
					</div>
				</motion.div>
				{/* ////////// */}
				<div className='trusted-layout d-flex justify-content-center align-items-center'>
					<div className='trusted-banner'>
						<h5>― WORKS ABOUT</h5>
						<h3 className=' mb-0'>Trusted by 5000+</h3>
						<h3 className=' mb-3'>Happy Customers</h3>
						<p className=' mb-4 mr-5'>
							We’re a team of SEO and development experts who provide a complete
							set of integrated services to scale your company’s digital growth.
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
							100% Client Satisfaction
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
							World class Worker
						</h6>
						<div className='trusted-button'>
							<a href='/contact' className='btn btn-outline-light btn-lg'>
								Let's Connect
							</a>
						</div>
					</div>
					<div className='trusted-img'>
						<img src={groupOfPeoples} alt='' width='500px' height='350px' />
						<div className='textinpicdiv'>
							<div className='textinpicture'>
								<h5>850+ Completed Project </h5>
							</div>
						</div>
					</div>
				</div>

				{/* ///// */}
				<div className='about-layout'>
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
				</div>
				<div className='company-layout'>
					<div className='compnayLayout-head'>
						<div className='d-flex justify-content-center '>
							<h1 className='me-4'>Mission</h1>
							<img src={missionlogo} alt='' />
						</div>
						<h4>Empowering Patients. Empowering Pharmacies.</h4>
					</div>
				</div>
			</section>
		</>
	);
}
