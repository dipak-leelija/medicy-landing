import React from 'react';
import circleCheck from '../../public/assets/icon/circle-check.svg';
import circleUnCheck from '../../public/assets/icon/circle-uncheck.svg';

export default function Pricing() {
	return (
		<section>
			<div className=' main-pricediv'>
				<div className='main-pricehead text-center m-4 mb-5'>
					<h1>Choose Your Pricing Plan</h1>
					<p>All plan FREE for first 7days</p>
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
									<button type='button' className='btn btn-primary price-btn'>
										Choose Plan
									</button>
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
									<button type='button' className='btn btn-primary price-btn'>
										Choose Plan
									</button>
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
									<button type='button' className='btn btn-primary price-btn'>
										Choose Plan
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
