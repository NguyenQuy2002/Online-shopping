import React from 'react';

const CourierItem = ({item}) => {
    const date = new Date(item.ship_start_time)
    const start_time = date.toTimeString()
	return (
		<div className='flex flex-row border border-black h-24 items-center'>
			<div className='w-1/6 yellow text-center'>
				<p>{item.cart_id}</p>
			</div>
			<div className='w-1/6 yellow text-center'>
				<p>{item.cour_name}</p>
			</div>
			<div className='w-32 yellow text-center'>
				<p>{item.cour_mobile}</p>
			</div>
			<div className='w-2/6 yellow text-center'>
				<p>{start_time}</p>
			</div>
			<div className='w-2/6 yellow text-center'>
				<p>{item.ship_address}</p>
			</div>
			<div className='w-36 yellow text-center'>
				<p>{item.delivery_stat}</p>
			</div>
		</div>
	);
};

export default CourierItem;
