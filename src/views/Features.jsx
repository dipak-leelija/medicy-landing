import React from 'react';
import {motion} from 'framer-motion';
import { Row, Col } from 'react-bootstrap';
import patientreport from '../../public/assets/icon/patient-report.svg'
import onlinehealth from '../../public/assets/icon/online-health.svg'

export default function Features() {
	const xValue = window.innerWidth < 1024 ? 0 : 160;
	return (
		<section>
			<div className='main-feat'>
				<Row className='d-flex justify-content-center align-items-center text-center pb-5 main-feat-head'>
					<motion.div
					initial={{ opacity: 0, y: 80 }}
					whileInView={{ opacity: 1, y: 1 }}
					transition={{ duration: 0.5, delay: 0 }}
					viewport={{ once: true }} 
					>
					<h1>Useful Features</h1>
					<p className='pt-4'>
						Designed for showcasing all manner of creative work in a truly
						modern, art-inspired & animation-driven environment.
					</p>
					</motion.div>
				</Row>
				<Row xs={2} md={3} lg={5} className='g-4'>

					{/* fast row animation start  */}
					<Col>
						<motion.div
						initial={{ opacity: 0, x: xValue }}
						whileInView={{ opacity: 1, x: 1 }}
						transition={{ duration: 0.5, delay: 0.8 }}
						viewport={{ once: true }}  
						className='card feat-card'>
							<div
								className={
									window.innerWidth < 768 ? 'card-body feat-card-body p-2' : 'card-body feat-card-body p-5'
								}>
								<div className='pb-5 svgIcon'>
									<img src={patientreport} alt="" />
								</div>
								<div className='feat-head'>Product</div>
							</div>
						</motion.div>
					</Col>
					<Col>
						<motion.div
						initial={{ opacity: 0, x: xValue }}
						whileInView={{ opacity: 1, x: 1 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						viewport={{ once: true }} 
						className='card feat-card'>
							<div
								className={
									window.innerWidth < 768 ? 'card-body feat-card-body p-2' : 'card-body feat-card-body p-5'
								}>
								<div className='pb-5 svgIcon'>
									<img src={onlinehealth} alt="" />
								</div>
								<div className='feat-head'>Product</div>
							</div>
						</motion.div>
					</Col>
					<Col>
						<motion.div 
						initial={{ opacity: 0}}
						whileInView={{ opacity: 1}}
						transition={{ duration: 0.4, delay: 0.6 }}
						viewport={{ once: true }} 
						className='card feat-card'>
							<div
								className={
									window.innerWidth < 768 ? 'card-body feat-card-body p-2' : 'card-body feat-card-body p-5'
								}>
								<div className='pb-5 svgIcon'>
                                <img src={patientreport} alt="" />
								</div>
								<div className='feat-head'>Product</div>
							</div>
						</motion.div>
					</Col>
					<Col>
						<motion.div
						initial={{ opacity: 0, x: -xValue }}
						whileInView={{ opacity: 1, x: 1 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						viewport={{ once: true }} 
						className='card feat-card'>
							<div
								className={
									window.innerWidth < 768 ? 'card-body feat-card-body p-2' : 'card-body feat-card-body p-5'
								}>
								<div className='pb-5 svgIcon'>
                                <img src={patientreport} alt="" />
								</div>
								<div className='feat-head'>Product</div>
							</div>
						</motion.div>
					</Col>
					<Col>
						<motion.div 
						initial={{ opacity: 0, x: -xValue }}
						whileInView={{ opacity: 1, x: 1 }}
						transition={{ duration: 0.5, delay: 0.8 }}
						viewport={{ once: true }}  
						className='card feat-card'>
							<div
								className={
									window.innerWidth < 768 ? 'card-body feat-card-body p-2' : 'card-body feat-card-body p-5'
								}>
								<div className='pb-5 svgIcon'>
                                <img src={patientreport} alt="" />
								</div>
								<div className='feat-head'>Product</div>
							</div>
						</motion.div>
					</Col>
					{/* fast row end  */}

					{/* 2nd row animation start  */}
					<Col>
						<motion.div
						 initial={{ opacity: 0, x: xValue }}
						 whileInView={{ opacity: 1, x: 1 }}
						 transition={{ duration: 0.5, delay: 0.8 }}
						 viewport={{ once: true }} 
						className='card feat-card'>
							<div
								className={
									window.innerWidth < 768 ? 'card-body feat-card-body p-2' : 'card-body feat-card-body p-5'
								}>
								<div className='pb-5 svgIcon'>
                                <img src={patientreport} alt="" />
								</div>
								<div className='feat-head'>Product</div>
							</div>
						</motion.div>
					</Col>
					<Col>
						<motion.div
						initial={{ opacity: 0, x: xValue }}
						whileInView={{ opacity: 1, x: 1 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						viewport={{ once: true }}  
						className='card feat-card'>
							<div
								className={
									window.innerWidth < 768 ? 'card-body feat-card-body p-2' : 'card-body feat-card-body p-5'
								}>
								<div className='pb-5 svgIcon'>
                                <img src={patientreport} alt="" />
								</div>
								<div className='feat-head'>Product</div>
							</div>
						</motion.div>
					</Col>
					<Col>
						<motion.div
						initial={{ opacity: 0}}
						whileInView={{ opacity: 1}}
						transition={{ duration: 0.4, delay: 0.6 }}
						viewport={{ once: true }} 
						className='card feat-card'>
							<div
								className={
									window.innerWidth < 768 ? 'card-body feat-card-body p-2' : 'card-body feat-card-body p-5'
								}>
								<div className='pb-5 svgIcon'>
                                <img src={patientreport} alt="" />
								</div>
								<div className='feat-head'>Product</div>
							</div>
						</motion.div>
					</Col>
                    <Col>
						<motion.div 
						initial={{ opacity: 0, x: -xValue }}
						whileInView={{ opacity: 1, x: 1 }}
						transition={{ duration: 0.5, delay: 0.5 }}
						viewport={{ once: true }} 
						className='card feat-card'>
							<div
								className={
									window.innerWidth < 768 ? 'card-body feat-card-body p-2' : 'card-body feat-card-body p-5'
								}>
								<div className='pb-5 svgIcon'>
                                <img src={patientreport} alt="" />
								</div>
								<div className='feat-head'>Product</div>
							</div>
						</motion.div>
					</Col>
					<Col>
						<motion.div
						initial={{ opacity: 0, x: -xValue }}
						whileInView={{ opacity: 1, x: 1 }}
						transition={{ duration: 0.5 , delay: 0.8 }}
						viewport={{ once: true }}  
						className='card feat-card'>
							<div
								className={
									window.innerWidth < 768 ? 'card-body feat-card-body p-2' : 'card-body feat-card-body p-5'
								}>
								<div className='pb-5 svgIcon'>
                                <img src={patientreport} alt="" />
								</div>
								<div className='feat-head'>Product</div>
							</div>
						</motion.div>
					</Col>
				</Row>
			</div>
		</section>
	);
}
