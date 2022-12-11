import React from 'react';

const OrderItem = ({ image, quantity, price }) => {
	return (
		<tr>
			<td className='w-1/6'>
				<img
					src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
					alt='Product'
				/>
			</td>
			<td className='w-2/6'>
				<p className='text-center'>Welcome to Online Shopping</p>
			</td>
			<td className='w-20 items-center px-4'>
				<input
					className='w-12 border border-slate-500 pl-1'
					type='number'
					name='quantity'
					id='quantity'
					min='1'
				/>
			</td>
			<td className='w-30 text-center'>
				<h3 className='text-xl font-bold '>$1000</h3>
				<p>$200 each</p>
			</td>
			<td className='text-center'>
				<button className='font-bold'>x</button>
			</td>
		</tr>
	);
};

export default OrderItem;
