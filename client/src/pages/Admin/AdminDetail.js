import Axios from 'axios';
import React, { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const AdminDetail = () => {
	const location = useLocation();
	const item = location.state;
	const { id, picture, name, desc, category, price, stock } = item.item;
	const [info, setInfo] = useState({
		id: id,
		name: name,
		picture: picture,
		desc: desc,
		price: price,
		stock: stock,
	});
	const navigate = useNavigate();
	const handleUpdate = () => {
		Axios.put('http://localhost:3001/api/update/product', info);
		alert('Update successfully');
		navigate('/admin');
	};
	console.log(info);
	return (
		<div className='grid grid-cols-12 gap-4 bg-gray-300 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 h-screen'>
			<div className='flex h-full sm:col-start-1 sm:col-span-6 lg:col-start-1 lg:col-span-8 xl:col-start-2 xl:col-span-10 justify-center items-center'>
				<div className='block bg-white w-4/6 h-3/6 border border-black'>
					<div className='block border-b border-black'>
						<h1 className='block text-center text-3xl font-bold py-5'>Update product</h1>
					</div>
					<div className='block flex flex-row pt-3 h-auto'>
						<div className='block h-full w-1/2 flex flex-col justify-start items-center'>
							<img
								src={picture}
								alt='Product'
								className='w-32 h-24 mx-5 my-4'
							/>
							<div>
								<label htmlFor='picture'>URL: </label>
								<input
									type='text'
									name='picture'
									id='picture'
									defaultValue={picture}
									placeholder='Enter your URL'
									className='border border-black px-4 mx-2 w-full rounded-lg h-9'
									onChange={(e) => {
										setInfo((prevState) => {
											return { ...prevState, picture: e.target.value };
										});
									}}
								/>
							</div>
						</div>
						<div className='block flex flex-col items-start h-auto w-1/2'>
							<div className='block flex flex-col w-4/5'>
								<label htmlFor='name'>Name:</label>
								<input
									type='text'
									name='name'
									id='name'
									defaultValue={name}
									className='border border-black pl-2 rounded-lg h-9'
									onChange={(e) => {
										setInfo((prevState) => {
											return { ...prevState, name: e.target.value };
										});
									}}
								/>
							</div>
							<div className='block flex flex-col w-4/5 self-start'>
								<label htmlFor='desc'>Description: </label>
								<textarea
									name='desc'
									id='desc'
									rows='5'
									cols='50'
									defaultValue={desc}
									className='border border-black p-2 rounded-lg h-40'
									onChange={(e) => {
										setInfo((prevState) => {
											return { ...prevState, desc: e.target.value };
										});
									}}
								/>
							</div>
							<div className='block flex flex-row'>
								<div className='block flex flex-col w-4/5'>
									<label htmlFor='price'>Price</label>
									<input
										type='text'
										name='price'
										id='price'
										defaultValue={price}
										className='border border-black pl-2 mr-5 rounded-lg h-9'
										onChange={(e) => {
											setInfo((prevState) => {
												return { ...prevState, price: e.target.value };
											});
										}}
									/>
								</div>
								<div className='block flex flex-col w-4/5'>
									<label htmlFor='stock'>Stock</label>
									<input
										type='number'
										name='stock'
										id='stock'
										defaultValue={stock}
										className='border border-black pl-2 mr-5 rounded-lg h-9'
										onChange={(e) => {
											setInfo((prevState) => {
												return { ...prevState, stock: e.target.value };
											});
										}}
									/>
								</div>
							</div>
							<div className='self-end pr-10'>
								<button
									onClick={handleUpdate}
									className='text-xl font-bold text-center h-12 w-24 my-4 bg-blue-200 border border-black rounded-lg hover:bg-blue-800 hover:text-white'>
									Update
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminDetail;
