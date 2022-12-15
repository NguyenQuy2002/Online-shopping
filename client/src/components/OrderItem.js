import React from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OrderItem = ({ item }) => {
	const navigate = useNavigate();
	var item_total = item.price * item.quantity;
	const handleDelete = () => {
		Axios.delete(`http://localhost:3001/api/delete/order_items`, {data: {
			item: item,
		}});
		alert('Delete successfully');
		window.location.reload(false)
	};
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
				<button
					className='font-bold'
					onClick={handleDelete}>
					x
				</button>
			</td>
		</tr>
	);
};

export default OrderItem;
