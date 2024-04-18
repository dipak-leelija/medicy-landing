import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Form, Button } from 'react-bootstrap';
import ContactCards from '../componant/ContactCards';

export default function Contact() {
	const [validated, setValidated] = useState(false);
	const [email, setEmail] = useState('');
	const [emailValid, setEmailValid] = useState(true);
	const [mobile, setMobile] = useState('');
	const [isValidMobile, setIsValidMobile] = useState(true);

	const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        subject: '',
        message: '',
        privacy: false
    });


	const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            // Form is valid, you can now access formData and submit it
            console.log('Console the form data here');
            console.log(formData);
            // You can make a POST request to your backend API here
        }
        setValidated(true);
    };


	const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
		if (name == 'email') {
			setEmail(value);
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			setEmailValid(emailRegex.test(value));
		}else if(name == 'mobile'){
		
			handleMobChange(value)
		}

        const newValue = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: newValue });
    };

	const handleMobChange = (mobNumber) => {
		let inputValue = mobNumber.replace(/\D/g, '');

		if (inputValue.length > 10) {
			inputValue = inputValue.slice(0, 10);
		}
		setMobile(inputValue);
	
		if (inputValue.length !== 10) {
			setIsValidMobile(false);
		} else {
			setIsValidMobile(true);
		}
	};


	return (
		<section>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 1 }}
				transition={{ duration: 0.5, delay: 0.4 }}
				viewport={{ once: true }}
				className='main-contact'>
				
				<ContactCards/>
				
				<div className='right-contact'>
					<div className='contact-head mb-3'>
						<h1>Contact Us</h1>
						<p className='text-center mt-4'>
							Fill out the form below to get your Free Proposal.
						</p>
					</div>
					<Form
						action=''
						method='POST'
						validated={validated}
						noValidate
						onSubmit={handleSubmit}>
						<div className='form-floating contact-div  mb-5'>
							<input
								type='text'
								className='form-control contact-input'
								id='floatingName'
								name='name'
								onChange={handleChange}
								value={formData.name}
								required
							/>
							<Form.Label htmlFor='floatingName'>Name</Form.Label>
							<Form.Control.Feedback type='invalid'>
								Please provide a valid name.
							</Form.Control.Feedback>
						</div>
						<div className='form-floating contact-div  mb-5'>
							<input
								type='tel'
								className={`form-control contact-input ${
									isValidMobile ? '' : 'is-invalid'
								}`}
								id='floatingMobile'
								name='mobile'
								value={mobile}
								onChange={handleChange}
								required
							/>
							<Form.Label htmlFor='floatingMobile'>Mobile</Form.Label>
							<Form.Control.Feedback type='invalid'>
								Please provide a valid 10-digit mobile number.
							</Form.Control.Feedback>
						</div>
						<div className='form-floating contact-div mb-5'>
							<input
								type='email'
								className={`form-control contact-input ${
									!emailValid ? 'is-invalid' : ''
								}`}
								id='floatingEmail'
								placeholder=''
								name='email'
								value={email}
								onChange={handleChange}
								required
							/>
							<label htmlFor='floatingEmail'>Email</label>
							<Form.Control.Feedback type='invalid'>
								Please provide a valid email.
							</Form.Control.Feedback>
						</div>
						<div className='form-floating contact-div  mb-5'>
							<input
								type='text'
								className='form-control contact-input'
								id='floatingSub'
								name='subject'
								value={formData.subject}
								onChange={handleChange}
								required
							/>
							<Form.Label htmlFor='floatingSub'>Subject</Form.Label>
							<Form.Control.Feedback type='invalid'>
								Please provide your subject.
							</Form.Control.Feedback>
						</div>
						<div className='form-floating contact-div '>
							<textarea
								className='form-control contact-input'
								placeholder='Leave a comment here'
								id='floatingTextarea'
								name='message'
								value={formData.message}
								onChange={handleChange}
								style={{ height: '92px' }}
								required
							/>
							<label htmlFor='floatingTextarea'>Message</label>
						</div>

						<Form.Group className=' mt-3 mb-2' controlId='flexCheckDefault'>
							<Form.Check
								type='checkbox'
								name='privacy'
								onChange={handleChange}
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
			</motion.div>
		</section>
	);
}
