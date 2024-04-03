import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import whatsappLogo from '../../public/assets/icon/whatsapp.svg';
import logo from '../../public/assets/img/logo.png';

export default function ChatWidget() {
	const [show, setShow] = useState(false);
	const [showbtn, setShowbtn] = useState(false);
	const [message, setMessage] = useState('');

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowbtn(true);
			const timeout = setTimeout(() => {
				setShow(true);
			}, 4000);

			return () => clearTimeout(timeout);
		}, 2000);

		return () => clearTimeout(timeout);
	}, []);

	const handleToggle = () => setShow((prevState) => !prevState);
	const handleClose = () => {
		setShow(false);
	};

	// for msg submit //
	const handleChange = (event) => {
		setMessage(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('Message sent:', message);
		setMessage('');
	};
	// end msg submit //

	return (
		<div className=' p-4'>
			<div className={`chatform ${show ? 'open' : ''}`}>
				<div
					className='d-flex justify-content-between p-3 rounded-top text-white'
					style={{ background: '#198f51' }}>
					<div className='d-flex justify-content-between '>
						<img src={logo} width={'100px'} height={'35px'} alt='' />
						<p className='ms-2 mt-2 fw-semibold'>Medicy - Chat with us</p>
					</div>
					<div>
						<button
							type='button'
							className='btn p-0'
							style={{ outline: 'none', border: 'none' }}
							onClick={handleClose}>
							<svg
								width='1.2rem'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 384 512'>
								<path
									fill='white'
									d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z'
								/>
							</svg>
						</button>
					</div>
				</div>
				<hr />

				<div className='chatting'>
					<div className='chat-one'>
						<p>hello</p>
					</div>
					<div className='chat-two'>
						<p>hi</p>
					</div>
				</div>

				<hr />
				<div className='d-flex justify-content-between align-items-center p-3'>
					<div className=''>
						<input
							type='text'
							className='chatinput-field'
							value={message}
							onChange={handleChange}
							placeholder='Type here...'
						/>
					</div>
					{/* <div className=''> */}
					<button
						type='submit'
						className='btn chatinputbtn'
						onClick={handleSubmit}>
						<svg
							width='1.2rem'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 512 512'>
							<path
								fill='green'
								d='M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z'
							/>
						</svg>
					</button>
					{/* </div> */}
				</div>
			</div>

			{showbtn && (
				<button type='button' className='chatwidget' onClick={handleToggle}>
					<img src={whatsappLogo} alt='' />
				</button>
			)}
		</div>
	);
}
