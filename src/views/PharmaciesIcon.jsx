import React from 'react';
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
		breakpoint: { max: 767, min: 464 },
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
				<div className='pharmaciesTag'>
					<h1>Trusted by Top pharmacies of India</h1>
				</div>
				<div className='carousel-div'>
					{
						<Carousel
							responsive={responsive}
							infinite={true}
							autoPlay={true}
							swipeable={true}
							draggable={true}
							// showDots={true}
							partialVisible={false}
							autoPlaySpeed={2000}
              customButtonGroup={false}
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
				</div>
			</div>
		</section>
	);
};
export default PharmaciesIcon;
