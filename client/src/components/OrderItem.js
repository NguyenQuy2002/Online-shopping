import React from 'react';

const OrderItem = ({ item }) => {
	var item_total = item.price * item.quantity
	return (
		<tr>
			<td className='w-1/6'>
				<img
					src={item.picture}
					alt='Product'
				/>
			</td>
			<td className='w-2/6'>
				<p className='text-center'>{item.name}</p>
			</td>
			<td className='w-20 items-center px-4'>
				<input
					className='w-12 border border-slate-500 text-center'
					type='text'
					name='quantity'
					id='quantity'
					defaultValue={item.quantity}
				/>
			</td>
			<td className='w-30 text-center'>
				<h3 className='text-xl font-bold '>${item_total}</h3>
				<p>${item.price} each</p>
			</td>
			<td className='text-center'>
				<button className='font-bold'>x</button>
			</td>
		</tr>
	);
};

export default OrderItem;
