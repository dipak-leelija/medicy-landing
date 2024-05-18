import React from 'react';
import {motion} from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 4,
	},
	tablet: {
		breakpoint: { max: 1024, min: 768 },
		items: 3,
	},
	mobile: {
		breakpoint: { max: 767, min: 200 },
		items: 2,
	},
};
const sliderImageUrl = [
	//First image url
  {
		url:
			'https://www.evitalrx.in/webroot/images/evital-images/company-images/company3.png',
	},
	{
		url:
			'https://www.evitalrx.in/webroot/images/evital-images/company-images/company7.png',
	},
	{
		url:
			'https://www.evitalrx.in/webroot/images/evital-images/company-images/company9.png',
	},
	//Second image url
	{
		url:
			'https://www.evitalrx.in/webroot/images/evital-images/company-images/company12.png',
	},
	//Third image url
	{
		url:
			'https://www.evitalrx.in/webroot/images/evital-images/company-images/company11.jpg',
	},
	//Fourth image url
];

const PharmaciesIcon = () => {
	return (
		<section>
			<div className='parent'>
				<motion.div
				initial={{ opacity: 0, y: 80 }}
				whileInView={{ opacity: 1, y: 1 }}
				transition={{ duration: 0.5, delay: 0.6 }}
				viewport={{ once: true }} 
				className='text-center pharmaciesTag'>
					<h2 className="h1 sec-heading med-main-blue">Trusted by Top Pharmacies of India</h2>
				</motion.div>
				<motion.div
				initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }} 
				className='carousel-div'>
					{
						<Carousel
							responsive={responsive}
							infinite={true}
							autoPlay={true}
							swipeable={true}
							draggable={true}
							showDots={false}
							autoPlaySpeed={4000}
						>
							{sliderImageUrl.map((imageUrl, index) => {
								return (
									<div className='slider' key={index}>
										<img src={imageUrl.url} alt='' />
									</div>
                  
								);
							})}
						</Carousel>
					}
				</motion.div>
			</div>
		</section>
	);
};
export default PharmaciesIcon;
