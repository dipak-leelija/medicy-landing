import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import avtar from '../../public/assets/img/quotation.png';
import { CgArrowLeft } from "react-icons/cg";
import { CgArrowRight } from "react-icons/cg";

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
				<div className='pharmaciesTag'>
					<h1>What Our Client Says</h1>
				</div>
				{/* <div className='carousel-div'> */}
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
						dotListClass='custom-dot-list-style'
						itemClass='carousel-item-padding-40-px'
						customLeftArrow={
							<button className='custom-arrow custom-arrow-left'><CgArrowLeft size={25} /></button>
						}
						customRightArrow={
							<button className='custom-arrow custom-arrow-right'><CgArrowRight size={25} /></button>
						}>
						<div className='contentdiv'>
							<div className='testimonial-img'>
								<img src={avtar} alt='' />
							</div>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a typ
							<div className='d-flex justify-content-end mt-3 fw-bold'>
								<p>~ Jayanta</p>
							</div>
						</div>
						<div className='contentdiv'>
							<div className='testimonial-img'>
								<img src={avtar} alt='' />
							</div>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a typ
							<div className='d-flex justify-content-end mt-3 fw-bold'>
								<p>~ Jayanta</p>
							</div>
						</div>
						<div className='contentdiv'>
							<div className='testimonial-img'>
								<img src={avtar} alt='' />
							</div>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a typ
							<div className='d-flex justify-content-end mt-3 fw-bold'>
								<p>~ Jayanta</p>
							</div>
						</div>
						<div className='contentdiv'>
							<div className='testimonial-img'>
								<img src={avtar} alt='' />
							</div>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a typ
							<div className='d-flex justify-content-end mt-3 fw-bold'>
								<p>~ Jayanta</p>
							</div>
						</div>
					</Carousel>
				}
				{/* </div> */}
			</div>
		</section>
	);
}
