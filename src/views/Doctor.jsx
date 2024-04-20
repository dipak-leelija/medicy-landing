import React from 'react';
import { motion } from 'framer-motion';
import doctor from '../../public/assets/img/doctor.png';
import circleCheck from '/assets/icon/circle-check.svg';
export default function Doctor() {
	return (
		<section>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.4 }}
				viewport={{ once: true }}
				className='d-flex justify-content-between doctor-banner '>
				<div className='doc-shape1'></div>
				<div className='doc-shape2'></div>
				<div className='doc-shape3'></div>
				<div className='doc-shape4'></div>
				<div className='doc-shape5'></div>

				<div className='doc-Leftdiv'>
					<div>
						<h1>Discover Our Doctor Service Today !</h1>
					</div>
					<div className='mb-2 doc-feat fs-5'>
						<img src={circleCheck} alt='' className='me-3' /> <span>searching</span>
					</div>
					<div className='mb-2 doc-feat fs-5'>
						<img src={circleCheck} alt='' className='me-3' /> <span>pharmacy</span>
					</div>
					<div className='mb-2 doc-feat fs-5'>
						<img src={circleCheck} alt='' className='me-3' /> <span>pharmacy</span>
					</div>
				</div>
				<div className='d-flex justify-content-end'>
					<div className='doctor-img'>
						<img src={doctor} alt='' />
					</div>
				</div>
			</motion.div>
		</section>
	);
}
