import React from 'react';
import { Row, Col } from 'react-bootstrap';
import patientreport from '../../public/assets/icon/patient-report.svg'
import onlinehealth from '../../public/assets/icon/online-health.svg'

export default function Features() {
	return (
		<section>
			<div className='main-feat'>
				<Row className='d-flex justify-content-center align-items-center text-center pb-5 main-feat-head'>
					<h1>Useful Features</h1>
					<p className='pt-4'>
						Designed for showcasing all manner of creative work in a truly
						modern, art-inspired & animation-driven environment.
					</p>
				</Row>
				<Row xs={2} md={3} lg={5} className='g-4'>
					<Col>
						<div className='card feat-card'>
							<div
								className={
									window.innerWidth < 768 ? 'card-body feat-card-body p-2' : 'card-body feat-card-body p-5'
								}>
								<div className='pb-5 svgIcon'>
									<img src={patientreport} alt="" />
								</div>
								<div className='feat-head'>Product</div>
							</div>
						</div>
					</Col>
					<Col>
						<div className='card feat-card'>
							<div
								className={
									window.innerWidth < 768 ? 'card-body feat-card-body p-2' : 'card-body feat-card-body p-5'
								}>
								<div className='pb-5 svgIcon'>
									<img src={onlinehealth} alt="" />
								</div>
								<div className='feat-head'>Product</div>
							</div>
						</div>
					</Col>
					<Col>
						<div className='card feat-card'>
							<div
								className={
									window.innerWidth < 768 ? 'card-body feat-card-body p-2' : 'card-body feat-card-body p-5'
								}>
								<div className='pb-5 svgIcon'>
                                <img src={patientreport} alt="" />
								</div>
								<div className='feat-head'>Product</div>
							</div>
						</div>
					</Col>
					<Col>
						<div className='card feat-card'>
							<div
								className={
									window.innerWidth < 768 ? 'card-body feat-card-body p-2' : 'card-body feat-card-body p-5'
								}>
								<div className='pb-5 svgIcon'>
                                <img src={patientreport} alt="" />
								</div>
								<div className='feat-head'>Product</div>
							</div>
						</div>
					</Col>
					<Col>
						<div className='card feat-card'>
							<div
								className={
									window.innerWidth < 768 ? 'card-body feat-card-body p-2' : 'card-body feat-card-body p-5'
								}>
								<div className='pb-5 svgIcon'>
                                <img src={patientreport} alt="" />
								</div>
								<div className='feat-head'>Product</div>
							</div>
						</div>
					</Col>
					<Col>
						<div className='card feat-card'>
							<div
								className={
									window.innerWidth < 768 ? 'card-body feat-card-body p-2' : 'card-body feat-card-body p-5'
								}>
								<div className='pb-5 svgIcon'>
                                <img src={patientreport} alt="" />
								</div>
								<div className='feat-head'>Product</div>
							</div>
						</div>
					</Col>
					<Col>
						<div className='card feat-card'>
							<div
								className={
									window.innerWidth < 768 ? 'card-body feat-card-body p-2' : 'card-body feat-card-body p-5'
								}>
								<div className='pb-5 svgIcon'>
                                <img src={patientreport} alt="" />
								</div>
								<div className='feat-head'>Product</div>
							</div>
						</div>
					</Col>
					<Col>
						<div className='card feat-card'>
							<div
								className={
									window.innerWidth < 768 ? 'card-body feat-card-body p-2' : 'card-body feat-card-body p-5'
								}>
								<div className='pb-5 svgIcon'>
                                <img src={patientreport} alt="" />
								</div>
								<div className='feat-head'>Product</div>
							</div>
						</div>
					</Col>
                    <Col>
						<div className='card feat-card'>
							<div
								className={
									window.innerWidth < 768 ? 'card-body feat-card-body p-2' : 'card-body feat-card-body p-5'
								}>
								<div className='pb-5 svgIcon'>
                                <img src={patientreport} alt="" />
								</div>
								<div className='feat-head'>Product</div>
							</div>
						</div>
					</Col>
					<Col>
						<div className='card feat-card'>
							<div
								className={
									window.innerWidth < 768 ? 'card-body feat-card-body p-2' : 'card-body feat-card-body p-5'
								}>
								<div className='pb-5 svgIcon'>
                                <img src={patientreport} alt="" />
								</div>
								<div className='feat-head'>Product</div>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</section>
	);
}
