import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import heroImg from '/assets/img/best-healthcare-management-software-in-India.png';
import tap from '/assets/img/tap.png';

import HeroTextSlider from '../componant/HeroTextSlider';
import TopPharmacies from './PharmaciesIcon';
import Chooseus from './Chooseus3';
import KeyFeature from './KeyFeature';
import Cataloguebanner from './Cataloguebanner';
import Features from './Features';
import Testimonial from './Testimonial';
import TrailBooking from './TrailBooking';
import Faqs from './Faqs';

export default function Home() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [showImage, setShowImage] = useState(window.innerWidth > 767);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return function cleanup() {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
		setShowImage(window.innerWidth > 767); // Update showImage state based on window width
	};
	return (
		<>
			<section className='w-100'>
				<div className='hero-banner'>
					<div className='d-flex justify-content-between align-items-center flex-wrap overflow-hidden'>
						<div className='baner-left'>
							<motion.div initial={{opacity: 0}} whileInView={{opacity: 0.4, }} transition={{ duration: 1.5, delay: 0.4 }} viewport={{ once: true }} className='ractangle1'></motion.div>
							<motion.div initial={{opacity: 0}} whileInView={{opacity: 0.4}} transition={{ duration: 1.5, delay: 0.4 }} viewport={{ once: true }} className='ractangle2'></motion.div>
							<div className='heading text-start'>
								<motion.div
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 1 }}
									transition={{ duration: 0.5, delay: 0.3 }}
									viewport={{ once: true }}
									className='mb-4 headingtext'>
									<h1>
										Best Healthcare Management Software in India
										<img src={tap} alt='' />
									</h1>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 1 }}
									transition={{ duration: 0.5, delay: .4 }}
									viewport={{ once: true }}
									className='baner-text'>
									<HeroTextSlider/>
								</motion.div>

								<motion.div
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 1 }}
									transition={{
										duration: 0.5,
										delay: 0.4,
									}}
									viewport={{ once: true }}
									className='hero-btn-area'>
									<a href="/pricing" className='btn btn-lg hero-price-btn w-md-25'>See Pricing</a>
									<a href="/schedule/" className='btn btn-lg hero-demo-btn ms-md-4' variant="outline-secondary">Demo</a>
								</motion.div>
							</div>
						</div>
						<div className='baner-right d-flex justify-content-center'>
							<motion.div initial={{opacity: 0}} whileInView={{opacity: 0.5}} transition={{ duration: 1.5, delay: 0.4 }} viewport={{once:true}} className='circle1'></motion.div>
							<motion.div initial={{opacity: 0}} whileInView={{opacity: 0.3}} transition={{ duration: 1.5, delay: 0.4 }} viewport={{once:true}}  className='circle2'></motion.div>
							{showImage && (
								<motion.div
									initial={{ opacity: 0, x: 30 }}
									whileInView={{ opacity: 1, x: 1 }}
									transition={{ duration: 0.5, delay: 0.4 }}
									viewport={{ once: true }}
									className='heroimg'>
									<img src={heroImg} alt='' />
								</motion.div>
							)}
						</div>
					</div>
				</div>
			</section>
			{/* <TopPharmacies /> */}
			<KeyFeature />
			<Chooseus />
			<Cataloguebanner />
			<Features/>
			<TrailBooking />
			<Testimonial />
			<Faqs />
		</>
	);
}
