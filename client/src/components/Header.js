import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';

// eslint-disable-next-line
const Header = ({ type }) => {
	let content;
	const [hotline, setHotline] = useState()
	useEffect(() => {
		Axios.get('http://localhost:3001/api/get/customercare').then((response) => 
			setHotline(response.data.hotline)
		)
	}, [])
	if (type === 'customer') {
		content = (
			<>
				<nav className='bg-blue-400 py-3 flex flex-row justify-between'>
					<div className='flex flex-row justify-around items-center w-1/6'>
						<NavLink to='/customer'>
							<div className='block text-center text-2xl font-bold text-white w-1/2 hover:text-blue-700 transition-colors'>
								Home
							</div>
						</NavLink>
						<Dropdown>
							<Dropdown.Toggle
								variant='success'
								id='dropdown-basic'
								className='block text-center text-2xl font-bold text-white w-1/2 hover:text-blue-700 transition-colors'>
								Product
							</Dropdown.Toggle>

							<Dropdown.Menu className='flex flex-col bg-gray-200 my-2.5 space-y-2 py-2 justify-center w-40'>
								<Dropdown.Item
									href='/customer/dresses'
									className='block text-lg hover:bg-gray-300 px-2'>
									Dresses
								</Dropdown.Item>
								<Dropdown.Item
									href='/customer/pants'
									className='block text-lg hover:bg-gray-300 px-2'>
									Pants
								</Dropdown.Item>
								<Dropdown.Item
									href='/customer/shirts'
									className='block text-lg hover:bg-gray-300 px-2'>
									Shirts
								</Dropdown.Item>
								<Dropdown.Item
									href='/customer/shoes'
									className='block text-lg hover:bg-gray-300 px-2'>
									Shoes
								</Dropdown.Item>
								<Dropdown.Item
									href='/customer/hats'
									className='block text-lg hover:bg-gray-300 px-2'>
									Hats
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
					<div className='flex flex-row w-1/6 justify-center items-center'>
						<NavLink
							to='/customer/cart'
							className='block w-1/6'>
							<FaShoppingCart
								className='block text-center text-2xl font-bold text-white w-1/2 hover:text-blue-700 transition-colors'
								size={25}
							/>
						</NavLink>

						<Dropdown className='block w-1/6 pt-1'>
							<Dropdown.Toggle
								variant='success'
								id='dropdown-basic'>
								<FaUser
									size={25}
									className='block text-center text-2xl font-bold text-white hover:text-blue-700 transition-colors'
								/>
							</Dropdown.Toggle>

							<Dropdown.Menu className='flex flex-col bg-gray-200 my-4 space-y-2 py-2 justify-center w-40'>
								<Dropdown.Item
									className='block text-lg hover:bg-gray-300 px-2'
									href='/customer/account'>
									Account
								</Dropdown.Item>
								<Dropdown.Item
									className='block text-lg hover:bg-gray-300 px-2'
									href='/'>
									Log out
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<div className='block text-center text-lg font-bold text-white'>
							<p>Hotline: {hotline}</p>
						</div>
					</div>
				</nav>
			</>
		);
	} else if (type === 'admin') {
		content = (
			<>
				<nav className='bg-blue-400 py-3'>
					<ul className='flex justify-around'>
						<li className='mx-5 uppercase font-bold'>
							<NavLink
								className='transition-colors hover:text-green-900 text-white'
								to='/admin'>
								Home
							</NavLink>
						</li>
						<li className='mx-5 uppercase font-bold'>
							<NavLink
								className='transition-colors hover:text-green-900 text-white'
								to='/'>
								Logout
							</NavLink>
						</li>
					</ul>
				</nav>
			</>
		);
	}
	return <>{content}</>;
};

export default Header;
