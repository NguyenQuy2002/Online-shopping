import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({item}) => {
	return (
		<div
			key={item.id}
			className='bg-gray-200'>
			<img
				src={item.picture}
				alt={item.name}
			/>
			<div className='flex align-items-center justify-content-between'>
				<div className='px-5'>
					<h2 className='font-bold mt-5'>{item.name}</h2>
					<p>{item.desc}</p>
				</div>
			</div>

			<div className='my-2 px-5'>
				<small className='bg-green-500 rounded-full px-2 text-white tracking-widest mr-3'>
					{item.type}
				</small>
				<small className='bg-green-500 rounded-full px-2 text-white tracking-widest mr-3'>
					{item.category}
				</small>
			</div>

			<p className='text-lg px-5 pb-10'>Stock: {item.stock}</p>
			<div className='flex flex-row justify-between'>
				<p className='text-2xl px-5 pb-10'>$ {item.price}</p>
				<Link
					to='/customer/detail'
					state={{ item: item }}
					className='text-l min-w-max	px-5 h-10 pt-2 mr-6 bg-green-400'>
					Buy
				</Link>
			</div>
		</div>
	);
};

export default ProductItem;
