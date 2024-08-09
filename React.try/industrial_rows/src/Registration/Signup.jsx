import { useState, React } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS FILES/signup.css';
import axios from 'axios';

const Signup = () => {
	//Declarations
	//UseState: Declare a state variable, return an array with 2 values the initial and the one you pass->trigger a re-render
	const [Name, setName] = useState('');
	const [Surname, setSurname] = useState('');
	const [Phone, setPhone] = useState('');
	const [Email, setEmail] = useState('');
	const [Password, setPassword] = useState('');

	const navigate = useNavigate();

	const handleChange = (event) => {
		switch (event.target.name) {
			case 'Name':
				setName(event.target.value);
				break;
			case 'Surname':
				setSurname(event.target.value);
				break;
			case 'Phone':
				setPhone(event.target.value);
				break;
			case 'Email':
				setEmail(event.target.value);
				break;
			case 'Password':
				setPassword(event.target.value);
				break;
			default:
				break;
		}
		event.preventDefault();
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	const handleButton = async (event) => {
		event.preventDefault();
		switch (event.target.name) {
			case 'signUpButton':
				const request = await axios.post('http://localhost:8081/Signup', { Name, Surname, Phone, Email, Password });
				if (request.status === 200) {
					navigate('/?success');
				}
				//ψαξε πως να δειξεις ενα ποπ απ
				break;
			case 'loginUpButton':
				navigate('/');
				break;
			default:
				break;
		}
	};

	//Main functionality
	<div className='header'></div>;
	return (
		<div className='screen2'>
			<div className='signuppage'>
				<img
					className='img2'
					src='https://media.dev.to/cdn-cgi/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fh3if7g5me0dkxnape0ra.png'
					alt='logineikona'
				/>
				<form
					action=''
					className='signup'
					onSubmit={handleSubmit}>
					<h3 className='h3'>Sign up</h3>
					<div className='signupfield'>
						<input
							type='text'
							onChange={handleChange}
							placeholder='Name'
							value={Name}
							name='Name'
							className='formtexts'></input>
					</div>
					<div className='signupfield'>
						<input
							type='text'
							onChange={handleChange}
							placeholder='Surname'
							value={Surname}
							name='Surname'
							className='formtexts'></input>
					</div>
					<div className='signupfield'>
						<input
							type='text'
							onChange={handleChange}
							placeholder='Phone'
							value={Phone}
							name='Phone'
							className='formtexts'></input>
					</div>
					<div className='signupfield'>
						<input
							type='text'
							onChange={handleChange}
							placeholder='Email'
							value={Email}
							name='Email'
							className='formtexts'></input>
					</div>
					<div className='signupfield'>
						<input
							type='password'
							onChange={handleChange}
							placeholder='Password'
							value={Password}
							className='formtexts'
							name='Password'></input>
					</div>
					<div className='oxiallo'>
						<button
							onClick={handleButton}
							name='signUpButton'
							className='btnbtn-success'>
							Sign up
						</button>
						<h5 className='h5'>Or return to the login page</h5>
						<button
							onClick={handleButton}
							name='loginUpButton'
							className='btnbtn-success2'>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
