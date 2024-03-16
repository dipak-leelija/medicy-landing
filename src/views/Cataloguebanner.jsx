import React from 'react';
import catalogue from '../../public/assets/img/R.png';

export default function Cataloguebanner() {
	return (
		<section>
			<div className='maincat-banner'>
				<div className='subcat-banner'>
					<div className='leftcatalouge'>
						<div className='leftcat-tag'>
							<h3>Biggest catalogue 90,000+ FMCG items 4,00,000+ Medicines</h3>
							<h5>with Pictures & API content</h5>
							<p>
								Find in-stock alternatives in real-time while billing and reduce
								customer bounce rate.
							</p>
						</div>
                        <div className='catalougebtn'>
                            <button className='btn btn-primary bg-white text-primary btn-lg mt-4'>Know More</button>
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
