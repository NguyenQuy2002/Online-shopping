import Axios from 'axios';
import React, { useEffect } from 'react';
import Header from '../../components/Header';
import { useState } from 'react';
import ProductItem from '../../components/ProductItem';
import EditItem from '../../components/EditItem';

const Admin = () => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		Axios.get('http://localhost:3001/api/get/all').then((response) => {
			var data = [];
			for (let obj in response.data) {
				const getData = {
					id: response.data[obj].p_id,
					picture: response.data[obj].picture,
					name: response.data[obj].p_name,
					category: response.data[obj].cate_name,
					price: response.data[obj].price,
					stock: response.data[obj].stock,
					desc: response.data[obj].p_desc,
				};
				data.push(getData);
			}
			setItems(data);
		});
	});
	return (
		<>
			<Header type='admin' />
			<div className='grid grid-cols-12 gap-4'>
				<div className='col-start-2 col-span-10 border border-black'>
					<h1 className='text-center font-bold text-3xl py-10'>MANAGING PRODUCT ITEMS</h1>
					<div className='border-y-2 border-black'>
						<div className='w-full h-8 bg-gray-200 mb-3 flex flex-row justify-around items-center'>
							<div className='w-24 mr-3 text-center font-bold text-xl'>ID</div>
							<div className='w-24 mr-3 text-center font-bold text-xl'>Picture</div>
							<div className='w-24 mr-3 text-center font-bold text-xl'>Name</div>
							<div className='w-24 mr-3 text-center font-bold text-xl'>Category</div>
							<div className='w-24 mr-3 text-center font-bold text-xl'>Price</div>
							<div className='w-24 mr-3 text-center font-bold text-xl'>Stock</div>
							<div className='w-36 font-bold text-center text-xl'>Operations</div>
						</div>
						{items.map((item) => {
							const key = item.id;
							return (
								<EditItem
									item={item}
									key={key}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Admin;
