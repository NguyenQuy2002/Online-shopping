import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderItem from '../../components/OrderItem';

const Cart = () => {
	const [items, setItems] = useState([]);
	const [total, setTotal] = useState(0);
	const [delivery, setDelivery] = useState(0);

	const navigate = useNavigate();

	const handlePurchase = () => {
		Axios.delete('http://localhost:3001/api/delete/cart');
		alert('Purchase successfully');
		navigate('/');
	};

	useEffect(() => {
		Axios.get('http://localhost:3001/api/get/cart').then((response) => {
			var item = [];
			for (let obj in response.data) {
				const getData = {
					id: response.data[obj].p_id,
					picture: response.data[obj].picture,
					name: response.data[obj].p_name,
					price: response.data[obj].price,
					quantity: response.data[obj].add_quantity,
				};
				item.push(getData);
				setTotal((total) => total + getData.price * getData.quantity);
			}
			setItems(item);
		});
	}, []);

	console.log(total);
	return (
		<div className='grid grid-cols-12 gap-4'>
			<div className='col-start-2 col-span-10'>
				<h1 className='bg-gray-200 text-3xl text-center font-bold py-10'>
					Shopping cart
				</h1>
				<div className='sm:flex 2xl:flex sm:flex-column 2xl:flew-row h-screen '>
					<div className='sm:w-full 2xl:w-9/12 border-2'>
						<table className='border-collapse border border-slate-500 h-3/5 w-full'>
							<thead className='border border-slate-500'>
								<tr>
									<th className='border border-slate-500'>
										Product
									</th>
									<th className='border border-slate-500'>
										Name
									</th>
									<th className='border border-slate-500'>
										Quantity
									</th>
									<th className='border border-slate-500'>
										Price
									</th>
									<th className='border border-slate-500'>
										Delete
									</th>
								</tr>
							</thead>

							<tbody>
								{items.map((item) => {
									return (
										<OrderItem
											item={item}
											key={item.id}
										/>
									);
								})}
							</tbody>
						</table>
					</div>
					<div className='sm:w-full 2xl:w-3/12 p-4 border border-gray-500'>
						<h1 className='text-3xl font-bold pb-10'>
							ORDER SUMMARY
						</h1>
						<div className='text-lg flex flex-row justify-between my-5'>
							<p>Sub-total</p>
							<p>${total}</p>
						</div>
						<div className='text-lg flex flex-row justify-between my-5'>
							<p>Delivery</p>
							<p>${delivery}</p>
						</div>
						<div className='flex flex-row justify-between my-5 text-2xl font-bold'>
							<p className=''>Estimated total</p>
							<p>${total}</p>
						</div>
						<hr />
						<p className='py-5 font-bold'>
							ACCEPTED PAYMENT METHODS
						</p>
						<div className='flex flex-row justify-between h-10'>
							<div className='flex w-1/4 h-12 border-2 border-black rounded-lg justify-center items-center'>
								<img
									className='w-10'
									src='../images/payment/momo.png'
									alt='Momo'
								/>
							</div>
							<div className='flex w-1/4 h-12 border-2 border-black rounded-lg justify-center items-center'>
								<img
									className='h-10'
									src='../images/payment/paypal.png'
									alt='Paypal'
								/>
							</div>
							<div className='flex w-1/4 h-12 border-2 border-black rounded-lg justify-center items-center'>
								<img
									src='../images/payment/visa.png'
									alt='Visa'
								/>
							</div>
						</div>
						<button
							className='w-full h-12 border border-blue-400 bg-blue-400 text-white hover:bg-white hover:text-blue-400 my-5'
							onClick={handlePurchase}>
							Purchase
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
