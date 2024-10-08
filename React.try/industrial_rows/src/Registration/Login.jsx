import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS FILES/login.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login({ onLogin }) {
	const [Email, setEmail] = useState('');
	const [Password, setPassword] = useState('');

	useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search);
		const success = queryParams.get('success');

		if (success != null) {
			toast.success('You have signed up successfully!');
		}
	}, []);

	const navigate = useNavigate();

	const handleButton = async (event) => {
		event.preventDefault();
		switch (event.target.name) {
			case 'loginButton':
				const request = await axios.post('http://localhost:8081/Login', { Email, Password });
				if (request.status === 200) {
					localStorage.setItem('token', request.data.token);
					onLogin(true);
					navigate('/DBOARD');
				}
				break;
			case 'signupButton':
				navigate('/Signup');
				break;
			default:
				break;
		}
	};

	const handleChange = (event) => {
		event.preventDefault();
		switch (event.target.name) {
			case 'Email':
				setEmail(event.target.value);
				break;
			case 'Password':
				setPassword(event.target.value);
				break;
			default:
				break;
		}
	};

	return (
		<div className='screen'>
			<div className='loginpage'>
				<img
					className='img'
					src='https://files.codingninjas.in/article_images/custom-upload-1711630449-fc5893a1.webp'
					alt='logineikona'
				/>
				<form
					action=''
					className='login'>
					<h3 className='h3'>Login</h3>
					<div className='loginfield'>
						<input
							type='text'
							onChange={handleChange}
							placeholder='Email'
							value={Email}
							name='Email'
							className='formtexts'></input>
					</div>
					<div className='loginfield'>
						<input
							type='password'
							onChange={handleChange}
							placeholder='Password'
							value={Password}
							className='formtexts'
							name='Password'></input>
					</div>
					<div className='oxiallo2'>
						<button
							onClick={handleButton}
							name='loginButton'
							type='submit'
							className='btnbtn-success000'>
							Login
						</button>
						<h5 className='h555'>
							If you do not have <br /> already an account,
						</h5>
						<button
							onClick={handleButton}
							type='button'
							name='signupButton'
							className='btnbtn-success111'>
							Sign up
						</button>
					</div>
				</form>
			</div>
			<ToastContainer
				position='top-center'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable={false}
				pauseOnHover
				theme='light'
			/>
		</div>
	);
}

export default Login;
//https://cdn-lite.ip2location.com/img/sign-up.png

//https://media.designrush.com/articles/265420/conversions/product-and-industrial-design-details.jpg
//https://i.pinimg.com/736x/87/66/47/8766471b7a37a6494326b4f934238638.jpg
