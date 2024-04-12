import React from 'react';
import circleCheck from '../../public/assets/icon/circle-check.svg';
import circleCheckWhite from '../../public/assets/icon/circleCheck-white.svg';
import circleUnCheck from '../../public/assets/icon/circle-uncheck.svg';
// import circle from '../../public/assets/icon/circle.svg';
import freeService from '../../public/assets/img/freeService.png';
import teamservice from '../../public/assets/img/teamservice.png';

export default function Pricing() {
	return (
		<section>
			<div className=' main-pricediv'>
				<div className='main-pricehead text-center m-4 mb-5'>
					<h1>Pick Your Perfect Plan</h1>
					<p>All plan FREE for first 7days</p>
				</div>
				<div className='free-priceCard card mb-5'>
					<div className='row  g-0'>
						<div className='col-md-7 order-2 order-md-1'>
							<div className='card-body free-pricebody p-4'>
								<div className=' text-white free-pricehead'>
									<div className='mb-4'>
										<h5 className='text-white fw-semibold m-3 ms-2 fs-2'>
											Free for one year
										</h5>
									</div>
									<div className='d-flex justify-content-between align-items-center  mb-2 fs-5'>
										<span>
											<img src={circleCheckWhite} className='me-4' alt='' />
											Lab Test
										</span>
									</div>
									<div className='d-flex justify-content-between align-items-center  mb-2 fs-5'>
										<span>
											<img src={circleCheckWhite} className='me-4' alt='' />
											Report
										</span>
									</div>
									<div className='d-flex justify-content-between align-items-center  mb-2 fs-5'>
										<span>
											<img src={circleCheckWhite} className='me-4' alt='' />
											Product
										</span>
									</div>
									<div className='d-flex justify-content-between align-items-center  mb-2 fs-5'>
										<span>
											<img src={circleCheckWhite} className='me-4' alt='' />
											Sale Management
										</span>
									</div>
									<div className='d-flex justify-content-between align-items-center  mb-2 fs-5'>
										<span>
											<img src={circleCheckWhite} className='me-4' alt='' />
											Purchase Management
										</span>
									</div>
									<div className='d-flex justify-content-between align-items-center  mb-2 fs-5'>
										<span>
											<img src={circleCheckWhite} className='me-4' alt='' />
											Stock Details
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className='col-md-5 order-1 order-md-2'>
							<div className='free-priceImgsec mt-5'>
								<img
									src={freeService}
									className='img-fluid rounded-start '
									alt='...'
								/>
								<a href='' className='btn btn-light btn-lg mb-4  '>
									Try for FREE
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='row row-cols-1 row-cols-md-3 g-5'>
					<div className='col'>
						<div className='card price-card'>
							<div className='card-body'>
								<div className='head text-center mb-4 p-4 pb-0'>
									<h3 className='mb-0 fw-semibold'>Basic</h3>
									<p className='text-center'>starter</p>
								</div>

								<div className='show-price text-center mb-4'>
									<h4>
										<label htmlFor=''>&#x20b9;</label>
										<span className='fw-bold dark-primary'>3,500</span>/ year
									</h4>
								</div>

								<div className='p-3'>
									<div className='feature-head d-flex justify-content-between align-items-center mb-2'>
										<span>Lab Test</span>
										<img src={circleCheck} alt='' />
									</div>
									<div className='feature-head d-flex justify-content-between align-items-center mb-2'>
										<span>Report</span>
										<img src={circleCheck} alt='' />
									</div>
									<div className='feature-head d-flex justify-content-between align-items-center mb-2'>
										<span>Product</span>
										<img src={circleUnCheck} alt='' />
									</div>
									<div className='feature-head d-flex justify-content-between align-items-center mb-2'>
										<span>Sale Management</span>
										<img src={circleUnCheck} alt='' />
									</div>
									<div className='feature-head d-flex justify-content-between align-items-center mb-2'>
										<span>Purchase Management</span>
										<img src={circleUnCheck} alt='' />
									</div>
									<div className='feature-head d-flex justify-content-between align-items-center mb-2'>
										<span>Stock Details</span>
										<img src={circleUnCheck} alt='' />
									</div>
								</div>

								<div className='d-flex justify-content-center m-4'>
									<a href='' className='btn btn-primary price-btn btn-lg'>
										Buy Now
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col'>
						<div className='card price-card'>
							<div className='card-body'>
								<div className='head text-center mb-4 p-4 pb-0'>
									<h3 className='mb-0 fw-semibold'>Standard</h3>
									<p className='text-center'>Better result</p>
								</div>

								<div className='show-price text-center mb-4'>
									<h4>
										<label htmlFor=''>&#x20b9;</label>
										<span className='fw-bold dark-primary'>3,500</span>/ year
									</h4>
								</div>

								<div className='p-3'>
									<div className='feature-head d-flex justify-content-between align-items-center mb-2'>
										<span>Lab Test</span>
										<img src={circleCheck} alt='' />
									</div>
									<div className='feature-head d-flex justify-content-between align-items-center mb-2'>
										<span>Report</span>
										<img src={circleCheck} alt='' />
									</div>
									<div className='feature-head d-flex justify-content-between align-items-center mb-2'>
										<span>Product</span>
										<img src={circleCheck} alt='' />
									</div>
									<div className='feature-head d-flex justify-content-between align-items-center mb-2'>
										<span>Sale Management</span>
										<img src={circleUnCheck} alt='' />
									</div>
									<div className='feature-head d-flex justify-content-between align-items-center mb-2'>
										<span>Purchase Management</span>
										<img src={circleUnCheck} alt='' />
									</div>
									<div className='feature-head d-flex justify-content-between align-items-center mb-2'>
										<span>Stock Details</span>
										<img src={circleUnCheck} alt='' />
									</div>
								</div>

								<div className='d-flex justify-content-center m-4'>
									<a href='' className='btn btn-primary price-btn btn-lg'>
										Buy Now
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col'>
						<div className='card price-card'>
							<div>
								<div className='pricebdg text-center text-white p-1'>
									popular
								</div>
							</div>
							<div className='card-body'>
								<div className='head text-center mb-4 p-4 pb-0'>
									<h3 className='mb-0 fw-semibold'>Premium</h3>
									<p className='text-center'>Go all in one</p>
								</div>

								<div className='show-price text-center mb-4'>
									<h4>
										<label htmlFor=''>&#x20b9;</label>
										<span className='fw-bold dark-primary'>3,500</span>/ year
									</h4>
								</div>

								<div className='p-3'>
									<div className='feature-head d-flex justify-content-between align-items-center mb-2'>
										<span>Lab Test</span>
										<img src={circleCheck} alt='' />
									</div>
									<div className='feature-head d-flex justify-content-between align-items-center mb-2'>
										<span>Report</span>
										<img src={circleCheck} alt='' />
									</div>
									<div className='feature-head d-flex justify-content-between align-items-center mb-2'>
										<span>Product</span>
										<img src={circleCheck} alt='' />
									</div>
									<div className='feature-head d-flex justify-content-between align-items-center mb-2'>
										<span>Sale Management</span>
										<img src={circleCheck} alt='' />
									</div>
									<div className='feature-head d-flex justify-content-between align-items-center mb-2'>
										<span>Purchase Management</span>
										<img src={circleCheck} alt='' />
									</div>
									<div className='feature-head d-flex justify-content-between align-items-center mb-2'>
										<span>Stock Details</span>
										<img src={circleCheck} alt='' />
									</div>
								</div>

								<div className='d-flex justify-content-center m-4'>
									<a href='' className='btn btn-primary price-btn btn-lg'>
										Buy Now
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class='card mb-3 free-servicedsc mt-5 p-5 border-0'>
					<div class='row g-4'>
						<div class='col-md-8'>
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
									Present detailed specifications and features of the aircraft, highlighting its safety, comfort, performance, and customization options.
								</p>
							</div>
							<div className=' d-flex align-items-start'>
								<img src={circleCheck} className='mt-1' alt='' />
								<p className='ms-3'>
									{' '}
									Present detailed specifications and features of the aircraft, highlighting its safety, comfort, performance, and customization options.
								</p>
							</div>
						</div>

						<div class='col-md-4 teamservice'>
							<img src={teamservice}  alt="" />
						</div>
					</div>
				</div>

				<div class='card mb-3 mt-5 price-faqs p-5 text-white'>
					<div class='row g-0'>
						<div class='col-md-8'>
							<h2>Have a question about our plans?</h2>
						</div>
						<div class='col-md-4'>
							<a href='/Faqs' className='btn btn-lg'>
								Check out FAQs
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
