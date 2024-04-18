import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import avtar from '../../public/assets/img/quotation.png';

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 2,
	},
	tablet: {
		breakpoint: { max: 1024, min: 768 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 767, min: 200 },
		items: 1,
	},
};

export default function Testimonial() {

	return (
		<section>
			<div className='mainTestimonial'>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 1 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					viewport={{ once: true }}
					className='pharmaciesTag'>
					<h1>What Our Client Says</h1>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					viewport={{ once: true }}
					className='carousel-div'>
					{
						<Carousel
							responsive={responsive}
							infinite={true}
							autoPlay={true}
							swipeable={true}
							draggable={true}
							partialVisible={true}
							autoPlaySpeed={4000}
							keyBoardControl={true}
							removeArrowOnDeviceType={['mobile']}
							containerClass='carousel-container'
							showDots={ window.innerWidth <=767 ? true : false }
							dotListClass='custom-dot-list-style'
							itemClass='carousel-item-padding-40-px'
							customLeftArrow={
								<button className='custom-arrow custom-arrow-left' aria-label="Previous slide" type="button" rtl="false">
									<svg
										width='1.5rem'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 448 512'
										fill='#6f6f70'>
										<path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z' />
									</svg>{' '}
								</button>
							}

							customRightArrow={
								<button className='custom-arrow custom-arrow-right'aria-label="Next slide" type="button" rtl="false">
									<svg
										width='1.5rem'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 448 512'
										fill='#6f6f70'>
										<path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
									</svg>
								</button>
							}
							>
							<div className='contentdiv'>
								<div className='testimonial-img'>
									<img src={avtar} alt='' />
								</div>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a typ
								<div className='d-flex justify-content-end mt-3 fw-bold'>
									<p>~ Jayanta</p>
								</div>
							</div>
							<div className='contentdiv'>
								<div className='testimonial-img'>
									<img src={avtar} alt='' />
								</div>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a typ
								<div className='d-flex justify-content-end mt-3 fw-bold'>
									<p>~ Jayanta</p>
								</div>
							</div>
							<div className='contentdiv'>
								<div className='testimonial-img'>
									<img src={avtar} alt='' />
								</div>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a typ
								<div className='d-flex justify-content-end mt-3 fw-bold'>
									<p>~ Jayanta</p>
								</div>
							</div>
							<div className='contentdiv'>
								<div className='testimonial-img'>
									<img src={avtar} alt='' />
								</div>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a typ
								<div className='d-flex justify-content-end mt-3 fw-bold'>
									<p>~ Jayanta</p>
								</div>
							</div>
						</Carousel>
					}
				</motion.div>
			</div>
		</section>
	);
}
