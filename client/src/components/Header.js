import React from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line
const Header = ({ type }) => {
	let content;
	if (type === 'customer') {
		content = (
			<>
				<nav className='bg-blue-400 py-3'>
					<ul className='flex justify-around'>
						<li className='mx-5 uppercase font-bold'>
							<NavLink
								className='transition-colors hover:text-green-900 text-white'
								to='/customer/'>
								Home
							</NavLink>
						</li>
						<li className='mx-5 uppercase font-bold'>
							<NavLink
								className='transition-colors hover:text-green-900 text-white'
								to='/customer/dresses'>
								Dresses
							</NavLink>
						</li>
						<li className='mx-5 uppercase font-bold'>
							<NavLink
								className='transition-colors hover:text-green-900 text-white'
								to='/customer/pants'>
								Pants
							</NavLink>
						</li>
						<li className='mx-5 uppercase font-bold'>
							<NavLink
								className='transition-colors hover:text-green-900 text-white'
								to='/customer/shirts'>
								Shirts
							</NavLink>
						</li>
						<li className='mx-5 uppercase font-bold'>
							<NavLink
								className='transition-colors hover:text-green-900 text-white'
								to='/customer/hats'>
								Hats
							</NavLink>
						</li>
						<li className='mx-5 uppercase font-bold'>
							<NavLink
								className='transition-colors hover:text-green-900 text-white'
								to='/customer/shoes'>
								Shoes
							</NavLink>
						</li>
						<li className='mx-5 uppercase font-bold'>
							<NavLink
								className='transition-colors hover:text-green-900 text-white'
								to='/customer/cart'>
								Cart
							</NavLink>
						</li>
						<li className='mx-5 uppercase font-bold'>
							<NavLink
								className='transition-colors hover:text-green-900 text-white'
								to='/customer/account'>
								Account
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
