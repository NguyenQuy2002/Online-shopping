import React from 'react';

const Account = () => {
	return (
		<div className='grid grid-cols-12 gap-4'>
			<div className='col-start-2 col-span-10 h-screen'>
				<h1 className='text-3xl bg-gray-200 px-4 py-5 text-blue-700'>
					Account detail
				</h1>
				<h3 className='text-l px-4 py-5 text-gray-500'>
					Enter or edit information and click Update
				</h3>
				<form
					className='mx-72 h-full'
					action='/'
					method='post'>
					<label htmlFor='name'>Name</label>
					<input
						className='w-full p-1 my-2 border-2 border-black rounded-lg'
						type='text'
						name='name'
						id='name'
					/>
					<br />
					<label htmlFor='password'>Password</label>
					<input
						className='w-full p-1 my-2 border-2 border-black rounded-lg'
						type='password'
						name='password'
						id='password'
					/>
					<br />
					<label htmlFor='email'>Email</label>
					<input
						className='w-full p-1 my-2 border-2 border-black rounded-lg'
						type='email'
						name='email'
						id='email'
					/>
					<br />
					<label htmlFor='tel'>Phone number</label>
					<input
						className='w-full p-1 my-2 border-2 border-black rounded-lg'
						type='tel'
						name='tel'
						id='tel'
					/>
					<br />
					<label htmlFor='district'>District</label>
					<input
						className='w-full p-1 my-2 border-2 border-black rounded-lg'
						type='text'
						name='district'
						id='district'
					/>
					<br />
					<label htmlFor='city'>City</label>
					<input
						className='w-full p-1 my-2 border-2 border-black rounded-lg'
						type='text'
						name='city'
						id='city'
					/>
					<br />
					<label htmlFor='country'>Country</label>
					<input
						className='w-full p-1 my-2 border-2 border-black rounded-lg'
						type='text'
						name='country'
						id='country'
					/>
					<br />
					<p>Roles:</p>
					<input
						className='mr-2'
						type='radio'
						name='role'
						id='admin'
						value='Admin'
					/>
					<label htmlFor='admin'>Admin</label>
					<br />
					<input
						className='mr-2'
						type='radio'
						name='role'
						id='customer'
						value='Customer'
					/>
					<label htmlFor='customer'>Customer</label>
					<br />
					<input
						type='submit'
						value='Update'
						className='w-full h-12 py-2 mt-3 bg-white border-2 text-teal-400 font-bold border-teal-400 rounded-3xl hover:bg-teal-400 hover:text-white'
					/>
				</form>
			</div>
		</div>
	);
};

export default Account;
