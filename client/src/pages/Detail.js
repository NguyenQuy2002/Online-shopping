import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Detail = () => {
	const location = useLocation();
	const item = location.state;
	const { id, image, title, desc, category, type, price } = item.item;
	const [quantity, setQuantity] = useState(0);
	const handleDecrease = () => {
		setQuantity((quantity) => quantity - 1);
	};
	const handleIncrease = () => {
		setQuantity((quantity) => quantity + 1);
	};
	return (
		<div>
			<div className='p-5 grid grid-cols-4 gap-10 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4'>
				<div className='h-screen items-center px-5 pt-40 col-start-2'>
					<img
						src={image}
						alt={title}
					/>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur.{' '}
					</div>
				</div>
				<div className='px-5 py-10'>
					<h1 className='text-3xl font-bold pb-5'>{title}</h1>
					<hr />
					<p className='py-5 text-lg h-2/6'>{desc}</p>
					<p>Type: {type}</p>
					<form action='/'>
						<h2 className='text-2xl font-bold py-10'>
							Price: ${price}
						</h2>
						<div className='flex justify-between'>
							<label
								className='text-lg'
								htmlFor='quantity'>
								Quantity
							</label>
							<div className='flex flex-row transition-colors'>
								<div
									onClick={handleDecrease}
									className='w-7 bg-gray-200 border border-gray-500 text-center transition-colors hover:bg-gray-800 hover:text-white'>
									-
								</div>
								<input
									className='w-11 h-7 border border-gray-500 text-center'
									type='text'
									id='quantity'
									name='quantity'
									value={quantity}
								/>
								<div
									onClick={handleIncrease}
									className='w-7 bg-gray-200 border border-gray-500 text-center transition-colors hover:bg-gray-800 hover:text-white'>
									+
								</div>
							</div>
						</div>
						<div>
							<h2 className='text-2xl font-bold py-10'>
								Total: ${price}.00
							</h2>
							<input
								className='transition-colors w-full border border-black mt-5 py-3 font-bold hover:bg-gray-600 hover:text-white'
								type='submit'
								value='ADD TO CART'
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Detail;
