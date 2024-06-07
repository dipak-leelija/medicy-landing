import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import FreeOfferBanner from '../componant/FreeOfferBanner'
import PlanCards from '../componant/PlanCards'
import CheckFaqs from '../componant/CheckFaq'
import TrailBooking from './TrailBooking';

import circleCheck from '/assets/icon/circle-check.svg';
import teamservice from '/assets/img/teamservice.png';

export default function Pricing() {
	return (
		<>
		<section>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.4 }}
				viewport={{ once: true }}
				className=' main-pricediv'>
				
        <FreeOfferBanner/>
        
        <PlanCards/>
				

				<div className='card mb-3 free-servicedsc mt-5 p-5 border-0'>
					<div className='row g-4'>
						<div className='col-md-8'>
							<h2 className='mb-4'>Our Team is Here to Help You 24/7</h2>
							<div className=' d-flex align-items-start'>
								<img src={circleCheck} className='mt-1' alt='' />
								<p className='ms-3'>
									{' '}
									Get help directly from the editor, thanks to our 24/7 live
									chat support.
								</p>
							</div>
							<div className=' d-flex align-items-start'>
								<img src={circleCheck} className='mt-1' alt='' />
								<p className='ms-3'>
									{' '}
									Highlight any certifications or lab test results that
									demonstrate the safety, reliability, and performance of the
									aircraft.
								</p>
							</div>
							<div className=' d-flex align-items-start'>
								<img src={circleCheck} className='mt-1' alt='' />
								<p className='ms-3'>
									{' '}
									Present detailed specifications and features of the aircraft,
									highlighting its safety, comfort, performance, and
									customization options.
								</p>
							</div>
							<div className=' d-flex align-items-start'>
								<img src={circleCheck} className='mt-1' alt='' />
								<p className='ms-3'>
									{' '}
									Present detailed specifications and features of the aircraft,
									highlighting its safety, comfort, performance, and
									customization options.
								</p>
							</div>
						</div>

						<div className='col-md-4 teamservice'>
							<img src={teamservice} alt='' />
						</div>
					</div>
				</div>
        {/* <CheckFaqs />			 */}
			</motion.div>
		</section>
		<div className='mb-5'>
		<TrailBooking/>	
		</div>
		</>
	);
}
