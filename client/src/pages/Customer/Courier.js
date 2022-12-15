import React, { useEffect, useState } from 'react';
import CourierItem from '../../components/CourierItem';
import Axios from 'axios';
import Header from '../../components/Header';

const Courier = () => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		Axios.get('http://localhost:3001/api/get/courier').then((response) => {
			var data = [];
            
			for (let obj in response.data) {
				const getData = {
					cart_id: response.data[obj].cart_id,
					cour_name: response.data[obj].cour_name,
					cour_mobile: response.data[obj].cour_mobile,
					ship_start_time: response.data[obj].ship_start_time,
					ship_address: response.data[obj].ship_address,
					delivery_stat: response.data[obj].delivery_stat,
				};
				data.push(getData);
			}
			setItems(data);
		});
	}, []);
	console.log(items);
	return (
		<>
			<Header type='customer' />
			<div className='grid grid-cols-12 gap-4 flex flex-row '>
				<div className='col-start-2 col-span-10 flex flex-col h-screen'>
					<div className='bg-gray-200 text-center text-bold text-2xl py-5'>Delivery Status</div>
					<div className='h-full'>
						<div className='flex flex-row mb-5 border border-black'>
							<div className='w-1/6 yellow text-center'>
								<p>Cart ID</p>
							</div>
							<div className='w-1/6 yellow text-center'>
								<p>Courier Name</p>
							</div>
							<div className='w-32 yellow text-center'>
								<p>Courier Mobile</p>
							</div>
							<div className='w-2/6 yellow text-center'>
								<p>Ship time</p>
							</div>
							<div className='w-2/6 yellow text-center'>
								<p>Ship address</p>
							</div>
							<div className='w-36 yellow text-center'>
								<p>Status</p>
							</div>
						</div>
						<div className='space-y-2'>
							{items.map((item) => {
								const key = item.cart_id;
								return (
									<CourierItem
										item={item}
										key={key}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Courier;
