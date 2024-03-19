import React from 'react';
import pharmamanage1 from '../../public/assets/img/pharmamanage1.png';
import pharmamanage3 from '../../public/assets/img/pharmamanage3.png';
import parmamanage4 from '../../public/assets/img/parmamanage4.png';

export default function KeyFeature() {
	const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
	const [showImage, setShowImage] = React.useState(window.innerWidth > 767);

	React.useEffect(() => {
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
		<section>
			<div className='featuresmain'>
				<div className='mainhead'>
					<div className='featureHead'>
						<h1>Key Features Of Medicy</h1>
					</div>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a typ
					</p>
				</div>
				<div className='main-card'>
					<div className='keycontent'>
						<div className='maincontent'>
							{!showImage && (
								<div className='keycard-img'>
									<img src={pharmamanage1} alt='' />
								</div>
							)}
							<h4 className='card-title'>Patient Reecords Management</h4>
							<p className='card-text'>
								This is a longer card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</p>
						</div>
						{showImage && (
							<div className='keycard-img'>
								<img src={pharmamanage1} alt='' />
							</div>
						)}
					</div>
					<div className='keycontent'>
						{showImage && (
							<div className='keycard-img'>
								<img src={parmamanage4} alt='' />
							</div>
						)}
						<div className='maincontent'>
							{!showImage && (
								<div className='keycard-img'>
									<img src={parmamanage4} alt='' />
								</div>
							)}
							<h4 className='card-title'>Patient Reecords Management</h4>
							<p className='card-text'>
								This is a longer card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</p>
						</div>
					</div>
					<div className='keycontent'>
						<div className='maincontent'>
						{!showImage && (
							<div className='keycard-img'>
								<img src={pharmamanage3} alt='' />
							</div>
						)}
							<h4 className='card-title'>Patient Reecords Management</h4>
							<p className='card-text'>
								This is a longer card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</p>
						</div>
						{showImage && (
							<div className='keycard-img'>
								<img src={pharmamanage3} alt='' />
							</div>
						)}
					</div>
					<div className='keycontent'>
						{showImage && (
							<div className='keycard-img'>
								<img src={parmamanage4} alt='' />
							</div>
						)}
						<div className='maincontent'>
						{!showImage && (
							<div className='keycard-img'>
								<img src={parmamanage4} alt='' />
							</div>
						)}
							<h4 className='card-title'>Patient Reecords Management</h4>
							<p className='card-text'>
								This is a longer card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</p>
						</div>
					</div>
					<div></div>
					<div></div>
				</div>
			</div>
		</section>
	);
}
