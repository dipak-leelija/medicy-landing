import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import avtar from '../../public/assets/img/quotation.png'

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
					<h1>Trusted by Top pharmacies of India</h1>
				</div>
				{/* <div className='carousel-div'> */}
					{
						<Carousel
							responsive={responsive}
							infinite={true}
							autoPlay={true}
							swipeable={true}
							draggable={true}
							// showDots={true}
							partialVisible={true}
							autoPlaySpeed={2000}
							customButtonGroup={false}
							arrows={true}>
							<div className='contentdiv'>
                                <div className='testimonial-img'>
                                    <img src={avtar} alt="" />
                                </div>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a typ
                                    <div className='d-flex justify-content-end mt-4'>
                                        <p>- Jayanta</p>
                                    </div>
							</div>
							<div className='contentdiv'>
                                <div className='testimonial-img'>
                                    <img src={avtar} alt="" />
                                </div>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a typ
                                    <div className='d-flex justify-content-end mt-4'>
                                        <p>- Jayanta</p>
                                    </div>
							</div>
							<div className='contentdiv'>
                                <div className='testimonial-img'>
                                    <img src={avtar} alt="" />
                                </div>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a typ
                                    <div className='d-flex justify-content-end mt-4'>
                                        <p>- Jayanta</p>
                                    </div>
							</div>
							<div className='contentdiv'>
                                <div className='testimonial-img'>
                                    <img src={avtar} alt="" />
                                </div>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a typ
                                    <div className='d-flex justify-content-end mt-4'>
                                        <p>- Jayanta</p>
                                    </div>
							</div>
						</Carousel>
					}
				{/* </div> */}
			</div>
		</section>
	);
}
