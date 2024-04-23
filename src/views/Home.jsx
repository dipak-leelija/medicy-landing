import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import img1 from '/assets/img/hero-image.jpg';
import tap from '/assets/img/tap.png';
import Chooseus from './Chooseus';
import KeyFeature from './KeyFeature';
import TrailBooking from './TrailBooking';
import TopPharmacies from './PharmaciesIcon';
import Faqs from './Faqs';
import Cataloguebanner from './Cataloguebanner';
import Testimonial from './Testimonial';
import Features from './Features';

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
			<section className='w-100 h-100 '>
				<div>
					<div className='d-flex justify-content-around align-items-start flex-wrap main-banner'>
						<div className='baner-left mt-5'>
							<motion.div initial={{opacity: 0}} whileInView={{opacity: 1, }} transition={{ duration: 1.5, delay: 0.4 }} viewport={{ once: true }} className='ractangle1'></motion.div>
							<motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ duration: 1.5, delay: 0.4 }} viewport={{ once: true }} className='ractangle2'></motion.div>
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
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi recusandae, eaque cumque aperiam iste repellat earum ea atque minima accusamus corrupti enim quaerat quasi, minus doloremque inventore, alias sapiente totam amet et facere! Maxime fugit et facilis a deserunt perferendis voluptate debitis nostrum. Sunt ut possimus doloremque consequatur quam earum veritatis nobis ipsum natus molestias!
									</p>
								</motion.div>

								<motion.div
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 1 }}
									transition={{
										duration: 0.5,
										delay: 0.5,
									}}
									viewport={{ once: true }}
									className='hero-btn-area'>
									<a href="/pricing" className='btn btn-lg hero-price-btn'>See Pricing</a>
									<a href="/pricing" className='btn btn-lg hero-demo-btn ms-md-4' variant="outline-secondary">Demo</a>
								</motion.div>
							</div>
						</div>
						<div className='baner-right d-flex justify-content-end'>
							<motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ duration: 1.5, delay: 0.4 }} viewport={{once:true}} className='circle1'></motion.div>
							<motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ duration: 1.5, delay: 0.4 }} viewport={{once:true}}  className='circle2'></motion.div>
							{showImage && (
								<motion.div
									initial={{ opacity: 0, x: 30 }}
									whileInView={{ opacity: 1, x: 1 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									viewport={{ once: true }}
									className='heroimg'>
									<img src={img1} alt='' />
								</motion.div>
							)}
						</div>
					</div>
				</div>
			</section>
			<TopPharmacies />
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
