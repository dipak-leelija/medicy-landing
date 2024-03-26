import React from 'react';
import { motion } from 'framer-motion';
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
				<motion.div
					initial={{ opacity: 0, y: 80 }}
					whileInView={{ opacity: 1, y: 1 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					viewport={{ once: true }}
					className='mainhead'>
					<div className='featureHead'>
						<h1>Key Features Of Medicy</h1>
					</div>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a typ
					</p>
				</motion.div>
				<div className='main-card'>
					<div className='keycontent'>
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 1 }}
							transition={{ duration: 1.2, delay: 0.5 }}
							viewport={{ once: true }}
							className='maincontent'>
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
						</motion.div>
						{showImage && (
							<motion.div
								initial={{ opacity: 0, x: 30 }}
								whileInView={{ opacity: 1, x: 1 }}
								transition={{ duration: 1.2, delay: 0.8 }}
								viewport={{ once: true }}
								className='keycard-img'>
								<img src={pharmamanage1} alt='' />
							</motion.div>
						)}
					</div>
					<div className='keycontent'>
						{showImage && (
							<motion.div
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 1 }}
								transition={{ duration: 1.2, delay: 0.5 }}
								viewport={{ once: true }}
								className='keycard-img'>
								<img src={parmamanage4} alt='' />
							</motion.div>
						)}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 1 }}
							transition={{ duration: 1.2, delay: 0.5 }}
							viewport={{ once: true }}
							className='maincontent'>
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
						</motion.div>
					</div>
					<div className='keycontent'>
						<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 1 }}
						transition={{ duration: 1.2, delay: 0.5 }}
						viewport={{ once: true }}
						className='maincontent'>
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
						</motion.div>
						{showImage && (
							<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 1 }}
							transition={{ duration: 1.2, delay: 0.5 }}
							viewport={{ once: true }}
							className='keycard-img'>
								<img src={pharmamanage3} alt='' />
							</motion.div>
						)}
					</div>
					<div className='keycontent'>
						{showImage && (
							<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 1 }}
							transition={{ duration: 1.2, delay: 0.5 }}
							viewport={{ once: true }}
							className='keycard-img'>
								<img src={parmamanage4} alt='' />
							</motion.div>
						)}
						<motion.div 
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 1 }}
						transition={{ duration: 1.2, delay: 0.5 }}
						viewport={{ once: true }}
						className='maincontent'>
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
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
