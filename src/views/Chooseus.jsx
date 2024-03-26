import React from 'react';
import { motion } from 'framer-motion';
import chooseImg from '/assets/img/chooseus.png';

export default function Chooseus() {
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
			<div className='wby-choose-us'>
				<div className='main-div'>
					<div className='frame mt-4'>
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							whileInView={{ opacity: 1, y: 1 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							viewport={{ once: true }}
							className='why-choose-us-wrapper'>
							<h1 className='why-choose-us'>Why Choose Us?</h1>
						</motion.div>
					</div>
					<div className='frame-parent '>
						{!showImage && (
							<div className='frame1'>
								<motion.div
									initial={{ opacity: 0, y: 100 }}
									whileInView={{ opacity: 1, y: 1 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									viewport={{ once: true }}
									className='frame2'>
									<img
										className='removebg-preview-1-icon'
										alt=''
										src={chooseImg}
									/>
								</motion.div>
							</div>
						)}
						{(windowWidth <= 767 || windowWidth > 1024) && (
							<>
								<div className='frame3'>
									<div className='frame4'>
										<motion.div
											initial={{ opacity: 0, y: 100 }}
											whileInView={{ opacity: 1, y: 1 }}
											transition={{ duration: 0.5, delay: 0.5 }}
											viewport={{ once: true }}
											className='frame5'>
											<div className='cloud-based-software-wrapper'>
												<h4> Cloud Based Software</h4>
											</div>
											<div className='be-always-connected-with-your-wrapper'>
												<div className='be-always-connected'>
													Be always connected with your Pharmacy with cloud
													technology. Monitor your Medical store from anywhere
													Be always connected with your Pharmacy with cloud
													technology. Monitor your Medical store from anywhere
												</div>
											</div>
										</motion.div>
									</div>
									<motion.div
										initial={{ opacity: 0, y: 100 }}
										whileInView={{ opacity: 1, y: 1 }}
										transition={{ duration: 0.5, delay: 0.5 }}
										viewport={{ once: true }}
										className='frame6'>
										<div className='frame7'>
											<div className='cloud-based-software-wrapper'>
												<h4> Cloud Based Software</h4>
											</div>
											<div className='be-always-connected-with-your-wrapper'>
												<div className='be-always-connected'>
													Be Be always connected with your Pharmacy with cloud
													technology. Monitor your Medical store from anywhere
													Be always connected with your Pharmacy with cloud
													technology. Monitor your Medical store from anywhere
												</div>
											</div>
										</div>
									</motion.div>
								</div>
							</>
						)}
						{showImage && (
							<div className='frame1'>
								<motion.div
									initial={{ opacity: 0, y: 100 }}
									whileInView={{ opacity: 1, y: 1 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									viewport={{ once: true }}
									className='frame2'>
									<img
										className='removebg-preview-1-icon'
										alt=''
										src={chooseImg}
									/>
								</motion.div>
							</div>
						)}
						{(windowWidth <= 767 || windowWidth > 1024) && (
							<div className='frame8'>
								<motion.div
									initial={{ opacity: 0, y: 100 }}
									whileInView={{ opacity: 1, y: 1 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									viewport={{ once: true }}
									className='frame9'>
									<div className='frame10'>
										<div className='cloud-based-software-wrapper'>
											<h4> Cloud Based Software</h4>
										</div>
										<div className='be-always-connected-with-your-frame'>
											<div className='be-always-connected'>
												Be always connected with your Pharmacy with cloud
												technology. Monitor your Medical store from anywhere Be
												always connected with your Pharmacy with cloud
												technology. Monitor your Medical store from anywhere
											</div>
										</div>
									</div>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, y: 100 }}
									whileInView={{ opacity: 1, y: 1 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									viewport={{ once: true }}
									className='frame12'>
									<div className='frame13'>
										<div className='cloud-based-software-wrapper'>
											<h4> Cloud Based Software</h4>
										</div>
										<div className='be-always-connected-with-your-frame'>
											<div className='be-always-connected'>
												Be always connected with your Pharmacy with cloud
												technology. Monitor your Medical store from anywhere Be
												always connected with your Pharmacy with cloud
												technology. Monitor your Medical store from anywhere
											</div>
										</div>
									</div>
								</motion.div>
							</div>
						)}
					</div>

					{windowWidth >= 768 && windowWidth <= 1024 && (
						<div className='frame-parent '>
							<div className='row row-cols-1 row-cols-md-2 g-4 p-4'>
								<motion.div
									initial={{ opacity: 0, y: 100 }}
									whileInView={{ opacity: 1, y: 1 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									viewport={{ once: true }}
									className='col'>
									<div className='choose-card'>
										<div className='card-body'>
											<h5 className='card-title text-white pb-2'>
												Cloud Based Software
											</h5>
											<p className='card-text'>
												Be always connected with your Pharmacy with cloud
												technology. Monitor your Medical store from anywhere Be
												always connected with your Pharmacy with cloud
												technology. Monitor your Medical store from anywhere
											</p>
										</div>
									</div>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, y: 100 }}
									whileInView={{ opacity: 1, y: 1 }}
									transition={{ duration: 0.5, delay: 0.6 }}
									viewport={{ once: true }}
									className='col'>
									<div className='choose-card'>
										<div className='card-body'>
											<h5 className='card-title text-white pb-2'>
												Cloud Based Software
											</h5>
											<p className='card-text'>
												Be always connected with your Pharmacy with cloud
												technology. Monitor your Medical store from anywhere Be
												always connected with your Pharmacy with cloud
												technology. Monitor your Medical store from anywhere
											</p>
										</div>
									</div>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, y: 100 }}
									whileInView={{ opacity: 1, y: 1 }}
									transition={{ duration: 0.5, delay: 0.7 }}
									viewport={{ once: true }}
									className='col'>
									<div className='choose-card'>
										<div className='card-body'>
											<h5 className='card-title text-white pb-2'>
												Cloud Based Software
											</h5>
											<p className='card-text'>
												Be always connected with your Pharmacy with cloud
												technology. Monitor your Medical store from anywhere Be
												always connected with your Pharmacy with cloud
												technology. Monitor your Medical store from anywheret.
											</p>
										</div>
									</div>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, y: 100 }}
									whileInView={{ opacity: 1, y: 1 }}
									transition={{ duration: 0.5, delay: 0.8 }}
									viewport={{ once: true }}
									className='col'>
									<div className='choose-card'>
										<div className='card-body'>
											<h5 className='card-title text-white pb-2'>
												Cloud Based Software
											</h5>
											<p className='card-text'>
												Be always connected with your Pharmacy with cloud
												technology. Monitor your Medical store from anywhere Be
												always connected with your Pharmacy with cloud
												technology. Monitor your Medical store from anywhere
											</p>
										</div>
									</div>
								</motion.div>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
