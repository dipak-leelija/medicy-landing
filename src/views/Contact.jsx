import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Contact() {
	const [validated, setValidated] = useState(false);
	const [email, setEmail] = useState('');
	const [emailValid, setEmailValid] = useState(true);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false || !emailValid) {
			event.preventDefault();
			event.stopPropagation();
		}
		setValidated(true);
	};

	const handleEmailChange = (event) => {
		const emailValue = event.target.value;
		setEmail(emailValue);
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		setEmailValid(emailRegex.test(emailValue));
	};

	return (
		<section>
			<div className='main-contact'>
				<div className='left-contact'>
					<div className='left-one'>
						<div className='p-5'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='3rem'
								viewBox='0 0 448 512'>
								<path
									fill='#ffffff'
									d='M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z'
								/>
							</svg>
						</div>
						<div className='pb-3'>
							<h4>For Sales</h4>
						</div>
						<div className='d-flex justify-content-around align-items-center'>
							<div>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='1rem'
									viewBox='0 0 512 512'>
									<path
										fill='#ffffff'
										d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z'
									/>
								</svg>
								<p className='pt-2'>8388988586</p>
							</div>
							<div>
								<svg
									width='1rem'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 512 512'>
									<path
										fill='#ffffff'
										d='M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z'
									/>
								</svg>
								<p className='pt-2'>leelija@gmail.com</p>
							</div>
						</div>
					</div>
					<div className='left-two'>
						<div className='p-5'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='3rem'
								viewBox='0 0 512 512'>
								<path
									fill='#ffffff'
									d='M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z'
								/>
							</svg>
						</div>
						<h4>For Support</h4>
						<div className='d-flex justify-content-center align-items-center p-4'>
							<button type='button' className='btn btn-primary btn-lg'>
								Raise Ticket
							</button>
						</div>
					</div>
				</div>
				<div className='right-contact'>
					<div className='contact-head mb-5'>
						<h1>Contact Us</h1>
						<p className='text-center mt-4'>
							Fill out the form below to get your Free Proposal.
						</p>
					</div>
					<Form
						action=''
						validated={validated}
						noValidate
						onSubmit={handleSubmit}>
						<div class='form-floating contact-div  mb-5'>
							<input
								type='text'
								className='form-control contact-input'
								id='floatingName'
								placeholder=''
								required
							/>
							<Form.Label htmlFor='floatingName'>Name</Form.Label>
							<Form.Control.Feedback type='invalid'>
								Please provide a valid name.
							</Form.Control.Feedback>
						</div>
						<div class='form-floating contact-div mb-5'>
							<input
								type='email'
								className={`form-control contact-input ${
									!emailValid ? 'is-invalid' : ''
								}`}
								id='floatingEmail'
								placeholder=''
								value={email}
								onChange={handleEmailChange}
								required
							/>
							<label htmlFor='floatingEmail'>Email</label>
							<Form.Control.Feedback type='invalid'>
								Please provide a valid email.
							</Form.Control.Feedback>
						</div>
						<div class='form-floating contact-div '>
							<textarea
								className='form-control contact-input'
								placeholder='Leave a comment here'
								id='floatingTextarea'
								style={{ height: '92px' }}
								required
							/>
							<label htmlFor='floatingTextarea'>Comments</label>
						</div>

						<Form.Group className=' mt-3 mb-2' controlId='flexCheckDefault'>
							<Form.Check
								type='checkbox'
								label='By submitting this form I accept the privacy policy of this site'
								required
							/>
							<Form.Control.Feedback type='invalid'>
								You must agree before submitting.
							</Form.Control.Feedback>
						</Form.Group>
						<div className='contact-button '>
							<button type='submit' className='btn btn-primary btn-lg'>
								Submit
							</button>
						</div>
					</Form>
				</div>
			</div>
		</section>
	);
}
