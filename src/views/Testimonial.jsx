import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import avtar from '../../public/assets/img/quotation.png';
import Feedback from 'react-bootstrap/esm/Feedback';


const testimonalList = [
	{
		text : "Medicy.in has transformed our clinic's workflow. The automated reminders and easy-to-use dashboard have greatly reduced medication errors and improved patient compliance. The support team is always responsive and helpful. A must-have for any modern healthcare facility.",
		client: "Dr. Alex Patel"
	},
	{
		text : "The integration of Medicy.in into our practice was seamless. The software is incredibly user-friendly and has helped us streamline our medication management processes. Our patients appreciate the timely reminders and clear instructions, which have improved adherence rates.",
		client: "Dr. John Doe",
	},
	{
		text : "As a pharmacist, Medicy.in has been a game-changer. The ability to track prescriptions, monitor inventory, and communicate with doctors in real-time has significantly enhanced our efficiency and service quality. I highly recommend this software to any healthcare professional.",
		client: "Nurse Priya Kapoor",
	},
	{
		text : "Implementing Medicy.in in our hospital has been a wise decision. The software’s comprehensive features, from electronic prescribing to medication administration records, have significantly improved our medication management practices. Our staff finds it easy to use and very reliable.",
		client: "Ananya",
	}

]

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


// Custom Left Arrow Component
const CustomLeftArrow = ({ onClick, ...rest }) => {
	// Destructure carouselState out to avoid passing it to the button element
	const { carouselState, rtl, ...remainingProps } = rest;
	return (
	  <button
		className='custom-arrow custom-arrow-left'
		aria-label="Previous slide"
		type="button"
		onClick={onClick}
		{...remainingProps}
	  >
		<svg
		  width='1.5rem'
		  xmlns='http://www.w3.org/2000/svg'
		  viewBox='0 0 448 512'
		  fill='#6f6f70'
		>
		  <path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z' />
		</svg>
	  </button>
	);
  };
  
  // Custom Right Arrow Component
  const CustomRightArrow = ({ onClick, ...rest }) => {
	// Destructure carouselState out to avoid passing it to the button element
	const { carouselState, rtl, ...remainingProps } = rest;
	return (
	  <button
		className='custom-arrow custom-arrow-right'
		aria-label="Next slide"
		type="button"
		onClick={onClick}
		{...remainingProps}
	  >
		<svg
		  width='1.5rem'
		  xmlns='http://www.w3.org/2000/svg'
		  viewBox='0 0 448 512'
		  fill='#6f6f70'
		>
		  <path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
		</svg>
	  </button>
	);
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
					className='text-center pharmaciesTag'>
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
							showDots={window.innerWidth <= 767 ? true : false}
							dotListClass='custom-dot-list-style'
							itemClass='carousel-item-padding-40-px'
							customLeftArrow={<CustomLeftArrow />}
							customRightArrow={<CustomRightArrow />}
						>
							{testimonalList.map((feedback, index)=>(
							<div className='contentdiv' key={index}>
								<div className='testimonial-img'>
									<img src={avtar} alt='' />
								</div>
								{feedback.text}
								<div className='d-flex justify-content-end mt-3 fw-bold'>
									<p>~ {feedback.client}</p>
								</div>
							</div>
							))}
						</Carousel>
					}
				</motion.div>
			</div>
		</section>
	);
}
