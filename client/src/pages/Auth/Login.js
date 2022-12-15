import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Signup from './Signup';
import Axios from 'axios';

const Login = () => {
	const [role, setRole] = useState(0);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const handleClick = () => {
		if (role === 1) {
			Axios.post('http://localhost:3001/api/post/login/admin', {
				email: email,
				password: password,
			}).then((response) => {
				if (response) {
					console.log(response);
					if (response.data === 'Incorrect username or password') {
						alert('Incorrect username or password');
					} else {
						console.log('Hello');
						navigate('/admin');
					}
				}
			});
		} else if (role === 2) {
			Axios.post('http://localhost:3001/api/post/login/customer', {
				email: email,
				password: password,
			}).then((response) => {
				console.log(response.data)
				if (response) {
					if (response.data === 'Incorrect username or password') {
						alert('Incorrect username or password');
					} else {
						console.log('Hello');
						navigate('/customer');
					}
				}
			});
		}
	};
	const handleSignup = () => {
		navigate('/signup');
	};
	return (
		<section className='bg-gray-50 dark:bg-gray-900'>
			<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
				<div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
					<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
						<h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
							Sign in to your account
						</h1>
						<div
							className='space-y-4 md:space-y-6'
							action='#'>
							<div>
								<label
									htmlFor='email'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
									Your email
								</label>
								<input
									type='email'
									name='email'
									id='email'
									className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='name@company.com'
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div>
								<label
									htmlFor='role'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
									Password
								</label>
								<input
									type='password'
									name='password'
									id='password'
									className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									required=''
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<div>
								<input
									type='radio'
									name='role'
									id='admin'
									value='admin'
									onChange={(e) => setRole(1)}
								/>
								<label
									htmlFor='admin'
									className='mb-2 ml-3 text-sm font-medium text-gray-900 dark:text-white'>
									Admin
								</label>
								<br />
								<input
									type='radio'
									name='role'
									id='customer'
									value='customer'
									onChange={(e) => setRole(2)}
								/>

								<label
									htmlFor='customer'
									className='mb-2 ml-3 text-sm font-medium text-gray-900 dark:text-white'>
									Customer
								</label>
							</div>
							<button
								onClick={handleClick}
								className='w-full text-white bg-blue-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
								Sign in
							</button>
							<div className='flex flex-col justify-center items-center'>
								<p className='text-white p-3'>Don't have an account?</p>
								<button
									className='text-cyan-200 font-bold'
									onClick={handleSignup}>
									Sign up
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
