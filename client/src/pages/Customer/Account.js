import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Account = () => {
	const [id, setID] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [address, setAddress] = useState('');
	const [mobile, setMobile] = useState('');
	const [email, setEmail] = useState('');
	const [district, setDistrict] = useState('');
	const [city, setCity] = useState('');
	const [country, setCountry] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		Axios.get('http://localhost:3001/api/get/account').then((response) => {
			setName(response.data.c_name);
			setID(response.data.c_id);
			setPassword(response.data.password);
			setAddress(response.data.c_address);
			setMobile(response.data.c_mobile);
			setEmail(response.data.c_email);
			setDistrict(response.data.district);
			setCity(response.data.city);
			setCountry(response.data.country);
		});
	}, []);

	const handleSubmit = () => {
		Axios.put('http://localhost:3001/api/update/account', {
			id: id,
			name: name,
			password: password,
			email: email,
			mobile: mobile,
			address: address,
			district: district,
			city: city,
			country: country,
		});
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
							defaultValue={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<br />
						<label htmlFor='password'>Password</label>
						<input
							className='w-full p-1 my-2 border-2 border-black rounded-lg'
							type='password'
							name='password'
							id='password'
							defaultValue={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
						<br />
						<label htmlFor='email'>Email</label>
						<input
							className='w-full p-1 my-2 border-2 border-black rounded-lg'
							type='email'
							name='email'
							id='email'
							defaultValue={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<br />
						<label htmlFor='tel'>Mobile number</label>
						<input
							className='w-full p-1 my-2 border-2 border-black rounded-lg'
							type='tel'
							name='tel'
							id='tel'
							defaultValue={mobile}
							onChange={(e) => setMobile(e.target.value)}
						/>
						<br />
						<label htmlFor='address'>Address</label>
						<input
							className='w-full p-1 my-2 border-2 border-black rounded-lg'
							type='text'
							name='address'
							id='address'
							defaultValue={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
						<br />
						<label htmlFor='district'>District</label>
						<input
							className='w-full p-1 my-2 border-2 border-black rounded-lg'
							type='text'
							name='district'
							id='district'
							defaultValue={district}
							onChange={(e) => setDistrict(e.target.value)}
						/>
						<br />
						<label htmlFor='city'>City</label>
						<input
							className='w-full p-1 my-2 border-2 border-black rounded-lg'
							type='text'
							name='city'
							id='city'
							defaultValue={city}
							onChange={(e) => setCity(e.target.value)}
						/>
						<br />
						<label htmlFor='country'>Country</label>
						<input
							className='w-full p-1 my-2 border-2 border-black rounded-lg'
							type='text'
							name='country'
							id='country'
							defaultValue={country}
							onChange={(e) => setCountry(e.target.value)}
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
