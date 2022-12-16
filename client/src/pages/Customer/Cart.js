import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderItem from '../../components/OrderItem';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Cart = () => {
	const [items, setItems] = useState([]);
	const [total, setTotal] = useState(0);

	const navigate = useNavigate();

	const handlePurchase = () => {
		Axios.delete('http://localhost:3001/api/delete/cart');
		alert('Purchase successfully');
		navigate('/customer');
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
	return (
		<>
			<Header type='customer' />
			<div className='grid grid-cols-12 gap-4'>
				<div className='col-start-2 col-span-10'>
					<h1 className='bg-gray-200 text-3xl text-center font-bold py-10'>Shopping cart</h1>
					<div className='sm:flex 2xl:flex sm:flex-column 2xl:flew-row h-screen '>
						<div className='sm:w-full 2xl:w-9/12 h-40'>
							<table className='border-collapse border border-slate-500 h-3/5 w-full'>
								<thead className='border border-slate-500'>
									<tr>
										<th className='border border-slate-500'>Product</th>
										<th className='border border-slate-500'>Name</th>
										<th className='border border-slate-500'>Quantity</th>
										<th className='border border-slate-500'>Price</th>
										<th className='border border-slate-500'>Delete</th>
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
							<h1 className='text-3xl font-bold pb-10'>ORDER SUMMARY</h1>
							<div className='text-lg flex flex-row justify-between my-5'>
								<p>Sub-total</p>
								<p>${total.toFixed(2)}</p>
							</div>
							<div className='text-lg flex flex-row justify-between my-5'>
								<p>Delivery</p>
								<p>${(total * 0.07).toFixed(2)}</p>
							</div>
							<div className='flex flex-row justify-between my-5 text-2xl font-bold'>
								<p className=''>Estimated total</p>
								<p>${(total + total * 0.07).toFixed(2)}</p>
							</div>
							<hr />
							<p className='py-5 font-bold'>ACCEPTED PAYMENT METHODS</p>

							<div className='flex flex-row justify-between space-x-2 h-auto'>
								<div className='block flex flex-row space-x-2'>
									<input
										type='radio'
										name='payment'
										id='Momo'
									/>
									<label htmlFor='Momo'>
										<img
											className='w-16'
											src='../images/payment/momo.png'
											alt='Momo'
										/>
									</label>
								</div>
								<div className='block flex flex-row space-x-2 items-center'>
									<input
										type='radio'
										name='payment'
										id='visa'
									/>
									<label htmlFor='visa'>
										<img
											className='w-16'
											src='../images/payment/visa.png'
											alt='visa'
										/>
									</label>
								</div>
								<div className='block flex flex-row space-x-2 items-center'>
									<input
										type='radio'
										name='payment'
										id='bank'
									/>
									<label htmlFor='bank'>
										<img
											className='w-16'
											src='../images/payment/bank.png'
											alt='bank'
										/>
									</label>
								</div>
							</div>
							<div className='block'>
								<button
									className='transition-colors rounded-lg w-full h-12 my-5 bg-blue-400 font-bold hover:bg-blue-900 hover:text-white'
									onClick={handlePurchase}>
									Purchase
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Cart;
