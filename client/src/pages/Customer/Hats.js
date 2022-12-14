import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductItem from '../../components/ProductItem';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
const Hats = () => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		Axios.get('http://localhost:3001/api/get/product/hats').then(
			(response) => {
				var data = [];
				for (let obj in response.data) {
					const getData = {
						id: response.data[obj].p_id,
						picture: response.data[obj].picture,
						name: response.data[obj].p_name,
						desc: response.data[obj].p_desc,
						category: 'Dress',
						type: 'Full body wear',
						price: response.data[obj].price,
						stock: response.data[obj].stock,
					};
					data.push(getData);
				}
				setItems(data);
			}
		);
	}, []);

	return (
		<>
			<Header type='customer' />
			<h1 className='py-10 text-center font-bold text-4xl'>Hats</h1>
			<section className='p-5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
				{items.map((item) => {
					const key = item.id;
					return (
						<ProductItem
							item={item}
							key={key}
						/>
					);
				})}
			</section>
			<Footer />
		</>
	);
};

export default Hats;
