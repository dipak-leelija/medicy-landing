import React from 'react';
import { Link } from 'react-router-dom'
import catalogue from '/assets/img/R.png';

export default function Cataloguebanner() {
	return (
		<section>
			<div className='catalogue-banner'>
				<div className='subcat-banner'>
					<div className='leftcatalouge'>
						<div className='leftcat-tag'>
							<h3>2,50,000+ Medicines Listing</h3>
							<h5>On Request New Medicine </h5>
							<p>
								Find in-stock alternatives in real-time while billing and reduce
								customer bounce rate.
							</p>
						</div>
                        <div className='catalougebtn'>
						<Link to='https://app.medicy.in/login.php' className='btn btn-light text-primary btn-lg mt-4'>Get Started</Link>
                        </div>
					</div>
					<div className='rightcatalouge d-flex justify-content-end'>
						<img src={catalogue} alt='' />
					</div>
				</div>
			</div>
		</section>
	);
}
