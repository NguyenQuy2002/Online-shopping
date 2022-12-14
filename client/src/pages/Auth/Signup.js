import Axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [role, setRole] = useState(0);
	const navigate = useNavigate();
	const handleSignup = () => {
		if (role !== 1 && role !== 2) {
			alert('Roles are not selected.');
		} else if (password.length < 6) {
			alert('The password should be more than 6 letters.')
		}
		else {
				const obj = {
				name: name,
				email: email,
				password: password,
				role: role,
			};
			// console.log(obj)
			Axios.post('http://localhost:3001/api/signup/', obj);
			alert('Create successfully');
			navigate('/customer');
		}
			
		};
	return (
		<section className='bg-gray-50 dark:bg-gray-900'>
			<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
				<div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
					<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
						<h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
							Create an account
						</h1>
						<div
							className='space-y-4 md:space-y-6'
							action='#'>
							<div>
								<label
									htmlFor='name'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
									Name
								</label>
								<input
									type='text'
									name='name'
									id='name'
									className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div>
								<label
									htmlFor='email'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
									Email
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
									onChange={(e) =>
										setPassword(e.target.value)
									}
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
								onClick={handleSignup}
								className='w-full text-white bg-blue-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
								Sign up
							</button>
							<div className='flex flex-col justify-center items-center'>
								<p className='text-white p-3'>
									Have an account?
								</p>
								<button
									onClick={() => navigate('/')}
									className='text-cyan-200 font-bold'>
									Log in
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Signup;
