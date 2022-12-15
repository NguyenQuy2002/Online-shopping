import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
const Account = () => {
	const [info, setInfo] = useState({
		id: '',
		name: '',
		password: '',
		address: '',
		mobile: '',
		email: '',
		district: '',
		city: '',
		country: '',
	});
	const navigate = useNavigate();

	useEffect(() => {
		Axios.get('http://localhost:3001/api/get/account').then((response) => {
			setInfo((prevState) => {
				return {
					...prevState,
					id: response.data.c_id,
					name: response.data.c_name,
					password: response.data.password,
					email: response.data.c_email,
					address: response.data.c_address,
					mobile: response.data.c_mobile,
					district: response.data.district,
					city: response.data.city,
					country: response.data.country,
				};
			});
		});
	});

	const handleSubmit = () => {
		Axios.put('http://localhost:3001/api/update/account', info)
		alert('Update account successfully');
		navigate('/customer');
	};

	return (
		<>
			<Header type='customer' />
			<div className='grid grid-cols-12 gap-4'>
				<div className='col-start-2 col-span-10 h-screen'>
					<h1 className='text-3xl bg-gray-200 px-4 py-5 text-blue-700'>Account detail</h1>
					<h3 className='text-l px-4 py-5 text-gray-500'>Enter or edit information and click Update</h3>
					<div className='mx-72 h-full'>
						<label htmlFor='name'>Name</label>
						<input
							className='w-full p-1 my-2 border-2 border-black rounded-lg'
							type='text'
							name='name'
							id='name'
							defaultValue={info.name}
							onChange={(e) =>
								setInfo((prevState) => {
									return { ...prevState, name: e.target.value };
								})
							}
						/>
						<br />
						<label htmlFor='password'>Password</label>
						<input
							className='w-full p-1 my-2 border-2 border-black rounded-lg'
							type='password'
							name='password'
							id='password'
							defaultValue={info.password}
							onChange={(e) =>
								setInfo((prevState) => {
									return { ...prevState, password: e.target.value };
								})
							}
						/>
						<br />
						<label htmlFor='email'>Email</label>
						<input
							className='w-full p-1 my-2 border-2 border-black rounded-lg'
							type='email'
							name='email'
							id='email'
							defaultValue={info.email}
							onChange={(e) =>
								setInfo((prevState) => {
									return { ...prevState, email: e.target.value };
								})
							}
						/>
						<br />
						<label htmlFor='tel'>Mobile number</label>
						<input
							className='w-full p-1 my-2 border-2 border-black rounded-lg'
							type='tel'
							name='tel'
							id='tel'
							defaultValue={info.mobile}
							onChange={(e) =>
								setInfo((prevState) => {
									return { ...prevState, mobile: e.target.value };
								})
							}
						/>
						<br />
						<label htmlFor='address'>Address</label>
						<input
							className='w-full p-1 my-2 border-2 border-black rounded-lg'
							type='text'
							name='address'
							id='address'
							defaultValue={info.address}
							onChange={(e) =>
								setInfo((prevState) => {
									return { ...prevState, address: e.target.value };
								})
							}
						/>
						<br />
						<label htmlFor='district'>District</label>
						<input
							className='w-full p-1 my-2 border-2 border-black rounded-lg'
							type='text'
							name='district'
							id='district'
							defaultValue={info.district}
							onChange={(e) =>
								setInfo((prevState) => {
									return { ...prevState, district: e.target.value };
								})
							}
						/>
						<br />
						<label htmlFor='city'>City</label>
						<input
							className='w-full p-1 my-2 border-2 border-black rounded-lg'
							type='text'
							name='city'
							id='city'
							defaultValue={info.city}
							onChange={(e) =>
								setInfo((prevState) => {
									return { ...prevState, city: e.target.value };
								})
							}
						/>
						<br />
						<label htmlFor='country'>Country</label>
						<input
							className='w-full p-1 my-2 border-2 border-black rounded-lg'
							type='text'
							name='country'
							id='country'
							defaultValue={info.country}
							onChange={(e) =>
								setInfo((prevState) => {
									return { ...prevState, country: e.target.value };
								})
							}
						/>
						<br />
						<input
							type='submit'
							value='Update'
							onClick={handleSubmit}
							className='transition-colors w-full h-12 py-2 mt-3 bg-white border-2 text-teal-400 font-bold border-teal-400 rounded-3xl hover:bg-teal-400 hover:text-white'
						/>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Account;
