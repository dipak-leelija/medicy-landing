import React from 'react';

export default function Pricing() {
	return (
		<section>
			<div className=' main-pricediv'>
				<div className='row row-cols-1 row-cols-md-3 g-4'>
					<div className='col'>
						<div className='card'>
							<div className='card-body'>
								<h5 className='card-title text-center p-4'>Standart</h5>

								<div className='p-3'>
									<div className='d-flex justify-content-between'>
										<div>Lab Test</div>
										<div>✔</div>
									</div>
									<div className='d-flex justify-content-between'>
										<div>Lab Test</div>
										<div>✔</div>
									</div>
									<div className='d-flex justify-content-between'>
										<div>Lab Test</div>
										<div>✔</div>
									</div>
									<div className='d-flex justify-content-between'>
										<div>Lab Test</div>
										<div>✔</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col'>
						<div className='card'>
							<div className='card-body'>
								<h5 className='card-title text-center p-4'>Standart +</h5>
								<p className='card-text'></p>
							</div>
						</div>
					</div>
					<div className='col'>
						<div className='card'>
							<div className='card-body'>
								<h5 className='card-title text-center p-4'>Professional</h5>
								<p className='card-text'></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
